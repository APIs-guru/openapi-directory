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
export var GetDescribeLoadBalancersActionEnum;
(function (GetDescribeLoadBalancersActionEnum) {
    GetDescribeLoadBalancersActionEnum["DescribeLoadBalancers"] = "DescribeLoadBalancers";
})(GetDescribeLoadBalancersActionEnum || (GetDescribeLoadBalancersActionEnum = {}));
export var GetDescribeLoadBalancersVersionEnum;
(function (GetDescribeLoadBalancersVersionEnum) {
    GetDescribeLoadBalancersVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(GetDescribeLoadBalancersVersionEnum || (GetDescribeLoadBalancersVersionEnum = {}));
var GetDescribeLoadBalancersQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeLoadBalancersQueryParams, _super);
    function GetDescribeLoadBalancersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancersQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerArns" }),
        __metadata("design:type", Array)
    ], GetDescribeLoadBalancersQueryParams.prototype, "loadBalancerArns", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancersQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Names" }),
        __metadata("design:type", Array)
    ], GetDescribeLoadBalancersQueryParams.prototype, "names", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], GetDescribeLoadBalancersQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancersQueryParams.prototype, "version", void 0);
    return GetDescribeLoadBalancersQueryParams;
}(SpeakeasyBase));
export { GetDescribeLoadBalancersQueryParams };
var GetDescribeLoadBalancersHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeLoadBalancersHeaders, _super);
    function GetDescribeLoadBalancersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeLoadBalancersHeaders;
}(SpeakeasyBase));
export { GetDescribeLoadBalancersHeaders };
var GetDescribeLoadBalancersRequest = /** @class */ (function (_super) {
    __extends(GetDescribeLoadBalancersRequest, _super);
    function GetDescribeLoadBalancersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeLoadBalancersQueryParams)
    ], GetDescribeLoadBalancersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeLoadBalancersHeaders)
    ], GetDescribeLoadBalancersRequest.prototype, "headers", void 0);
    return GetDescribeLoadBalancersRequest;
}(SpeakeasyBase));
export { GetDescribeLoadBalancersRequest };
var GetDescribeLoadBalancersResponse = /** @class */ (function (_super) {
    __extends(GetDescribeLoadBalancersResponse, _super);
    function GetDescribeLoadBalancersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeLoadBalancersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeLoadBalancersResponse.prototype, "statusCode", void 0);
    return GetDescribeLoadBalancersResponse;
}(SpeakeasyBase));
export { GetDescribeLoadBalancersResponse };
