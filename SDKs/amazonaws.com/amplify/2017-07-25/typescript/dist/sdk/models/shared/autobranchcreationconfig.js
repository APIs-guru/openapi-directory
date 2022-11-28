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
import { StageEnum } from "./stageenum";
// AutoBranchCreationConfig
/**
 *  Describes the automated branch creation configuration.
**/
var AutoBranchCreationConfig = /** @class */ (function (_super) {
    __extends(AutoBranchCreationConfig, _super);
    function AutoBranchCreationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", String)
    ], AutoBranchCreationConfig.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildSpec" }),
        __metadata("design:type", String)
    ], AutoBranchCreationConfig.prototype, "buildSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAutoBuild" }),
        __metadata("design:type", Boolean)
    ], AutoBranchCreationConfig.prototype, "enableAutoBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableBasicAuth" }),
        __metadata("design:type", Boolean)
    ], AutoBranchCreationConfig.prototype, "enableBasicAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enablePerformanceMode" }),
        __metadata("design:type", Boolean)
    ], AutoBranchCreationConfig.prototype, "enablePerformanceMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enablePullRequestPreview" }),
        __metadata("design:type", Boolean)
    ], AutoBranchCreationConfig.prototype, "enablePullRequestPreview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], AutoBranchCreationConfig.prototype, "environmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=framework" }),
        __metadata("design:type", String)
    ], AutoBranchCreationConfig.prototype, "framework", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequestEnvironmentName" }),
        __metadata("design:type", String)
    ], AutoBranchCreationConfig.prototype, "pullRequestEnvironmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stage" }),
        __metadata("design:type", String)
    ], AutoBranchCreationConfig.prototype, "stage", void 0);
    return AutoBranchCreationConfig;
}(SpeakeasyBase));
export { AutoBranchCreationConfig };
