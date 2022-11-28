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
var GetDirectoryHeaders = /** @class */ (function (_super) {
    __extends(GetDirectoryHeaders, _super);
    function GetDirectoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDirectoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDirectoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDirectoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDirectoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDirectoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDirectoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDirectoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], GetDirectoryHeaders.prototype, "xAmzDataPartition", void 0);
    return GetDirectoryHeaders;
}(SpeakeasyBase));
export { GetDirectoryHeaders };
var GetDirectoryRequest = /** @class */ (function (_super) {
    __extends(GetDirectoryRequest, _super);
    function GetDirectoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDirectoryHeaders)
    ], GetDirectoryRequest.prototype, "headers", void 0);
    return GetDirectoryRequest;
}(SpeakeasyBase));
export { GetDirectoryRequest };
var GetDirectoryResponse = /** @class */ (function (_super) {
    __extends(GetDirectoryResponse, _super);
    function GetDirectoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessDeniedException)
    ], GetDirectoryResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDirectoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetDirectoryResponse)
    ], GetDirectoryResponse.prototype, "getDirectoryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InternalServiceException)
    ], GetDirectoryResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidArnException)
    ], GetDirectoryResponse.prototype, "invalidArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LimitExceededException)
    ], GetDirectoryResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetryableConflictException)
    ], GetDirectoryResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDirectoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationException)
    ], GetDirectoryResponse.prototype, "validationException", void 0);
    return GetDirectoryResponse;
}(SpeakeasyBase));
export { GetDirectoryResponse };
