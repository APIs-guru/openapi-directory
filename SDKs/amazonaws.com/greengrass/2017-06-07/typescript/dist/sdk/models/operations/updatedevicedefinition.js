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
var UpdateDeviceDefinitionPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceDefinitionPathParams, _super);
    function UpdateDeviceDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DeviceDefinitionId" }),
        __metadata("design:type", String)
    ], UpdateDeviceDefinitionPathParams.prototype, "deviceDefinitionId", void 0);
    return UpdateDeviceDefinitionPathParams;
}(SpeakeasyBase));
export { UpdateDeviceDefinitionPathParams };
var UpdateDeviceDefinitionHeaders = /** @class */ (function (_super) {
    __extends(UpdateDeviceDefinitionHeaders, _super);
    function UpdateDeviceDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDeviceDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDeviceDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDeviceDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDeviceDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDeviceDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDeviceDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDeviceDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDeviceDefinitionHeaders;
}(SpeakeasyBase));
export { UpdateDeviceDefinitionHeaders };
var UpdateDeviceDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceDefinitionRequestBody, _super);
    function UpdateDeviceDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateDeviceDefinitionRequestBody.prototype, "name", void 0);
    return UpdateDeviceDefinitionRequestBody;
}(SpeakeasyBase));
export { UpdateDeviceDefinitionRequestBody };
var UpdateDeviceDefinitionRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceDefinitionRequest, _super);
    function UpdateDeviceDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceDefinitionPathParams)
    ], UpdateDeviceDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceDefinitionHeaders)
    ], UpdateDeviceDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceDefinitionRequestBody)
    ], UpdateDeviceDefinitionRequest.prototype, "request", void 0);
    return UpdateDeviceDefinitionRequest;
}(SpeakeasyBase));
export { UpdateDeviceDefinitionRequest };
var UpdateDeviceDefinitionResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceDefinitionResponse, _super);
    function UpdateDeviceDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDeviceDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceDefinitionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeviceDefinitionResponse.prototype, "updateDeviceDefinitionResponse", void 0);
    return UpdateDeviceDefinitionResponse;
}(SpeakeasyBase));
export { UpdateDeviceDefinitionResponse };
