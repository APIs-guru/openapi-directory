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
import { Alarm } from "./alarm";
import { PolicyTypeEnum } from "./policytypeenum";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { StepScalingPolicyConfiguration } from "./stepscalingpolicyconfiguration";
import { TargetTrackingScalingPolicyConfiguration } from "./targettrackingscalingpolicyconfiguration";
// ScalingPolicy
/**
 * <p>Represents a scaling policy to use with Application Auto Scaling.</p> <p>For more information about configuring scaling policies for a specific service, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html">Getting started with Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
**/
var ScalingPolicy = /** @class */ (function (_super) {
    __extends(ScalingPolicy, _super);
    function ScalingPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Alarms", elemType: Alarm }),
        __metadata("design:type", Array)
    ], ScalingPolicy.prototype, "alarms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], ScalingPolicy.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyARN" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "policyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyName" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "policyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolicyType" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "policyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceId" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScalableDimension" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "scalableDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceNamespace" }),
        __metadata("design:type", String)
    ], ScalingPolicy.prototype, "serviceNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StepScalingPolicyConfiguration" }),
        __metadata("design:type", StepScalingPolicyConfiguration)
    ], ScalingPolicy.prototype, "stepScalingPolicyConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetTrackingScalingPolicyConfiguration" }),
        __metadata("design:type", TargetTrackingScalingPolicyConfiguration)
    ], ScalingPolicy.prototype, "targetTrackingScalingPolicyConfiguration", void 0);
    return ScalingPolicy;
}(SpeakeasyBase));
export { ScalingPolicy };
