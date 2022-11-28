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
import { ContainerDefinition } from "./containerdefinition";
import { EphemeralStorage } from "./ephemeralstorage";
import { InferenceAccelerator } from "./inferenceaccelerator";
import { IpcModeEnum } from "./ipcmodeenum";
import { NetworkModeEnum } from "./networkmodeenum";
import { PidModeEnum } from "./pidmodeenum";
import { TaskDefinitionPlacementConstraint } from "./taskdefinitionplacementconstraint";
import { ProxyConfiguration } from "./proxyconfiguration";
import { Attribute } from "./attribute";
import { TaskDefinitionStatusEnum } from "./taskdefinitionstatusenum";
import { Volume } from "./volume";
// TaskDefinition
/**
 * The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
**/
var TaskDefinition = /** @class */ (function (_super) {
    __extends(TaskDefinition, _super);
    function TaskDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compatibilities" }),
        __metadata("design:type", Array)
    ], TaskDefinition.prototype, "compatibilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerDefinitions", elemType: ContainerDefinition }),
        __metadata("design:type", Array)
    ], TaskDefinition.prototype, "containerDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpu" }),
        __metadata("design:type", String)
    ], TaskDefinition.prototype, "cpu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deregisteredAt" }),
        __metadata("design:type", Date)
    ], TaskDefinition.prototype, "deregisteredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ephemeralStorage" }),
        __metadata("design:type", EphemeralStorage)
    ], TaskDefinition.prototype, "ephemeralStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionRoleArn" }),
        __metadata("design:type", String)
    ], TaskDefinition.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=family" }),
        __metadata("design:type", String)
    ], TaskDefinition.prototype, "family", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inferenceAccelerators", elemType: InferenceAccelerator }),
        __metadata("design:type", Array)
    ], TaskDefinition.prototype, "inferenceAccelerators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipcMode" }),
        __metadata("design:type", String)
    ], TaskDefinition.prototype, "ipcMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", String)
    ], TaskDefinition.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkMode" }),
        __metadata("design:type", String)
    ], TaskDefinition.prototype, "networkMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pidMode" }),
        __metadata("design:type", String)
    ], TaskDefinition.prototype, "pidMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementConstraints", elemType: TaskDefinitionPlacementConstraint }),
        __metadata("design:type", Array)
    ], TaskDefinition.prototype, "placementConstraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyConfiguration" }),
        __metadata("design:type", ProxyConfiguration)
    ], TaskDefinition.prototype, "proxyConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registeredAt" }),
        __metadata("design:type", Date)
    ], TaskDefinition.prototype, "registeredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registeredBy" }),
        __metadata("design:type", String)
    ], TaskDefinition.prototype, "registeredBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiresAttributes", elemType: Attribute }),
        __metadata("design:type", Array)
    ], TaskDefinition.prototype, "requiresAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiresCompatibilities" }),
        __metadata("design:type", Array)
    ], TaskDefinition.prototype, "requiresCompatibilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", Number)
    ], TaskDefinition.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TaskDefinition.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskDefinitionArn" }),
        __metadata("design:type", String)
    ], TaskDefinition.prototype, "taskDefinitionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskRoleArn" }),
        __metadata("design:type", String)
    ], TaskDefinition.prototype, "taskRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume }),
        __metadata("design:type", Array)
    ], TaskDefinition.prototype, "volumes", void 0);
    return TaskDefinition;
}(SpeakeasyBase));
export { TaskDefinition };
