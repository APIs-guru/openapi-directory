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
import * as shared from "../shared";
var CreateBranchPathParams = /** @class */ (function (_super) {
    __extends(CreateBranchPathParams, _super);
    function CreateBranchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], CreateBranchPathParams.prototype, "appId", void 0);
    return CreateBranchPathParams;
}(SpeakeasyBase));
export { CreateBranchPathParams };
var CreateBranchHeaders = /** @class */ (function (_super) {
    __extends(CreateBranchHeaders, _super);
    function CreateBranchHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateBranchHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateBranchHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateBranchHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateBranchHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateBranchHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateBranchHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateBranchHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateBranchHeaders;
}(SpeakeasyBase));
export { CreateBranchHeaders };
export var CreateBranchRequestBodyStageEnum;
(function (CreateBranchRequestBodyStageEnum) {
    CreateBranchRequestBodyStageEnum["Production"] = "PRODUCTION";
    CreateBranchRequestBodyStageEnum["Beta"] = "BETA";
    CreateBranchRequestBodyStageEnum["Development"] = "DEVELOPMENT";
    CreateBranchRequestBodyStageEnum["Experimental"] = "EXPERIMENTAL";
    CreateBranchRequestBodyStageEnum["PullRequest"] = "PULL_REQUEST";
})(CreateBranchRequestBodyStageEnum || (CreateBranchRequestBodyStageEnum = {}));
var CreateBranchRequestBody = /** @class */ (function (_super) {
    __extends(CreateBranchRequestBody, _super);
    function CreateBranchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backendEnvironmentArn" }),
        __metadata("design:type", String)
    ], CreateBranchRequestBody.prototype, "backendEnvironmentArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", String)
    ], CreateBranchRequestBody.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branchName" }),
        __metadata("design:type", String)
    ], CreateBranchRequestBody.prototype, "branchName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildSpec" }),
        __metadata("design:type", String)
    ], CreateBranchRequestBody.prototype, "buildSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateBranchRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], CreateBranchRequestBody.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAutoBuild" }),
        __metadata("design:type", Boolean)
    ], CreateBranchRequestBody.prototype, "enableAutoBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableBasicAuth" }),
        __metadata("design:type", Boolean)
    ], CreateBranchRequestBody.prototype, "enableBasicAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableNotification" }),
        __metadata("design:type", Boolean)
    ], CreateBranchRequestBody.prototype, "enableNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enablePerformanceMode" }),
        __metadata("design:type", Boolean)
    ], CreateBranchRequestBody.prototype, "enablePerformanceMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enablePullRequestPreview" }),
        __metadata("design:type", Boolean)
    ], CreateBranchRequestBody.prototype, "enablePullRequestPreview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], CreateBranchRequestBody.prototype, "environmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=framework" }),
        __metadata("design:type", String)
    ], CreateBranchRequestBody.prototype, "framework", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequestEnvironmentName" }),
        __metadata("design:type", String)
    ], CreateBranchRequestBody.prototype, "pullRequestEnvironmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stage" }),
        __metadata("design:type", String)
    ], CreateBranchRequestBody.prototype, "stage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateBranchRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], CreateBranchRequestBody.prototype, "ttl", void 0);
    return CreateBranchRequestBody;
}(SpeakeasyBase));
export { CreateBranchRequestBody };
var CreateBranchRequest = /** @class */ (function (_super) {
    __extends(CreateBranchRequest, _super);
    function CreateBranchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBranchPathParams)
    ], CreateBranchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBranchHeaders)
    ], CreateBranchRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBranchRequestBody)
    ], CreateBranchRequest.prototype, "request", void 0);
    return CreateBranchRequest;
}(SpeakeasyBase));
export { CreateBranchRequest };
var CreateBranchResponse = /** @class */ (function (_super) {
    __extends(CreateBranchResponse, _super);
    function CreateBranchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBranchResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateBranchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateBranchResult)
    ], CreateBranchResponse.prototype, "createBranchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBranchResponse.prototype, "dependentServiceFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBranchResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBranchResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBranchResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateBranchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBranchResponse.prototype, "unauthorizedException", void 0);
    return CreateBranchResponse;
}(SpeakeasyBase));
export { CreateBranchResponse };
