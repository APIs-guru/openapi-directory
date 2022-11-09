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
export var GetUploadSshPublicKeyActionEnum;
(function (GetUploadSshPublicKeyActionEnum) {
    GetUploadSshPublicKeyActionEnum["UploadSshPublicKey"] = "UploadSSHPublicKey";
})(GetUploadSshPublicKeyActionEnum || (GetUploadSshPublicKeyActionEnum = {}));
export var GetUploadSshPublicKeyVersionEnum;
(function (GetUploadSshPublicKeyVersionEnum) {
    GetUploadSshPublicKeyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUploadSshPublicKeyVersionEnum || (GetUploadSshPublicKeyVersionEnum = {}));
var GetUploadSshPublicKeyQueryParams = /** @class */ (function (_super) {
    __extends(GetUploadSshPublicKeyQueryParams, _super);
    function GetUploadSshPublicKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUploadSshPublicKeyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SSHPublicKeyBody" }),
        __metadata("design:type", String)
    ], GetUploadSshPublicKeyQueryParams.prototype, "sshPublicKeyBody", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetUploadSshPublicKeyQueryParams.prototype, "userName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUploadSshPublicKeyQueryParams.prototype, "version", void 0);
    return GetUploadSshPublicKeyQueryParams;
}(SpeakeasyBase));
export { GetUploadSshPublicKeyQueryParams };
var GetUploadSshPublicKeyHeaders = /** @class */ (function (_super) {
    __extends(GetUploadSshPublicKeyHeaders, _super);
    function GetUploadSshPublicKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUploadSshPublicKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUploadSshPublicKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUploadSshPublicKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUploadSshPublicKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUploadSshPublicKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUploadSshPublicKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUploadSshPublicKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUploadSshPublicKeyHeaders;
}(SpeakeasyBase));
export { GetUploadSshPublicKeyHeaders };
var GetUploadSshPublicKeyRequest = /** @class */ (function (_super) {
    __extends(GetUploadSshPublicKeyRequest, _super);
    function GetUploadSshPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetUploadSshPublicKeyQueryParams)
    ], GetUploadSshPublicKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetUploadSshPublicKeyHeaders)
    ], GetUploadSshPublicKeyRequest.prototype, "headers", void 0);
    return GetUploadSshPublicKeyRequest;
}(SpeakeasyBase));
export { GetUploadSshPublicKeyRequest };
var GetUploadSshPublicKeyResponse = /** @class */ (function (_super) {
    __extends(GetUploadSshPublicKeyResponse, _super);
    function GetUploadSshPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetUploadSshPublicKeyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetUploadSshPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetUploadSshPublicKeyResponse.prototype, "statusCode", void 0);
    return GetUploadSshPublicKeyResponse;
}(SpeakeasyBase));
export { GetUploadSshPublicKeyResponse };
