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
var CreateGraphqlApiHeaders = /** @class */ (function (_super) {
    __extends(CreateGraphqlApiHeaders, _super);
    function CreateGraphqlApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateGraphqlApiHeaders;
}(SpeakeasyBase));
export { CreateGraphqlApiHeaders };
export var CreateGraphqlApiRequestBodyAuthenticationTypeEnum;
(function (CreateGraphqlApiRequestBodyAuthenticationTypeEnum) {
    CreateGraphqlApiRequestBodyAuthenticationTypeEnum["ApiKey"] = "API_KEY";
    CreateGraphqlApiRequestBodyAuthenticationTypeEnum["AwsIam"] = "AWS_IAM";
    CreateGraphqlApiRequestBodyAuthenticationTypeEnum["AmazonCognitoUserPools"] = "AMAZON_COGNITO_USER_POOLS";
    CreateGraphqlApiRequestBodyAuthenticationTypeEnum["OpenidConnect"] = "OPENID_CONNECT";
    CreateGraphqlApiRequestBodyAuthenticationTypeEnum["AwsLambda"] = "AWS_LAMBDA";
})(CreateGraphqlApiRequestBodyAuthenticationTypeEnum || (CreateGraphqlApiRequestBodyAuthenticationTypeEnum = {}));
// CreateGraphqlApiRequestBodyLambdaAuthorizerConfig
/**
 * A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
**/
var CreateGraphqlApiRequestBodyLambdaAuthorizerConfig = /** @class */ (function (_super) {
    __extends(CreateGraphqlApiRequestBodyLambdaAuthorizerConfig, _super);
    function CreateGraphqlApiRequestBodyLambdaAuthorizerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=authorizerResultTtlInSeconds" }),
        __metadata("design:type", Number)
    ], CreateGraphqlApiRequestBodyLambdaAuthorizerConfig.prototype, "authorizerResultTtlInSeconds", void 0);
    __decorate([
        Metadata({ data: "json, name=authorizerUri" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiRequestBodyLambdaAuthorizerConfig.prototype, "authorizerUri", void 0);
    __decorate([
        Metadata({ data: "json, name=identityValidationExpression" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiRequestBodyLambdaAuthorizerConfig.prototype, "identityValidationExpression", void 0);
    return CreateGraphqlApiRequestBodyLambdaAuthorizerConfig;
}(SpeakeasyBase));
export { CreateGraphqlApiRequestBodyLambdaAuthorizerConfig };
// CreateGraphqlApiRequestBodyLogConfig
/**
 * The CloudWatch Logs configuration.
**/
var CreateGraphqlApiRequestBodyLogConfig = /** @class */ (function (_super) {
    __extends(CreateGraphqlApiRequestBodyLogConfig, _super);
    function CreateGraphqlApiRequestBodyLogConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cloudWatchLogsRoleArn" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiRequestBodyLogConfig.prototype, "cloudWatchLogsRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=excludeVerboseContent" }),
        __metadata("design:type", Boolean)
    ], CreateGraphqlApiRequestBodyLogConfig.prototype, "excludeVerboseContent", void 0);
    __decorate([
        Metadata({ data: "json, name=fieldLogLevel" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiRequestBodyLogConfig.prototype, "fieldLogLevel", void 0);
    return CreateGraphqlApiRequestBodyLogConfig;
}(SpeakeasyBase));
export { CreateGraphqlApiRequestBodyLogConfig };
// CreateGraphqlApiRequestBodyOpenIdConnectConfig
/**
 * Describes an OpenID Connect configuration.
**/
var CreateGraphqlApiRequestBodyOpenIdConnectConfig = /** @class */ (function (_super) {
    __extends(CreateGraphqlApiRequestBodyOpenIdConnectConfig, _super);
    function CreateGraphqlApiRequestBodyOpenIdConnectConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=authTTL" }),
        __metadata("design:type", Number)
    ], CreateGraphqlApiRequestBodyOpenIdConnectConfig.prototype, "authTtl", void 0);
    __decorate([
        Metadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiRequestBodyOpenIdConnectConfig.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "json, name=iatTTL" }),
        __metadata("design:type", Number)
    ], CreateGraphqlApiRequestBodyOpenIdConnectConfig.prototype, "iatTtl", void 0);
    __decorate([
        Metadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiRequestBodyOpenIdConnectConfig.prototype, "issuer", void 0);
    return CreateGraphqlApiRequestBodyOpenIdConnectConfig;
}(SpeakeasyBase));
export { CreateGraphqlApiRequestBodyOpenIdConnectConfig };
// CreateGraphqlApiRequestBodyUserPoolConfig
/**
 * Describes an Amazon Cognito user pool configuration.
**/
var CreateGraphqlApiRequestBodyUserPoolConfig = /** @class */ (function (_super) {
    __extends(CreateGraphqlApiRequestBodyUserPoolConfig, _super);
    function CreateGraphqlApiRequestBodyUserPoolConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=appIdClientRegex" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiRequestBodyUserPoolConfig.prototype, "appIdClientRegex", void 0);
    __decorate([
        Metadata({ data: "json, name=awsRegion" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiRequestBodyUserPoolConfig.prototype, "awsRegion", void 0);
    __decorate([
        Metadata({ data: "json, name=defaultAction" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiRequestBodyUserPoolConfig.prototype, "defaultAction", void 0);
    __decorate([
        Metadata({ data: "json, name=userPoolId" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiRequestBodyUserPoolConfig.prototype, "userPoolId", void 0);
    return CreateGraphqlApiRequestBodyUserPoolConfig;
}(SpeakeasyBase));
export { CreateGraphqlApiRequestBodyUserPoolConfig };
var CreateGraphqlApiRequestBody = /** @class */ (function (_super) {
    __extends(CreateGraphqlApiRequestBody, _super);
    function CreateGraphqlApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=additionalAuthenticationProviders", elemType: shared.AdditionalAuthenticationProvider }),
        __metadata("design:type", Array)
    ], CreateGraphqlApiRequestBody.prototype, "additionalAuthenticationProviders", void 0);
    __decorate([
        Metadata({ data: "json, name=authenticationType" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiRequestBody.prototype, "authenticationType", void 0);
    __decorate([
        Metadata({ data: "json, name=lambdaAuthorizerConfig" }),
        __metadata("design:type", CreateGraphqlApiRequestBodyLambdaAuthorizerConfig)
    ], CreateGraphqlApiRequestBody.prototype, "lambdaAuthorizerConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=logConfig" }),
        __metadata("design:type", CreateGraphqlApiRequestBodyLogConfig)
    ], CreateGraphqlApiRequestBody.prototype, "logConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateGraphqlApiRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=openIDConnectConfig" }),
        __metadata("design:type", CreateGraphqlApiRequestBodyOpenIdConnectConfig)
    ], CreateGraphqlApiRequestBody.prototype, "openIdConnectConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateGraphqlApiRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=userPoolConfig" }),
        __metadata("design:type", CreateGraphqlApiRequestBodyUserPoolConfig)
    ], CreateGraphqlApiRequestBody.prototype, "userPoolConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=xrayEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateGraphqlApiRequestBody.prototype, "xrayEnabled", void 0);
    return CreateGraphqlApiRequestBody;
}(SpeakeasyBase));
export { CreateGraphqlApiRequestBody };
var CreateGraphqlApiRequest = /** @class */ (function (_super) {
    __extends(CreateGraphqlApiRequest, _super);
    function CreateGraphqlApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateGraphqlApiHeaders)
    ], CreateGraphqlApiRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateGraphqlApiRequestBody)
    ], CreateGraphqlApiRequest.prototype, "request", void 0);
    return CreateGraphqlApiRequest;
}(SpeakeasyBase));
export { CreateGraphqlApiRequest };
var CreateGraphqlApiResponse = /** @class */ (function (_super) {
    __extends(CreateGraphqlApiResponse, _super);
    function CreateGraphqlApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateGraphqlApiResponse.prototype, "apiLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateGraphqlApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateGraphqlApiResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateGraphqlApiResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateGraphqlApiResponse)
    ], CreateGraphqlApiResponse.prototype, "createGraphqlApiResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateGraphqlApiResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateGraphqlApiResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateGraphqlApiResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateGraphqlApiResponse.prototype, "unauthorizedException", void 0);
    return CreateGraphqlApiResponse;
}(SpeakeasyBase));
export { CreateGraphqlApiResponse };
