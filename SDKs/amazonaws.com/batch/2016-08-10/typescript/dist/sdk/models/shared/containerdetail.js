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
// ContainerDetail
/**
 * An object representing the details of a container that's part of a job.
**/
var ContainerDetail = /** @class */ (function (_super) {
    __extends(ContainerDetail, _super);
    function ContainerDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=command" }),
        __metadata("design:type", Array)
    ], ContainerDetail.prototype, "command", void 0);
    __decorate([
        Metadata({ data: "json, name=containerInstanceArn" }),
        __metadata("design:type", String)
    ], ContainerDetail.prototype, "containerInstanceArn", void 0);
    __decorate([
        Metadata({ data: "json, name=environment", elemType: shared.KeyValuePair }),
        __metadata("design:type", Array)
    ], ContainerDetail.prototype, "environment", void 0);
    __decorate([
        Metadata({ data: "json, name=executionRoleArn" }),
        __metadata("design:type", String)
    ], ContainerDetail.prototype, "executionRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=exitCode" }),
        __metadata("design:type", Number)
    ], ContainerDetail.prototype, "exitCode", void 0);
    __decorate([
        Metadata({ data: "json, name=fargatePlatformConfiguration" }),
        __metadata("design:type", FargatePlatformConfiguration)
    ], ContainerDetail.prototype, "fargatePlatformConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], ContainerDetail.prototype, "image", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceType" }),
        __metadata("design:type", String)
    ], ContainerDetail.prototype, "instanceType", void 0);
    __decorate([
        Metadata({ data: "json, name=jobRoleArn" }),
        __metadata("design:type", String)
    ], ContainerDetail.prototype, "jobRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=linuxParameters" }),
        __metadata("design:type", LinuxParameters)
    ], ContainerDetail.prototype, "linuxParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=logConfiguration" }),
        __metadata("design:type", LogConfiguration)
    ], ContainerDetail.prototype, "logConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=logStreamName" }),
        __metadata("design:type", String)
    ], ContainerDetail.prototype, "logStreamName", void 0);
    __decorate([
        Metadata({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], ContainerDetail.prototype, "memory", void 0);
    __decorate([
        Metadata({ data: "json, name=mountPoints", elemType: shared.MountPoint }),
        __metadata("design:type", Array)
    ], ContainerDetail.prototype, "mountPoints", void 0);
    __decorate([
        Metadata({ data: "json, name=networkConfiguration" }),
        __metadata("design:type", NetworkConfiguration)
    ], ContainerDetail.prototype, "networkConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=networkInterfaces", elemType: shared.NetworkInterface }),
        __metadata("design:type", Array)
    ], ContainerDetail.prototype, "networkInterfaces", void 0);
    __decorate([
        Metadata({ data: "json, name=privileged" }),
        __metadata("design:type", Boolean)
    ], ContainerDetail.prototype, "privileged", void 0);
    __decorate([
        Metadata({ data: "json, name=readonlyRootFilesystem" }),
        __metadata("design:type", Boolean)
    ], ContainerDetail.prototype, "readonlyRootFilesystem", void 0);
    __decorate([
        Metadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], ContainerDetail.prototype, "reason", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceRequirements", elemType: shared.ResourceRequirement }),
        __metadata("design:type", Array)
    ], ContainerDetail.prototype, "resourceRequirements", void 0);
    __decorate([
        Metadata({ data: "json, name=secrets", elemType: shared.Secret }),
        __metadata("design:type", Array)
    ], ContainerDetail.prototype, "secrets", void 0);
    __decorate([
        Metadata({ data: "json, name=taskArn" }),
        __metadata("design:type", String)
    ], ContainerDetail.prototype, "taskArn", void 0);
    __decorate([
        Metadata({ data: "json, name=ulimits", elemType: shared.Ulimit }),
        __metadata("design:type", Array)
    ], ContainerDetail.prototype, "ulimits", void 0);
    __decorate([
        Metadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], ContainerDetail.prototype, "user", void 0);
    __decorate([
        Metadata({ data: "json, name=vcpus" }),
        __metadata("design:type", Number)
    ], ContainerDetail.prototype, "vcpus", void 0);
    __decorate([
        Metadata({ data: "json, name=volumes", elemType: shared.Volume }),
        __metadata("design:type", Array)
    ], ContainerDetail.prototype, "volumes", void 0);
    return ContainerDetail;
}(SpeakeasyBase));
export { ContainerDetail };
