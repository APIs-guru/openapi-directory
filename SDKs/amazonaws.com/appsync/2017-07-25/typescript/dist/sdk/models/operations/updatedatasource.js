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
var UpdateDataSourcePathParams = /** @class */ (function (_super) {
    __extends(UpdateDataSourcePathParams, _super);
    function UpdateDataSourcePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateDataSourcePathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], UpdateDataSourcePathParams.prototype, "name", void 0);
    return UpdateDataSourcePathParams;
}(SpeakeasyBase));
export { UpdateDataSourcePathParams };
var UpdateDataSourceHeaders = /** @class */ (function (_super) {
    __extends(UpdateDataSourceHeaders, _super);
    function UpdateDataSourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDataSourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDataSourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDataSourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDataSourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDataSourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDataSourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDataSourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDataSourceHeaders;
}(SpeakeasyBase));
export { UpdateDataSourceHeaders };
// UpdateDataSourceRequestBodyDynamodbConfig
/**
 * Describes an Amazon DynamoDB data source configuration.
**/
var UpdateDataSourceRequestBodyDynamodbConfig = /** @class */ (function (_super) {
    __extends(UpdateDataSourceRequestBodyDynamodbConfig, _super);
    function UpdateDataSourceRequestBodyDynamodbConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsRegion" }),
        __metadata("design:type", String)
    ], UpdateDataSourceRequestBodyDynamodbConfig.prototype, "awsRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deltaSyncConfig" }),
        __metadata("design:type", shared.DeltaSyncConfig)
    ], UpdateDataSourceRequestBodyDynamodbConfig.prototype, "deltaSyncConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableName" }),
        __metadata("design:type", String)
    ], UpdateDataSourceRequestBodyDynamodbConfig.prototype, "tableName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useCallerCredentials" }),
        __metadata("design:type", Boolean)
    ], UpdateDataSourceRequestBodyDynamodbConfig.prototype, "useCallerCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versioned" }),
        __metadata("design:type", Boolean)
    ], UpdateDataSourceRequestBodyDynamodbConfig.prototype, "versioned", void 0);
    return UpdateDataSourceRequestBodyDynamodbConfig;
}(SpeakeasyBase));
export { UpdateDataSourceRequestBodyDynamodbConfig };
// UpdateDataSourceRequestBodyElasticsearchConfig
/**
 * Describes an Elasticsearch data source configuration.
**/
var UpdateDataSourceRequestBodyElasticsearchConfig = /** @class */ (function (_super) {
    __extends(UpdateDataSourceRequestBodyElasticsearchConfig, _super);
    function UpdateDataSourceRequestBodyElasticsearchConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsRegion" }),
        __metadata("design:type", String)
    ], UpdateDataSourceRequestBodyElasticsearchConfig.prototype, "awsRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], UpdateDataSourceRequestBodyElasticsearchConfig.prototype, "endpoint", void 0);
    return UpdateDataSourceRequestBodyElasticsearchConfig;
}(SpeakeasyBase));
export { UpdateDataSourceRequestBodyElasticsearchConfig };
// UpdateDataSourceRequestBodyHttpConfig
/**
 * Describes an HTTP data source configuration.
**/
var UpdateDataSourceRequestBodyHttpConfig = /** @class */ (function (_super) {
    __extends(UpdateDataSourceRequestBodyHttpConfig, _super);
    function UpdateDataSourceRequestBodyHttpConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationConfig" }),
        __metadata("design:type", shared.AuthorizationConfig)
    ], UpdateDataSourceRequestBodyHttpConfig.prototype, "authorizationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], UpdateDataSourceRequestBodyHttpConfig.prototype, "endpoint", void 0);
    return UpdateDataSourceRequestBodyHttpConfig;
}(SpeakeasyBase));
export { UpdateDataSourceRequestBodyHttpConfig };
// UpdateDataSourceRequestBodyLambdaConfig
/**
 * Describes an Amazon Web Services Lambda data source configuration.
**/
var UpdateDataSourceRequestBodyLambdaConfig = /** @class */ (function (_super) {
    __extends(UpdateDataSourceRequestBodyLambdaConfig, _super);
    function UpdateDataSourceRequestBodyLambdaConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaFunctionArn" }),
        __metadata("design:type", String)
    ], UpdateDataSourceRequestBodyLambdaConfig.prototype, "lambdaFunctionArn", void 0);
    return UpdateDataSourceRequestBodyLambdaConfig;
}(SpeakeasyBase));
export { UpdateDataSourceRequestBodyLambdaConfig };
// UpdateDataSourceRequestBodyRelationalDatabaseConfig
/**
 * Describes a relational database data source configuration.
**/
var UpdateDataSourceRequestBodyRelationalDatabaseConfig = /** @class */ (function (_super) {
    __extends(UpdateDataSourceRequestBodyRelationalDatabaseConfig, _super);
    function UpdateDataSourceRequestBodyRelationalDatabaseConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rdsHttpEndpointConfig" }),
        __metadata("design:type", shared.RdsHttpEndpointConfig)
    ], UpdateDataSourceRequestBodyRelationalDatabaseConfig.prototype, "rdsHttpEndpointConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationalDatabaseSourceType" }),
        __metadata("design:type", String)
    ], UpdateDataSourceRequestBodyRelationalDatabaseConfig.prototype, "relationalDatabaseSourceType", void 0);
    return UpdateDataSourceRequestBodyRelationalDatabaseConfig;
}(SpeakeasyBase));
export { UpdateDataSourceRequestBodyRelationalDatabaseConfig };
export var UpdateDataSourceRequestBodyTypeEnum;
(function (UpdateDataSourceRequestBodyTypeEnum) {
    UpdateDataSourceRequestBodyTypeEnum["AwsLambda"] = "AWS_LAMBDA";
    UpdateDataSourceRequestBodyTypeEnum["AmazonDynamodb"] = "AMAZON_DYNAMODB";
    UpdateDataSourceRequestBodyTypeEnum["AmazonElasticsearch"] = "AMAZON_ELASTICSEARCH";
    UpdateDataSourceRequestBodyTypeEnum["None"] = "NONE";
    UpdateDataSourceRequestBodyTypeEnum["Http"] = "HTTP";
    UpdateDataSourceRequestBodyTypeEnum["RelationalDatabase"] = "RELATIONAL_DATABASE";
})(UpdateDataSourceRequestBodyTypeEnum || (UpdateDataSourceRequestBodyTypeEnum = {}));
var UpdateDataSourceRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDataSourceRequestBody, _super);
    function UpdateDataSourceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateDataSourceRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamodbConfig" }),
        __metadata("design:type", UpdateDataSourceRequestBodyDynamodbConfig)
    ], UpdateDataSourceRequestBody.prototype, "dynamodbConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elasticsearchConfig" }),
        __metadata("design:type", UpdateDataSourceRequestBodyElasticsearchConfig)
    ], UpdateDataSourceRequestBody.prototype, "elasticsearchConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpConfig" }),
        __metadata("design:type", UpdateDataSourceRequestBodyHttpConfig)
    ], UpdateDataSourceRequestBody.prototype, "httpConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaConfig" }),
        __metadata("design:type", UpdateDataSourceRequestBodyLambdaConfig)
    ], UpdateDataSourceRequestBody.prototype, "lambdaConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationalDatabaseConfig" }),
        __metadata("design:type", UpdateDataSourceRequestBodyRelationalDatabaseConfig)
    ], UpdateDataSourceRequestBody.prototype, "relationalDatabaseConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceRoleArn" }),
        __metadata("design:type", String)
    ], UpdateDataSourceRequestBody.prototype, "serviceRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateDataSourceRequestBody.prototype, "type", void 0);
    return UpdateDataSourceRequestBody;
}(SpeakeasyBase));
export { UpdateDataSourceRequestBody };
var UpdateDataSourceRequest = /** @class */ (function (_super) {
    __extends(UpdateDataSourceRequest, _super);
    function UpdateDataSourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDataSourcePathParams)
    ], UpdateDataSourceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDataSourceHeaders)
    ], UpdateDataSourceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDataSourceRequestBody)
    ], UpdateDataSourceRequest.prototype, "request", void 0);
    return UpdateDataSourceRequest;
}(SpeakeasyBase));
export { UpdateDataSourceRequest };
var UpdateDataSourceResponse = /** @class */ (function (_super) {
    __extends(UpdateDataSourceResponse, _super);
    function UpdateDataSourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDataSourceResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDataSourceResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDataSourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDataSourceResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDataSourceResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDataSourceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDataSourceResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateDataSourceResponse)
    ], UpdateDataSourceResponse.prototype, "updateDataSourceResponse", void 0);
    return UpdateDataSourceResponse;
}(SpeakeasyBase));
export { UpdateDataSourceResponse };
