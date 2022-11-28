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
import { SourceAuth } from "./sourceauth";
import { BuildStatusConfig } from "./buildstatusconfig";
import { GitSubmodulesConfig } from "./gitsubmodulesconfig";
import { SourceTypeEnum } from "./sourcetypeenum";
// ProjectSource
/**
 * Information about the build input source code for the build project.
**/
var ProjectSource = /** @class */ (function (_super) {
    __extends(ProjectSource, _super);
    function ProjectSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth" }),
        __metadata("design:type", SourceAuth)
    ], ProjectSource.prototype, "auth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildStatusConfig" }),
        __metadata("design:type", BuildStatusConfig)
    ], ProjectSource.prototype, "buildStatusConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildspec" }),
        __metadata("design:type", String)
    ], ProjectSource.prototype, "buildspec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitCloneDepth" }),
        __metadata("design:type", Number)
    ], ProjectSource.prototype, "gitCloneDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitSubmodulesConfig" }),
        __metadata("design:type", GitSubmodulesConfig)
    ], ProjectSource.prototype, "gitSubmodulesConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insecureSsl" }),
        __metadata("design:type", Boolean)
    ], ProjectSource.prototype, "insecureSsl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ProjectSource.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportBuildStatus" }),
        __metadata("design:type", Boolean)
    ], ProjectSource.prototype, "reportBuildStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceIdentifier" }),
        __metadata("design:type", String)
    ], ProjectSource.prototype, "sourceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ProjectSource.prototype, "type", void 0);
    return ProjectSource;
}(SpeakeasyBase));
export { ProjectSource };
