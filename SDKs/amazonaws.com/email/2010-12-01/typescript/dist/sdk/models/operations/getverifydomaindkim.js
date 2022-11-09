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
export var GetVerifyDomainDkimActionEnum;
(function (GetVerifyDomainDkimActionEnum) {
    GetVerifyDomainDkimActionEnum["VerifyDomainDkim"] = "VerifyDomainDkim";
})(GetVerifyDomainDkimActionEnum || (GetVerifyDomainDkimActionEnum = {}));
export var GetVerifyDomainDkimVersionEnum;
(function (GetVerifyDomainDkimVersionEnum) {
    GetVerifyDomainDkimVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetVerifyDomainDkimVersionEnum || (GetVerifyDomainDkimVersionEnum = {}));
var GetVerifyDomainDkimQueryParams = /** @class */ (function (_super) {
    __extends(GetVerifyDomainDkimQueryParams, _super);
    function GetVerifyDomainDkimQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetVerifyDomainDkimQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Domain" }),
        __metadata("design:type", String)
    ], GetVerifyDomainDkimQueryParams.prototype, "domain", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetVerifyDomainDkimQueryParams.prototype, "version", void 0);
    return GetVerifyDomainDkimQueryParams;
}(SpeakeasyBase));
export { GetVerifyDomainDkimQueryParams };
var GetVerifyDomainDkimHeaders = /** @class */ (function (_super) {
    __extends(GetVerifyDomainDkimHeaders, _super);
    function GetVerifyDomainDkimHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetVerifyDomainDkimHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetVerifyDomainDkimHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetVerifyDomainDkimHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetVerifyDomainDkimHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetVerifyDomainDkimHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetVerifyDomainDkimHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetVerifyDomainDkimHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetVerifyDomainDkimHeaders;
}(SpeakeasyBase));
export { GetVerifyDomainDkimHeaders };
var GetVerifyDomainDkimRequest = /** @class */ (function (_super) {
    __extends(GetVerifyDomainDkimRequest, _super);
    function GetVerifyDomainDkimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetVerifyDomainDkimQueryParams)
    ], GetVerifyDomainDkimRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetVerifyDomainDkimHeaders)
    ], GetVerifyDomainDkimRequest.prototype, "headers", void 0);
    return GetVerifyDomainDkimRequest;
}(SpeakeasyBase));
export { GetVerifyDomainDkimRequest };
var GetVerifyDomainDkimResponse = /** @class */ (function (_super) {
    __extends(GetVerifyDomainDkimResponse, _super);
    function GetVerifyDomainDkimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetVerifyDomainDkimResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetVerifyDomainDkimResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetVerifyDomainDkimResponse.prototype, "statusCode", void 0);
    return GetVerifyDomainDkimResponse;
}(SpeakeasyBase));
export { GetVerifyDomainDkimResponse };
