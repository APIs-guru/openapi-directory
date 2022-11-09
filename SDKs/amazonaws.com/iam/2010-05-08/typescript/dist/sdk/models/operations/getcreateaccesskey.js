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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GetCreateAccessKeyActionEnum;
(function (GetCreateAccessKeyActionEnum) {
    GetCreateAccessKeyActionEnum["CreateAccessKey"] = "CreateAccessKey";
})(GetCreateAccessKeyActionEnum || (GetCreateAccessKeyActionEnum = {}));
export var GetCreateAccessKeyVersionEnum;
(function (GetCreateAccessKeyVersionEnum) {
    GetCreateAccessKeyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetCreateAccessKeyVersionEnum || (GetCreateAccessKeyVersionEnum = {}));
var GetCreateAccessKeyQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateAccessKeyQueryParams, _super);
    function GetCreateAccessKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateAccessKeyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetCreateAccessKeyQueryParams.prototype, "userName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateAccessKeyQueryParams.prototype, "version", void 0);
    return GetCreateAccessKeyQueryParams;
}(SpeakeasyBase));
export { GetCreateAccessKeyQueryParams };
var GetCreateAccessKeyHeaders = /** @class */ (function (_super) {
    __extends(GetCreateAccessKeyHeaders, _super);
    function GetCreateAccessKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateAccessKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateAccessKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateAccessKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateAccessKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateAccessKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateAccessKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateAccessKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateAccessKeyHeaders;
}(SpeakeasyBase));
export { GetCreateAccessKeyHeaders };
var GetCreateAccessKeyRequest = /** @class */ (function (_super) {
    __extends(GetCreateAccessKeyRequest, _super);
    function GetCreateAccessKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateAccessKeyQueryParams)
    ], GetCreateAccessKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateAccessKeyHeaders)
    ], GetCreateAccessKeyRequest.prototype, "headers", void 0);
    return GetCreateAccessKeyRequest;
}(SpeakeasyBase));
export { GetCreateAccessKeyRequest };
var GetCreateAccessKeyResponse = /** @class */ (function (_super) {
    __extends(GetCreateAccessKeyResponse, _super);
    function GetCreateAccessKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateAccessKeyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateAccessKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateAccessKeyResponse.prototype, "statusCode", void 0);
    return GetCreateAccessKeyResponse;
}(SpeakeasyBase));
export { GetCreateAccessKeyResponse };
