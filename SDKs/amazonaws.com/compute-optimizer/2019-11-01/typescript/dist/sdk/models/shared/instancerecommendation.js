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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FindingEnum } from "./findingenum";
// InstanceRecommendation
/**
 * Describes an Amazon EC2 instance recommendation.
**/
var InstanceRecommendation = /** @class */ (function (_super) {
    __extends(InstanceRecommendation, _super);
    function InstanceRecommendation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], InstanceRecommendation.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "json, name=currentInstanceType" }),
        __metadata("design:type", String)
    ], InstanceRecommendation.prototype, "currentInstanceType", void 0);
    __decorate([
        Metadata({ data: "json, name=finding" }),
        __metadata("design:type", String)
    ], InstanceRecommendation.prototype, "finding", void 0);
    __decorate([
        Metadata({ data: "json, name=findingReasonCodes" }),
        __metadata("design:type", Array)
    ], InstanceRecommendation.prototype, "findingReasonCodes", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceArn" }),
        __metadata("design:type", String)
    ], InstanceRecommendation.prototype, "instanceArn", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceName" }),
        __metadata("design:type", String)
    ], InstanceRecommendation.prototype, "instanceName", void 0);
    __decorate([
        Metadata({ data: "json, name=lastRefreshTimestamp" }),
        __metadata("design:type", Date)
    ], InstanceRecommendation.prototype, "lastRefreshTimestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=lookBackPeriodInDays" }),
        __metadata("design:type", Number)
    ], InstanceRecommendation.prototype, "lookBackPeriodInDays", void 0);
    __decorate([
        Metadata({ data: "json, name=recommendationOptions", elemType: shared.InstanceRecommendationOption }),
        __metadata("design:type", Array)
    ], InstanceRecommendation.prototype, "recommendationOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=recommendationSources", elemType: shared.RecommendationSource }),
        __metadata("design:type", Array)
    ], InstanceRecommendation.prototype, "recommendationSources", void 0);
    __decorate([
        Metadata({ data: "json, name=utilizationMetrics", elemType: shared.UtilizationMetric }),
        __metadata("design:type", Array)
    ], InstanceRecommendation.prototype, "utilizationMetrics", void 0);
    return InstanceRecommendation;
}(SpeakeasyBase));
export { InstanceRecommendation };
