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
import { AutomaticFailoverStatusEnum } from "./automaticfailoverstatusenum";
import { Endpoint } from "./endpoint";
import { GlobalReplicationGroupInfo } from "./globalreplicationgroupinfo";
import { LogDeliveryConfiguration } from "./logdeliveryconfiguration";
import { MultiAzStatusEnum } from "./multiazstatusenum";
import { NodeGroup } from "./nodegroup";
import { ReplicationGroupPendingModifiedValues } from "./replicationgrouppendingmodifiedvalues";
// ReplicationGroup
/**
 * Contains all of the attributes of a specific Redis replication group.
**/
var ReplicationGroup = /** @class */ (function (_super) {
    __extends(ReplicationGroup, _super);
    function ReplicationGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicationGroup.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ReplicationGroup.prototype, "atRestEncryptionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ReplicationGroup.prototype, "authTokenEnabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], ReplicationGroup.prototype, "authTokenLastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicationGroup.prototype, "automaticFailover", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicationGroup.prototype, "cacheNodeType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ReplicationGroup.prototype, "clusterEnabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Endpoint)
    ], ReplicationGroup.prototype, "configurationEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicationGroup.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GlobalReplicationGroupInfo)
    ], ReplicationGroup.prototype, "globalReplicationGroupInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicationGroup.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: LogDeliveryConfiguration }),
        __metadata("design:type", Array)
    ], ReplicationGroup.prototype, "logDeliveryConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ReplicationGroup.prototype, "memberClusters", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ReplicationGroup.prototype, "memberClustersOutpostArns", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicationGroup.prototype, "multiAz", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: NodeGroup }),
        __metadata("design:type", Array)
    ], ReplicationGroup.prototype, "nodeGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicationGroupPendingModifiedValues)
    ], ReplicationGroup.prototype, "pendingModifiedValues", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], ReplicationGroup.prototype, "replicationGroupCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicationGroup.prototype, "replicationGroupId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplicationGroup.prototype, "snapshotRetentionLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicationGroup.prototype, "snapshotWindow", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicationGroup.prototype, "snapshottingClusterId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicationGroup.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ReplicationGroup.prototype, "transitEncryptionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ReplicationGroup.prototype, "userGroupIds", void 0);
    return ReplicationGroup;
}(SpeakeasyBase));
export { ReplicationGroup };
