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
var UpdatePipelinePathParams = /** @class */ (function (_super) {
    __extends(UpdatePipelinePathParams, _super);
    function UpdatePipelinePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Id" }),
        __metadata("design:type", String)
    ], UpdatePipelinePathParams.prototype, "id", void 0);
    return UpdatePipelinePathParams;
}(SpeakeasyBase));
export { UpdatePipelinePathParams };
var UpdatePipelineHeaders = /** @class */ (function (_super) {
    __extends(UpdatePipelineHeaders, _super);
    function UpdatePipelineHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdatePipelineHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdatePipelineHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdatePipelineHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdatePipelineHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdatePipelineHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdatePipelineHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdatePipelineHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdatePipelineHeaders;
}(SpeakeasyBase));
export { UpdatePipelineHeaders };
// UpdatePipelineRequestBodyContentConfig
/**
 * The <code>PipelineOutputConfig</code> structure.
**/
var UpdatePipelineRequestBodyContentConfig = /** @class */ (function (_super) {
    __extends(UpdatePipelineRequestBodyContentConfig, _super);
    function UpdatePipelineRequestBodyContentConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Bucket" }),
        __metadata("design:type", String)
    ], UpdatePipelineRequestBodyContentConfig.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permissions", elemType: shared.Permission }),
        __metadata("design:type", Array)
    ], UpdatePipelineRequestBodyContentConfig.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageClass" }),
        __metadata("design:type", String)
    ], UpdatePipelineRequestBodyContentConfig.prototype, "storageClass", void 0);
    return UpdatePipelineRequestBodyContentConfig;
}(SpeakeasyBase));
export { UpdatePipelineRequestBodyContentConfig };
// UpdatePipelineRequestBodyNotifications
/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
var UpdatePipelineRequestBodyNotifications = /** @class */ (function (_super) {
    __extends(UpdatePipelineRequestBodyNotifications, _super);
    function UpdatePipelineRequestBodyNotifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Completed" }),
        __metadata("design:type", String)
    ], UpdatePipelineRequestBodyNotifications.prototype, "completed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Error" }),
        __metadata("design:type", String)
    ], UpdatePipelineRequestBodyNotifications.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Progressing" }),
        __metadata("design:type", String)
    ], UpdatePipelineRequestBodyNotifications.prototype, "progressing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Warning" }),
        __metadata("design:type", String)
    ], UpdatePipelineRequestBodyNotifications.prototype, "warning", void 0);
    return UpdatePipelineRequestBodyNotifications;
}(SpeakeasyBase));
export { UpdatePipelineRequestBodyNotifications };
// UpdatePipelineRequestBodyThumbnailConfig
/**
 * The <code>PipelineOutputConfig</code> structure.
**/
var UpdatePipelineRequestBodyThumbnailConfig = /** @class */ (function (_super) {
    __extends(UpdatePipelineRequestBodyThumbnailConfig, _super);
    function UpdatePipelineRequestBodyThumbnailConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Bucket" }),
        __metadata("design:type", String)
    ], UpdatePipelineRequestBodyThumbnailConfig.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permissions", elemType: shared.Permission }),
        __metadata("design:type", Array)
    ], UpdatePipelineRequestBodyThumbnailConfig.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageClass" }),
        __metadata("design:type", String)
    ], UpdatePipelineRequestBodyThumbnailConfig.prototype, "storageClass", void 0);
    return UpdatePipelineRequestBodyThumbnailConfig;
}(SpeakeasyBase));
export { UpdatePipelineRequestBodyThumbnailConfig };
var UpdatePipelineRequestBody = /** @class */ (function (_super) {
    __extends(UpdatePipelineRequestBody, _super);
    function UpdatePipelineRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsKmsKeyArn" }),
        __metadata("design:type", String)
    ], UpdatePipelineRequestBody.prototype, "awsKmsKeyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContentConfig" }),
        __metadata("design:type", UpdatePipelineRequestBodyContentConfig)
    ], UpdatePipelineRequestBody.prototype, "contentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputBucket" }),
        __metadata("design:type", String)
    ], UpdatePipelineRequestBody.prototype, "inputBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdatePipelineRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notifications" }),
        __metadata("design:type", UpdatePipelineRequestBodyNotifications)
    ], UpdatePipelineRequestBody.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], UpdatePipelineRequestBody.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThumbnailConfig" }),
        __metadata("design:type", UpdatePipelineRequestBodyThumbnailConfig)
    ], UpdatePipelineRequestBody.prototype, "thumbnailConfig", void 0);
    return UpdatePipelineRequestBody;
}(SpeakeasyBase));
export { UpdatePipelineRequestBody };
var UpdatePipelineRequest = /** @class */ (function (_super) {
    __extends(UpdatePipelineRequest, _super);
    function UpdatePipelineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePipelinePathParams)
    ], UpdatePipelineRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePipelineHeaders)
    ], UpdatePipelineRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdatePipelineRequestBody)
    ], UpdatePipelineRequest.prototype, "request", void 0);
    return UpdatePipelineRequest;
}(SpeakeasyBase));
export { UpdatePipelineRequest };
var UpdatePipelineResponse = /** @class */ (function (_super) {
    __extends(UpdatePipelineResponse, _super);
    function UpdatePipelineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePipelineResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePipelineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePipelineResponse.prototype, "incompatibleVersionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePipelineResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePipelineResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePipelineResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePipelineResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdatePipelineResponse)
    ], UpdatePipelineResponse.prototype, "updatePipelineResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePipelineResponse.prototype, "validationException", void 0);
    return UpdatePipelineResponse;
}(SpeakeasyBase));
export { UpdatePipelineResponse };
