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
export var GetVerifyEmailAddressActionEnum;
(function (GetVerifyEmailAddressActionEnum) {
    GetVerifyEmailAddressActionEnum["VerifyEmailAddress"] = "VerifyEmailAddress";
})(GetVerifyEmailAddressActionEnum || (GetVerifyEmailAddressActionEnum = {}));
export var GetVerifyEmailAddressVersionEnum;
(function (GetVerifyEmailAddressVersionEnum) {
    GetVerifyEmailAddressVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetVerifyEmailAddressVersionEnum || (GetVerifyEmailAddressVersionEnum = {}));
var GetVerifyEmailAddressQueryParams = /** @class */ (function (_super) {
    __extends(GetVerifyEmailAddressQueryParams, _super);
    function GetVerifyEmailAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetVerifyEmailAddressQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EmailAddress" }),
        __metadata("design:type", String)
    ], GetVerifyEmailAddressQueryParams.prototype, "emailAddress", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetVerifyEmailAddressQueryParams.prototype, "version", void 0);
    return GetVerifyEmailAddressQueryParams;
}(SpeakeasyBase));
export { GetVerifyEmailAddressQueryParams };
var GetVerifyEmailAddressHeaders = /** @class */ (function (_super) {
    __extends(GetVerifyEmailAddressHeaders, _super);
    function GetVerifyEmailAddressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetVerifyEmailAddressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetVerifyEmailAddressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetVerifyEmailAddressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetVerifyEmailAddressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetVerifyEmailAddressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetVerifyEmailAddressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetVerifyEmailAddressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetVerifyEmailAddressHeaders;
}(SpeakeasyBase));
export { GetVerifyEmailAddressHeaders };
var GetVerifyEmailAddressRequest = /** @class */ (function (_super) {
    __extends(GetVerifyEmailAddressRequest, _super);
    function GetVerifyEmailAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetVerifyEmailAddressQueryParams)
    ], GetVerifyEmailAddressRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetVerifyEmailAddressHeaders)
    ], GetVerifyEmailAddressRequest.prototype, "headers", void 0);
    return GetVerifyEmailAddressRequest;
}(SpeakeasyBase));
export { GetVerifyEmailAddressRequest };
var GetVerifyEmailAddressResponse = /** @class */ (function (_super) {
    __extends(GetVerifyEmailAddressResponse, _super);
    function GetVerifyEmailAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetVerifyEmailAddressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetVerifyEmailAddressResponse.prototype, "statusCode", void 0);
    return GetVerifyEmailAddressResponse;
}(SpeakeasyBase));
export { GetVerifyEmailAddressResponse };
