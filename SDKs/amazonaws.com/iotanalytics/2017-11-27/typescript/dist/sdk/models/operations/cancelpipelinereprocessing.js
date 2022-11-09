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
var CancelPipelineReprocessingPathParams = /** @class */ (function (_super) {
    __extends(CancelPipelineReprocessingPathParams, _super);
    function CancelPipelineReprocessingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=pipelineName" }),
        __metadata("design:type", String)
    ], CancelPipelineReprocessingPathParams.prototype, "pipelineName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=reprocessingId" }),
        __metadata("design:type", String)
    ], CancelPipelineReprocessingPathParams.prototype, "reprocessingId", void 0);
    return CancelPipelineReprocessingPathParams;
}(SpeakeasyBase));
export { CancelPipelineReprocessingPathParams };
var CancelPipelineReprocessingHeaders = /** @class */ (function (_super) {
    __extends(CancelPipelineReprocessingHeaders, _super);
    function CancelPipelineReprocessingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CancelPipelineReprocessingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CancelPipelineReprocessingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CancelPipelineReprocessingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CancelPipelineReprocessingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CancelPipelineReprocessingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CancelPipelineReprocessingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CancelPipelineReprocessingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CancelPipelineReprocessingHeaders;
}(SpeakeasyBase));
export { CancelPipelineReprocessingHeaders };
var CancelPipelineReprocessingRequest = /** @class */ (function (_super) {
    __extends(CancelPipelineReprocessingRequest, _super);
    function CancelPipelineReprocessingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CancelPipelineReprocessingPathParams)
    ], CancelPipelineReprocessingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CancelPipelineReprocessingHeaders)
    ], CancelPipelineReprocessingRequest.prototype, "headers", void 0);
    return CancelPipelineReprocessingRequest;
}(SpeakeasyBase));
export { CancelPipelineReprocessingRequest };
var CancelPipelineReprocessingResponse = /** @class */ (function (_super) {
    __extends(CancelPipelineReprocessingResponse, _super);
    function CancelPipelineReprocessingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], CancelPipelineReprocessingResponse.prototype, "cancelPipelineReprocessingResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CancelPipelineReprocessingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelPipelineReprocessingResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelPipelineReprocessingResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelPipelineReprocessingResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelPipelineReprocessingResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CancelPipelineReprocessingResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CancelPipelineReprocessingResponse.prototype, "throttlingException", void 0);
    return CancelPipelineReprocessingResponse;
}(SpeakeasyBase));
export { CancelPipelineReprocessingResponse };
