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
import { CacheNode } from "./cachenode";
import { CacheParameterGroupStatus } from "./cacheparametergroupstatus";
import { CacheSecurityGroupMembership } from "./cachesecuritygroupmembership";
import { Endpoint } from "./endpoint";
import { LogDeliveryConfiguration } from "./logdeliveryconfiguration";
import { NotificationConfiguration } from "./notificationconfiguration";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { SecurityGroupMembership } from "./securitygroupmembership";
// CacheCluster
/**
 * Contains all of the attributes of a specific cluster.
**/
var CacheCluster = /** @class */ (function (_super) {
    __extends(CacheCluster, _super);
    function CacheCluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheCluster.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], CacheCluster.prototype, "atRestEncryptionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], CacheCluster.prototype, "authTokenEnabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], CacheCluster.prototype, "authTokenLastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], CacheCluster.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], CacheCluster.prototype, "cacheClusterCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheCluster.prototype, "cacheClusterId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheCluster.prototype, "cacheClusterStatus", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheCluster.prototype, "cacheNodeType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CacheNode }),
        __metadata("design:type", Array)
    ], CacheCluster.prototype, "cacheNodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CacheParameterGroupStatus)
    ], CacheCluster.prototype, "cacheParameterGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CacheSecurityGroupMembership }),
        __metadata("design:type", Array)
    ], CacheCluster.prototype, "cacheSecurityGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheCluster.prototype, "cacheSubnetGroupName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheCluster.prototype, "clientDownloadLandingPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Endpoint)
    ], CacheCluster.prototype, "configurationEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheCluster.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheCluster.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: LogDeliveryConfiguration }),
        __metadata("design:type", Array)
    ], CacheCluster.prototype, "logDeliveryConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NotificationConfiguration)
    ], CacheCluster.prototype, "notificationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CacheCluster.prototype, "numCacheNodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PendingModifiedValues)
    ], CacheCluster.prototype, "pendingModifiedValues", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheCluster.prototype, "preferredAvailabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheCluster.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheCluster.prototype, "preferredOutpostArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheCluster.prototype, "replicationGroupId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], CacheCluster.prototype, "replicationGroupLogDeliveryEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: SecurityGroupMembership }),
        __metadata("design:type", Array)
    ], CacheCluster.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CacheCluster.prototype, "snapshotRetentionLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CacheCluster.prototype, "snapshotWindow", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], CacheCluster.prototype, "transitEncryptionEnabled", void 0);
    return CacheCluster;
}(SpeakeasyBase));
export { CacheCluster };
