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
var GetWebhookPathParams = /** @class */ (function (_super) {
    __extends(GetWebhookPathParams, _super);
    function GetWebhookPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=webhookId" }),
        __metadata("design:type", String)
    ], GetWebhookPathParams.prototype, "webhookId", void 0);
    return GetWebhookPathParams;
}(SpeakeasyBase));
export { GetWebhookPathParams };
var GetWebhookHeaders = /** @class */ (function (_super) {
    __extends(GetWebhookHeaders, _super);
    function GetWebhookHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetWebhookHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetWebhookHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetWebhookHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetWebhookHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetWebhookHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetWebhookHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetWebhookHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetWebhookHeaders;
}(SpeakeasyBase));
export { GetWebhookHeaders };
var GetWebhookRequest = /** @class */ (function (_super) {
    __extends(GetWebhookRequest, _super);
    function GetWebhookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetWebhookPathParams)
    ], GetWebhookRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWebhookHeaders)
    ], GetWebhookRequest.prototype, "headers", void 0);
    return GetWebhookRequest;
}(SpeakeasyBase));
export { GetWebhookRequest };
var GetWebhookResponse = /** @class */ (function (_super) {
    __extends(GetWebhookResponse, _super);
    function GetWebhookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetWebhookResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetWebhookResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetWebhookResult)
    ], GetWebhookResponse.prototype, "getWebhookResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetWebhookResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetWebhookResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetWebhookResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetWebhookResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetWebhookResponse.prototype, "unauthorizedException", void 0);
    return GetWebhookResponse;
}(SpeakeasyBase));
export { GetWebhookResponse };
