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
var RemoveAllBackendsPathParams = /** @class */ (function (_super) {
    __extends(RemoveAllBackendsPathParams, _super);
    function RemoveAllBackendsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], RemoveAllBackendsPathParams.prototype, "appId", void 0);
    return RemoveAllBackendsPathParams;
}(SpeakeasyBase));
export { RemoveAllBackendsPathParams };
var RemoveAllBackendsHeaders = /** @class */ (function (_super) {
    __extends(RemoveAllBackendsHeaders, _super);
    function RemoveAllBackendsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RemoveAllBackendsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RemoveAllBackendsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RemoveAllBackendsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RemoveAllBackendsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RemoveAllBackendsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RemoveAllBackendsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RemoveAllBackendsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RemoveAllBackendsHeaders;
}(SpeakeasyBase));
export { RemoveAllBackendsHeaders };
var RemoveAllBackendsRequestBody = /** @class */ (function (_super) {
    __extends(RemoveAllBackendsRequestBody, _super);
    function RemoveAllBackendsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cleanAmplifyApp" }),
        __metadata("design:type", Boolean)
    ], RemoveAllBackendsRequestBody.prototype, "cleanAmplifyApp", void 0);
    return RemoveAllBackendsRequestBody;
}(SpeakeasyBase));
export { RemoveAllBackendsRequestBody };
var RemoveAllBackendsRequest = /** @class */ (function (_super) {
    __extends(RemoveAllBackendsRequest, _super);
    function RemoveAllBackendsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveAllBackendsPathParams)
    ], RemoveAllBackendsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveAllBackendsHeaders)
    ], RemoveAllBackendsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveAllBackendsRequestBody)
    ], RemoveAllBackendsRequest.prototype, "request", void 0);
    return RemoveAllBackendsRequest;
}(SpeakeasyBase));
export { RemoveAllBackendsRequest };
var RemoveAllBackendsResponse = /** @class */ (function (_super) {
    __extends(RemoveAllBackendsResponse, _super);
    function RemoveAllBackendsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveAllBackendsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveAllBackendsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveAllBackendsResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveAllBackendsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RemoveAllBackendsResponse)
    ], RemoveAllBackendsResponse.prototype, "removeAllBackendsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveAllBackendsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveAllBackendsResponse.prototype, "tooManyRequestsException", void 0);
    return RemoveAllBackendsResponse;
}(SpeakeasyBase));
export { RemoveAllBackendsResponse };
