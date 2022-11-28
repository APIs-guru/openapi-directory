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
var CreateFunctionPathParams = /** @class */ (function (_super) {
    __extends(CreateFunctionPathParams, _super);
    function CreateFunctionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], CreateFunctionPathParams.prototype, "apiId", void 0);
    return CreateFunctionPathParams;
}(SpeakeasyBase));
export { CreateFunctionPathParams };
var CreateFunctionHeaders = /** @class */ (function (_super) {
    __extends(CreateFunctionHeaders, _super);
    function CreateFunctionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateFunctionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateFunctionHeaders;
}(SpeakeasyBase));
export { CreateFunctionHeaders };
// CreateFunctionRequestBodySyncConfig
/**
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
var CreateFunctionRequestBodySyncConfig = /** @class */ (function (_super) {
    __extends(CreateFunctionRequestBodySyncConfig, _super);
    function CreateFunctionRequestBodySyncConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conflictDetection" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBodySyncConfig.prototype, "conflictDetection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conflictHandler" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBodySyncConfig.prototype, "conflictHandler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaConflictHandlerConfig" }),
        __metadata("design:type", shared.LambdaConflictHandlerConfig)
    ], CreateFunctionRequestBodySyncConfig.prototype, "lambdaConflictHandlerConfig", void 0);
    return CreateFunctionRequestBodySyncConfig;
}(SpeakeasyBase));
export { CreateFunctionRequestBodySyncConfig };
var CreateFunctionRequestBody = /** @class */ (function (_super) {
    __extends(CreateFunctionRequestBody, _super);
    function CreateFunctionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceName" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "dataSourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=functionVersion" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "functionVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMappingTemplate" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "requestMappingTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseMappingTemplate" }),
        __metadata("design:type", String)
    ], CreateFunctionRequestBody.prototype, "responseMappingTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syncConfig" }),
        __metadata("design:type", CreateFunctionRequestBodySyncConfig)
    ], CreateFunctionRequestBody.prototype, "syncConfig", void 0);
    return CreateFunctionRequestBody;
}(SpeakeasyBase));
export { CreateFunctionRequestBody };
var CreateFunctionRequest = /** @class */ (function (_super) {
    __extends(CreateFunctionRequest, _super);
    function CreateFunctionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFunctionPathParams)
    ], CreateFunctionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFunctionHeaders)
    ], CreateFunctionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFunctionRequestBody)
    ], CreateFunctionRequest.prototype, "request", void 0);
    return CreateFunctionRequest;
}(SpeakeasyBase));
export { CreateFunctionRequest };
var CreateFunctionResponse = /** @class */ (function (_super) {
    __extends(CreateFunctionResponse, _super);
    function CreateFunctionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFunctionResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFunctionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateFunctionResponse)
    ], CreateFunctionResponse.prototype, "createFunctionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFunctionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFunctionResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFunctionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateFunctionResponse.prototype, "unauthorizedException", void 0);
    return CreateFunctionResponse;
}(SpeakeasyBase));
export { CreateFunctionResponse };
