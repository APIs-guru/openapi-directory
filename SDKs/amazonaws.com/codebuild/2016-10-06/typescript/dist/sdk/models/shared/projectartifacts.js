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
import { BucketOwnerAccessEnum } from "./bucketowneraccessenum";
import { ArtifactNamespaceEnum } from "./artifactnamespaceenum";
import { ArtifactPackagingEnum } from "./artifactpackagingenum";
import { ArtifactsTypeEnum } from "./artifactstypeenum";
// ProjectArtifacts
/**
 * Information about the build output artifacts for the build project.
**/
var ProjectArtifacts = /** @class */ (function (_super) {
    __extends(ProjectArtifacts, _super);
    function ProjectArtifacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artifactIdentifier" }),
        __metadata("design:type", String)
    ], ProjectArtifacts.prototype, "artifactIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketOwnerAccess" }),
        __metadata("design:type", String)
    ], ProjectArtifacts.prototype, "bucketOwnerAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionDisabled" }),
        __metadata("design:type", Boolean)
    ], ProjectArtifacts.prototype, "encryptionDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ProjectArtifacts.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectArtifacts.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespaceType" }),
        __metadata("design:type", String)
    ], ProjectArtifacts.prototype, "namespaceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrideArtifactName" }),
        __metadata("design:type", Boolean)
    ], ProjectArtifacts.prototype, "overrideArtifactName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packaging" }),
        __metadata("design:type", String)
    ], ProjectArtifacts.prototype, "packaging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ProjectArtifacts.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ProjectArtifacts.prototype, "type", void 0);
    return ProjectArtifacts;
}(SpeakeasyBase));
export { ProjectArtifacts };
