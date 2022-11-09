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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Endpoint } from "./endpoint";
import { ClusterEndpointEncryptionTypeEnum } from "./clusterendpointencryptiontypeenum";
import { NotificationConfiguration } from "./notificationconfiguration";
import { ParameterGroupStatus } from "./parametergroupstatus";
import { SseDescription } from "./ssedescription";
// Cluster
/**
 * Contains all of the attributes of a specific DAX cluster.
**/
var Cluster = /** @class */ (function (_super) {
    __extends(Cluster, _super);
    function Cluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ActiveNodes" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "activeNodes", void 0);
    __decorate([
        Metadata({ data: "json, name=ClusterArn" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterArn", void 0);
    __decorate([
        Metadata({ data: "json, name=ClusterDiscoveryEndpoint" }),
        __metadata("design:type", Endpoint)
    ], Cluster.prototype, "clusterDiscoveryEndpoint", void 0);
    __decorate([
        Metadata({ data: "json, name=ClusterEndpointEncryptionType" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterEndpointEncryptionType", void 0);
    __decorate([
        Metadata({ data: "json, name=ClusterName" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterName", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=IamRoleArn" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "iamRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=NodeIdsToRemove" }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "nodeIdsToRemove", void 0);
    __decorate([
        Metadata({ data: "json, name=NodeType" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "nodeType", void 0);
    __decorate([
        Metadata({ data: "json, name=Nodes", elemType: shared.Node }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "nodes", void 0);
    __decorate([
        Metadata({ data: "json, name=NotificationConfiguration" }),
        __metadata("design:type", NotificationConfiguration)
    ], Cluster.prototype, "notificationConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=ParameterGroup" }),
        __metadata("design:type", ParameterGroupStatus)
    ], Cluster.prototype, "parameterGroup", void 0);
    __decorate([
        Metadata({ data: "json, name=PreferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        Metadata({ data: "json, name=SSEDescription" }),
        __metadata("design:type", SseDescription)
    ], Cluster.prototype, "sseDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=SecurityGroups", elemType: shared.SecurityGroupMembership }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "securityGroups", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=SubnetGroup" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "subnetGroup", void 0);
    __decorate([
        Metadata({ data: "json, name=TotalNodes" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "totalNodes", void 0);
    return Cluster;
}(SpeakeasyBase));
export { Cluster };
