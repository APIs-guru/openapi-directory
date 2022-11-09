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
export var GetVerifyDomainIdentityActionEnum;
(function (GetVerifyDomainIdentityActionEnum) {
    GetVerifyDomainIdentityActionEnum["VerifyDomainIdentity"] = "VerifyDomainIdentity";
})(GetVerifyDomainIdentityActionEnum || (GetVerifyDomainIdentityActionEnum = {}));
export var GetVerifyDomainIdentityVersionEnum;
(function (GetVerifyDomainIdentityVersionEnum) {
    GetVerifyDomainIdentityVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetVerifyDomainIdentityVersionEnum || (GetVerifyDomainIdentityVersionEnum = {}));
var GetVerifyDomainIdentityQueryParams = /** @class */ (function (_super) {
    __extends(GetVerifyDomainIdentityQueryParams, _super);
    function GetVerifyDomainIdentityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetVerifyDomainIdentityQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Domain" }),
        __metadata("design:type", String)
    ], GetVerifyDomainIdentityQueryParams.prototype, "domain", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetVerifyDomainIdentityQueryParams.prototype, "version", void 0);
    return GetVerifyDomainIdentityQueryParams;
}(SpeakeasyBase));
export { GetVerifyDomainIdentityQueryParams };
var GetVerifyDomainIdentityHeaders = /** @class */ (function (_super) {
    __extends(GetVerifyDomainIdentityHeaders, _super);
    function GetVerifyDomainIdentityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetVerifyDomainIdentityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetVerifyDomainIdentityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetVerifyDomainIdentityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetVerifyDomainIdentityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetVerifyDomainIdentityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetVerifyDomainIdentityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetVerifyDomainIdentityHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetVerifyDomainIdentityHeaders;
}(SpeakeasyBase));
export { GetVerifyDomainIdentityHeaders };
var GetVerifyDomainIdentityRequest = /** @class */ (function (_super) {
    __extends(GetVerifyDomainIdentityRequest, _super);
    function GetVerifyDomainIdentityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetVerifyDomainIdentityQueryParams)
    ], GetVerifyDomainIdentityRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetVerifyDomainIdentityHeaders)
    ], GetVerifyDomainIdentityRequest.prototype, "headers", void 0);
    return GetVerifyDomainIdentityRequest;
}(SpeakeasyBase));
export { GetVerifyDomainIdentityRequest };
var GetVerifyDomainIdentityResponse = /** @class */ (function (_super) {
    __extends(GetVerifyDomainIdentityResponse, _super);
    function GetVerifyDomainIdentityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetVerifyDomainIdentityResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetVerifyDomainIdentityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetVerifyDomainIdentityResponse.prototype, "statusCode", void 0);
    return GetVerifyDomainIdentityResponse;
}(SpeakeasyBase));
export { GetVerifyDomainIdentityResponse };
