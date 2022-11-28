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
var UpdateDomainNamePathParams = /** @class */ (function (_super) {
    __extends(UpdateDomainNamePathParams, _super);
    function UpdateDomainNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], UpdateDomainNamePathParams.prototype, "domainName", void 0);
    return UpdateDomainNamePathParams;
}(SpeakeasyBase));
export { UpdateDomainNamePathParams };
var UpdateDomainNameHeaders = /** @class */ (function (_super) {
    __extends(UpdateDomainNameHeaders, _super);
    function UpdateDomainNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDomainNameHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDomainNameHeaders;
}(SpeakeasyBase));
export { UpdateDomainNameHeaders };
// UpdateDomainNameRequestBodyMutualTlsAuthentication
/**
 * The mutual TLS authentication configuration for a custom domain name.
**/
var UpdateDomainNameRequestBodyMutualTlsAuthentication = /** @class */ (function (_super) {
    __extends(UpdateDomainNameRequestBodyMutualTlsAuthentication, _super);
    function UpdateDomainNameRequestBodyMutualTlsAuthentication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TruststoreUri" }),
        __metadata("design:type", String)
    ], UpdateDomainNameRequestBodyMutualTlsAuthentication.prototype, "truststoreUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TruststoreVersion" }),
        __metadata("design:type", String)
    ], UpdateDomainNameRequestBodyMutualTlsAuthentication.prototype, "truststoreVersion", void 0);
    return UpdateDomainNameRequestBodyMutualTlsAuthentication;
}(SpeakeasyBase));
export { UpdateDomainNameRequestBodyMutualTlsAuthentication };
var UpdateDomainNameRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDomainNameRequestBody, _super);
    function UpdateDomainNameRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainNameConfigurations", elemType: shared.DomainNameConfiguration }),
        __metadata("design:type", Array)
    ], UpdateDomainNameRequestBody.prototype, "domainNameConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mutualTlsAuthentication" }),
        __metadata("design:type", UpdateDomainNameRequestBodyMutualTlsAuthentication)
    ], UpdateDomainNameRequestBody.prototype, "mutualTlsAuthentication", void 0);
    return UpdateDomainNameRequestBody;
}(SpeakeasyBase));
export { UpdateDomainNameRequestBody };
var UpdateDomainNameRequest = /** @class */ (function (_super) {
    __extends(UpdateDomainNameRequest, _super);
    function UpdateDomainNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainNamePathParams)
    ], UpdateDomainNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainNameHeaders)
    ], UpdateDomainNameRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDomainNameRequestBody)
    ], UpdateDomainNameRequest.prototype, "request", void 0);
    return UpdateDomainNameRequest;
}(SpeakeasyBase));
export { UpdateDomainNameRequest };
var UpdateDomainNameResponse = /** @class */ (function (_super) {
    __extends(UpdateDomainNameResponse, _super);
    function UpdateDomainNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainNameResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainNameResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDomainNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainNameResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDomainNameResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainNameResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateDomainNameResponse)
    ], UpdateDomainNameResponse.prototype, "updateDomainNameResponse", void 0);
    return UpdateDomainNameResponse;
}(SpeakeasyBase));
export { UpdateDomainNameResponse };
