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
import { StageEnum } from "./stageenum";
// Branch
/**
 *  The branch for an Amplify app, which maps to a third-party repository branch.
**/
var Branch = /** @class */ (function (_super) {
    __extends(Branch, _super);
    function Branch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=activeJobId" }),
        __metadata("design:type", String)
    ], Branch.prototype, "activeJobId", void 0);
    __decorate([
        Metadata({ data: "json, name=associatedResources" }),
        __metadata("design:type", Array)
    ], Branch.prototype, "associatedResources", void 0);
    __decorate([
        Metadata({ data: "json, name=backendEnvironmentArn" }),
        __metadata("design:type", String)
    ], Branch.prototype, "backendEnvironmentArn", void 0);
    __decorate([
        Metadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", String)
    ], Branch.prototype, "basicAuthCredentials", void 0);
    __decorate([
        Metadata({ data: "json, name=branchArn" }),
        __metadata("design:type", String)
    ], Branch.prototype, "branchArn", void 0);
    __decorate([
        Metadata({ data: "json, name=branchName" }),
        __metadata("design:type", String)
    ], Branch.prototype, "branchName", void 0);
    __decorate([
        Metadata({ data: "json, name=buildSpec" }),
        __metadata("design:type", String)
    ], Branch.prototype, "buildSpec", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", Date)
    ], Branch.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=customDomains" }),
        __metadata("design:type", Array)
    ], Branch.prototype, "customDomains", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Branch.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=destinationBranch" }),
        __metadata("design:type", String)
    ], Branch.prototype, "destinationBranch", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Branch.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=enableAutoBuild" }),
        __metadata("design:type", Boolean)
    ], Branch.prototype, "enableAutoBuild", void 0);
    __decorate([
        Metadata({ data: "json, name=enableBasicAuth" }),
        __metadata("design:type", Boolean)
    ], Branch.prototype, "enableBasicAuth", void 0);
    __decorate([
        Metadata({ data: "json, name=enableNotification" }),
        __metadata("design:type", Boolean)
    ], Branch.prototype, "enableNotification", void 0);
    __decorate([
        Metadata({ data: "json, name=enablePerformanceMode" }),
        __metadata("design:type", Boolean)
    ], Branch.prototype, "enablePerformanceMode", void 0);
    __decorate([
        Metadata({ data: "json, name=enablePullRequestPreview" }),
        __metadata("design:type", Boolean)
    ], Branch.prototype, "enablePullRequestPreview", void 0);
    __decorate([
        Metadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], Branch.prototype, "environmentVariables", void 0);
    __decorate([
        Metadata({ data: "json, name=framework" }),
        __metadata("design:type", String)
    ], Branch.prototype, "framework", void 0);
    __decorate([
        Metadata({ data: "json, name=pullRequestEnvironmentName" }),
        __metadata("design:type", String)
    ], Branch.prototype, "pullRequestEnvironmentName", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceBranch" }),
        __metadata("design:type", String)
    ], Branch.prototype, "sourceBranch", void 0);
    __decorate([
        Metadata({ data: "json, name=stage" }),
        __metadata("design:type", String)
    ], Branch.prototype, "stage", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], Branch.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=thumbnailUrl" }),
        __metadata("design:type", String)
    ], Branch.prototype, "thumbnailUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=totalNumberOfJobs" }),
        __metadata("design:type", String)
    ], Branch.prototype, "totalNumberOfJobs", void 0);
    __decorate([
        Metadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], Branch.prototype, "ttl", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", Date)
    ], Branch.prototype, "updateTime", void 0);
    return Branch;
}(SpeakeasyBase));
export { Branch };
