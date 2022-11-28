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
export var GetAttachLoadBalancerToSubnetsActionEnum;
(function (GetAttachLoadBalancerToSubnetsActionEnum) {
    GetAttachLoadBalancerToSubnetsActionEnum["AttachLoadBalancerToSubnets"] = "AttachLoadBalancerToSubnets";
})(GetAttachLoadBalancerToSubnetsActionEnum || (GetAttachLoadBalancerToSubnetsActionEnum = {}));
export var GetAttachLoadBalancerToSubnetsVersionEnum;
(function (GetAttachLoadBalancerToSubnetsVersionEnum) {
    GetAttachLoadBalancerToSubnetsVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(GetAttachLoadBalancerToSubnetsVersionEnum || (GetAttachLoadBalancerToSubnetsVersionEnum = {}));
var GetAttachLoadBalancerToSubnetsQueryParams = /** @class */ (function (_super) {
    __extends(GetAttachLoadBalancerToSubnetsQueryParams, _super);
    function GetAttachLoadBalancerToSubnetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerToSubnetsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerToSubnetsQueryParams.prototype, "loadBalancerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Subnets" }),
        __metadata("design:type", Array)
    ], GetAttachLoadBalancerToSubnetsQueryParams.prototype, "subnets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerToSubnetsQueryParams.prototype, "version", void 0);
    return GetAttachLoadBalancerToSubnetsQueryParams;
}(SpeakeasyBase));
export { GetAttachLoadBalancerToSubnetsQueryParams };
var GetAttachLoadBalancerToSubnetsHeaders = /** @class */ (function (_super) {
    __extends(GetAttachLoadBalancerToSubnetsHeaders, _super);
    function GetAttachLoadBalancerToSubnetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerToSubnetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerToSubnetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerToSubnetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerToSubnetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerToSubnetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerToSubnetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerToSubnetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAttachLoadBalancerToSubnetsHeaders;
}(SpeakeasyBase));
export { GetAttachLoadBalancerToSubnetsHeaders };
var GetAttachLoadBalancerToSubnetsRequest = /** @class */ (function (_super) {
    __extends(GetAttachLoadBalancerToSubnetsRequest, _super);
    function GetAttachLoadBalancerToSubnetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttachLoadBalancerToSubnetsQueryParams)
    ], GetAttachLoadBalancerToSubnetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttachLoadBalancerToSubnetsHeaders)
    ], GetAttachLoadBalancerToSubnetsRequest.prototype, "headers", void 0);
    return GetAttachLoadBalancerToSubnetsRequest;
}(SpeakeasyBase));
export { GetAttachLoadBalancerToSubnetsRequest };
var GetAttachLoadBalancerToSubnetsResponse = /** @class */ (function (_super) {
    __extends(GetAttachLoadBalancerToSubnetsResponse, _super);
    function GetAttachLoadBalancerToSubnetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAttachLoadBalancerToSubnetsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAttachLoadBalancerToSubnetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAttachLoadBalancerToSubnetsResponse.prototype, "statusCode", void 0);
    return GetAttachLoadBalancerToSubnetsResponse;
}(SpeakeasyBase));
export { GetAttachLoadBalancerToSubnetsResponse };
