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
import { ProjectBuildBatchConfig } from "./projectbuildbatchconfig";
import { StatusTypeEnum } from "./statustypeenum";
import { BuildGroup } from "./buildgroup";
import { ProjectCache } from "./projectcache";
import { ProjectEnvironment } from "./projectenvironment";
import { ProjectFileSystemLocation } from "./projectfilesystemlocation";
import { LogsConfig } from "./logsconfig";
import { BuildBatchPhase } from "./buildbatchphase";
import { ProjectSourceVersion } from "./projectsourceversion";
import { ProjectSource } from "./projectsource";
import { VpcConfig } from "./vpcconfig";
// BuildBatch
/**
 * Contains information about a batch build.
**/
var BuildBatch = /** @class */ (function (_super) {
    __extends(BuildBatch, _super);
    function BuildBatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artifacts" }),
        __metadata("design:type", BuildArtifacts)
    ], BuildBatch.prototype, "artifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildBatchConfig" }),
        __metadata("design:type", ProjectBuildBatchConfig)
    ], BuildBatch.prototype, "buildBatchConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildBatchNumber" }),
        __metadata("design:type", Number)
    ], BuildBatch.prototype, "buildBatchNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildBatchStatus" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "buildBatchStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildGroups", elemType: BuildGroup }),
        __metadata("design:type", Array)
    ], BuildBatch.prototype, "buildGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildTimeoutInMinutes" }),
        __metadata("design:type", Number)
    ], BuildBatch.prototype, "buildTimeoutInMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cache" }),
        __metadata("design:type", ProjectCache)
    ], BuildBatch.prototype, "cache", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=complete" }),
        __metadata("design:type", Boolean)
    ], BuildBatch.prototype, "complete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentPhase" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "currentPhase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debugSessionEnabled" }),
        __metadata("design:type", Boolean)
    ], BuildBatch.prototype, "debugSessionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionKey" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], BuildBatch.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", ProjectEnvironment)
    ], BuildBatch.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileSystemLocations", elemType: ProjectFileSystemLocation }),
        __metadata("design:type", Array)
    ], BuildBatch.prototype, "fileSystemLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initiator" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "initiator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logConfig" }),
        __metadata("design:type", LogsConfig)
    ], BuildBatch.prototype, "logConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phases", elemType: BuildBatchPhase }),
        __metadata("design:type", Array)
    ], BuildBatch.prototype, "phases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectName" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queuedTimeoutInMinutes" }),
        __metadata("design:type", Number)
    ], BuildBatch.prototype, "queuedTimeoutInMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolvedSourceVersion" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "resolvedSourceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryArtifacts", elemType: BuildArtifacts }),
        __metadata("design:type", Array)
    ], BuildBatch.prototype, "secondaryArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondarySourceVersions", elemType: ProjectSourceVersion }),
        __metadata("design:type", Array)
    ], BuildBatch.prototype, "secondarySourceVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondarySources", elemType: ProjectSource }),
        __metadata("design:type", Array)
    ], BuildBatch.prototype, "secondarySources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceRole" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "serviceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", ProjectSource)
    ], BuildBatch.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceVersion" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "sourceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], BuildBatch.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], BuildBatch.prototype, "vpcConfig", void 0);
    return BuildBatch;
}(SpeakeasyBase));
export { BuildBatch };
