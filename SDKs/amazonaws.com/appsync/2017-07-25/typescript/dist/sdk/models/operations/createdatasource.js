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
var CreateDataSourcePathParams = /** @class */ (function (_super) {
    __extends(CreateDataSourcePathParams, _super);
    function CreateDataSourcePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], CreateDataSourcePathParams.prototype, "apiId", void 0);
    return CreateDataSourcePathParams;
}(SpeakeasyBase));
export { CreateDataSourcePathParams };
var CreateDataSourceHeaders = /** @class */ (function (_super) {
    __extends(CreateDataSourceHeaders, _super);
    function CreateDataSourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDataSourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDataSourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDataSourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDataSourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDataSourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDataSourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDataSourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDataSourceHeaders;
}(SpeakeasyBase));
export { CreateDataSourceHeaders };
// CreateDataSourceRequestBodyDynamodbConfig
/**
 * Describes an Amazon DynamoDB data source configuration.
**/
var CreateDataSourceRequestBodyDynamodbConfig = /** @class */ (function (_super) {
    __extends(CreateDataSourceRequestBodyDynamodbConfig, _super);
    function CreateDataSourceRequestBodyDynamodbConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=awsRegion" }),
        __metadata("design:type", String)
    ], CreateDataSourceRequestBodyDynamodbConfig.prototype, "awsRegion", void 0);
    __decorate([
        Metadata({ data: "json, name=deltaSyncConfig" }),
        __metadata("design:type", shared.DeltaSyncConfig)
    ], CreateDataSourceRequestBodyDynamodbConfig.prototype, "deltaSyncConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=tableName" }),
        __metadata("design:type", String)
    ], CreateDataSourceRequestBodyDynamodbConfig.prototype, "tableName", void 0);
    __decorate([
        Metadata({ data: "json, name=useCallerCredentials" }),
        __metadata("design:type", Boolean)
    ], CreateDataSourceRequestBodyDynamodbConfig.prototype, "useCallerCredentials", void 0);
    __decorate([
        Metadata({ data: "json, name=versioned" }),
        __metadata("design:type", Boolean)
    ], CreateDataSourceRequestBodyDynamodbConfig.prototype, "versioned", void 0);
    return CreateDataSourceRequestBodyDynamodbConfig;
}(SpeakeasyBase));
export { CreateDataSourceRequestBodyDynamodbConfig };
// CreateDataSourceRequestBodyElasticsearchConfig
/**
 * Describes an Elasticsearch data source configuration.
**/
var CreateDataSourceRequestBodyElasticsearchConfig = /** @class */ (function (_super) {
    __extends(CreateDataSourceRequestBodyElasticsearchConfig, _super);
    function CreateDataSourceRequestBodyElasticsearchConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=awsRegion" }),
        __metadata("design:type", String)
    ], CreateDataSourceRequestBodyElasticsearchConfig.prototype, "awsRegion", void 0);
    __decorate([
        Metadata({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], CreateDataSourceRequestBodyElasticsearchConfig.prototype, "endpoint", void 0);
    return CreateDataSourceRequestBodyElasticsearchConfig;
}(SpeakeasyBase));
export { CreateDataSourceRequestBodyElasticsearchConfig };
// CreateDataSourceRequestBodyHttpConfig
/**
 * Describes an HTTP data source configuration.
**/
var CreateDataSourceRequestBodyHttpConfig = /** @class */ (function (_super) {
    __extends(CreateDataSourceRequestBodyHttpConfig, _super);
    function CreateDataSourceRequestBodyHttpConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=authorizationConfig" }),
        __metadata("design:type", shared.AuthorizationConfig)
    ], CreateDataSourceRequestBodyHttpConfig.prototype, "authorizationConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], CreateDataSourceRequestBodyHttpConfig.prototype, "endpoint", void 0);
    return CreateDataSourceRequestBodyHttpConfig;
}(SpeakeasyBase));
export { CreateDataSourceRequestBodyHttpConfig };
// CreateDataSourceRequestBodyLambdaConfig
/**
 * Describes an Amazon Web Services Lambda data source configuration.
**/
var CreateDataSourceRequestBodyLambdaConfig = /** @class */ (function (_super) {
    __extends(CreateDataSourceRequestBodyLambdaConfig, _super);
    function CreateDataSourceRequestBodyLambdaConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=lambdaFunctionArn" }),
        __metadata("design:type", String)
    ], CreateDataSourceRequestBodyLambdaConfig.prototype, "lambdaFunctionArn", void 0);
    return CreateDataSourceRequestBodyLambdaConfig;
}(SpeakeasyBase));
export { CreateDataSourceRequestBodyLambdaConfig };
// CreateDataSourceRequestBodyRelationalDatabaseConfig
/**
 * Describes a relational database data source configuration.
**/
var CreateDataSourceRequestBodyRelationalDatabaseConfig = /** @class */ (function (_super) {
    __extends(CreateDataSourceRequestBodyRelationalDatabaseConfig, _super);
    function CreateDataSourceRequestBodyRelationalDatabaseConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=rdsHttpEndpointConfig" }),
        __metadata("design:type", shared.RdsHttpEndpointConfig)
    ], CreateDataSourceRequestBodyRelationalDatabaseConfig.prototype, "rdsHttpEndpointConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=relationalDatabaseSourceType" }),
        __metadata("design:type", String)
    ], CreateDataSourceRequestBodyRelationalDatabaseConfig.prototype, "relationalDatabaseSourceType", void 0);
    return CreateDataSourceRequestBodyRelationalDatabaseConfig;
}(SpeakeasyBase));
export { CreateDataSourceRequestBodyRelationalDatabaseConfig };
export var CreateDataSourceRequestBodyTypeEnum;
(function (CreateDataSourceRequestBodyTypeEnum) {
    CreateDataSourceRequestBodyTypeEnum["AwsLambda"] = "AWS_LAMBDA";
    CreateDataSourceRequestBodyTypeEnum["AmazonDynamodb"] = "AMAZON_DYNAMODB";
    CreateDataSourceRequestBodyTypeEnum["AmazonElasticsearch"] = "AMAZON_ELASTICSEARCH";
    CreateDataSourceRequestBodyTypeEnum["None"] = "NONE";
    CreateDataSourceRequestBodyTypeEnum["Http"] = "HTTP";
    CreateDataSourceRequestBodyTypeEnum["RelationalDatabase"] = "RELATIONAL_DATABASE";
})(CreateDataSourceRequestBodyTypeEnum || (CreateDataSourceRequestBodyTypeEnum = {}));
var CreateDataSourceRequestBody = /** @class */ (function (_super) {
    __extends(CreateDataSourceRequestBody, _super);
    function CreateDataSourceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateDataSourceRequestBody.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=dynamodbConfig" }),
        __metadata("design:type", CreateDataSourceRequestBodyDynamodbConfig)
    ], CreateDataSourceRequestBody.prototype, "dynamodbConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=elasticsearchConfig" }),
        __metadata("design:type", CreateDataSourceRequestBodyElasticsearchConfig)
    ], CreateDataSourceRequestBody.prototype, "elasticsearchConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=httpConfig" }),
        __metadata("design:type", CreateDataSourceRequestBodyHttpConfig)
    ], CreateDataSourceRequestBody.prototype, "httpConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=lambdaConfig" }),
        __metadata("design:type", CreateDataSourceRequestBodyLambdaConfig)
    ], CreateDataSourceRequestBody.prototype, "lambdaConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDataSourceRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=relationalDatabaseConfig" }),
        __metadata("design:type", CreateDataSourceRequestBodyRelationalDatabaseConfig)
    ], CreateDataSourceRequestBody.prototype, "relationalDatabaseConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceRoleArn" }),
        __metadata("design:type", String)
    ], CreateDataSourceRequestBody.prototype, "serviceRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateDataSourceRequestBody.prototype, "type", void 0);
    return CreateDataSourceRequestBody;
}(SpeakeasyBase));
export { CreateDataSourceRequestBody };
var CreateDataSourceRequest = /** @class */ (function (_super) {
    __extends(CreateDataSourceRequest, _super);
    function CreateDataSourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDataSourcePathParams)
    ], CreateDataSourceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDataSourceHeaders)
    ], CreateDataSourceRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDataSourceRequestBody)
    ], CreateDataSourceRequest.prototype, "request", void 0);
    return CreateDataSourceRequest;
}(SpeakeasyBase));
export { CreateDataSourceRequest };
var CreateDataSourceResponse = /** @class */ (function (_super) {
    __extends(CreateDataSourceResponse, _super);
    function CreateDataSourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDataSourceResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDataSourceResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDataSourceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateDataSourceResponse)
    ], CreateDataSourceResponse.prototype, "createDataSourceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDataSourceResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDataSourceResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateDataSourceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDataSourceResponse.prototype, "unauthorizedException", void 0);
    return CreateDataSourceResponse;
}(SpeakeasyBase));
export { CreateDataSourceResponse };
