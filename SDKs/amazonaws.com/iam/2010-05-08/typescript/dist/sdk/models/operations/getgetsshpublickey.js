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
export var GetGetSshPublicKeyActionEnum;
(function (GetGetSshPublicKeyActionEnum) {
    GetGetSshPublicKeyActionEnum["GetSshPublicKey"] = "GetSSHPublicKey";
})(GetGetSshPublicKeyActionEnum || (GetGetSshPublicKeyActionEnum = {}));
export var GetGetSshPublicKeyEncodingEnum;
(function (GetGetSshPublicKeyEncodingEnum) {
    GetGetSshPublicKeyEncodingEnum["Ssh"] = "SSH";
    GetGetSshPublicKeyEncodingEnum["Pem"] = "PEM";
})(GetGetSshPublicKeyEncodingEnum || (GetGetSshPublicKeyEncodingEnum = {}));
export var GetGetSshPublicKeyVersionEnum;
(function (GetGetSshPublicKeyVersionEnum) {
    GetGetSshPublicKeyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGetSshPublicKeyVersionEnum || (GetGetSshPublicKeyVersionEnum = {}));
var GetGetSshPublicKeyQueryParams = /** @class */ (function (_super) {
    __extends(GetGetSshPublicKeyQueryParams, _super);
    function GetGetSshPublicKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetSshPublicKeyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Encoding" }),
        __metadata("design:type", String)
    ], GetGetSshPublicKeyQueryParams.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SSHPublicKeyId" }),
        __metadata("design:type", String)
    ], GetGetSshPublicKeyQueryParams.prototype, "sshPublicKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetGetSshPublicKeyQueryParams.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetSshPublicKeyQueryParams.prototype, "version", void 0);
    return GetGetSshPublicKeyQueryParams;
}(SpeakeasyBase));
export { GetGetSshPublicKeyQueryParams };
var GetGetSshPublicKeyHeaders = /** @class */ (function (_super) {
    __extends(GetGetSshPublicKeyHeaders, _super);
    function GetGetSshPublicKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetSshPublicKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetSshPublicKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetSshPublicKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetSshPublicKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetSshPublicKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetSshPublicKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetSshPublicKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetSshPublicKeyHeaders;
}(SpeakeasyBase));
export { GetGetSshPublicKeyHeaders };
var GetGetSshPublicKeyRequest = /** @class */ (function (_super) {
    __extends(GetGetSshPublicKeyRequest, _super);
    function GetGetSshPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetSshPublicKeyQueryParams)
    ], GetGetSshPublicKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetSshPublicKeyHeaders)
    ], GetGetSshPublicKeyRequest.prototype, "headers", void 0);
    return GetGetSshPublicKeyRequest;
}(SpeakeasyBase));
export { GetGetSshPublicKeyRequest };
var GetGetSshPublicKeyResponse = /** @class */ (function (_super) {
    __extends(GetGetSshPublicKeyResponse, _super);
    function GetGetSshPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetSshPublicKeyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetSshPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetSshPublicKeyResponse.prototype, "statusCode", void 0);
    return GetGetSshPublicKeyResponse;
}(SpeakeasyBase));
export { GetGetSshPublicKeyResponse };
