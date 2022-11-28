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
var CreatePipelineHeaders = /** @class */ (function (_super) {
    __extends(CreatePipelineHeaders, _super);
    function CreatePipelineHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreatePipelineHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreatePipelineHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreatePipelineHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreatePipelineHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreatePipelineHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreatePipelineHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreatePipelineHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreatePipelineHeaders;
}(SpeakeasyBase));
export { CreatePipelineHeaders };
// CreatePipelineRequestBodyContentConfig
/**
 * The <code>PipelineOutputConfig</code> structure.
**/
var CreatePipelineRequestBodyContentConfig = /** @class */ (function (_super) {
    __extends(CreatePipelineRequestBodyContentConfig, _super);
    function CreatePipelineRequestBodyContentConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Bucket" }),
        __metadata("design:type", String)
    ], CreatePipelineRequestBodyContentConfig.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permissions", elemType: shared.Permission }),
        __metadata("design:type", Array)
    ], CreatePipelineRequestBodyContentConfig.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageClass" }),
        __metadata("design:type", String)
    ], CreatePipelineRequestBodyContentConfig.prototype, "storageClass", void 0);
    return CreatePipelineRequestBodyContentConfig;
}(SpeakeasyBase));
export { CreatePipelineRequestBodyContentConfig };
// CreatePipelineRequestBodyNotifications
/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
var CreatePipelineRequestBodyNotifications = /** @class */ (function (_super) {
    __extends(CreatePipelineRequestBodyNotifications, _super);
    function CreatePipelineRequestBodyNotifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Completed" }),
        __metadata("design:type", String)
    ], CreatePipelineRequestBodyNotifications.prototype, "completed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Error" }),
        __metadata("design:type", String)
    ], CreatePipelineRequestBodyNotifications.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Progressing" }),
        __metadata("design:type", String)
    ], CreatePipelineRequestBodyNotifications.prototype, "progressing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Warning" }),
        __metadata("design:type", String)
    ], CreatePipelineRequestBodyNotifications.prototype, "warning", void 0);
    return CreatePipelineRequestBodyNotifications;
}(SpeakeasyBase));
export { CreatePipelineRequestBodyNotifications };
// CreatePipelineRequestBodyThumbnailConfig
/**
 * The <code>PipelineOutputConfig</code> structure.
**/
var CreatePipelineRequestBodyThumbnailConfig = /** @class */ (function (_super) {
    __extends(CreatePipelineRequestBodyThumbnailConfig, _super);
    function CreatePipelineRequestBodyThumbnailConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Bucket" }),
        __metadata("design:type", String)
    ], CreatePipelineRequestBodyThumbnailConfig.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permissions", elemType: shared.Permission }),
        __metadata("design:type", Array)
    ], CreatePipelineRequestBodyThumbnailConfig.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StorageClass" }),
        __metadata("design:type", String)
    ], CreatePipelineRequestBodyThumbnailConfig.prototype, "storageClass", void 0);
    return CreatePipelineRequestBodyThumbnailConfig;
}(SpeakeasyBase));
export { CreatePipelineRequestBodyThumbnailConfig };
var CreatePipelineRequestBody = /** @class */ (function (_super) {
    __extends(CreatePipelineRequestBody, _super);
    function CreatePipelineRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsKmsKeyArn" }),
        __metadata("design:type", String)
    ], CreatePipelineRequestBody.prototype, "awsKmsKeyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContentConfig" }),
        __metadata("design:type", CreatePipelineRequestBodyContentConfig)
    ], CreatePipelineRequestBody.prototype, "contentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputBucket" }),
        __metadata("design:type", String)
    ], CreatePipelineRequestBody.prototype, "inputBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreatePipelineRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notifications" }),
        __metadata("design:type", CreatePipelineRequestBodyNotifications)
    ], CreatePipelineRequestBody.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputBucket" }),
        __metadata("design:type", String)
    ], CreatePipelineRequestBody.prototype, "outputBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], CreatePipelineRequestBody.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThumbnailConfig" }),
        __metadata("design:type", CreatePipelineRequestBodyThumbnailConfig)
    ], CreatePipelineRequestBody.prototype, "thumbnailConfig", void 0);
    return CreatePipelineRequestBody;
}(SpeakeasyBase));
export { CreatePipelineRequestBody };
var CreatePipelineRequest = /** @class */ (function (_super) {
    __extends(CreatePipelineRequest, _super);
    function CreatePipelineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePipelineHeaders)
    ], CreatePipelineRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreatePipelineRequestBody)
    ], CreatePipelineRequest.prototype, "request", void 0);
    return CreatePipelineRequest;
}(SpeakeasyBase));
export { CreatePipelineRequest };
var CreatePipelineResponse = /** @class */ (function (_super) {
    __extends(CreatePipelineResponse, _super);
    function CreatePipelineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePipelineResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePipelineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreatePipelineResponse)
    ], CreatePipelineResponse.prototype, "createPipelineResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePipelineResponse.prototype, "incompatibleVersionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePipelineResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePipelineResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePipelineResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePipelineResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePipelineResponse.prototype, "validationException", void 0);
    return CreatePipelineResponse;
}(SpeakeasyBase));
export { CreatePipelineResponse };
