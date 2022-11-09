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
import { FargatePlatformConfiguration } from "./fargateplatformconfiguration";
import { LinuxParameters } from "./linuxparameters";
import { LogConfiguration } from "./logconfiguration";
import { NetworkConfiguration } from "./networkconfiguration";
// ContainerProperties
/**
 * Container properties are used in job definitions to describe the container that's launched as part of a job.
**/
var ContainerProperties = /** @class */ (function (_super) {
    __extends(ContainerProperties, _super);
    function ContainerProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=command" }),
        __metadata("design:type", Array)
    ], ContainerProperties.prototype, "command", void 0);
    __decorate([
        Metadata({ data: "json, name=environment", elemType: shared.KeyValuePair }),
        __metadata("design:type", Array)
    ], ContainerProperties.prototype, "environment", void 0);
    __decorate([
        Metadata({ data: "json, name=executionRoleArn" }),
        __metadata("design:type", String)
    ], ContainerProperties.prototype, "executionRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=fargatePlatformConfiguration" }),
        __metadata("design:type", FargatePlatformConfiguration)
    ], ContainerProperties.prototype, "fargatePlatformConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], ContainerProperties.prototype, "image", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], ContainerProperties.prototype, "instanceType", void 0);
    __decorate([
        Metadata({ data: "json, name=jobRoleArn" }),
        __metadata("design:type", String)
    ], ContainerProperties.prototype, "jobRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=linuxParameters" }),
        __metadata("design:type", LinuxParameters)
    ], ContainerProperties.prototype, "linuxParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=logConfiguration" }),
        __metadata("design:type", LogConfiguration)
    ], ContainerProperties.prototype, "logConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], ContainerProperties.prototype, "memory", void 0);
    __decorate([
        Metadata({ data: "json, name=mountPoints", elemType: shared.MountPoint }),
        __metadata("design:type", Array)
    ], ContainerProperties.prototype, "mountPoints", void 0);
    __decorate([
        Metadata({ data: "json, name=networkConfiguration" }),
        __metadata("design:type", NetworkConfiguration)
    ], ContainerProperties.prototype, "networkConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=privileged" }),
        __metadata("design:type", Boolean)
    ], ContainerProperties.prototype, "privileged", void 0);
    __decorate([
        Metadata({ data: "json, name=readonlyRootFilesystem" }),
        __metadata("design:type", Boolean)
    ], ContainerProperties.prototype, "readonlyRootFilesystem", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceRequirements", elemType: shared.ResourceRequirement }),
        __metadata("design:type", Array)
    ], ContainerProperties.prototype, "resourceRequirements", void 0);
    __decorate([
        Metadata({ data: "json, name=secrets", elemType: shared.Secret }),
        __metadata("design:type", Array)
    ], ContainerProperties.prototype, "secrets", void 0);
    __decorate([
        Metadata({ data: "json, name=ulimits", elemType: shared.Ulimit }),
        __metadata("design:type", Array)
    ], ContainerProperties.prototype, "ulimits", void 0);
    __decorate([
        Metadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], ContainerProperties.prototype, "user", void 0);
    __decorate([
        Metadata({ data: "json, name=vcpus" }),
        __metadata("design:type", Number)
    ], ContainerProperties.prototype, "vcpus", void 0);
    __decorate([
        Metadata({ data: "json, name=volumes", elemType: shared.Volume }),
        __metadata("design:type", Array)
    ], ContainerProperties.prototype, "volumes", void 0);
    return ContainerProperties;
}(SpeakeasyBase));
export { ContainerProperties };
