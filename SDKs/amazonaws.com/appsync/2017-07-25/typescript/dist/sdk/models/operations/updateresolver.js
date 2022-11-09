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
var UpdateResolverPathParams = /** @class */ (function (_super) {
    __extends(UpdateResolverPathParams, _super);
    function UpdateResolverPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateResolverPathParams.prototype, "apiId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=fieldName" }),
        __metadata("design:type", String)
    ], UpdateResolverPathParams.prototype, "fieldName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=typeName" }),
        __metadata("design:type", String)
    ], UpdateResolverPathParams.prototype, "typeName", void 0);
    return UpdateResolverPathParams;
}(SpeakeasyBase));
export { UpdateResolverPathParams };
var UpdateResolverHeaders = /** @class */ (function (_super) {
    __extends(UpdateResolverHeaders, _super);
    function UpdateResolverHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateResolverHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateResolverHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateResolverHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateResolverHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateResolverHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateResolverHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateResolverHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateResolverHeaders;
}(SpeakeasyBase));
export { UpdateResolverHeaders };
// UpdateResolverRequestBodyCachingConfig
/**
 * The caching configuration for a resolver that has caching enabled.
**/
var UpdateResolverRequestBodyCachingConfig = /** @class */ (function (_super) {
    __extends(UpdateResolverRequestBodyCachingConfig, _super);
    function UpdateResolverRequestBodyCachingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cachingKeys" }),
        __metadata("design:type", Array)
    ], UpdateResolverRequestBodyCachingConfig.prototype, "cachingKeys", void 0);
    __decorate([
        Metadata({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], UpdateResolverRequestBodyCachingConfig.prototype, "ttl", void 0);
    return UpdateResolverRequestBodyCachingConfig;
}(SpeakeasyBase));
export { UpdateResolverRequestBodyCachingConfig };
export var UpdateResolverRequestBodyKindEnum;
(function (UpdateResolverRequestBodyKindEnum) {
    UpdateResolverRequestBodyKindEnum["Unit"] = "UNIT";
    UpdateResolverRequestBodyKindEnum["Pipeline"] = "PIPELINE";
})(UpdateResolverRequestBodyKindEnum || (UpdateResolverRequestBodyKindEnum = {}));
// UpdateResolverRequestBodyPipelineConfig
/**
 * The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
**/
var UpdateResolverRequestBodyPipelineConfig = /** @class */ (function (_super) {
    __extends(UpdateResolverRequestBodyPipelineConfig, _super);
    function UpdateResolverRequestBodyPipelineConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=functions" }),
        __metadata("design:type", Array)
    ], UpdateResolverRequestBodyPipelineConfig.prototype, "functions", void 0);
    return UpdateResolverRequestBodyPipelineConfig;
}(SpeakeasyBase));
export { UpdateResolverRequestBodyPipelineConfig };
// UpdateResolverRequestBodySyncConfig
/**
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
var UpdateResolverRequestBodySyncConfig = /** @class */ (function (_super) {
    __extends(UpdateResolverRequestBodySyncConfig, _super);
    function UpdateResolverRequestBodySyncConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=conflictDetection" }),
        __metadata("design:type", String)
    ], UpdateResolverRequestBodySyncConfig.prototype, "conflictDetection", void 0);
    __decorate([
        Metadata({ data: "json, name=conflictHandler" }),
        __metadata("design:type", String)
    ], UpdateResolverRequestBodySyncConfig.prototype, "conflictHandler", void 0);
    __decorate([
        Metadata({ data: "json, name=lambdaConflictHandlerConfig" }),
        __metadata("design:type", shared.LambdaConflictHandlerConfig)
    ], UpdateResolverRequestBodySyncConfig.prototype, "lambdaConflictHandlerConfig", void 0);
    return UpdateResolverRequestBodySyncConfig;
}(SpeakeasyBase));
export { UpdateResolverRequestBodySyncConfig };
var UpdateResolverRequestBody = /** @class */ (function (_super) {
    __extends(UpdateResolverRequestBody, _super);
    function UpdateResolverRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cachingConfig" }),
        __metadata("design:type", UpdateResolverRequestBodyCachingConfig)
    ], UpdateResolverRequestBody.prototype, "cachingConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=dataSourceName" }),
        __metadata("design:type", String)
    ], UpdateResolverRequestBody.prototype, "dataSourceName", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], UpdateResolverRequestBody.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=pipelineConfig" }),
        __metadata("design:type", UpdateResolverRequestBodyPipelineConfig)
    ], UpdateResolverRequestBody.prototype, "pipelineConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=requestMappingTemplate" }),
        __metadata("design:type", String)
    ], UpdateResolverRequestBody.prototype, "requestMappingTemplate", void 0);
    __decorate([
        Metadata({ data: "json, name=responseMappingTemplate" }),
        __metadata("design:type", String)
    ], UpdateResolverRequestBody.prototype, "responseMappingTemplate", void 0);
    __decorate([
        Metadata({ data: "json, name=syncConfig" }),
        __metadata("design:type", UpdateResolverRequestBodySyncConfig)
    ], UpdateResolverRequestBody.prototype, "syncConfig", void 0);
    return UpdateResolverRequestBody;
}(SpeakeasyBase));
export { UpdateResolverRequestBody };
var UpdateResolverRequest = /** @class */ (function (_super) {
    __extends(UpdateResolverRequest, _super);
    function UpdateResolverRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateResolverPathParams)
    ], UpdateResolverRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateResolverHeaders)
    ], UpdateResolverRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateResolverRequestBody)
    ], UpdateResolverRequest.prototype, "request", void 0);
    return UpdateResolverRequest;
}(SpeakeasyBase));
export { UpdateResolverRequest };
var UpdateResolverResponse = /** @class */ (function (_super) {
    __extends(UpdateResolverResponse, _super);
    function UpdateResolverResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateResolverResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateResolverResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateResolverResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateResolverResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateResolverResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateResolverResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateResolverResponse)
    ], UpdateResolverResponse.prototype, "updateResolverResponse", void 0);
    return UpdateResolverResponse;
}(SpeakeasyBase));
export { UpdateResolverResponse };
