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
var SetLoggingOptionsHeaders = /** @class */ (function (_super) {
    __extends(SetLoggingOptionsHeaders, _super);
    function SetLoggingOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SetLoggingOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SetLoggingOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SetLoggingOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SetLoggingOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SetLoggingOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SetLoggingOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SetLoggingOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SetLoggingOptionsHeaders;
}(SpeakeasyBase));
export { SetLoggingOptionsHeaders };
// SetLoggingOptionsRequestBodyLoggingOptionsPayload
/**
 * Describes the logging options payload.
**/
var SetLoggingOptionsRequestBodyLoggingOptionsPayload = /** @class */ (function (_super) {
    __extends(SetLoggingOptionsRequestBodyLoggingOptionsPayload, _super);
    function SetLoggingOptionsRequestBodyLoggingOptionsPayload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logLevel" }),
        __metadata("design:type", String)
    ], SetLoggingOptionsRequestBodyLoggingOptionsPayload.prototype, "logLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], SetLoggingOptionsRequestBodyLoggingOptionsPayload.prototype, "roleArn", void 0);
    return SetLoggingOptionsRequestBodyLoggingOptionsPayload;
}(SpeakeasyBase));
export { SetLoggingOptionsRequestBodyLoggingOptionsPayload };
var SetLoggingOptionsRequestBody = /** @class */ (function (_super) {
    __extends(SetLoggingOptionsRequestBody, _super);
    function SetLoggingOptionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingOptionsPayload" }),
        __metadata("design:type", SetLoggingOptionsRequestBodyLoggingOptionsPayload)
    ], SetLoggingOptionsRequestBody.prototype, "loggingOptionsPayload", void 0);
    return SetLoggingOptionsRequestBody;
}(SpeakeasyBase));
export { SetLoggingOptionsRequestBody };
var SetLoggingOptionsRequest = /** @class */ (function (_super) {
    __extends(SetLoggingOptionsRequest, _super);
    function SetLoggingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetLoggingOptionsHeaders)
    ], SetLoggingOptionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SetLoggingOptionsRequestBody)
    ], SetLoggingOptionsRequest.prototype, "request", void 0);
    return SetLoggingOptionsRequest;
}(SpeakeasyBase));
export { SetLoggingOptionsRequest };
var SetLoggingOptionsResponse = /** @class */ (function (_super) {
    __extends(SetLoggingOptionsResponse, _super);
    function SetLoggingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetLoggingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetLoggingOptionsResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetLoggingOptionsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SetLoggingOptionsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetLoggingOptionsResponse.prototype, "statusCode", void 0);
    return SetLoggingOptionsResponse;
}(SpeakeasyBase));
export { SetLoggingOptionsResponse };
