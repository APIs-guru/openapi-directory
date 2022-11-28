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
import { ProjectArtifacts } from "./projectartifacts";
import { ProjectBuildBatchConfig } from "./projectbuildbatchconfig";
import { ProjectCache } from "./projectcache";
import { ProjectEnvironment } from "./projectenvironment";
import { ProjectFileSystemLocation } from "./projectfilesystemlocation";
import { LogsConfig } from "./logsconfig";
import { ProjectSourceVersion } from "./projectsourceversion";
import { ProjectSource } from "./projectsource";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";
var UpdateProjectInput = /** @class */ (function (_super) {
    __extends(UpdateProjectInput, _super);
    function UpdateProjectInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artifacts" }),
        __metadata("design:type", ProjectArtifacts)
    ], UpdateProjectInput.prototype, "artifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badgeEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateProjectInput.prototype, "badgeEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildBatchConfig" }),
        __metadata("design:type", ProjectBuildBatchConfig)
    ], UpdateProjectInput.prototype, "buildBatchConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cache" }),
        __metadata("design:type", ProjectCache)
    ], UpdateProjectInput.prototype, "cache", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concurrentBuildLimit" }),
        __metadata("design:type", Number)
    ], UpdateProjectInput.prototype, "concurrentBuildLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateProjectInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionKey" }),
        __metadata("design:type", String)
    ], UpdateProjectInput.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", ProjectEnvironment)
    ], UpdateProjectInput.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileSystemLocations", elemType: ProjectFileSystemLocation }),
        __metadata("design:type", Array)
    ], UpdateProjectInput.prototype, "fileSystemLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logsConfig" }),
        __metadata("design:type", LogsConfig)
    ], UpdateProjectInput.prototype, "logsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateProjectInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queuedTimeoutInMinutes" }),
        __metadata("design:type", Number)
    ], UpdateProjectInput.prototype, "queuedTimeoutInMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryArtifacts", elemType: ProjectArtifacts }),
        __metadata("design:type", Array)
    ], UpdateProjectInput.prototype, "secondaryArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondarySourceVersions", elemType: ProjectSourceVersion }),
        __metadata("design:type", Array)
    ], UpdateProjectInput.prototype, "secondarySourceVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondarySources", elemType: ProjectSource }),
        __metadata("design:type", Array)
    ], UpdateProjectInput.prototype, "secondarySources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceRole" }),
        __metadata("design:type", String)
    ], UpdateProjectInput.prototype, "serviceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", ProjectSource)
    ], UpdateProjectInput.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceVersion" }),
        __metadata("design:type", String)
    ], UpdateProjectInput.prototype, "sourceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], UpdateProjectInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" }),
        __metadata("design:type", Number)
    ], UpdateProjectInput.prototype, "timeoutInMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], UpdateProjectInput.prototype, "vpcConfig", void 0);
    return UpdateProjectInput;
}(SpeakeasyBase));
export { UpdateProjectInput };
