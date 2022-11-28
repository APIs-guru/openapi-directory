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
var UpdateBranchPathParams = /** @class */ (function (_super) {
    __extends(UpdateBranchPathParams, _super);
    function UpdateBranchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], UpdateBranchPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branchName" }),
        __metadata("design:type", String)
    ], UpdateBranchPathParams.prototype, "branchName", void 0);
    return UpdateBranchPathParams;
}(SpeakeasyBase));
export { UpdateBranchPathParams };
var UpdateBranchHeaders = /** @class */ (function (_super) {
    __extends(UpdateBranchHeaders, _super);
    function UpdateBranchHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateBranchHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateBranchHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateBranchHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateBranchHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateBranchHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateBranchHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateBranchHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateBranchHeaders;
}(SpeakeasyBase));
export { UpdateBranchHeaders };
export var UpdateBranchRequestBodyStageEnum;
(function (UpdateBranchRequestBodyStageEnum) {
    UpdateBranchRequestBodyStageEnum["Production"] = "PRODUCTION";
    UpdateBranchRequestBodyStageEnum["Beta"] = "BETA";
    UpdateBranchRequestBodyStageEnum["Development"] = "DEVELOPMENT";
    UpdateBranchRequestBodyStageEnum["Experimental"] = "EXPERIMENTAL";
    UpdateBranchRequestBodyStageEnum["PullRequest"] = "PULL_REQUEST";
})(UpdateBranchRequestBodyStageEnum || (UpdateBranchRequestBodyStageEnum = {}));
var UpdateBranchRequestBody = /** @class */ (function (_super) {
    __extends(UpdateBranchRequestBody, _super);
    function UpdateBranchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backendEnvironmentArn" }),
        __metadata("design:type", String)
    ], UpdateBranchRequestBody.prototype, "backendEnvironmentArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" }),
        __metadata("design:type", String)
    ], UpdateBranchRequestBody.prototype, "basicAuthCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildSpec" }),
        __metadata("design:type", String)
    ], UpdateBranchRequestBody.prototype, "buildSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateBranchRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], UpdateBranchRequestBody.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAutoBuild" }),
        __metadata("design:type", Boolean)
    ], UpdateBranchRequestBody.prototype, "enableAutoBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableBasicAuth" }),
        __metadata("design:type", Boolean)
    ], UpdateBranchRequestBody.prototype, "enableBasicAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableNotification" }),
        __metadata("design:type", Boolean)
    ], UpdateBranchRequestBody.prototype, "enableNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enablePerformanceMode" }),
        __metadata("design:type", Boolean)
    ], UpdateBranchRequestBody.prototype, "enablePerformanceMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enablePullRequestPreview" }),
        __metadata("design:type", Boolean)
    ], UpdateBranchRequestBody.prototype, "enablePullRequestPreview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], UpdateBranchRequestBody.prototype, "environmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=framework" }),
        __metadata("design:type", String)
    ], UpdateBranchRequestBody.prototype, "framework", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullRequestEnvironmentName" }),
        __metadata("design:type", String)
    ], UpdateBranchRequestBody.prototype, "pullRequestEnvironmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stage" }),
        __metadata("design:type", String)
    ], UpdateBranchRequestBody.prototype, "stage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], UpdateBranchRequestBody.prototype, "ttl", void 0);
    return UpdateBranchRequestBody;
}(SpeakeasyBase));
export { UpdateBranchRequestBody };
var UpdateBranchRequest = /** @class */ (function (_super) {
    __extends(UpdateBranchRequest, _super);
    function UpdateBranchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBranchPathParams)
    ], UpdateBranchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBranchHeaders)
    ], UpdateBranchRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateBranchRequestBody)
    ], UpdateBranchRequest.prototype, "request", void 0);
    return UpdateBranchRequest;
}(SpeakeasyBase));
export { UpdateBranchRequest };
var UpdateBranchResponse = /** @class */ (function (_super) {
    __extends(UpdateBranchResponse, _super);
    function UpdateBranchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBranchResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateBranchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBranchResponse.prototype, "dependentServiceFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBranchResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBranchResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateBranchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBranchResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateBranchResult)
    ], UpdateBranchResponse.prototype, "updateBranchResult", void 0);
    return UpdateBranchResponse;
}(SpeakeasyBase));
export { UpdateBranchResponse };
