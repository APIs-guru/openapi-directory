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
export var GetDetachLoadBalancerFromSubnetsActionEnum;
(function (GetDetachLoadBalancerFromSubnetsActionEnum) {
    GetDetachLoadBalancerFromSubnetsActionEnum["DetachLoadBalancerFromSubnets"] = "DetachLoadBalancerFromSubnets";
})(GetDetachLoadBalancerFromSubnetsActionEnum || (GetDetachLoadBalancerFromSubnetsActionEnum = {}));
export var GetDetachLoadBalancerFromSubnetsVersionEnum;
(function (GetDetachLoadBalancerFromSubnetsVersionEnum) {
    GetDetachLoadBalancerFromSubnetsVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(GetDetachLoadBalancerFromSubnetsVersionEnum || (GetDetachLoadBalancerFromSubnetsVersionEnum = {}));
var GetDetachLoadBalancerFromSubnetsQueryParams = /** @class */ (function (_super) {
    __extends(GetDetachLoadBalancerFromSubnetsQueryParams, _super);
    function GetDetachLoadBalancerFromSubnetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDetachLoadBalancerFromSubnetsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" }),
        __metadata("design:type", String)
    ], GetDetachLoadBalancerFromSubnetsQueryParams.prototype, "loadBalancerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Subnets" }),
        __metadata("design:type", Array)
    ], GetDetachLoadBalancerFromSubnetsQueryParams.prototype, "subnets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDetachLoadBalancerFromSubnetsQueryParams.prototype, "version", void 0);
    return GetDetachLoadBalancerFromSubnetsQueryParams;
}(SpeakeasyBase));
export { GetDetachLoadBalancerFromSubnetsQueryParams };
var GetDetachLoadBalancerFromSubnetsHeaders = /** @class */ (function (_super) {
    __extends(GetDetachLoadBalancerFromSubnetsHeaders, _super);
    function GetDetachLoadBalancerFromSubnetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDetachLoadBalancerFromSubnetsHeaders;
}(SpeakeasyBase));
export { GetDetachLoadBalancerFromSubnetsHeaders };
var GetDetachLoadBalancerFromSubnetsRequest = /** @class */ (function (_super) {
    __extends(GetDetachLoadBalancerFromSubnetsRequest, _super);
    function GetDetachLoadBalancerFromSubnetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDetachLoadBalancerFromSubnetsQueryParams)
    ], GetDetachLoadBalancerFromSubnetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDetachLoadBalancerFromSubnetsHeaders)
    ], GetDetachLoadBalancerFromSubnetsRequest.prototype, "headers", void 0);
    return GetDetachLoadBalancerFromSubnetsRequest;
}(SpeakeasyBase));
export { GetDetachLoadBalancerFromSubnetsRequest };
var GetDetachLoadBalancerFromSubnetsResponse = /** @class */ (function (_super) {
    __extends(GetDetachLoadBalancerFromSubnetsResponse, _super);
    function GetDetachLoadBalancerFromSubnetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDetachLoadBalancerFromSubnetsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDetachLoadBalancerFromSubnetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDetachLoadBalancerFromSubnetsResponse.prototype, "statusCode", void 0);
    return GetDetachLoadBalancerFromSubnetsResponse;
}(SpeakeasyBase));
export { GetDetachLoadBalancerFromSubnetsResponse };
