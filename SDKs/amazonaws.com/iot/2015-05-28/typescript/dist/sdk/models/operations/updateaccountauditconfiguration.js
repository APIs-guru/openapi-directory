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
var UpdateAccountAuditConfigurationHeaders = /** @class */ (function (_super) {
    __extends(UpdateAccountAuditConfigurationHeaders, _super);
    function UpdateAccountAuditConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAccountAuditConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAccountAuditConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAccountAuditConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAccountAuditConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAccountAuditConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAccountAuditConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAccountAuditConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAccountAuditConfigurationHeaders;
}(SpeakeasyBase));
export { UpdateAccountAuditConfigurationHeaders };
var UpdateAccountAuditConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAccountAuditConfigurationRequestBody, _super);
    function UpdateAccountAuditConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auditCheckConfigurations", elemType: shared.AuditCheckConfiguration }),
        __metadata("design:type", Map)
    ], UpdateAccountAuditConfigurationRequestBody.prototype, "auditCheckConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auditNotificationTargetConfigurations", elemType: shared.AuditNotificationTarget }),
        __metadata("design:type", Map)
    ], UpdateAccountAuditConfigurationRequestBody.prototype, "auditNotificationTargetConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], UpdateAccountAuditConfigurationRequestBody.prototype, "roleArn", void 0);
    return UpdateAccountAuditConfigurationRequestBody;
}(SpeakeasyBase));
export { UpdateAccountAuditConfigurationRequestBody };
var UpdateAccountAuditConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateAccountAuditConfigurationRequest, _super);
    function UpdateAccountAuditConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAccountAuditConfigurationHeaders)
    ], UpdateAccountAuditConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAccountAuditConfigurationRequestBody)
    ], UpdateAccountAuditConfigurationRequest.prototype, "request", void 0);
    return UpdateAccountAuditConfigurationRequest;
}(SpeakeasyBase));
export { UpdateAccountAuditConfigurationRequest };
var UpdateAccountAuditConfigurationResponse = /** @class */ (function (_super) {
    __extends(UpdateAccountAuditConfigurationResponse, _super);
    function UpdateAccountAuditConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAccountAuditConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAccountAuditConfigurationResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAccountAuditConfigurationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAccountAuditConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAccountAuditConfigurationResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateAccountAuditConfigurationResponse.prototype, "updateAccountAuditConfigurationResponse", void 0);
    return UpdateAccountAuditConfigurationResponse;
}(SpeakeasyBase));
export { UpdateAccountAuditConfigurationResponse };
