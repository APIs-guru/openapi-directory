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
// Ec2InstanceAttributes
/**
 * Provides information about the EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.
**/
var Ec2InstanceAttributes = /** @class */ (function (_super) {
    __extends(Ec2InstanceAttributes, _super);
    function Ec2InstanceAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalMasterSecurityGroups" }),
        __metadata("design:type", Array)
    ], Ec2InstanceAttributes.prototype, "additionalMasterSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalSlaveSecurityGroups" }),
        __metadata("design:type", Array)
    ], Ec2InstanceAttributes.prototype, "additionalSlaveSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ec2AvailabilityZone" }),
        __metadata("design:type", String)
    ], Ec2InstanceAttributes.prototype, "ec2AvailabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ec2KeyName" }),
        __metadata("design:type", String)
    ], Ec2InstanceAttributes.prototype, "ec2KeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ec2SubnetId" }),
        __metadata("design:type", String)
    ], Ec2InstanceAttributes.prototype, "ec2SubnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmrManagedMasterSecurityGroup" }),
        __metadata("design:type", String)
    ], Ec2InstanceAttributes.prototype, "emrManagedMasterSecurityGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmrManagedSlaveSecurityGroup" }),
        __metadata("design:type", String)
    ], Ec2InstanceAttributes.prototype, "emrManagedSlaveSecurityGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamInstanceProfile" }),
        __metadata("design:type", String)
    ], Ec2InstanceAttributes.prototype, "iamInstanceProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedEc2AvailabilityZones" }),
        __metadata("design:type", Array)
    ], Ec2InstanceAttributes.prototype, "requestedEc2AvailabilityZones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedEc2SubnetIds" }),
        __metadata("design:type", Array)
    ], Ec2InstanceAttributes.prototype, "requestedEc2SubnetIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceAccessSecurityGroup" }),
        __metadata("design:type", String)
    ], Ec2InstanceAttributes.prototype, "serviceAccessSecurityGroup", void 0);
    return Ec2InstanceAttributes;
}(SpeakeasyBase));
export { Ec2InstanceAttributes };
