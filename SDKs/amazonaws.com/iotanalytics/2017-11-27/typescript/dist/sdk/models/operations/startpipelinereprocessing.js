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
var StartPipelineReprocessingPathParams = /** @class */ (function (_super) {
    __extends(StartPipelineReprocessingPathParams, _super);
    function StartPipelineReprocessingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=pipelineName" }),
        __metadata("design:type", String)
    ], StartPipelineReprocessingPathParams.prototype, "pipelineName", void 0);
    return StartPipelineReprocessingPathParams;
}(SpeakeasyBase));
export { StartPipelineReprocessingPathParams };
var StartPipelineReprocessingHeaders = /** @class */ (function (_super) {
    __extends(StartPipelineReprocessingHeaders, _super);
    function StartPipelineReprocessingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartPipelineReprocessingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartPipelineReprocessingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartPipelineReprocessingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartPipelineReprocessingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartPipelineReprocessingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartPipelineReprocessingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartPipelineReprocessingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartPipelineReprocessingHeaders;
}(SpeakeasyBase));
export { StartPipelineReprocessingHeaders };
// StartPipelineReprocessingRequestBodyChannelMessages
/**
 * Specifies one or more sets of channel messages.
**/
var StartPipelineReprocessingRequestBodyChannelMessages = /** @class */ (function (_super) {
    __extends(StartPipelineReprocessingRequestBodyChannelMessages, _super);
    function StartPipelineReprocessingRequestBodyChannelMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=s3Paths" }),
        __metadata("design:type", Array)
    ], StartPipelineReprocessingRequestBodyChannelMessages.prototype, "s3Paths", void 0);
    return StartPipelineReprocessingRequestBodyChannelMessages;
}(SpeakeasyBase));
export { StartPipelineReprocessingRequestBodyChannelMessages };
var StartPipelineReprocessingRequestBody = /** @class */ (function (_super) {
    __extends(StartPipelineReprocessingRequestBody, _super);
    function StartPipelineReprocessingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=channelMessages" }),
        __metadata("design:type", StartPipelineReprocessingRequestBodyChannelMessages)
    ], StartPipelineReprocessingRequestBody.prototype, "channelMessages", void 0);
    __decorate([
        Metadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], StartPipelineReprocessingRequestBody.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], StartPipelineReprocessingRequestBody.prototype, "startTime", void 0);
    return StartPipelineReprocessingRequestBody;
}(SpeakeasyBase));
export { StartPipelineReprocessingRequestBody };
var StartPipelineReprocessingRequest = /** @class */ (function (_super) {
    __extends(StartPipelineReprocessingRequest, _super);
    function StartPipelineReprocessingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StartPipelineReprocessingPathParams)
    ], StartPipelineReprocessingRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StartPipelineReprocessingHeaders)
    ], StartPipelineReprocessingRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartPipelineReprocessingRequestBody)
    ], StartPipelineReprocessingRequest.prototype, "request", void 0);
    return StartPipelineReprocessingRequest;
}(SpeakeasyBase));
export { StartPipelineReprocessingRequest };
var StartPipelineReprocessingResponse = /** @class */ (function (_super) {
    __extends(StartPipelineReprocessingResponse, _super);
    function StartPipelineReprocessingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StartPipelineReprocessingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartPipelineReprocessingResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartPipelineReprocessingResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartPipelineReprocessingResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartPipelineReprocessingResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartPipelineReprocessingResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StartPipelineReprocessingResponse)
    ], StartPipelineReprocessingResponse.prototype, "startPipelineReprocessingResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StartPipelineReprocessingResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartPipelineReprocessingResponse.prototype, "throttlingException", void 0);
    return StartPipelineReprocessingResponse;
}(SpeakeasyBase));
export { StartPipelineReprocessingResponse };
