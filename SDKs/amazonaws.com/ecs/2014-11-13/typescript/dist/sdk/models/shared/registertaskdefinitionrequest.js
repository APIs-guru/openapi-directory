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
import { Tag } from "./tag";
import { Volume } from "./volume";
var RegisterTaskDefinitionRequest = /** @class */ (function (_super) {
    __extends(RegisterTaskDefinitionRequest, _super);
    function RegisterTaskDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerDefinitions", elemType: ContainerDefinition }),
        __metadata("design:type", Array)
    ], RegisterTaskDefinitionRequest.prototype, "containerDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpu" }),
        __metadata("design:type", String)
    ], RegisterTaskDefinitionRequest.prototype, "cpu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ephemeralStorage" }),
        __metadata("design:type", EphemeralStorage)
    ], RegisterTaskDefinitionRequest.prototype, "ephemeralStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionRoleArn" }),
        __metadata("design:type", String)
    ], RegisterTaskDefinitionRequest.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=family" }),
        __metadata("design:type", String)
    ], RegisterTaskDefinitionRequest.prototype, "family", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inferenceAccelerators", elemType: InferenceAccelerator }),
        __metadata("design:type", Array)
    ], RegisterTaskDefinitionRequest.prototype, "inferenceAccelerators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipcMode" }),
        __metadata("design:type", String)
    ], RegisterTaskDefinitionRequest.prototype, "ipcMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", String)
    ], RegisterTaskDefinitionRequest.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkMode" }),
        __metadata("design:type", String)
    ], RegisterTaskDefinitionRequest.prototype, "networkMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pidMode" }),
        __metadata("design:type", String)
    ], RegisterTaskDefinitionRequest.prototype, "pidMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementConstraints", elemType: TaskDefinitionPlacementConstraint }),
        __metadata("design:type", Array)
    ], RegisterTaskDefinitionRequest.prototype, "placementConstraints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyConfiguration" }),
        __metadata("design:type", ProxyConfiguration)
    ], RegisterTaskDefinitionRequest.prototype, "proxyConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiresCompatibilities" }),
        __metadata("design:type", Array)
    ], RegisterTaskDefinitionRequest.prototype, "requiresCompatibilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], RegisterTaskDefinitionRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskRoleArn" }),
        __metadata("design:type", String)
    ], RegisterTaskDefinitionRequest.prototype, "taskRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume }),
        __metadata("design:type", Array)
    ], RegisterTaskDefinitionRequest.prototype, "volumes", void 0);
    return RegisterTaskDefinitionRequest;
}(SpeakeasyBase));
export { RegisterTaskDefinitionRequest };
