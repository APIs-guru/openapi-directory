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
export var GetUpdateAccessKeyActionEnum;
(function (GetUpdateAccessKeyActionEnum) {
    GetUpdateAccessKeyActionEnum["UpdateAccessKey"] = "UpdateAccessKey";
})(GetUpdateAccessKeyActionEnum || (GetUpdateAccessKeyActionEnum = {}));
export var GetUpdateAccessKeyStatusEnum;
(function (GetUpdateAccessKeyStatusEnum) {
    GetUpdateAccessKeyStatusEnum["Active"] = "Active";
    GetUpdateAccessKeyStatusEnum["Inactive"] = "Inactive";
})(GetUpdateAccessKeyStatusEnum || (GetUpdateAccessKeyStatusEnum = {}));
export var GetUpdateAccessKeyVersionEnum;
(function (GetUpdateAccessKeyVersionEnum) {
    GetUpdateAccessKeyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUpdateAccessKeyVersionEnum || (GetUpdateAccessKeyVersionEnum = {}));
var GetUpdateAccessKeyQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateAccessKeyQueryParams, _super);
    function GetUpdateAccessKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccessKeyId" }),
        __metadata("design:type", String)
    ], GetUpdateAccessKeyQueryParams.prototype, "accessKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateAccessKeyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], GetUpdateAccessKeyQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetUpdateAccessKeyQueryParams.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateAccessKeyQueryParams.prototype, "version", void 0);
    return GetUpdateAccessKeyQueryParams;
}(SpeakeasyBase));
export { GetUpdateAccessKeyQueryParams };
var GetUpdateAccessKeyHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateAccessKeyHeaders, _super);
    function GetUpdateAccessKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateAccessKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateAccessKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateAccessKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateAccessKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateAccessKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateAccessKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateAccessKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateAccessKeyHeaders;
}(SpeakeasyBase));
export { GetUpdateAccessKeyHeaders };
var GetUpdateAccessKeyRequest = /** @class */ (function (_super) {
    __extends(GetUpdateAccessKeyRequest, _super);
    function GetUpdateAccessKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateAccessKeyQueryParams)
    ], GetUpdateAccessKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateAccessKeyHeaders)
    ], GetUpdateAccessKeyRequest.prototype, "headers", void 0);
    return GetUpdateAccessKeyRequest;
}(SpeakeasyBase));
export { GetUpdateAccessKeyRequest };
var GetUpdateAccessKeyResponse = /** @class */ (function (_super) {
    __extends(GetUpdateAccessKeyResponse, _super);
    function GetUpdateAccessKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateAccessKeyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUpdateAccessKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUpdateAccessKeyResponse.prototype, "statusCode", void 0);
    return GetUpdateAccessKeyResponse;
}(SpeakeasyBase));
export { GetUpdateAccessKeyResponse };
