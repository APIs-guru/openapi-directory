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
var SetVaultNotificationsPathParams = /** @class */ (function (_super) {
    __extends(SetVaultNotificationsPathParams, _super);
    function SetVaultNotificationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], SetVaultNotificationsPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultName" }),
        __metadata("design:type", String)
    ], SetVaultNotificationsPathParams.prototype, "vaultName", void 0);
    return SetVaultNotificationsPathParams;
}(SpeakeasyBase));
export { SetVaultNotificationsPathParams };
var SetVaultNotificationsHeaders = /** @class */ (function (_super) {
    __extends(SetVaultNotificationsHeaders, _super);
    function SetVaultNotificationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SetVaultNotificationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SetVaultNotificationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SetVaultNotificationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SetVaultNotificationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SetVaultNotificationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SetVaultNotificationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SetVaultNotificationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SetVaultNotificationsHeaders;
}(SpeakeasyBase));
export { SetVaultNotificationsHeaders };
// SetVaultNotificationsRequestBodyVaultNotificationConfig
/**
 * Represents a vault's notification configuration.
**/
var SetVaultNotificationsRequestBodyVaultNotificationConfig = /** @class */ (function (_super) {
    __extends(SetVaultNotificationsRequestBodyVaultNotificationConfig, _super);
    function SetVaultNotificationsRequestBodyVaultNotificationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Events" }),
        __metadata("design:type", Array)
    ], SetVaultNotificationsRequestBodyVaultNotificationConfig.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SNSTopic" }),
        __metadata("design:type", String)
    ], SetVaultNotificationsRequestBodyVaultNotificationConfig.prototype, "snsTopic", void 0);
    return SetVaultNotificationsRequestBodyVaultNotificationConfig;
}(SpeakeasyBase));
export { SetVaultNotificationsRequestBodyVaultNotificationConfig };
var SetVaultNotificationsRequestBody = /** @class */ (function (_super) {
    __extends(SetVaultNotificationsRequestBody, _super);
    function SetVaultNotificationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vaultNotificationConfig" }),
        __metadata("design:type", SetVaultNotificationsRequestBodyVaultNotificationConfig)
    ], SetVaultNotificationsRequestBody.prototype, "vaultNotificationConfig", void 0);
    return SetVaultNotificationsRequestBody;
}(SpeakeasyBase));
export { SetVaultNotificationsRequestBody };
var SetVaultNotificationsRequest = /** @class */ (function (_super) {
    __extends(SetVaultNotificationsRequest, _super);
    function SetVaultNotificationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetVaultNotificationsPathParams)
    ], SetVaultNotificationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetVaultNotificationsHeaders)
    ], SetVaultNotificationsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SetVaultNotificationsRequestBody)
    ], SetVaultNotificationsRequest.prototype, "request", void 0);
    return SetVaultNotificationsRequest;
}(SpeakeasyBase));
export { SetVaultNotificationsRequest };
var SetVaultNotificationsResponse = /** @class */ (function (_super) {
    __extends(SetVaultNotificationsResponse, _super);
    function SetVaultNotificationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetVaultNotificationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetVaultNotificationsResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetVaultNotificationsResponse.prototype, "missingParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetVaultNotificationsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetVaultNotificationsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetVaultNotificationsResponse.prototype, "statusCode", void 0);
    return SetVaultNotificationsResponse;
}(SpeakeasyBase));
export { SetVaultNotificationsResponse };
