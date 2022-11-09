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
export var GetApplySecurityGroupsToLoadBalancerActionEnum;
(function (GetApplySecurityGroupsToLoadBalancerActionEnum) {
    GetApplySecurityGroupsToLoadBalancerActionEnum["ApplySecurityGroupsToLoadBalancer"] = "ApplySecurityGroupsToLoadBalancer";
})(GetApplySecurityGroupsToLoadBalancerActionEnum || (GetApplySecurityGroupsToLoadBalancerActionEnum = {}));
export var GetApplySecurityGroupsToLoadBalancerVersionEnum;
(function (GetApplySecurityGroupsToLoadBalancerVersionEnum) {
    GetApplySecurityGroupsToLoadBalancerVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(GetApplySecurityGroupsToLoadBalancerVersionEnum || (GetApplySecurityGroupsToLoadBalancerVersionEnum = {}));
var GetApplySecurityGroupsToLoadBalancerQueryParams = /** @class */ (function (_super) {
    __extends(GetApplySecurityGroupsToLoadBalancerQueryParams, _super);
    function GetApplySecurityGroupsToLoadBalancerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToLoadBalancerQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToLoadBalancerQueryParams.prototype, "loadBalancerName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SecurityGroups" }),
        __metadata("design:type", Array)
    ], GetApplySecurityGroupsToLoadBalancerQueryParams.prototype, "securityGroups", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToLoadBalancerQueryParams.prototype, "version", void 0);
    return GetApplySecurityGroupsToLoadBalancerQueryParams;
}(SpeakeasyBase));
export { GetApplySecurityGroupsToLoadBalancerQueryParams };
var GetApplySecurityGroupsToLoadBalancerHeaders = /** @class */ (function (_super) {
    __extends(GetApplySecurityGroupsToLoadBalancerHeaders, _super);
    function GetApplySecurityGroupsToLoadBalancerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToLoadBalancerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToLoadBalancerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToLoadBalancerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToLoadBalancerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToLoadBalancerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToLoadBalancerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToLoadBalancerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetApplySecurityGroupsToLoadBalancerHeaders;
}(SpeakeasyBase));
export { GetApplySecurityGroupsToLoadBalancerHeaders };
var GetApplySecurityGroupsToLoadBalancerRequest = /** @class */ (function (_super) {
    __extends(GetApplySecurityGroupsToLoadBalancerRequest, _super);
    function GetApplySecurityGroupsToLoadBalancerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApplySecurityGroupsToLoadBalancerQueryParams)
    ], GetApplySecurityGroupsToLoadBalancerRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApplySecurityGroupsToLoadBalancerHeaders)
    ], GetApplySecurityGroupsToLoadBalancerRequest.prototype, "headers", void 0);
    return GetApplySecurityGroupsToLoadBalancerRequest;
}(SpeakeasyBase));
export { GetApplySecurityGroupsToLoadBalancerRequest };
var GetApplySecurityGroupsToLoadBalancerResponse = /** @class */ (function (_super) {
    __extends(GetApplySecurityGroupsToLoadBalancerResponse, _super);
    function GetApplySecurityGroupsToLoadBalancerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetApplySecurityGroupsToLoadBalancerResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApplySecurityGroupsToLoadBalancerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApplySecurityGroupsToLoadBalancerResponse.prototype, "statusCode", void 0);
    return GetApplySecurityGroupsToLoadBalancerResponse;
}(SpeakeasyBase));
export { GetApplySecurityGroupsToLoadBalancerResponse };
