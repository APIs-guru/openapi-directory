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
var AddNotificationChannelHeaders = /** @class */ (function (_super) {
    __extends(AddNotificationChannelHeaders, _super);
    function AddNotificationChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AddNotificationChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AddNotificationChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AddNotificationChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AddNotificationChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AddNotificationChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AddNotificationChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AddNotificationChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AddNotificationChannelHeaders;
}(SpeakeasyBase));
export { AddNotificationChannelHeaders };
// AddNotificationChannelRequestBodyConfig
/**
 *  Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
**/
var AddNotificationChannelRequestBodyConfig = /** @class */ (function (_super) {
    __extends(AddNotificationChannelRequestBodyConfig, _super);
    function AddNotificationChannelRequestBodyConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Sns" }),
        __metadata("design:type", shared.SnsChannelConfig)
    ], AddNotificationChannelRequestBodyConfig.prototype, "sns", void 0);
    return AddNotificationChannelRequestBodyConfig;
}(SpeakeasyBase));
export { AddNotificationChannelRequestBodyConfig };
var AddNotificationChannelRequestBody = /** @class */ (function (_super) {
    __extends(AddNotificationChannelRequestBody, _super);
    function AddNotificationChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Config" }),
        __metadata("design:type", AddNotificationChannelRequestBodyConfig)
    ], AddNotificationChannelRequestBody.prototype, "config", void 0);
    return AddNotificationChannelRequestBody;
}(SpeakeasyBase));
export { AddNotificationChannelRequestBody };
var AddNotificationChannelRequest = /** @class */ (function (_super) {
    __extends(AddNotificationChannelRequest, _super);
    function AddNotificationChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AddNotificationChannelHeaders)
    ], AddNotificationChannelRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddNotificationChannelRequestBody)
    ], AddNotificationChannelRequest.prototype, "request", void 0);
    return AddNotificationChannelRequest;
}(SpeakeasyBase));
export { AddNotificationChannelRequest };
var AddNotificationChannelResponse = /** @class */ (function (_super) {
    __extends(AddNotificationChannelResponse, _super);
    function AddNotificationChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddNotificationChannelResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AddNotificationChannelResponse)
    ], AddNotificationChannelResponse.prototype, "addNotificationChannelResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddNotificationChannelResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AddNotificationChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddNotificationChannelResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddNotificationChannelResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddNotificationChannelResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AddNotificationChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddNotificationChannelResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddNotificationChannelResponse.prototype, "validationException", void 0);
    return AddNotificationChannelResponse;
}(SpeakeasyBase));
export { AddNotificationChannelResponse };
