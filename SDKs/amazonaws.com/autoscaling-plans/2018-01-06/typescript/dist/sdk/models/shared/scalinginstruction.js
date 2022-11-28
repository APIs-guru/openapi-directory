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
import { CustomizedLoadMetricSpecification } from "./customizedloadmetricspecification";
import { PredefinedLoadMetricSpecification } from "./predefinedloadmetricspecification";
import { PredictiveScalingMaxCapacityBehaviorEnum } from "./predictivescalingmaxcapacitybehaviorenum";
import { PredictiveScalingModeEnum } from "./predictivescalingmodeenum";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ScalingPolicyUpdateBehaviorEnum } from "./scalingpolicyupdatebehaviorenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { TargetTrackingConfiguration } from "./targettrackingconfiguration";
// ScalingInstruction
/**
 * <p>Describes a scaling instruction for a scalable resource in a scaling plan. Each scaling instruction applies to one resource.</p> <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified. </p> <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast. </p> <important> <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-best-practices.html">Best Practices for AWS Auto Scaling</a> in the <i>AWS Auto Scaling User Guide</i>.</p> </important>
**/
var ScalingInstruction = /** @class */ (function (_super) {
    __extends(ScalingInstruction, _super);
    function ScalingInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomizedLoadMetricSpecification" }),
        __metadata("design:type", CustomizedLoadMetricSpecification)
    ], ScalingInstruction.prototype, "customizedLoadMetricSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisableDynamicScaling" }),
        __metadata("design:type", Boolean)
    ], ScalingInstruction.prototype, "disableDynamicScaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxCapacity" }),
        __metadata("design:type", Number)
    ], ScalingInstruction.prototype, "maxCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinCapacity" }),
        __metadata("design:type", Number)
    ], ScalingInstruction.prototype, "minCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PredefinedLoadMetricSpecification" }),
        __metadata("design:type", PredefinedLoadMetricSpecification)
    ], ScalingInstruction.prototype, "predefinedLoadMetricSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PredictiveScalingMaxCapacityBehavior" }),
        __metadata("design:type", String)
    ], ScalingInstruction.prototype, "predictiveScalingMaxCapacityBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PredictiveScalingMaxCapacityBuffer" }),
        __metadata("design:type", Number)
    ], ScalingInstruction.prototype, "predictiveScalingMaxCapacityBuffer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PredictiveScalingMode" }),
        __metadata("design:type", String)
    ], ScalingInstruction.prototype, "predictiveScalingMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceId" }),
        __metadata("design:type", String)
    ], ScalingInstruction.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalableDimension" }),
        __metadata("design:type", String)
    ], ScalingInstruction.prototype, "scalableDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalingPolicyUpdateBehavior" }),
        __metadata("design:type", String)
    ], ScalingInstruction.prototype, "scalingPolicyUpdateBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduledActionBufferTime" }),
        __metadata("design:type", Number)
    ], ScalingInstruction.prototype, "scheduledActionBufferTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceNamespace" }),
        __metadata("design:type", String)
    ], ScalingInstruction.prototype, "serviceNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetTrackingConfigurations", elemType: TargetTrackingConfiguration }),
        __metadata("design:type", Array)
    ], ScalingInstruction.prototype, "targetTrackingConfigurations", void 0);
    return ScalingInstruction;
}(SpeakeasyBase));
export { ScalingInstruction };
