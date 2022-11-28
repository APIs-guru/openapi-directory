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
import { ScalingStatusTypeEnum } from "./scalingstatustypeenum";
import { TargetConfiguration } from "./targetconfiguration";
import { LocationUpdateStatusEnum } from "./locationupdatestatusenum";
// ScalingPolicy
/**
 * <p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetCapacity</a> | <a>UpdateFleetCapacity</a> | <a>DescribeEC2InstanceLimits</a> | <a>PutScalingPolicy</a> | <a>DescribeScalingPolicies</a> | <a>DeleteScalingPolicy</a> | <a>StopFleetActions</a> | <a>StartFleetActions</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
var ScalingPolicy = /** @class */ (function (_super) {
    __extends(ScalingPolicy, _super);
    function ScalingPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComparisonOperator" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "comparisonOperator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EvaluationPeriods" }),
        __metadata("design:type", Number)
    ], ScalingPolicy.prototype, "evaluationPeriods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "fleetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetId" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "fleetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Location" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricName" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "metricName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyType" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "policyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalingAdjustment" }),
        __metadata("design:type", Number)
    ], ScalingPolicy.prototype, "scalingAdjustment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalingAdjustmentType" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "scalingAdjustmentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetConfiguration" }),
        __metadata("design:type", TargetConfiguration)
    ], ScalingPolicy.prototype, "targetConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Threshold" }),
        __metadata("design:type", Number)
    ], ScalingPolicy.prototype, "threshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateStatus" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "updateStatus", void 0);
    return ScalingPolicy;
}(SpeakeasyBase));
export { ScalingPolicy };
