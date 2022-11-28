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
export var GetDeleteAccessKeyActionEnum;
(function (GetDeleteAccessKeyActionEnum) {
    GetDeleteAccessKeyActionEnum["DeleteAccessKey"] = "DeleteAccessKey";
})(GetDeleteAccessKeyActionEnum || (GetDeleteAccessKeyActionEnum = {}));
export var GetDeleteAccessKeyVersionEnum;
(function (GetDeleteAccessKeyVersionEnum) {
    GetDeleteAccessKeyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetDeleteAccessKeyVersionEnum || (GetDeleteAccessKeyVersionEnum = {}));
var GetDeleteAccessKeyQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteAccessKeyQueryParams, _super);
    function GetDeleteAccessKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccessKeyId" }),
        __metadata("design:type", String)
    ], GetDeleteAccessKeyQueryParams.prototype, "accessKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteAccessKeyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetDeleteAccessKeyQueryParams.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteAccessKeyQueryParams.prototype, "version", void 0);
    return GetDeleteAccessKeyQueryParams;
}(SpeakeasyBase));
export { GetDeleteAccessKeyQueryParams };
var GetDeleteAccessKeyHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteAccessKeyHeaders, _super);
    function GetDeleteAccessKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteAccessKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteAccessKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteAccessKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteAccessKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteAccessKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteAccessKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteAccessKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteAccessKeyHeaders;
}(SpeakeasyBase));
export { GetDeleteAccessKeyHeaders };
var GetDeleteAccessKeyRequest = /** @class */ (function (_super) {
    __extends(GetDeleteAccessKeyRequest, _super);
    function GetDeleteAccessKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteAccessKeyQueryParams)
    ], GetDeleteAccessKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteAccessKeyHeaders)
    ], GetDeleteAccessKeyRequest.prototype, "headers", void 0);
    return GetDeleteAccessKeyRequest;
}(SpeakeasyBase));
export { GetDeleteAccessKeyRequest };
var GetDeleteAccessKeyResponse = /** @class */ (function (_super) {
    __extends(GetDeleteAccessKeyResponse, _super);
    function GetDeleteAccessKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteAccessKeyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteAccessKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteAccessKeyResponse.prototype, "statusCode", void 0);
    return GetDeleteAccessKeyResponse;
}(SpeakeasyBase));
export { GetDeleteAccessKeyResponse };
