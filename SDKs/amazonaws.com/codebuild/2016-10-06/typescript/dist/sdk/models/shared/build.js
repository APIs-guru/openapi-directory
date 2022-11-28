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
import { BuildArtifacts } from "./buildartifacts";
import { StatusTypeEnum } from "./statustypeenum";
import { ProjectCache } from "./projectcache";
import { DebugSession } from "./debugsession";
import { ProjectEnvironment } from "./projectenvironment";
import { ExportedEnvironmentVariable } from "./exportedenvironmentvariable";
import { ProjectFileSystemLocation } from "./projectfilesystemlocation";
import { LogsLocation } from "./logslocation";
import { NetworkInterface } from "./networkinterface";
import { BuildPhase } from "./buildphase";
import { ProjectSourceVersion } from "./projectsourceversion";
import { ProjectSource } from "./projectsource";
import { VpcConfig } from "./vpcconfig";
// Build
/**
 * Information about a build.
**/
var Build = /** @class */ (function (_super) {
    __extends(Build, _super);
    function Build() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Build.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artifacts" }),
        __metadata("design:type", BuildArtifacts)
    ], Build.prototype, "artifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildBatchArn" }),
        __metadata("design:type", String)
    ], Build.prototype, "buildBatchArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildComplete" }),
        __metadata("design:type", Boolean)
    ], Build.prototype, "buildComplete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildNumber" }),
        __metadata("design:type", Number)
    ], Build.prototype, "buildNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildStatus" }),
        __metadata("design:type", String)
    ], Build.prototype, "buildStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cache" }),
        __metadata("design:type", ProjectCache)
    ], Build.prototype, "cache", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentPhase" }),
        __metadata("design:type", String)
    ], Build.prototype, "currentPhase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debugSession" }),
        __metadata("design:type", DebugSession)
    ], Build.prototype, "debugSession", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionKey" }),
        __metadata("design:type", String)
    ], Build.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], Build.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", ProjectEnvironment)
    ], Build.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exportedEnvironmentVariables", elemType: ExportedEnvironmentVariable }),
        __metadata("design:type", Array)
    ], Build.prototype, "exportedEnvironmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileSystemLocations", elemType: ProjectFileSystemLocation }),
        __metadata("design:type", Array)
    ], Build.prototype, "fileSystemLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Build.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initiator" }),
        __metadata("design:type", String)
    ], Build.prototype, "initiator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logs" }),
        __metadata("design:type", LogsLocation)
    ], Build.prototype, "logs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkInterface" }),
        __metadata("design:type", NetworkInterface)
    ], Build.prototype, "networkInterface", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phases", elemType: BuildPhase }),
        __metadata("design:type", Array)
    ], Build.prototype, "phases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectName" }),
        __metadata("design:type", String)
    ], Build.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queuedTimeoutInMinutes" }),
        __metadata("design:type", Number)
    ], Build.prototype, "queuedTimeoutInMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportArns" }),
        __metadata("design:type", Array)
    ], Build.prototype, "reportArns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolvedSourceVersion" }),
        __metadata("design:type", String)
    ], Build.prototype, "resolvedSourceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryArtifacts", elemType: BuildArtifacts }),
        __metadata("design:type", Array)
    ], Build.prototype, "secondaryArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondarySourceVersions", elemType: ProjectSourceVersion }),
        __metadata("design:type", Array)
    ], Build.prototype, "secondarySourceVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondarySources", elemType: ProjectSource }),
        __metadata("design:type", Array)
    ], Build.prototype, "secondarySources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceRole" }),
        __metadata("design:type", String)
    ], Build.prototype, "serviceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", ProjectSource)
    ], Build.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceVersion" }),
        __metadata("design:type", String)
    ], Build.prototype, "sourceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], Build.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" }),
        __metadata("design:type", Number)
    ], Build.prototype, "timeoutInMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], Build.prototype, "vpcConfig", void 0);
    return Build;
}(SpeakeasyBase));
export { Build };
