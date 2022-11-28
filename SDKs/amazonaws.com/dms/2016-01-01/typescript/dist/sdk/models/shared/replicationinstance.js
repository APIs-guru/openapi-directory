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
import { ReplicationPendingModifiedValues } from "./replicationpendingmodifiedvalues";
import { ReplicationSubnetGroup } from "./replicationsubnetgroup";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";
// ReplicationInstance
/**
 * Provides information that defines a replication instance.
**/
var ReplicationInstance = /** @class */ (function (_super) {
    __extends(ReplicationInstance, _super);
    function ReplicationInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllocatedStorage" }),
        __metadata("design:type", Number)
    ], ReplicationInstance.prototype, "allocatedStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoMinorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], ReplicationInstance.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], ReplicationInstance.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsNameServers" }),
        __metadata("design:type", String)
    ], ReplicationInstance.prototype, "dnsNameServers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EngineVersion" }),
        __metadata("design:type", String)
    ], ReplicationInstance.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FreeUntil" }),
        __metadata("design:type", Date)
    ], ReplicationInstance.prototype, "freeUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceCreateTime" }),
        __metadata("design:type", Date)
    ], ReplicationInstance.prototype, "instanceCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], ReplicationInstance.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiAZ" }),
        __metadata("design:type", Boolean)
    ], ReplicationInstance.prototype, "multiAz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PendingModifiedValues" }),
        __metadata("design:type", ReplicationPendingModifiedValues)
    ], ReplicationInstance.prototype, "pendingModifiedValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], ReplicationInstance.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PubliclyAccessible" }),
        __metadata("design:type", Boolean)
    ], ReplicationInstance.prototype, "publiclyAccessible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" }),
        __metadata("design:type", String)
    ], ReplicationInstance.prototype, "replicationInstanceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationInstanceClass" }),
        __metadata("design:type", String)
    ], ReplicationInstance.prototype, "replicationInstanceClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationInstanceIdentifier" }),
        __metadata("design:type", String)
    ], ReplicationInstance.prototype, "replicationInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationInstancePrivateIpAddress" }),
        __metadata("design:type", String)
    ], ReplicationInstance.prototype, "replicationInstancePrivateIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationInstancePrivateIpAddresses" }),
        __metadata("design:type", Array)
    ], ReplicationInstance.prototype, "replicationInstancePrivateIpAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationInstancePublicIpAddress" }),
        __metadata("design:type", String)
    ], ReplicationInstance.prototype, "replicationInstancePublicIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationInstancePublicIpAddresses" }),
        __metadata("design:type", Array)
    ], ReplicationInstance.prototype, "replicationInstancePublicIpAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationInstanceStatus" }),
        __metadata("design:type", String)
    ], ReplicationInstance.prototype, "replicationInstanceStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplicationSubnetGroup" }),
        __metadata("design:type", ReplicationSubnetGroup)
    ], ReplicationInstance.prototype, "replicationSubnetGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryAvailabilityZone" }),
        __metadata("design:type", String)
    ], ReplicationInstance.prototype, "secondaryAvailabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcSecurityGroups", elemType: VpcSecurityGroupMembership }),
        __metadata("design:type", Array)
    ], ReplicationInstance.prototype, "vpcSecurityGroups", void 0);
    return ReplicationInstance;
}(SpeakeasyBase));
export { ReplicationInstance };
