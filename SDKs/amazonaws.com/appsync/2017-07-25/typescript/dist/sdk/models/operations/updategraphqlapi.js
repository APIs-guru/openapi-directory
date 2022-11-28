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
var UpdateGraphqlApiPathParams = /** @class */ (function (_super) {
    __extends(UpdateGraphqlApiPathParams, _super);
    function UpdateGraphqlApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiPathParams.prototype, "apiId", void 0);
    return UpdateGraphqlApiPathParams;
}(SpeakeasyBase));
export { UpdateGraphqlApiPathParams };
var UpdateGraphqlApiHeaders = /** @class */ (function (_super) {
    __extends(UpdateGraphqlApiHeaders, _super);
    function UpdateGraphqlApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateGraphqlApiHeaders;
}(SpeakeasyBase));
export { UpdateGraphqlApiHeaders };
export var UpdateGraphqlApiRequestBodyAuthenticationTypeEnum;
(function (UpdateGraphqlApiRequestBodyAuthenticationTypeEnum) {
    UpdateGraphqlApiRequestBodyAuthenticationTypeEnum["ApiKey"] = "API_KEY";
    UpdateGraphqlApiRequestBodyAuthenticationTypeEnum["AwsIam"] = "AWS_IAM";
    UpdateGraphqlApiRequestBodyAuthenticationTypeEnum["AmazonCognitoUserPools"] = "AMAZON_COGNITO_USER_POOLS";
    UpdateGraphqlApiRequestBodyAuthenticationTypeEnum["OpenidConnect"] = "OPENID_CONNECT";
    UpdateGraphqlApiRequestBodyAuthenticationTypeEnum["AwsLambda"] = "AWS_LAMBDA";
})(UpdateGraphqlApiRequestBodyAuthenticationTypeEnum || (UpdateGraphqlApiRequestBodyAuthenticationTypeEnum = {}));
// UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig
/**
 * A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
**/
var UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig = /** @class */ (function (_super) {
    __extends(UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig, _super);
    function UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizerResultTtlInSeconds" }),
        __metadata("design:type", Number)
    ], UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig.prototype, "authorizerResultTtlInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizerUri" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig.prototype, "authorizerUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityValidationExpression" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig.prototype, "identityValidationExpression", void 0);
    return UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig;
}(SpeakeasyBase));
export { UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig };
// UpdateGraphqlApiRequestBodyLogConfig
/**
 * The CloudWatch Logs configuration.
**/
var UpdateGraphqlApiRequestBodyLogConfig = /** @class */ (function (_super) {
    __extends(UpdateGraphqlApiRequestBodyLogConfig, _super);
    function UpdateGraphqlApiRequestBodyLogConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudWatchLogsRoleArn" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiRequestBodyLogConfig.prototype, "cloudWatchLogsRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeVerboseContent" }),
        __metadata("design:type", Boolean)
    ], UpdateGraphqlApiRequestBodyLogConfig.prototype, "excludeVerboseContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldLogLevel" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiRequestBodyLogConfig.prototype, "fieldLogLevel", void 0);
    return UpdateGraphqlApiRequestBodyLogConfig;
}(SpeakeasyBase));
export { UpdateGraphqlApiRequestBodyLogConfig };
// UpdateGraphqlApiRequestBodyOpenIdConnectConfig
/**
 * Describes an OpenID Connect configuration.
**/
var UpdateGraphqlApiRequestBodyOpenIdConnectConfig = /** @class */ (function (_super) {
    __extends(UpdateGraphqlApiRequestBodyOpenIdConnectConfig, _super);
    function UpdateGraphqlApiRequestBodyOpenIdConnectConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authTTL" }),
        __metadata("design:type", Number)
    ], UpdateGraphqlApiRequestBodyOpenIdConnectConfig.prototype, "authTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiRequestBodyOpenIdConnectConfig.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iatTTL" }),
        __metadata("design:type", Number)
    ], UpdateGraphqlApiRequestBodyOpenIdConnectConfig.prototype, "iatTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiRequestBodyOpenIdConnectConfig.prototype, "issuer", void 0);
    return UpdateGraphqlApiRequestBodyOpenIdConnectConfig;
}(SpeakeasyBase));
export { UpdateGraphqlApiRequestBodyOpenIdConnectConfig };
// UpdateGraphqlApiRequestBodyUserPoolConfig
/**
 * Describes an Amazon Cognito user pool configuration.
**/
var UpdateGraphqlApiRequestBodyUserPoolConfig = /** @class */ (function (_super) {
    __extends(UpdateGraphqlApiRequestBodyUserPoolConfig, _super);
    function UpdateGraphqlApiRequestBodyUserPoolConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appIdClientRegex" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiRequestBodyUserPoolConfig.prototype, "appIdClientRegex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsRegion" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiRequestBodyUserPoolConfig.prototype, "awsRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultAction" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiRequestBodyUserPoolConfig.prototype, "defaultAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userPoolId" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiRequestBodyUserPoolConfig.prototype, "userPoolId", void 0);
    return UpdateGraphqlApiRequestBodyUserPoolConfig;
}(SpeakeasyBase));
export { UpdateGraphqlApiRequestBodyUserPoolConfig };
var UpdateGraphqlApiRequestBody = /** @class */ (function (_super) {
    __extends(UpdateGraphqlApiRequestBody, _super);
    function UpdateGraphqlApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalAuthenticationProviders", elemType: shared.AdditionalAuthenticationProvider }),
        __metadata("design:type", Array)
    ], UpdateGraphqlApiRequestBody.prototype, "additionalAuthenticationProviders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authenticationType" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiRequestBody.prototype, "authenticationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaAuthorizerConfig" }),
        __metadata("design:type", UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig)
    ], UpdateGraphqlApiRequestBody.prototype, "lambdaAuthorizerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logConfig" }),
        __metadata("design:type", UpdateGraphqlApiRequestBodyLogConfig)
    ], UpdateGraphqlApiRequestBody.prototype, "logConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateGraphqlApiRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openIDConnectConfig" }),
        __metadata("design:type", UpdateGraphqlApiRequestBodyOpenIdConnectConfig)
    ], UpdateGraphqlApiRequestBody.prototype, "openIdConnectConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userPoolConfig" }),
        __metadata("design:type", UpdateGraphqlApiRequestBodyUserPoolConfig)
    ], UpdateGraphqlApiRequestBody.prototype, "userPoolConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xrayEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateGraphqlApiRequestBody.prototype, "xrayEnabled", void 0);
    return UpdateGraphqlApiRequestBody;
}(SpeakeasyBase));
export { UpdateGraphqlApiRequestBody };
var UpdateGraphqlApiRequest = /** @class */ (function (_super) {
    __extends(UpdateGraphqlApiRequest, _super);
    function UpdateGraphqlApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGraphqlApiPathParams)
    ], UpdateGraphqlApiRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGraphqlApiHeaders)
    ], UpdateGraphqlApiRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateGraphqlApiRequestBody)
    ], UpdateGraphqlApiRequest.prototype, "request", void 0);
    return UpdateGraphqlApiRequest;
}(SpeakeasyBase));
export { UpdateGraphqlApiRequest };
var UpdateGraphqlApiResponse = /** @class */ (function (_super) {
    __extends(UpdateGraphqlApiResponse, _super);
    function UpdateGraphqlApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGraphqlApiResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGraphqlApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGraphqlApiResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGraphqlApiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGraphqlApiResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGraphqlApiResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGraphqlApiResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateGraphqlApiResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateGraphqlApiResponse)
    ], UpdateGraphqlApiResponse.prototype, "updateGraphqlApiResponse", void 0);
    return UpdateGraphqlApiResponse;
}(SpeakeasyBase));
export { UpdateGraphqlApiResponse };
