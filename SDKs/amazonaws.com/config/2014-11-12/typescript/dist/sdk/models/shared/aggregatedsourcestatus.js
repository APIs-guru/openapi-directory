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
import { AggregatedSourceStatusTypeEnum } from "./aggregatedsourcestatustypeenum";
import { AggregatedSourceTypeEnum } from "./aggregatedsourcetypeenum";
// AggregatedSourceStatus
/**
 * The current sync status between the source and the aggregator account.
**/
var AggregatedSourceStatus = /** @class */ (function (_super) {
    __extends(AggregatedSourceStatus, _super);
    function AggregatedSourceStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsRegion" }),
        __metadata("design:type", String)
    ], AggregatedSourceStatus.prototype, "awsRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastErrorCode" }),
        __metadata("design:type", String)
    ], AggregatedSourceStatus.prototype, "lastErrorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastErrorMessage" }),
        __metadata("design:type", String)
    ], AggregatedSourceStatus.prototype, "lastErrorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateStatus" }),
        __metadata("design:type", String)
    ], AggregatedSourceStatus.prototype, "lastUpdateStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateTime" }),
        __metadata("design:type", Date)
    ], AggregatedSourceStatus.prototype, "lastUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceId" }),
        __metadata("design:type", String)
    ], AggregatedSourceStatus.prototype, "sourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceType" }),
        __metadata("design:type", String)
    ], AggregatedSourceStatus.prototype, "sourceType", void 0);
    return AggregatedSourceStatus;
}(SpeakeasyBase));
export { AggregatedSourceStatus };
