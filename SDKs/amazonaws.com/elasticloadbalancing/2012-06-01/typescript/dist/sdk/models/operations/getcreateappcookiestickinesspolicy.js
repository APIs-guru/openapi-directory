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
export var GetCreateAppCookieStickinessPolicyActionEnum;
(function (GetCreateAppCookieStickinessPolicyActionEnum) {
    GetCreateAppCookieStickinessPolicyActionEnum["CreateAppCookieStickinessPolicy"] = "CreateAppCookieStickinessPolicy";
})(GetCreateAppCookieStickinessPolicyActionEnum || (GetCreateAppCookieStickinessPolicyActionEnum = {}));
export var GetCreateAppCookieStickinessPolicyVersionEnum;
(function (GetCreateAppCookieStickinessPolicyVersionEnum) {
    GetCreateAppCookieStickinessPolicyVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(GetCreateAppCookieStickinessPolicyVersionEnum || (GetCreateAppCookieStickinessPolicyVersionEnum = {}));
var GetCreateAppCookieStickinessPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateAppCookieStickinessPolicyQueryParams, _super);
    function GetCreateAppCookieStickinessPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateAppCookieStickinessPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CookieName" }),
        __metadata("design:type", String)
    ], GetCreateAppCookieStickinessPolicyQueryParams.prototype, "cookieName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" }),
        __metadata("design:type", String)
    ], GetCreateAppCookieStickinessPolicyQueryParams.prototype, "loadBalancerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyName" }),
        __metadata("design:type", String)
    ], GetCreateAppCookieStickinessPolicyQueryParams.prototype, "policyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateAppCookieStickinessPolicyQueryParams.prototype, "version", void 0);
    return GetCreateAppCookieStickinessPolicyQueryParams;
}(SpeakeasyBase));
export { GetCreateAppCookieStickinessPolicyQueryParams };
var GetCreateAppCookieStickinessPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetCreateAppCookieStickinessPolicyHeaders, _super);
    function GetCreateAppCookieStickinessPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateAppCookieStickinessPolicyHeaders;
}(SpeakeasyBase));
export { GetCreateAppCookieStickinessPolicyHeaders };
var GetCreateAppCookieStickinessPolicyRequest = /** @class */ (function (_super) {
    __extends(GetCreateAppCookieStickinessPolicyRequest, _super);
    function GetCreateAppCookieStickinessPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateAppCookieStickinessPolicyQueryParams)
    ], GetCreateAppCookieStickinessPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateAppCookieStickinessPolicyHeaders)
    ], GetCreateAppCookieStickinessPolicyRequest.prototype, "headers", void 0);
    return GetCreateAppCookieStickinessPolicyRequest;
}(SpeakeasyBase));
export { GetCreateAppCookieStickinessPolicyRequest };
var GetCreateAppCookieStickinessPolicyResponse = /** @class */ (function (_super) {
    __extends(GetCreateAppCookieStickinessPolicyResponse, _super);
    function GetCreateAppCookieStickinessPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateAppCookieStickinessPolicyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCreateAppCookieStickinessPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCreateAppCookieStickinessPolicyResponse.prototype, "statusCode", void 0);
    return GetCreateAppCookieStickinessPolicyResponse;
}(SpeakeasyBase));
export { GetCreateAppCookieStickinessPolicyResponse };
