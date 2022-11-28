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
import { BackupPolicyEnum } from "./backuppolicyenum";
import { BackupRetentionPolicy } from "./backupretentionpolicy";
import { Certificates } from "./certificates";
import { Hsm } from "./hsm";
import { ClusterStateEnum } from "./clusterstateenum";
import { Tag } from "./tag";
// Cluster
/**
 * Contains information about an AWS CloudHSM cluster.
**/
var Cluster = /** @class */ (function (_super) {
    __extends(Cluster, _super);
    function Cluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackupPolicy" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "backupPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackupRetentionPolicy" }),
        __metadata("design:type", BackupRetentionPolicy)
    ], Cluster.prototype, "backupRetentionPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Certificates" }),
        __metadata("design:type", Certificates)
    ], Cluster.prototype, "certificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterId" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateTimestamp" }),
        __metadata("design:type", Date)
    ], Cluster.prototype, "createTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HsmType" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "hsmType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Hsms", elemType: Hsm }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "hsms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreCoPassword" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "preCoPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroup" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "securityGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceBackupId" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "sourceBackupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StateMessage" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "stateMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetMapping" }),
        __metadata("design:type", Map)
    ], Cluster.prototype, "subnetMapping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TagList", elemType: Tag }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "tagList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "vpcId", void 0);
    return Cluster;
}(SpeakeasyBase));
export { Cluster };
