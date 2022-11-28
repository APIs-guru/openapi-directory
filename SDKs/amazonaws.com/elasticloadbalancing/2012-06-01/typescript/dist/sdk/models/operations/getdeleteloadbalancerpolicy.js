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
export var GetDeleteLoadBalancerPolicyActionEnum;
(function (GetDeleteLoadBalancerPolicyActionEnum) {
    GetDeleteLoadBalancerPolicyActionEnum["DeleteLoadBalancerPolicy"] = "DeleteLoadBalancerPolicy";
})(GetDeleteLoadBalancerPolicyActionEnum || (GetDeleteLoadBalancerPolicyActionEnum = {}));
export var GetDeleteLoadBalancerPolicyVersionEnum;
(function (GetDeleteLoadBalancerPolicyVersionEnum) {
    GetDeleteLoadBalancerPolicyVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(GetDeleteLoadBalancerPolicyVersionEnum || (GetDeleteLoadBalancerPolicyVersionEnum = {}));
var GetDeleteLoadBalancerPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteLoadBalancerPolicyQueryParams, _super);
    function GetDeleteLoadBalancerPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerPolicyQueryParams.prototype, "loadBalancerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyName" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerPolicyQueryParams.prototype, "policyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerPolicyQueryParams.prototype, "version", void 0);
    return GetDeleteLoadBalancerPolicyQueryParams;
}(SpeakeasyBase));
export { GetDeleteLoadBalancerPolicyQueryParams };
var GetDeleteLoadBalancerPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteLoadBalancerPolicyHeaders, _super);
    function GetDeleteLoadBalancerPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteLoadBalancerPolicyHeaders;
}(SpeakeasyBase));
export { GetDeleteLoadBalancerPolicyHeaders };
var GetDeleteLoadBalancerPolicyRequest = /** @class */ (function (_super) {
    __extends(GetDeleteLoadBalancerPolicyRequest, _super);
    function GetDeleteLoadBalancerPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLoadBalancerPolicyQueryParams)
    ], GetDeleteLoadBalancerPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteLoadBalancerPolicyHeaders)
    ], GetDeleteLoadBalancerPolicyRequest.prototype, "headers", void 0);
    return GetDeleteLoadBalancerPolicyRequest;
}(SpeakeasyBase));
export { GetDeleteLoadBalancerPolicyRequest };
var GetDeleteLoadBalancerPolicyResponse = /** @class */ (function (_super) {
    __extends(GetDeleteLoadBalancerPolicyResponse, _super);
    function GetDeleteLoadBalancerPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteLoadBalancerPolicyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteLoadBalancerPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteLoadBalancerPolicyResponse.prototype, "statusCode", void 0);
    return GetDeleteLoadBalancerPolicyResponse;
}(SpeakeasyBase));
export { GetDeleteLoadBalancerPolicyResponse };
