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
export var GetCreateLbCookieStickinessPolicyActionEnum;
(function (GetCreateLbCookieStickinessPolicyActionEnum) {
    GetCreateLbCookieStickinessPolicyActionEnum["CreateLbCookieStickinessPolicy"] = "CreateLBCookieStickinessPolicy";
})(GetCreateLbCookieStickinessPolicyActionEnum || (GetCreateLbCookieStickinessPolicyActionEnum = {}));
export var GetCreateLbCookieStickinessPolicyVersionEnum;
(function (GetCreateLbCookieStickinessPolicyVersionEnum) {
    GetCreateLbCookieStickinessPolicyVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(GetCreateLbCookieStickinessPolicyVersionEnum || (GetCreateLbCookieStickinessPolicyVersionEnum = {}));
var GetCreateLbCookieStickinessPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateLbCookieStickinessPolicyQueryParams, _super);
    function GetCreateLbCookieStickinessPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateLbCookieStickinessPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CookieExpirationPeriod" }),
        __metadata("design:type", Number)
    ], GetCreateLbCookieStickinessPolicyQueryParams.prototype, "cookieExpirationPeriod", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" }),
        __metadata("design:type", String)
    ], GetCreateLbCookieStickinessPolicyQueryParams.prototype, "loadBalancerName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" }),
        __metadata("design:type", String)
    ], GetCreateLbCookieStickinessPolicyQueryParams.prototype, "policyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateLbCookieStickinessPolicyQueryParams.prototype, "version", void 0);
    return GetCreateLbCookieStickinessPolicyQueryParams;
}(SpeakeasyBase));
export { GetCreateLbCookieStickinessPolicyQueryParams };
var GetCreateLbCookieStickinessPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetCreateLbCookieStickinessPolicyHeaders, _super);
    function GetCreateLbCookieStickinessPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateLbCookieStickinessPolicyHeaders;
}(SpeakeasyBase));
export { GetCreateLbCookieStickinessPolicyHeaders };
var GetCreateLbCookieStickinessPolicyRequest = /** @class */ (function (_super) {
    __extends(GetCreateLbCookieStickinessPolicyRequest, _super);
    function GetCreateLbCookieStickinessPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateLbCookieStickinessPolicyQueryParams)
    ], GetCreateLbCookieStickinessPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateLbCookieStickinessPolicyHeaders)
    ], GetCreateLbCookieStickinessPolicyRequest.prototype, "headers", void 0);
    return GetCreateLbCookieStickinessPolicyRequest;
}(SpeakeasyBase));
export { GetCreateLbCookieStickinessPolicyRequest };
var GetCreateLbCookieStickinessPolicyResponse = /** @class */ (function (_super) {
    __extends(GetCreateLbCookieStickinessPolicyResponse, _super);
    function GetCreateLbCookieStickinessPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateLbCookieStickinessPolicyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateLbCookieStickinessPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateLbCookieStickinessPolicyResponse.prototype, "statusCode", void 0);
    return GetCreateLbCookieStickinessPolicyResponse;
}(SpeakeasyBase));
export { GetCreateLbCookieStickinessPolicyResponse };
