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
var UpdatePipelineNotificationsPathParams = /** @class */ (function (_super) {
    __extends(UpdatePipelineNotificationsPathParams, _super);
    function UpdatePipelineNotificationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Id" }),
        __metadata("design:type", String)
    ], UpdatePipelineNotificationsPathParams.prototype, "id", void 0);
    return UpdatePipelineNotificationsPathParams;
}(SpeakeasyBase));
export { UpdatePipelineNotificationsPathParams };
var UpdatePipelineNotificationsHeaders = /** @class */ (function (_super) {
    __extends(UpdatePipelineNotificationsHeaders, _super);
    function UpdatePipelineNotificationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdatePipelineNotificationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdatePipelineNotificationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdatePipelineNotificationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdatePipelineNotificationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdatePipelineNotificationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdatePipelineNotificationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdatePipelineNotificationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdatePipelineNotificationsHeaders;
}(SpeakeasyBase));
export { UpdatePipelineNotificationsHeaders };
// UpdatePipelineNotificationsRequestBodyNotifications
/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
var UpdatePipelineNotificationsRequestBodyNotifications = /** @class */ (function (_super) {
    __extends(UpdatePipelineNotificationsRequestBodyNotifications, _super);
    function UpdatePipelineNotificationsRequestBodyNotifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Completed" }),
        __metadata("design:type", String)
    ], UpdatePipelineNotificationsRequestBodyNotifications.prototype, "completed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Error" }),
        __metadata("design:type", String)
    ], UpdatePipelineNotificationsRequestBodyNotifications.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Progressing" }),
        __metadata("design:type", String)
    ], UpdatePipelineNotificationsRequestBodyNotifications.prototype, "progressing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Warning" }),
        __metadata("design:type", String)
    ], UpdatePipelineNotificationsRequestBodyNotifications.prototype, "warning", void 0);
    return UpdatePipelineNotificationsRequestBodyNotifications;
}(SpeakeasyBase));
export { UpdatePipelineNotificationsRequestBodyNotifications };
var UpdatePipelineNotificationsRequestBody = /** @class */ (function (_super) {
    __extends(UpdatePipelineNotificationsRequestBody, _super);
    function UpdatePipelineNotificationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notifications" }),
        __metadata("design:type", UpdatePipelineNotificationsRequestBodyNotifications)
    ], UpdatePipelineNotificationsRequestBody.prototype, "notifications", void 0);
    return UpdatePipelineNotificationsRequestBody;
}(SpeakeasyBase));
export { UpdatePipelineNotificationsRequestBody };
var UpdatePipelineNotificationsRequest = /** @class */ (function (_super) {
    __extends(UpdatePipelineNotificationsRequest, _super);
    function UpdatePipelineNotificationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePipelineNotificationsPathParams)
    ], UpdatePipelineNotificationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePipelineNotificationsHeaders)
    ], UpdatePipelineNotificationsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdatePipelineNotificationsRequestBody)
    ], UpdatePipelineNotificationsRequest.prototype, "request", void 0);
    return UpdatePipelineNotificationsRequest;
}(SpeakeasyBase));
export { UpdatePipelineNotificationsRequest };
var UpdatePipelineNotificationsResponse = /** @class */ (function (_super) {
    __extends(UpdatePipelineNotificationsResponse, _super);
    function UpdatePipelineNotificationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePipelineNotificationsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePipelineNotificationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePipelineNotificationsResponse.prototype, "incompatibleVersionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePipelineNotificationsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePipelineNotificationsResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePipelineNotificationsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePipelineNotificationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdatePipelineNotificationsResponse)
    ], UpdatePipelineNotificationsResponse.prototype, "updatePipelineNotificationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdatePipelineNotificationsResponse.prototype, "validationException", void 0);
    return UpdatePipelineNotificationsResponse;
}(SpeakeasyBase));
export { UpdatePipelineNotificationsResponse };
