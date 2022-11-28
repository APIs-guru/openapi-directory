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
import { TimestampStructure } from "./timestampstructure";
import { FrameMetricDatum } from "./framemetricdatum";
import { AggregationPeriodEnum } from "./aggregationperiodenum";
// BatchGetFrameMetricDataResponse
/**
 * The structure representing the BatchGetFrameMetricDataResponse.
**/
var BatchGetFrameMetricDataResponse = /** @class */ (function (_super) {
    __extends(BatchGetFrameMetricDataResponse, _super);
    function BatchGetFrameMetricDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], BatchGetFrameMetricDataResponse.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTimes", elemType: TimestampStructure }),
        __metadata("design:type", Array)
    ], BatchGetFrameMetricDataResponse.prototype, "endTimes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frameMetricData", elemType: FrameMetricDatum }),
        __metadata("design:type", Array)
    ], BatchGetFrameMetricDataResponse.prototype, "frameMetricData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], BatchGetFrameMetricDataResponse.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], BatchGetFrameMetricDataResponse.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unprocessedEndTimes", elemType: TimestampStructure, elemDepth: 2 }),
        __metadata("design:type", Map)
    ], BatchGetFrameMetricDataResponse.prototype, "unprocessedEndTimes", void 0);
    return BatchGetFrameMetricDataResponse;
}(SpeakeasyBase));
export { BatchGetFrameMetricDataResponse };
