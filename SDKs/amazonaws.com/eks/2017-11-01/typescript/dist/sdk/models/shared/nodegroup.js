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
import { AmiTypesEnum } from "./amitypesenum";
import { CapacityTypesEnum } from "./capacitytypesenum";
import { NodegroupHealth } from "./nodegrouphealth";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { RemoteAccessConfig } from "./remoteaccessconfig";
import { NodegroupResources } from "./nodegroupresources";
import { NodegroupScalingConfig } from "./nodegroupscalingconfig";
import { NodegroupStatusEnum } from "./nodegroupstatusenum";
import { NodegroupUpdateConfig } from "./nodegroupupdateconfig";
// Nodegroup
/**
 * An object representing an Amazon EKS managed node group.
**/
var Nodegroup = /** @class */ (function (_super) {
    __extends(Nodegroup, _super);
    function Nodegroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=amiType" }),
        __metadata("design:type", String)
    ], Nodegroup.prototype, "amiType", void 0);
    __decorate([
        Metadata({ data: "json, name=capacityType" }),
        __metadata("design:type", String)
    ], Nodegroup.prototype, "capacityType", void 0);
    __decorate([
        Metadata({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], Nodegroup.prototype, "clusterName", void 0);
    __decorate([
        Metadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Nodegroup.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=diskSize" }),
        __metadata("design:type", Number)
    ], Nodegroup.prototype, "diskSize", void 0);
    __decorate([
        Metadata({ data: "json, name=health" }),
        __metadata("design:type", NodegroupHealth)
    ], Nodegroup.prototype, "health", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceTypes" }),
        __metadata("design:type", Array)
    ], Nodegroup.prototype, "instanceTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Nodegroup.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=launchTemplate" }),
        __metadata("design:type", LaunchTemplateSpecification)
    ], Nodegroup.prototype, "launchTemplate", void 0);
    __decorate([
        Metadata({ data: "json, name=modifiedAt" }),
        __metadata("design:type", Date)
    ], Nodegroup.prototype, "modifiedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=nodeRole" }),
        __metadata("design:type", String)
    ], Nodegroup.prototype, "nodeRole", void 0);
    __decorate([
        Metadata({ data: "json, name=nodegroupArn" }),
        __metadata("design:type", String)
    ], Nodegroup.prototype, "nodegroupArn", void 0);
    __decorate([
        Metadata({ data: "json, name=nodegroupName" }),
        __metadata("design:type", String)
    ], Nodegroup.prototype, "nodegroupName", void 0);
    __decorate([
        Metadata({ data: "json, name=releaseVersion" }),
        __metadata("design:type", String)
    ], Nodegroup.prototype, "releaseVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=remoteAccess" }),
        __metadata("design:type", RemoteAccessConfig)
    ], Nodegroup.prototype, "remoteAccess", void 0);
    __decorate([
        Metadata({ data: "json, name=resources" }),
        __metadata("design:type", NodegroupResources)
    ], Nodegroup.prototype, "resources", void 0);
    __decorate([
        Metadata({ data: "json, name=scalingConfig" }),
        __metadata("design:type", NodegroupScalingConfig)
    ], Nodegroup.prototype, "scalingConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Nodegroup.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=subnets" }),
        __metadata("design:type", Array)
    ], Nodegroup.prototype, "subnets", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], Nodegroup.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=taints", elemType: shared.Taint }),
        __metadata("design:type", Array)
    ], Nodegroup.prototype, "taints", void 0);
    __decorate([
        Metadata({ data: "json, name=updateConfig" }),
        __metadata("design:type", NodegroupUpdateConfig)
    ], Nodegroup.prototype, "updateConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Nodegroup.prototype, "version", void 0);
    return Nodegroup;
}(SpeakeasyBase));
export { Nodegroup };
