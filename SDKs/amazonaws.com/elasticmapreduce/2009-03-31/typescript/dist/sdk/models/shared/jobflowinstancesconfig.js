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
import { InstanceFleetConfig } from "./instancefleetconfig";
import { InstanceGroupConfig } from "./instancegroupconfig";
import { PlacementType } from "./placementtype";
// JobFlowInstancesConfig
/**
 * A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.
**/
var JobFlowInstancesConfig = /** @class */ (function (_super) {
    __extends(JobFlowInstancesConfig, _super);
    function JobFlowInstancesConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalMasterSecurityGroups" }),
        __metadata("design:type", Array)
    ], JobFlowInstancesConfig.prototype, "additionalMasterSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalSlaveSecurityGroups" }),
        __metadata("design:type", Array)
    ], JobFlowInstancesConfig.prototype, "additionalSlaveSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ec2KeyName" }),
        __metadata("design:type", String)
    ], JobFlowInstancesConfig.prototype, "ec2KeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ec2SubnetId" }),
        __metadata("design:type", String)
    ], JobFlowInstancesConfig.prototype, "ec2SubnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ec2SubnetIds" }),
        __metadata("design:type", Array)
    ], JobFlowInstancesConfig.prototype, "ec2SubnetIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmrManagedMasterSecurityGroup" }),
        __metadata("design:type", String)
    ], JobFlowInstancesConfig.prototype, "emrManagedMasterSecurityGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmrManagedSlaveSecurityGroup" }),
        __metadata("design:type", String)
    ], JobFlowInstancesConfig.prototype, "emrManagedSlaveSecurityGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HadoopVersion" }),
        __metadata("design:type", String)
    ], JobFlowInstancesConfig.prototype, "hadoopVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceCount" }),
        __metadata("design:type", Number)
    ], JobFlowInstancesConfig.prototype, "instanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceFleets", elemType: InstanceFleetConfig }),
        __metadata("design:type", Array)
    ], JobFlowInstancesConfig.prototype, "instanceFleets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceGroups", elemType: InstanceGroupConfig }),
        __metadata("design:type", Array)
    ], JobFlowInstancesConfig.prototype, "instanceGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeepJobFlowAliveWhenNoSteps" }),
        __metadata("design:type", Boolean)
    ], JobFlowInstancesConfig.prototype, "keepJobFlowAliveWhenNoSteps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MasterInstanceType" }),
        __metadata("design:type", String)
    ], JobFlowInstancesConfig.prototype, "masterInstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Placement" }),
        __metadata("design:type", PlacementType)
    ], JobFlowInstancesConfig.prototype, "placement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceAccessSecurityGroup" }),
        __metadata("design:type", String)
    ], JobFlowInstancesConfig.prototype, "serviceAccessSecurityGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SlaveInstanceType" }),
        __metadata("design:type", String)
    ], JobFlowInstancesConfig.prototype, "slaveInstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TerminationProtected" }),
        __metadata("design:type", Boolean)
    ], JobFlowInstancesConfig.prototype, "terminationProtected", void 0);
    return JobFlowInstancesConfig;
}(SpeakeasyBase));
export { JobFlowInstancesConfig };
