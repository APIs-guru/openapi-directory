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
import { EnabledMetric } from "./enabledmetric";
import { Instance } from "./instance";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { MixedInstancesPolicy } from "./mixedinstancespolicy";
import { SuspendedProcess } from "./suspendedprocess";
import { TagDescription } from "./tagdescription";
import { WarmPoolConfiguration } from "./warmpoolconfiguration";
// AutoScalingGroup
/**
 * Describes an Auto Scaling group.
**/
var AutoScalingGroup = /** @class */ (function (_super) {
    __extends(AutoScalingGroup, _super);
    function AutoScalingGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutoScalingGroup.prototype, "autoScalingGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutoScalingGroup.prototype, "autoScalingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], AutoScalingGroup.prototype, "availabilityZones", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], AutoScalingGroup.prototype, "capacityRebalance", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutoScalingGroup.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], AutoScalingGroup.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutoScalingGroup.prototype, "defaultCooldown", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutoScalingGroup.prototype, "desiredCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: EnabledMetric }),
        __metadata("design:type", Array)
    ], AutoScalingGroup.prototype, "enabledMetrics", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutoScalingGroup.prototype, "healthCheckGracePeriod", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutoScalingGroup.prototype, "healthCheckType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Instance }),
        __metadata("design:type", Array)
    ], AutoScalingGroup.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutoScalingGroup.prototype, "launchConfigurationName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LaunchTemplateSpecification)
    ], AutoScalingGroup.prototype, "launchTemplate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], AutoScalingGroup.prototype, "loadBalancerNames", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutoScalingGroup.prototype, "maxInstanceLifetime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutoScalingGroup.prototype, "maxSize", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutoScalingGroup.prototype, "minSize", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MixedInstancesPolicy)
    ], AutoScalingGroup.prototype, "mixedInstancesPolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], AutoScalingGroup.prototype, "newInstancesProtectedFromScaleIn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutoScalingGroup.prototype, "placementGroup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutoScalingGroup.prototype, "predictedCapacity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutoScalingGroup.prototype, "serviceLinkedRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutoScalingGroup.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: SuspendedProcess }),
        __metadata("design:type", Array)
    ], AutoScalingGroup.prototype, "suspendedProcesses", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: TagDescription }),
        __metadata("design:type", Array)
    ], AutoScalingGroup.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], AutoScalingGroup.prototype, "targetGroupArNs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], AutoScalingGroup.prototype, "terminationPolicies", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutoScalingGroup.prototype, "vpcZoneIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WarmPoolConfiguration)
    ], AutoScalingGroup.prototype, "warmPoolConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutoScalingGroup.prototype, "warmPoolSize", void 0);
    return AutoScalingGroup;
}(SpeakeasyBase));
export { AutoScalingGroup };
