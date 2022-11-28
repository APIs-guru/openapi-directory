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
var CreateBackendHeaders = /** @class */ (function (_super) {
    __extends(CreateBackendHeaders, _super);
    function CreateBackendHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateBackendHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateBackendHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateBackendHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateBackendHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateBackendHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateBackendHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateBackendHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateBackendHeaders;
}(SpeakeasyBase));
export { CreateBackendHeaders };
var CreateBackendRequestBody = /** @class */ (function (_super) {
    __extends(CreateBackendRequestBody, _super);
    function CreateBackendRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], CreateBackendRequestBody.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appName" }),
        __metadata("design:type", String)
    ], CreateBackendRequestBody.prototype, "appName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], CreateBackendRequestBody.prototype, "backendEnvironmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceConfig" }),
        __metadata("design:type", Map)
    ], CreateBackendRequestBody.prototype, "resourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], CreateBackendRequestBody.prototype, "resourceName", void 0);
    return CreateBackendRequestBody;
}(SpeakeasyBase));
export { CreateBackendRequestBody };
var CreateBackendRequest = /** @class */ (function (_super) {
    __extends(CreateBackendRequest, _super);
    function CreateBackendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBackendHeaders)
    ], CreateBackendRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBackendRequestBody)
    ], CreateBackendRequest.prototype, "request", void 0);
    return CreateBackendRequest;
}(SpeakeasyBase));
export { CreateBackendRequest };
var CreateBackendResponse = /** @class */ (function (_super) {
    __extends(CreateBackendResponse, _super);
    function CreateBackendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBackendResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateBackendResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateBackendResponse)
    ], CreateBackendResponse.prototype, "createBackendResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBackendResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBackendResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateBackendResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateBackendResponse.prototype, "tooManyRequestsException", void 0);
    return CreateBackendResponse;
}(SpeakeasyBase));
export { CreateBackendResponse };
