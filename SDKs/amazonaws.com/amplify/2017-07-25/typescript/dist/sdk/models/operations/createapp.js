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
var CreateAppHeaders = /** @class */ (function (_super) {
    __extends(CreateAppHeaders, _super);
    function CreateAppHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateAppHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateAppHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateAppHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateAppHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateAppHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateAppHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateAppHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateAppHeaders;
}(SpeakeasyBase));
export { CreateAppHeaders };
// CreateAppRequestBodyAutoBranchCreationConfig
/**
 *  Describes the automated branch creation configuration.
**/
var CreateAppRequestBodyAutoBranchCreationConfig = /** @class */ (function (_super) {
    __extends(CreateAppRequestBodyAutoBranchCreationConfig, _super);
    function CreateAppRequestBodyAutoBranchCreationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", String)
    ], CreateAppRequestBodyAutoBranchCreationConfig.prototype, "basicAuthCredentials", void 0);
    __decorate([
        Metadata({ data: "json, name=buildSpec" }),
        __metadata("design:type", String)
    ], CreateAppRequestBodyAutoBranchCreationConfig.prototype, "buildSpec", void 0);
    __decorate([
        Metadata({ data: "json, name=enableAutoBuild" }),
        __metadata("design:type", Boolean)
    ], CreateAppRequestBodyAutoBranchCreationConfig.prototype, "enableAutoBuild", void 0);
    __decorate([
        Metadata({ data: "json, name=enableBasicAuth" }),
        __metadata("design:type", Boolean)
    ], CreateAppRequestBodyAutoBranchCreationConfig.prototype, "enableBasicAuth", void 0);
    __decorate([
        Metadata({ data: "json, name=enablePerformanceMode" }),
        __metadata("design:type", Boolean)
    ], CreateAppRequestBodyAutoBranchCreationConfig.prototype, "enablePerformanceMode", void 0);
    __decorate([
        Metadata({ data: "json, name=enablePullRequestPreview" }),
        __metadata("design:type", Boolean)
    ], CreateAppRequestBodyAutoBranchCreationConfig.prototype, "enablePullRequestPreview", void 0);
    __decorate([
        Metadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], CreateAppRequestBodyAutoBranchCreationConfig.prototype, "environmentVariables", void 0);
    __decorate([
        Metadata({ data: "json, name=framework" }),
        __metadata("design:type", String)
    ], CreateAppRequestBodyAutoBranchCreationConfig.prototype, "framework", void 0);
    __decorate([
        Metadata({ data: "json, name=pullRequestEnvironmentName" }),
        __metadata("design:type", String)
    ], CreateAppRequestBodyAutoBranchCreationConfig.prototype, "pullRequestEnvironmentName", void 0);
    __decorate([
        Metadata({ data: "json, name=stage" }),
        __metadata("design:type", String)
    ], CreateAppRequestBodyAutoBranchCreationConfig.prototype, "stage", void 0);
    return CreateAppRequestBodyAutoBranchCreationConfig;
}(SpeakeasyBase));
export { CreateAppRequestBodyAutoBranchCreationConfig };
export var CreateAppRequestBodyPlatformEnum;
(function (CreateAppRequestBodyPlatformEnum) {
    CreateAppRequestBodyPlatformEnum["Web"] = "WEB";
})(CreateAppRequestBodyPlatformEnum || (CreateAppRequestBodyPlatformEnum = {}));
var CreateAppRequestBody = /** @class */ (function (_super) {
    __extends(CreateAppRequestBody, _super);
    function CreateAppRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accessToken" }),
        __metadata("design:type", String)
    ], CreateAppRequestBody.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "json, name=autoBranchCreationConfig" }),
        __metadata("design:type", CreateAppRequestBodyAutoBranchCreationConfig)
    ], CreateAppRequestBody.prototype, "autoBranchCreationConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=autoBranchCreationPatterns" }),
        __metadata("design:type", Array)
    ], CreateAppRequestBody.prototype, "autoBranchCreationPatterns", void 0);
    __decorate([
        Metadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", String)
    ], CreateAppRequestBody.prototype, "basicAuthCredentials", void 0);
    __decorate([
        Metadata({ data: "json, name=buildSpec" }),
        __metadata("design:type", String)
    ], CreateAppRequestBody.prototype, "buildSpec", void 0);
    __decorate([
        Metadata({ data: "json, name=customHeaders" }),
        __metadata("design:type", String)
    ], CreateAppRequestBody.prototype, "customHeaders", void 0);
    __decorate([
        Metadata({ data: "json, name=customRules", elemType: shared.CustomRule }),
        __metadata("design:type", Array)
    ], CreateAppRequestBody.prototype, "customRules", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateAppRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=enableAutoBranchCreation" }),
        __metadata("design:type", Boolean)
    ], CreateAppRequestBody.prototype, "enableAutoBranchCreation", void 0);
    __decorate([
        Metadata({ data: "json, name=enableBasicAuth" }),
        __metadata("design:type", Boolean)
    ], CreateAppRequestBody.prototype, "enableBasicAuth", void 0);
    __decorate([
        Metadata({ data: "json, name=enableBranchAutoBuild" }),
        __metadata("design:type", Boolean)
    ], CreateAppRequestBody.prototype, "enableBranchAutoBuild", void 0);
    __decorate([
        Metadata({ data: "json, name=enableBranchAutoDeletion" }),
        __metadata("design:type", Boolean)
    ], CreateAppRequestBody.prototype, "enableBranchAutoDeletion", void 0);
    __decorate([
        Metadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], CreateAppRequestBody.prototype, "environmentVariables", void 0);
    __decorate([
        Metadata({ data: "json, name=iamServiceRoleArn" }),
        __metadata("design:type", String)
    ], CreateAppRequestBody.prototype, "iamServiceRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateAppRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=oauthToken" }),
        __metadata("design:type", String)
    ], CreateAppRequestBody.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], CreateAppRequestBody.prototype, "platform", void 0);
    __decorate([
        Metadata({ data: "json, name=repository" }),
        __metadata("design:type", String)
    ], CreateAppRequestBody.prototype, "repository", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateAppRequestBody.prototype, "tags", void 0);
    return CreateAppRequestBody;
}(SpeakeasyBase));
export { CreateAppRequestBody };
var CreateAppRequest = /** @class */ (function (_super) {
    __extends(CreateAppRequest, _super);
    function CreateAppRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateAppHeaders)
    ], CreateAppRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAppRequestBody)
    ], CreateAppRequest.prototype, "request", void 0);
    return CreateAppRequest;
}(SpeakeasyBase));
export { CreateAppRequest };
var CreateAppResponse = /** @class */ (function (_super) {
    __extends(CreateAppResponse, _super);
    function CreateAppResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAppResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateAppResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateAppResult)
    ], CreateAppResponse.prototype, "createAppResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAppResponse.prototype, "dependentServiceFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAppResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAppResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateAppResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAppResponse.prototype, "unauthorizedException", void 0);
    return CreateAppResponse;
}(SpeakeasyBase));
export { CreateAppResponse };
