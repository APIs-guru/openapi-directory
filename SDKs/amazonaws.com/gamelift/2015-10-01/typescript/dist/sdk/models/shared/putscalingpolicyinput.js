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
import { ComparisonOperatorTypeEnum } from "./comparisonoperatortypeenum";
import { MetricNameEnum } from "./metricnameenum";
import { PolicyTypeEnum } from "./policytypeenum";
import { ScalingAdjustmentTypeEnum } from "./scalingadjustmenttypeenum";
import { TargetConfiguration } from "./targetconfiguration";
// PutScalingPolicyInput
/**
 * Represents the input for a request operation.
**/
var PutScalingPolicyInput = /** @class */ (function (_super) {
    __extends(PutScalingPolicyInput, _super);
    function PutScalingPolicyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComparisonOperator" }),
        __metadata("design:type", String)
    ], PutScalingPolicyInput.prototype, "comparisonOperator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EvaluationPeriods" }),
        __metadata("design:type", Number)
    ], PutScalingPolicyInput.prototype, "evaluationPeriods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetId" }),
        __metadata("design:type", String)
    ], PutScalingPolicyInput.prototype, "fleetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricName" }),
        __metadata("design:type", String)
    ], PutScalingPolicyInput.prototype, "metricName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], PutScalingPolicyInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyType" }),
        __metadata("design:type", String)
    ], PutScalingPolicyInput.prototype, "policyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalingAdjustment" }),
        __metadata("design:type", Number)
    ], PutScalingPolicyInput.prototype, "scalingAdjustment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalingAdjustmentType" }),
        __metadata("design:type", String)
    ], PutScalingPolicyInput.prototype, "scalingAdjustmentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetConfiguration" }),
        __metadata("design:type", TargetConfiguration)
    ], PutScalingPolicyInput.prototype, "targetConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Threshold" }),
        __metadata("design:type", Number)
    ], PutScalingPolicyInput.prototype, "threshold", void 0);
    return PutScalingPolicyInput;
}(SpeakeasyBase));
export { PutScalingPolicyInput };
