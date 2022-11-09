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
var CreateResolverPathParams = /** @class */ (function (_super) {
    __extends(CreateResolverPathParams, _super);
    function CreateResolverPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], CreateResolverPathParams.prototype, "apiId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=typeName" }),
        __metadata("design:type", String)
    ], CreateResolverPathParams.prototype, "typeName", void 0);
    return CreateResolverPathParams;
}(SpeakeasyBase));
export { CreateResolverPathParams };
var CreateResolverHeaders = /** @class */ (function (_super) {
    __extends(CreateResolverHeaders, _super);
    function CreateResolverHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateResolverHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateResolverHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateResolverHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateResolverHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateResolverHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateResolverHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateResolverHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateResolverHeaders;
}(SpeakeasyBase));
export { CreateResolverHeaders };
// CreateResolverRequestBodyCachingConfig
/**
 * The caching configuration for a resolver that has caching enabled.
**/
var CreateResolverRequestBodyCachingConfig = /** @class */ (function (_super) {
    __extends(CreateResolverRequestBodyCachingConfig, _super);
    function CreateResolverRequestBodyCachingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cachingKeys" }),
        __metadata("design:type", Array)
    ], CreateResolverRequestBodyCachingConfig.prototype, "cachingKeys", void 0);
    __decorate([
        Metadata({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], CreateResolverRequestBodyCachingConfig.prototype, "ttl", void 0);
    return CreateResolverRequestBodyCachingConfig;
}(SpeakeasyBase));
export { CreateResolverRequestBodyCachingConfig };
export var CreateResolverRequestBodyKindEnum;
(function (CreateResolverRequestBodyKindEnum) {
    CreateResolverRequestBodyKindEnum["Unit"] = "UNIT";
    CreateResolverRequestBodyKindEnum["Pipeline"] = "PIPELINE";
})(CreateResolverRequestBodyKindEnum || (CreateResolverRequestBodyKindEnum = {}));
// CreateResolverRequestBodyPipelineConfig
/**
 * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
**/
var CreateResolverRequestBodyPipelineConfig = /** @class */ (function (_super) {
    __extends(CreateResolverRequestBodyPipelineConfig, _super);
    function CreateResolverRequestBodyPipelineConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=functions" }),
        __metadata("design:type", Array)
    ], CreateResolverRequestBodyPipelineConfig.prototype, "functions", void 0);
    return CreateResolverRequestBodyPipelineConfig;
}(SpeakeasyBase));
export { CreateResolverRequestBodyPipelineConfig };
// CreateResolverRequestBodySyncConfig
/**
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
var CreateResolverRequestBodySyncConfig = /** @class */ (function (_super) {
    __extends(CreateResolverRequestBodySyncConfig, _super);
    function CreateResolverRequestBodySyncConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=conflictDetection" }),
        __metadata("design:type", String)
    ], CreateResolverRequestBodySyncConfig.prototype, "conflictDetection", void 0);
    __decorate([
        Metadata({ data: "json, name=conflictHandler" }),
        __metadata("design:type", String)
    ], CreateResolverRequestBodySyncConfig.prototype, "conflictHandler", void 0);
    __decorate([
        Metadata({ data: "json, name=lambdaConflictHandlerConfig" }),
        __metadata("design:type", shared.LambdaConflictHandlerConfig)
    ], CreateResolverRequestBodySyncConfig.prototype, "lambdaConflictHandlerConfig", void 0);
    return CreateResolverRequestBodySyncConfig;
}(SpeakeasyBase));
export { CreateResolverRequestBodySyncConfig };
var CreateResolverRequestBody = /** @class */ (function (_super) {
    __extends(CreateResolverRequestBody, _super);
    function CreateResolverRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cachingConfig" }),
        __metadata("design:type", CreateResolverRequestBodyCachingConfig)
    ], CreateResolverRequestBody.prototype, "cachingConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=dataSourceName" }),
        __metadata("design:type", String)
    ], CreateResolverRequestBody.prototype, "dataSourceName", void 0);
    __decorate([
        Metadata({ data: "json, name=fieldName" }),
        __metadata("design:type", String)
    ], CreateResolverRequestBody.prototype, "fieldName", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], CreateResolverRequestBody.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=pipelineConfig" }),
        __metadata("design:type", CreateResolverRequestBodyPipelineConfig)
    ], CreateResolverRequestBody.prototype, "pipelineConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=requestMappingTemplate" }),
        __metadata("design:type", String)
    ], CreateResolverRequestBody.prototype, "requestMappingTemplate", void 0);
    __decorate([
        Metadata({ data: "json, name=responseMappingTemplate" }),
        __metadata("design:type", String)
    ], CreateResolverRequestBody.prototype, "responseMappingTemplate", void 0);
    __decorate([
        Metadata({ data: "json, name=syncConfig" }),
        __metadata("design:type", CreateResolverRequestBodySyncConfig)
    ], CreateResolverRequestBody.prototype, "syncConfig", void 0);
    return CreateResolverRequestBody;
}(SpeakeasyBase));
export { CreateResolverRequestBody };
var CreateResolverRequest = /** @class */ (function (_super) {
    __extends(CreateResolverRequest, _super);
    function CreateResolverRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateResolverPathParams)
    ], CreateResolverRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateResolverHeaders)
    ], CreateResolverRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateResolverRequestBody)
    ], CreateResolverRequest.prototype, "request", void 0);
    return CreateResolverRequest;
}(SpeakeasyBase));
export { CreateResolverRequest };
var CreateResolverResponse = /** @class */ (function (_super) {
    __extends(CreateResolverResponse, _super);
    function CreateResolverResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateResolverResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateResolverResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateResolverResponse)
    ], CreateResolverResponse.prototype, "createResolverResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateResolverResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateResolverResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateResolverResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateResolverResponse.prototype, "unauthorizedException", void 0);
    return CreateResolverResponse;
}(SpeakeasyBase));
export { CreateResolverResponse };
