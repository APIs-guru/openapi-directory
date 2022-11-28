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
var CreateAuthorizerPathParams = /** @class */ (function (_super) {
    __extends(CreateAuthorizerPathParams, _super);
    function CreateAuthorizerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], CreateAuthorizerPathParams.prototype, "restapiId", void 0);
    return CreateAuthorizerPathParams;
}(SpeakeasyBase));
export { CreateAuthorizerPathParams };
var CreateAuthorizerHeaders = /** @class */ (function (_super) {
    __extends(CreateAuthorizerHeaders, _super);
    function CreateAuthorizerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateAuthorizerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateAuthorizerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateAuthorizerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateAuthorizerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateAuthorizerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateAuthorizerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateAuthorizerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateAuthorizerHeaders;
}(SpeakeasyBase));
export { CreateAuthorizerHeaders };
export var CreateAuthorizerRequestBodyTypeEnum;
(function (CreateAuthorizerRequestBodyTypeEnum) {
    CreateAuthorizerRequestBodyTypeEnum["Token"] = "TOKEN";
    CreateAuthorizerRequestBodyTypeEnum["Request"] = "REQUEST";
    CreateAuthorizerRequestBodyTypeEnum["CognitoUserPools"] = "COGNITO_USER_POOLS";
})(CreateAuthorizerRequestBodyTypeEnum || (CreateAuthorizerRequestBodyTypeEnum = {}));
var CreateAuthorizerRequestBody = /** @class */ (function (_super) {
    __extends(CreateAuthorizerRequestBody, _super);
    function CreateAuthorizerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authType" }),
        __metadata("design:type", String)
    ], CreateAuthorizerRequestBody.prototype, "authType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizerCredentials" }),
        __metadata("design:type", String)
    ], CreateAuthorizerRequestBody.prototype, "authorizerCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizerResultTtlInSeconds" }),
        __metadata("design:type", Number)
    ], CreateAuthorizerRequestBody.prototype, "authorizerResultTtlInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizerUri" }),
        __metadata("design:type", String)
    ], CreateAuthorizerRequestBody.prototype, "authorizerUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identitySource" }),
        __metadata("design:type", String)
    ], CreateAuthorizerRequestBody.prototype, "identitySource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityValidationExpression" }),
        __metadata("design:type", String)
    ], CreateAuthorizerRequestBody.prototype, "identityValidationExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateAuthorizerRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerARNs" }),
        __metadata("design:type", Array)
    ], CreateAuthorizerRequestBody.prototype, "providerArNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateAuthorizerRequestBody.prototype, "type", void 0);
    return CreateAuthorizerRequestBody;
}(SpeakeasyBase));
export { CreateAuthorizerRequestBody };
var CreateAuthorizerRequest = /** @class */ (function (_super) {
    __extends(CreateAuthorizerRequest, _super);
    function CreateAuthorizerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorizerPathParams)
    ], CreateAuthorizerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAuthorizerHeaders)
    ], CreateAuthorizerRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAuthorizerRequestBody)
    ], CreateAuthorizerRequest.prototype, "request", void 0);
    return CreateAuthorizerRequest;
}(SpeakeasyBase));
export { CreateAuthorizerRequest };
var CreateAuthorizerResponse = /** @class */ (function (_super) {
    __extends(CreateAuthorizerResponse, _super);
    function CreateAuthorizerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Authorizer)
    ], CreateAuthorizerResponse.prototype, "authorizer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAuthorizerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAuthorizerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAuthorizerResponse.prototype, "unauthorizedException", void 0);
    return CreateAuthorizerResponse;
}(SpeakeasyBase));
export { CreateAuthorizerResponse };
