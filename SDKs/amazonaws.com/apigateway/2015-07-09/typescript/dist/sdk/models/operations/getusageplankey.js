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
var GetUsagePlanKeyPathParams = /** @class */ (function (_super) {
    __extends(GetUsagePlanKeyPathParams, _super);
    function GetUsagePlanKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=keyId" }),
        __metadata("design:type", String)
    ], GetUsagePlanKeyPathParams.prototype, "keyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=usageplanId" }),
        __metadata("design:type", String)
    ], GetUsagePlanKeyPathParams.prototype, "usageplanId", void 0);
    return GetUsagePlanKeyPathParams;
}(SpeakeasyBase));
export { GetUsagePlanKeyPathParams };
var GetUsagePlanKeyHeaders = /** @class */ (function (_super) {
    __extends(GetUsagePlanKeyHeaders, _super);
    function GetUsagePlanKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUsagePlanKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUsagePlanKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUsagePlanKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUsagePlanKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUsagePlanKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUsagePlanKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUsagePlanKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUsagePlanKeyHeaders;
}(SpeakeasyBase));
export { GetUsagePlanKeyHeaders };
var GetUsagePlanKeyRequest = /** @class */ (function (_super) {
    __extends(GetUsagePlanKeyRequest, _super);
    function GetUsagePlanKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsagePlanKeyPathParams)
    ], GetUsagePlanKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsagePlanKeyHeaders)
    ], GetUsagePlanKeyRequest.prototype, "headers", void 0);
    return GetUsagePlanKeyRequest;
}(SpeakeasyBase));
export { GetUsagePlanKeyRequest };
var GetUsagePlanKeyResponse = /** @class */ (function (_super) {
    __extends(GetUsagePlanKeyResponse, _super);
    function GetUsagePlanKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUsagePlanKeyResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsagePlanKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUsagePlanKeyResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsagePlanKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUsagePlanKeyResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetUsagePlanKeyResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UsagePlanKey)
    ], GetUsagePlanKeyResponse.prototype, "usagePlanKey", void 0);
    return GetUsagePlanKeyResponse;
}(SpeakeasyBase));
export { GetUsagePlanKeyResponse };
