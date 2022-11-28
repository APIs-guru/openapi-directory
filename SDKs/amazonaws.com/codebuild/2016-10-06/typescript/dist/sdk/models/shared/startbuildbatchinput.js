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
import { ComputeTypeEnum } from "./computetypeenum";
import { EnvironmentTypeEnum } from "./environmenttypeenum";
import { EnvironmentVariable } from "./environmentvariable";
import { GitSubmodulesConfig } from "./gitsubmodulesconfig";
import { ImagePullCredentialsTypeEnum } from "./imagepullcredentialstypeenum";
import { LogsConfig } from "./logsconfig";
import { RegistryCredential } from "./registrycredential";
import { ProjectSource } from "./projectsource";
import { ProjectSourceVersion } from "./projectsourceversion";
import { SourceAuth } from "./sourceauth";
import { SourceTypeEnum } from "./sourcetypeenum";
var StartBuildBatchInput = /** @class */ (function (_super) {
    __extends(StartBuildBatchInput, _super);
    function StartBuildBatchInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artifactsOverride" }),
        __metadata("design:type", ProjectArtifacts)
    ], StartBuildBatchInput.prototype, "artifactsOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildBatchConfigOverride" }),
        __metadata("design:type", ProjectBuildBatchConfig)
    ], StartBuildBatchInput.prototype, "buildBatchConfigOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildTimeoutInMinutesOverride" }),
        __metadata("design:type", Number)
    ], StartBuildBatchInput.prototype, "buildTimeoutInMinutesOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildspecOverride" }),
        __metadata("design:type", String)
    ], StartBuildBatchInput.prototype, "buildspecOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cacheOverride" }),
        __metadata("design:type", ProjectCache)
    ], StartBuildBatchInput.prototype, "cacheOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateOverride" }),
        __metadata("design:type", String)
    ], StartBuildBatchInput.prototype, "certificateOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeTypeOverride" }),
        __metadata("design:type", String)
    ], StartBuildBatchInput.prototype, "computeTypeOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debugSessionEnabled" }),
        __metadata("design:type", Boolean)
    ], StartBuildBatchInput.prototype, "debugSessionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionKeyOverride" }),
        __metadata("design:type", String)
    ], StartBuildBatchInput.prototype, "encryptionKeyOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentTypeOverride" }),
        __metadata("design:type", String)
    ], StartBuildBatchInput.prototype, "environmentTypeOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentVariablesOverride", elemType: EnvironmentVariable }),
        __metadata("design:type", Array)
    ], StartBuildBatchInput.prototype, "environmentVariablesOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitCloneDepthOverride" }),
        __metadata("design:type", Number)
    ], StartBuildBatchInput.prototype, "gitCloneDepthOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitSubmodulesConfigOverride" }),
        __metadata("design:type", GitSubmodulesConfig)
    ], StartBuildBatchInput.prototype, "gitSubmodulesConfigOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageOverride" }),
        __metadata("design:type", String)
    ], StartBuildBatchInput.prototype, "imageOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imagePullCredentialsTypeOverride" }),
        __metadata("design:type", String)
    ], StartBuildBatchInput.prototype, "imagePullCredentialsTypeOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insecureSslOverride" }),
        __metadata("design:type", Boolean)
    ], StartBuildBatchInput.prototype, "insecureSslOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logsConfigOverride" }),
        __metadata("design:type", LogsConfig)
    ], StartBuildBatchInput.prototype, "logsConfigOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privilegedModeOverride" }),
        __metadata("design:type", Boolean)
    ], StartBuildBatchInput.prototype, "privilegedModeOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectName" }),
        __metadata("design:type", String)
    ], StartBuildBatchInput.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queuedTimeoutInMinutesOverride" }),
        __metadata("design:type", Number)
    ], StartBuildBatchInput.prototype, "queuedTimeoutInMinutesOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registryCredentialOverride" }),
        __metadata("design:type", RegistryCredential)
    ], StartBuildBatchInput.prototype, "registryCredentialOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportBuildBatchStatusOverride" }),
        __metadata("design:type", Boolean)
    ], StartBuildBatchInput.prototype, "reportBuildBatchStatusOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryArtifactsOverride", elemType: ProjectArtifacts }),
        __metadata("design:type", Array)
    ], StartBuildBatchInput.prototype, "secondaryArtifactsOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondarySourcesOverride", elemType: ProjectSource }),
        __metadata("design:type", Array)
    ], StartBuildBatchInput.prototype, "secondarySourcesOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondarySourcesVersionOverride", elemType: ProjectSourceVersion }),
        __metadata("design:type", Array)
    ], StartBuildBatchInput.prototype, "secondarySourcesVersionOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceRoleOverride" }),
        __metadata("design:type", String)
    ], StartBuildBatchInput.prototype, "serviceRoleOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceAuthOverride" }),
        __metadata("design:type", SourceAuth)
    ], StartBuildBatchInput.prototype, "sourceAuthOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceLocationOverride" }),
        __metadata("design:type", String)
    ], StartBuildBatchInput.prototype, "sourceLocationOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceTypeOverride" }),
        __metadata("design:type", String)
    ], StartBuildBatchInput.prototype, "sourceTypeOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceVersion" }),
        __metadata("design:type", String)
    ], StartBuildBatchInput.prototype, "sourceVersion", void 0);
    return StartBuildBatchInput;
}(SpeakeasyBase));
export { StartBuildBatchInput };
