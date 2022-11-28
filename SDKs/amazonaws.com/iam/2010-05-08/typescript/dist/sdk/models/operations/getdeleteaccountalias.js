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
export var GetDeleteAccountAliasActionEnum;
(function (GetDeleteAccountAliasActionEnum) {
    GetDeleteAccountAliasActionEnum["DeleteAccountAlias"] = "DeleteAccountAlias";
})(GetDeleteAccountAliasActionEnum || (GetDeleteAccountAliasActionEnum = {}));
export var GetDeleteAccountAliasVersionEnum;
(function (GetDeleteAccountAliasVersionEnum) {
    GetDeleteAccountAliasVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetDeleteAccountAliasVersionEnum || (GetDeleteAccountAliasVersionEnum = {}));
var GetDeleteAccountAliasQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteAccountAliasQueryParams, _super);
    function GetDeleteAccountAliasQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccountAlias" }),
        __metadata("design:type", String)
    ], GetDeleteAccountAliasQueryParams.prototype, "accountAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteAccountAliasQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteAccountAliasQueryParams.prototype, "version", void 0);
    return GetDeleteAccountAliasQueryParams;
}(SpeakeasyBase));
export { GetDeleteAccountAliasQueryParams };
var GetDeleteAccountAliasHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteAccountAliasHeaders, _super);
    function GetDeleteAccountAliasHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteAccountAliasHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteAccountAliasHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteAccountAliasHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteAccountAliasHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteAccountAliasHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteAccountAliasHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteAccountAliasHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteAccountAliasHeaders;
}(SpeakeasyBase));
export { GetDeleteAccountAliasHeaders };
var GetDeleteAccountAliasRequest = /** @class */ (function (_super) {
    __extends(GetDeleteAccountAliasRequest, _super);
    function GetDeleteAccountAliasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteAccountAliasQueryParams)
    ], GetDeleteAccountAliasRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteAccountAliasHeaders)
    ], GetDeleteAccountAliasRequest.prototype, "headers", void 0);
    return GetDeleteAccountAliasRequest;
}(SpeakeasyBase));
export { GetDeleteAccountAliasRequest };
var GetDeleteAccountAliasResponse = /** @class */ (function (_super) {
    __extends(GetDeleteAccountAliasResponse, _super);
    function GetDeleteAccountAliasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteAccountAliasResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteAccountAliasResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteAccountAliasResponse.prototype, "statusCode", void 0);
    return GetDeleteAccountAliasResponse;
}(SpeakeasyBase));
export { GetDeleteAccountAliasResponse };
