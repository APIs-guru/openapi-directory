var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalSecondaryIndexInfo } from "./globalsecondaryindexinfo";
import { LocalSecondaryIndexInfo } from "./localsecondaryindexinfo";
import { SseDescription } from "./ssedescription";
import { StreamSpecification } from "./streamspecification";
import { TimeToLiveDescription } from "./timetolivedescription";
// SourceTableFeatureDetails
/**
 * Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.
**/
var SourceTableFeatureDetails = /** @class */ (function (_super) {
    __extends(SourceTableFeatureDetails, _super);
    function SourceTableFeatureDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexes", elemType: GlobalSecondaryIndexInfo }),
        __metadata("design:type", Array)
    ], SourceTableFeatureDetails.prototype, "globalSecondaryIndexes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalSecondaryIndexes", elemType: LocalSecondaryIndexInfo }),
        __metadata("design:type", Array)
    ], SourceTableFeatureDetails.prototype, "localSecondaryIndexes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SSEDescription" }),
        __metadata("design:type", SseDescription)
    ], SourceTableFeatureDetails.prototype, "sseDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamDescription" }),
        __metadata("design:type", StreamSpecification)
    ], SourceTableFeatureDetails.prototype, "streamDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeToLiveDescription" }),
        __metadata("design:type", TimeToLiveDescription)
    ], SourceTableFeatureDetails.prototype, "timeToLiveDescription", void 0);
    return SourceTableFeatureDetails;
}(SpeakeasyBase));
export { SourceTableFeatureDetails };
