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
export var GetListSigningCertificatesActionEnum;
(function (GetListSigningCertificatesActionEnum) {
    GetListSigningCertificatesActionEnum["ListSigningCertificates"] = "ListSigningCertificates";
})(GetListSigningCertificatesActionEnum || (GetListSigningCertificatesActionEnum = {}));
export var GetListSigningCertificatesVersionEnum;
(function (GetListSigningCertificatesVersionEnum) {
    GetListSigningCertificatesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListSigningCertificatesVersionEnum || (GetListSigningCertificatesVersionEnum = {}));
var GetListSigningCertificatesQueryParams = /** @class */ (function (_super) {
    __extends(GetListSigningCertificatesQueryParams, _super);
    function GetListSigningCertificatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListSigningCertificatesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListSigningCertificatesQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListSigningCertificatesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetListSigningCertificatesQueryParams.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListSigningCertificatesQueryParams.prototype, "version", void 0);
    return GetListSigningCertificatesQueryParams;
}(SpeakeasyBase));
export { GetListSigningCertificatesQueryParams };
var GetListSigningCertificatesHeaders = /** @class */ (function (_super) {
    __extends(GetListSigningCertificatesHeaders, _super);
    function GetListSigningCertificatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListSigningCertificatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListSigningCertificatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListSigningCertificatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListSigningCertificatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListSigningCertificatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListSigningCertificatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListSigningCertificatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListSigningCertificatesHeaders;
}(SpeakeasyBase));
export { GetListSigningCertificatesHeaders };
var GetListSigningCertificatesRequest = /** @class */ (function (_super) {
    __extends(GetListSigningCertificatesRequest, _super);
    function GetListSigningCertificatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListSigningCertificatesQueryParams)
    ], GetListSigningCertificatesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListSigningCertificatesHeaders)
    ], GetListSigningCertificatesRequest.prototype, "headers", void 0);
    return GetListSigningCertificatesRequest;
}(SpeakeasyBase));
export { GetListSigningCertificatesRequest };
var GetListSigningCertificatesResponse = /** @class */ (function (_super) {
    __extends(GetListSigningCertificatesResponse, _super);
    function GetListSigningCertificatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListSigningCertificatesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListSigningCertificatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListSigningCertificatesResponse.prototype, "statusCode", void 0);
    return GetListSigningCertificatesResponse;
}(SpeakeasyBase));
export { GetListSigningCertificatesResponse };
