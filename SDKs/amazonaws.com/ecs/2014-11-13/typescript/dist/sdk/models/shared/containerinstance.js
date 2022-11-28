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
import { AgentUpdateStatusEnum } from "./agentupdatestatusenum";
import { Attachment } from "./attachment";
import { Attribute } from "./attribute";
import { Resource } from "./resource";
import { Tag } from "./tag";
import { VersionInfo } from "./versioninfo";
// ContainerInstance
/**
 * An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster.
**/
var ContainerInstance = /** @class */ (function (_super) {
    __extends(ContainerInstance, _super);
    function ContainerInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agentConnected" }),
        __metadata("design:type", Boolean)
    ], ContainerInstance.prototype, "agentConnected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agentUpdateStatus" }),
        __metadata("design:type", String)
    ], ContainerInstance.prototype, "agentUpdateStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment }),
        __metadata("design:type", Array)
    ], ContainerInstance.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute }),
        __metadata("design:type", Array)
    ], ContainerInstance.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacityProviderName" }),
        __metadata("design:type", String)
    ], ContainerInstance.prototype, "capacityProviderName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerInstanceArn" }),
        __metadata("design:type", String)
    ], ContainerInstance.prototype, "containerInstanceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2InstanceId" }),
        __metadata("design:type", String)
    ], ContainerInstance.prototype, "ec2InstanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingTasksCount" }),
        __metadata("design:type", Number)
    ], ContainerInstance.prototype, "pendingTasksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registeredAt" }),
        __metadata("design:type", Date)
    ], ContainerInstance.prototype, "registeredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registeredResources", elemType: Resource }),
        __metadata("design:type", Array)
    ], ContainerInstance.prototype, "registeredResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remainingResources", elemType: Resource }),
        __metadata("design:type", Array)
    ], ContainerInstance.prototype, "remainingResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runningTasksCount" }),
        __metadata("design:type", Number)
    ], ContainerInstance.prototype, "runningTasksCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ContainerInstance.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusReason" }),
        __metadata("design:type", String)
    ], ContainerInstance.prototype, "statusReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], ContainerInstance.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], ContainerInstance.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionInfo" }),
        __metadata("design:type", VersionInfo)
    ], ContainerInstance.prototype, "versionInfo", void 0);
    return ContainerInstance;
}(SpeakeasyBase));
export { ContainerInstance };
