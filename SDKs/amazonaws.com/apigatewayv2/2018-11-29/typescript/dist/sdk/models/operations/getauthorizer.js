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
var GetAuthorizerPathParams = /** @class */ (function (_super) {
    __extends(GetAuthorizerPathParams, _super);
    function GetAuthorizerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], GetAuthorizerPathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorizerId" }),
        __metadata("design:type", String)
    ], GetAuthorizerPathParams.prototype, "authorizerId", void 0);
    return GetAuthorizerPathParams;
}(SpeakeasyBase));
export { GetAuthorizerPathParams };
var GetAuthorizerHeaders = /** @class */ (function (_super) {
    __extends(GetAuthorizerHeaders, _super);
    function GetAuthorizerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAuthorizerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAuthorizerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAuthorizerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAuthorizerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAuthorizerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAuthorizerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAuthorizerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAuthorizerHeaders;
}(SpeakeasyBase));
export { GetAuthorizerHeaders };
var GetAuthorizerRequest = /** @class */ (function (_super) {
    __extends(GetAuthorizerRequest, _super);
    function GetAuthorizerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorizerPathParams)
    ], GetAuthorizerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthorizerHeaders)
    ], GetAuthorizerRequest.prototype, "headers", void 0);
    return GetAuthorizerRequest;
}(SpeakeasyBase));
export { GetAuthorizerRequest };
var GetAuthorizerResponse = /** @class */ (function (_super) {
    __extends(GetAuthorizerResponse, _super);
    function GetAuthorizerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAuthorizerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetAuthorizerResponse)
    ], GetAuthorizerResponse.prototype, "getAuthorizerResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetAuthorizerResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAuthorizerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetAuthorizerResponse.prototype, "tooManyRequestsException", void 0);
    return GetAuthorizerResponse;
}(SpeakeasyBase));
export { GetAuthorizerResponse };
