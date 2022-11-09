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
var UpdateAppPathParams = /** @class */ (function (_super) {
    __extends(UpdateAppPathParams, _super);
    function UpdateAppPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], UpdateAppPathParams.prototype, "appId", void 0);
    return UpdateAppPathParams;
}(SpeakeasyBase));
export { UpdateAppPathParams };
var UpdateAppHeaders = /** @class */ (function (_super) {
    __extends(UpdateAppHeaders, _super);
    function UpdateAppHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAppHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAppHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAppHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAppHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAppHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAppHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAppHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAppHeaders;
}(SpeakeasyBase));
export { UpdateAppHeaders };
// UpdateAppRequestBodyAutoBranchCreationConfig
/**
 *  Describes the automated branch creation configuration.
**/
var UpdateAppRequestBodyAutoBranchCreationConfig = /** @class */ (function (_super) {
    __extends(UpdateAppRequestBodyAutoBranchCreationConfig, _super);
    function UpdateAppRequestBodyAutoBranchCreationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBodyAutoBranchCreationConfig.prototype, "basicAuthCredentials", void 0);
    __decorate([
        Metadata({ data: "json, name=buildSpec" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBodyAutoBranchCreationConfig.prototype, "buildSpec", void 0);
    __decorate([
        Metadata({ data: "json, name=enableAutoBuild" }),
        __metadata("design:type", Boolean)
    ], UpdateAppRequestBodyAutoBranchCreationConfig.prototype, "enableAutoBuild", void 0);
    __decorate([
        Metadata({ data: "json, name=enableBasicAuth" }),
        __metadata("design:type", Boolean)
    ], UpdateAppRequestBodyAutoBranchCreationConfig.prototype, "enableBasicAuth", void 0);
    __decorate([
        Metadata({ data: "json, name=enablePerformanceMode" }),
        __metadata("design:type", Boolean)
    ], UpdateAppRequestBodyAutoBranchCreationConfig.prototype, "enablePerformanceMode", void 0);
    __decorate([
        Metadata({ data: "json, name=enablePullRequestPreview" }),
        __metadata("design:type", Boolean)
    ], UpdateAppRequestBodyAutoBranchCreationConfig.prototype, "enablePullRequestPreview", void 0);
    __decorate([
        Metadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], UpdateAppRequestBodyAutoBranchCreationConfig.prototype, "environmentVariables", void 0);
    __decorate([
        Metadata({ data: "json, name=framework" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBodyAutoBranchCreationConfig.prototype, "framework", void 0);
    __decorate([
        Metadata({ data: "json, name=pullRequestEnvironmentName" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBodyAutoBranchCreationConfig.prototype, "pullRequestEnvironmentName", void 0);
    __decorate([
        Metadata({ data: "json, name=stage" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBodyAutoBranchCreationConfig.prototype, "stage", void 0);
    return UpdateAppRequestBodyAutoBranchCreationConfig;
}(SpeakeasyBase));
export { UpdateAppRequestBodyAutoBranchCreationConfig };
export var UpdateAppRequestBodyPlatformEnum;
(function (UpdateAppRequestBodyPlatformEnum) {
    UpdateAppRequestBodyPlatformEnum["Web"] = "WEB";
})(UpdateAppRequestBodyPlatformEnum || (UpdateAppRequestBodyPlatformEnum = {}));
var UpdateAppRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAppRequestBody, _super);
    function UpdateAppRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accessToken" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBody.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "json, name=autoBranchCreationConfig" }),
        __metadata("design:type", UpdateAppRequestBodyAutoBranchCreationConfig)
    ], UpdateAppRequestBody.prototype, "autoBranchCreationConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=autoBranchCreationPatterns" }),
        __metadata("design:type", Array)
    ], UpdateAppRequestBody.prototype, "autoBranchCreationPatterns", void 0);
    __decorate([
        Metadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBody.prototype, "basicAuthCredentials", void 0);
    __decorate([
        Metadata({ data: "json, name=buildSpec" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBody.prototype, "buildSpec", void 0);
    __decorate([
        Metadata({ data: "json, name=customHeaders" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBody.prototype, "customHeaders", void 0);
    __decorate([
        Metadata({ data: "json, name=customRules", elemType: shared.CustomRule }),
        __metadata("design:type", Array)
    ], UpdateAppRequestBody.prototype, "customRules", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=enableAutoBranchCreation" }),
        __metadata("design:type", Boolean)
    ], UpdateAppRequestBody.prototype, "enableAutoBranchCreation", void 0);
    __decorate([
        Metadata({ data: "json, name=enableBasicAuth" }),
        __metadata("design:type", Boolean)
    ], UpdateAppRequestBody.prototype, "enableBasicAuth", void 0);
    __decorate([
        Metadata({ data: "json, name=enableBranchAutoBuild" }),
        __metadata("design:type", Boolean)
    ], UpdateAppRequestBody.prototype, "enableBranchAutoBuild", void 0);
    __decorate([
        Metadata({ data: "json, name=enableBranchAutoDeletion" }),
        __metadata("design:type", Boolean)
    ], UpdateAppRequestBody.prototype, "enableBranchAutoDeletion", void 0);
    __decorate([
        Metadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], UpdateAppRequestBody.prototype, "environmentVariables", void 0);
    __decorate([
        Metadata({ data: "json, name=iamServiceRoleArn" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBody.prototype, "iamServiceRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=oauthToken" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBody.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBody.prototype, "platform", void 0);
    __decorate([
        Metadata({ data: "json, name=repository" }),
        __metadata("design:type", String)
    ], UpdateAppRequestBody.prototype, "repository", void 0);
    return UpdateAppRequestBody;
}(SpeakeasyBase));
export { UpdateAppRequestBody };
var UpdateAppRequest = /** @class */ (function (_super) {
    __extends(UpdateAppRequest, _super);
    function UpdateAppRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAppPathParams)
    ], UpdateAppRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateAppHeaders)
    ], UpdateAppRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAppRequestBody)
    ], UpdateAppRequest.prototype, "request", void 0);
    return UpdateAppRequest;
}(SpeakeasyBase));
export { UpdateAppRequest };
var UpdateAppResponse = /** @class */ (function (_super) {
    __extends(UpdateAppResponse, _super);
    function UpdateAppResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAppResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateAppResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAppResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAppResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateAppResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateAppResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateAppResult)
    ], UpdateAppResponse.prototype, "updateAppResult", void 0);
    return UpdateAppResponse;
}(SpeakeasyBase));
export { UpdateAppResponse };
