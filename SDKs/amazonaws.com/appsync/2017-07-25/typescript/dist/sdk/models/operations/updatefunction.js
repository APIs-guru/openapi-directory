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
var UpdateFunctionPathParams = /** @class */ (function (_super) {
    __extends(UpdateFunctionPathParams, _super);
    function UpdateFunctionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateFunctionPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" }),
        __metadata("design:type", String)
    ], UpdateFunctionPathParams.prototype, "functionId", void 0);
    return UpdateFunctionPathParams;
}(SpeakeasyBase));
export { UpdateFunctionPathParams };
var UpdateFunctionHeaders = /** @class */ (function (_super) {
    __extends(UpdateFunctionHeaders, _super);
    function UpdateFunctionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateFunctionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateFunctionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateFunctionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateFunctionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateFunctionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateFunctionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateFunctionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateFunctionHeaders;
}(SpeakeasyBase));
export { UpdateFunctionHeaders };
// UpdateFunctionRequestBodySyncConfig
/**
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
var UpdateFunctionRequestBodySyncConfig = /** @class */ (function (_super) {
    __extends(UpdateFunctionRequestBodySyncConfig, _super);
    function UpdateFunctionRequestBodySyncConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conflictDetection" }),
        __metadata("design:type", String)
    ], UpdateFunctionRequestBodySyncConfig.prototype, "conflictDetection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conflictHandler" }),
        __metadata("design:type", String)
    ], UpdateFunctionRequestBodySyncConfig.prototype, "conflictHandler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambdaConflictHandlerConfig" }),
        __metadata("design:type", shared.LambdaConflictHandlerConfig)
    ], UpdateFunctionRequestBodySyncConfig.prototype, "lambdaConflictHandlerConfig", void 0);
    return UpdateFunctionRequestBodySyncConfig;
}(SpeakeasyBase));
export { UpdateFunctionRequestBodySyncConfig };
var UpdateFunctionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateFunctionRequestBody, _super);
    function UpdateFunctionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceName" }),
        __metadata("design:type", String)
    ], UpdateFunctionRequestBody.prototype, "dataSourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateFunctionRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=functionVersion" }),
        __metadata("design:type", String)
    ], UpdateFunctionRequestBody.prototype, "functionVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateFunctionRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMappingTemplate" }),
        __metadata("design:type", String)
    ], UpdateFunctionRequestBody.prototype, "requestMappingTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseMappingTemplate" }),
        __metadata("design:type", String)
    ], UpdateFunctionRequestBody.prototype, "responseMappingTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syncConfig" }),
        __metadata("design:type", UpdateFunctionRequestBodySyncConfig)
    ], UpdateFunctionRequestBody.prototype, "syncConfig", void 0);
    return UpdateFunctionRequestBody;
}(SpeakeasyBase));
export { UpdateFunctionRequestBody };
var UpdateFunctionRequest = /** @class */ (function (_super) {
    __extends(UpdateFunctionRequest, _super);
    function UpdateFunctionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFunctionPathParams)
    ], UpdateFunctionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFunctionHeaders)
    ], UpdateFunctionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateFunctionRequestBody)
    ], UpdateFunctionRequest.prototype, "request", void 0);
    return UpdateFunctionRequest;
}(SpeakeasyBase));
export { UpdateFunctionRequest };
var UpdateFunctionResponse = /** @class */ (function (_super) {
    __extends(UpdateFunctionResponse, _super);
    function UpdateFunctionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFunctionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFunctionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateFunctionResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateFunctionResponse)
    ], UpdateFunctionResponse.prototype, "updateFunctionResponse", void 0);
    return UpdateFunctionResponse;
}(SpeakeasyBase));
export { UpdateFunctionResponse };
