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
import { InstanceGroupDetail } from "./instancegroupdetail";
import { PlacementType } from "./placementtype";
// JobFlowInstancesDetail
/**
 * Specify the type of Amazon EC2 instances that the cluster (job flow) runs on.
**/
var JobFlowInstancesDetail = /** @class */ (function (_super) {
    __extends(JobFlowInstancesDetail, _super);
    function JobFlowInstancesDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ec2KeyName" }),
        __metadata("design:type", String)
    ], JobFlowInstancesDetail.prototype, "ec2KeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ec2SubnetId" }),
        __metadata("design:type", String)
    ], JobFlowInstancesDetail.prototype, "ec2SubnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HadoopVersion" }),
        __metadata("design:type", String)
    ], JobFlowInstancesDetail.prototype, "hadoopVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceCount" }),
        __metadata("design:type", Number)
    ], JobFlowInstancesDetail.prototype, "instanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceGroups", elemType: InstanceGroupDetail }),
        __metadata("design:type", Array)
    ], JobFlowInstancesDetail.prototype, "instanceGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeepJobFlowAliveWhenNoSteps" }),
        __metadata("design:type", Boolean)
    ], JobFlowInstancesDetail.prototype, "keepJobFlowAliveWhenNoSteps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MasterInstanceId" }),
        __metadata("design:type", String)
    ], JobFlowInstancesDetail.prototype, "masterInstanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MasterInstanceType" }),
        __metadata("design:type", String)
    ], JobFlowInstancesDetail.prototype, "masterInstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MasterPublicDnsName" }),
        __metadata("design:type", String)
    ], JobFlowInstancesDetail.prototype, "masterPublicDnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NormalizedInstanceHours" }),
        __metadata("design:type", Number)
    ], JobFlowInstancesDetail.prototype, "normalizedInstanceHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Placement" }),
        __metadata("design:type", PlacementType)
    ], JobFlowInstancesDetail.prototype, "placement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SlaveInstanceType" }),
        __metadata("design:type", String)
    ], JobFlowInstancesDetail.prototype, "slaveInstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TerminationProtected" }),
        __metadata("design:type", Boolean)
    ], JobFlowInstancesDetail.prototype, "terminationProtected", void 0);
    return JobFlowInstancesDetail;
}(SpeakeasyBase));
export { JobFlowInstancesDetail };
