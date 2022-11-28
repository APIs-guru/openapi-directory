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
var InvokeDeviceMethodPathParams = /** @class */ (function (_super) {
    __extends(InvokeDeviceMethodPathParams, _super);
    function InvokeDeviceMethodPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], InvokeDeviceMethodPathParams.prototype, "deviceId", void 0);
    return InvokeDeviceMethodPathParams;
}(SpeakeasyBase));
export { InvokeDeviceMethodPathParams };
var InvokeDeviceMethodHeaders = /** @class */ (function (_super) {
    __extends(InvokeDeviceMethodHeaders, _super);
    function InvokeDeviceMethodHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], InvokeDeviceMethodHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], InvokeDeviceMethodHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], InvokeDeviceMethodHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], InvokeDeviceMethodHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], InvokeDeviceMethodHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], InvokeDeviceMethodHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], InvokeDeviceMethodHeaders.prototype, "xAmzSignedHeaders", void 0);
    return InvokeDeviceMethodHeaders;
}(SpeakeasyBase));
export { InvokeDeviceMethodHeaders };
// InvokeDeviceMethodRequestBodyDeviceMethod
/**
 * The device method to invoke.
**/
var InvokeDeviceMethodRequestBodyDeviceMethod = /** @class */ (function (_super) {
    __extends(InvokeDeviceMethodRequestBodyDeviceMethod, _super);
    function InvokeDeviceMethodRequestBodyDeviceMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceType" }),
        __metadata("design:type", String)
    ], InvokeDeviceMethodRequestBodyDeviceMethod.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MethodName" }),
        __metadata("design:type", String)
    ], InvokeDeviceMethodRequestBodyDeviceMethod.prototype, "methodName", void 0);
    return InvokeDeviceMethodRequestBodyDeviceMethod;
}(SpeakeasyBase));
export { InvokeDeviceMethodRequestBodyDeviceMethod };
var InvokeDeviceMethodRequestBody = /** @class */ (function (_super) {
    __extends(InvokeDeviceMethodRequestBody, _super);
    function InvokeDeviceMethodRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceMethod" }),
        __metadata("design:type", InvokeDeviceMethodRequestBodyDeviceMethod)
    ], InvokeDeviceMethodRequestBody.prototype, "deviceMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceMethodParameters" }),
        __metadata("design:type", String)
    ], InvokeDeviceMethodRequestBody.prototype, "deviceMethodParameters", void 0);
    return InvokeDeviceMethodRequestBody;
}(SpeakeasyBase));
export { InvokeDeviceMethodRequestBody };
var InvokeDeviceMethodRequest = /** @class */ (function (_super) {
    __extends(InvokeDeviceMethodRequest, _super);
    function InvokeDeviceMethodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvokeDeviceMethodPathParams)
    ], InvokeDeviceMethodRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InvokeDeviceMethodHeaders)
    ], InvokeDeviceMethodRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", InvokeDeviceMethodRequestBody)
    ], InvokeDeviceMethodRequest.prototype, "request", void 0);
    return InvokeDeviceMethodRequest;
}(SpeakeasyBase));
export { InvokeDeviceMethodRequest };
var InvokeDeviceMethodResponse = /** @class */ (function (_super) {
    __extends(InvokeDeviceMethodResponse, _super);
    function InvokeDeviceMethodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InvokeDeviceMethodResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeDeviceMethodResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeDeviceMethodResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvokeDeviceMethodResponse)
    ], InvokeDeviceMethodResponse.prototype, "invokeDeviceMethodResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeDeviceMethodResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeDeviceMethodResponse.prototype, "rangeNotSatisfiableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeDeviceMethodResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], InvokeDeviceMethodResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InvokeDeviceMethodResponse.prototype, "statusCode", void 0);
    return InvokeDeviceMethodResponse;
}(SpeakeasyBase));
export { InvokeDeviceMethodResponse };
