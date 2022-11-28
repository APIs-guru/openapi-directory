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
import { Application } from "./application";
import { AutoTerminationPolicy } from "./autoterminationpolicy";
import { BootstrapActionConfig } from "./bootstrapactionconfig";
import { Configuration } from "./configuration";
import { JobFlowInstancesConfig } from "./jobflowinstancesconfig";
import { KerberosAttributes } from "./kerberosattributes";
import { ManagedScalingPolicy } from "./managedscalingpolicy";
import { SupportedProductConfig } from "./supportedproductconfig";
import { PlacementGroupConfig } from "./placementgroupconfig";
import { RepoUpgradeOnBootEnum } from "./repoupgradeonbootenum";
import { ScaleDownBehaviorEnum } from "./scaledownbehaviorenum";
import { StepConfig } from "./stepconfig";
import { Tag } from "./tag";
// RunJobFlowInput
/**
 *  Input to the <a>RunJobFlow</a> operation.
**/
var RunJobFlowInput = /** @class */ (function (_super) {
    __extends(RunJobFlowInput, _super);
    function RunJobFlowInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalInfo" }),
        __metadata("design:type", String)
    ], RunJobFlowInput.prototype, "additionalInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AmiVersion" }),
        __metadata("design:type", String)
    ], RunJobFlowInput.prototype, "amiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Applications", elemType: Application }),
        __metadata("design:type", Array)
    ], RunJobFlowInput.prototype, "applications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoScalingRole" }),
        __metadata("design:type", String)
    ], RunJobFlowInput.prototype, "autoScalingRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoTerminationPolicy" }),
        __metadata("design:type", AutoTerminationPolicy)
    ], RunJobFlowInput.prototype, "autoTerminationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BootstrapActions", elemType: BootstrapActionConfig }),
        __metadata("design:type", Array)
    ], RunJobFlowInput.prototype, "bootstrapActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Configurations", elemType: Configuration }),
        __metadata("design:type", Array)
    ], RunJobFlowInput.prototype, "configurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomAmiId" }),
        __metadata("design:type", String)
    ], RunJobFlowInput.prototype, "customAmiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EbsRootVolumeSize" }),
        __metadata("design:type", Number)
    ], RunJobFlowInput.prototype, "ebsRootVolumeSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Instances" }),
        __metadata("design:type", JobFlowInstancesConfig)
    ], RunJobFlowInput.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobFlowRole" }),
        __metadata("design:type", String)
    ], RunJobFlowInput.prototype, "jobFlowRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KerberosAttributes" }),
        __metadata("design:type", KerberosAttributes)
    ], RunJobFlowInput.prototype, "kerberosAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogEncryptionKmsKeyId" }),
        __metadata("design:type", String)
    ], RunJobFlowInput.prototype, "logEncryptionKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogUri" }),
        __metadata("design:type", String)
    ], RunJobFlowInput.prototype, "logUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ManagedScalingPolicy" }),
        __metadata("design:type", ManagedScalingPolicy)
    ], RunJobFlowInput.prototype, "managedScalingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], RunJobFlowInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NewSupportedProducts", elemType: SupportedProductConfig }),
        __metadata("design:type", Array)
    ], RunJobFlowInput.prototype, "newSupportedProducts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlacementGroupConfigs", elemType: PlacementGroupConfig }),
        __metadata("design:type", Array)
    ], RunJobFlowInput.prototype, "placementGroupConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReleaseLabel" }),
        __metadata("design:type", String)
    ], RunJobFlowInput.prototype, "releaseLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepoUpgradeOnBoot" }),
        __metadata("design:type", String)
    ], RunJobFlowInput.prototype, "repoUpgradeOnBoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScaleDownBehavior" }),
        __metadata("design:type", String)
    ], RunJobFlowInput.prototype, "scaleDownBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" }),
        __metadata("design:type", String)
    ], RunJobFlowInput.prototype, "securityConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceRole" }),
        __metadata("design:type", String)
    ], RunJobFlowInput.prototype, "serviceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StepConcurrencyLevel" }),
        __metadata("design:type", Number)
    ], RunJobFlowInput.prototype, "stepConcurrencyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Steps", elemType: StepConfig }),
        __metadata("design:type", Array)
    ], RunJobFlowInput.prototype, "steps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportedProducts" }),
        __metadata("design:type", Array)
    ], RunJobFlowInput.prototype, "supportedProducts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], RunJobFlowInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VisibleToAllUsers" }),
        __metadata("design:type", Boolean)
    ], RunJobFlowInput.prototype, "visibleToAllUsers", void 0);
    return RunJobFlowInput;
}(SpeakeasyBase));
export { RunJobFlowInput };
