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
export var GetSetLoadBalancerPoliciesOfListenerActionEnum;
(function (GetSetLoadBalancerPoliciesOfListenerActionEnum) {
    GetSetLoadBalancerPoliciesOfListenerActionEnum["SetLoadBalancerPoliciesOfListener"] = "SetLoadBalancerPoliciesOfListener";
})(GetSetLoadBalancerPoliciesOfListenerActionEnum || (GetSetLoadBalancerPoliciesOfListenerActionEnum = {}));
export var GetSetLoadBalancerPoliciesOfListenerVersionEnum;
(function (GetSetLoadBalancerPoliciesOfListenerVersionEnum) {
    GetSetLoadBalancerPoliciesOfListenerVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(GetSetLoadBalancerPoliciesOfListenerVersionEnum || (GetSetLoadBalancerPoliciesOfListenerVersionEnum = {}));
var GetSetLoadBalancerPoliciesOfListenerQueryParams = /** @class */ (function (_super) {
    __extends(GetSetLoadBalancerPoliciesOfListenerQueryParams, _super);
    function GetSetLoadBalancerPoliciesOfListenerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesOfListenerQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesOfListenerQueryParams.prototype, "loadBalancerName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerPort" }),
        __metadata("design:type", Number)
    ], GetSetLoadBalancerPoliciesOfListenerQueryParams.prototype, "loadBalancerPort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicyNames" }),
        __metadata("design:type", Array)
    ], GetSetLoadBalancerPoliciesOfListenerQueryParams.prototype, "policyNames", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesOfListenerQueryParams.prototype, "version", void 0);
    return GetSetLoadBalancerPoliciesOfListenerQueryParams;
}(SpeakeasyBase));
export { GetSetLoadBalancerPoliciesOfListenerQueryParams };
var GetSetLoadBalancerPoliciesOfListenerHeaders = /** @class */ (function (_super) {
    __extends(GetSetLoadBalancerPoliciesOfListenerHeaders, _super);
    function GetSetLoadBalancerPoliciesOfListenerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesOfListenerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesOfListenerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesOfListenerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesOfListenerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesOfListenerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesOfListenerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesOfListenerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetLoadBalancerPoliciesOfListenerHeaders;
}(SpeakeasyBase));
export { GetSetLoadBalancerPoliciesOfListenerHeaders };
var GetSetLoadBalancerPoliciesOfListenerRequest = /** @class */ (function (_super) {
    __extends(GetSetLoadBalancerPoliciesOfListenerRequest, _super);
    function GetSetLoadBalancerPoliciesOfListenerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSetLoadBalancerPoliciesOfListenerQueryParams)
    ], GetSetLoadBalancerPoliciesOfListenerRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSetLoadBalancerPoliciesOfListenerHeaders)
    ], GetSetLoadBalancerPoliciesOfListenerRequest.prototype, "headers", void 0);
    return GetSetLoadBalancerPoliciesOfListenerRequest;
}(SpeakeasyBase));
export { GetSetLoadBalancerPoliciesOfListenerRequest };
var GetSetLoadBalancerPoliciesOfListenerResponse = /** @class */ (function (_super) {
    __extends(GetSetLoadBalancerPoliciesOfListenerResponse, _super);
    function GetSetLoadBalancerPoliciesOfListenerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetLoadBalancerPoliciesOfListenerResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSetLoadBalancerPoliciesOfListenerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSetLoadBalancerPoliciesOfListenerResponse.prototype, "statusCode", void 0);
    return GetSetLoadBalancerPoliciesOfListenerResponse;
}(SpeakeasyBase));
export { GetSetLoadBalancerPoliciesOfListenerResponse };
