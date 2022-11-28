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
import { SourceData } from "./sourcedata";
import { SourceDataFunctionEnum } from "./sourcedatafunctionenum";
import { SourceDataMap } from "./sourcedatamap";
import { SourceDataTrimTitle } from "./sourcedatatrimtitle";
// SourceAttribute
/**
 * Identifies the source data for an index field. An optional data transformation can be applied to the source data when populating the index field. By default, the value of the source attribute is copied to the index field.
**/
var SourceAttribute = /** @class */ (function (_super) {
    __extends(SourceAttribute, _super);
    function SourceAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourceData)
    ], SourceAttribute.prototype, "sourceDataCopy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SourceAttribute.prototype, "sourceDataFunction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourceDataMap)
    ], SourceAttribute.prototype, "sourceDataMap", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourceDataTrimTitle)
    ], SourceAttribute.prototype, "sourceDataTrimTitle", void 0);
    return SourceAttribute;
}(SpeakeasyBase));
export { SourceAttribute };
