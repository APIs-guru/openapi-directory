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
export var GetDescribeLoadBalancerTargetGroupsActionEnum;
(function (GetDescribeLoadBalancerTargetGroupsActionEnum) {
    GetDescribeLoadBalancerTargetGroupsActionEnum["DescribeLoadBalancerTargetGroups"] = "DescribeLoadBalancerTargetGroups";
})(GetDescribeLoadBalancerTargetGroupsActionEnum || (GetDescribeLoadBalancerTargetGroupsActionEnum = {}));
export var GetDescribeLoadBalancerTargetGroupsVersionEnum;
(function (GetDescribeLoadBalancerTargetGroupsVersionEnum) {
    GetDescribeLoadBalancerTargetGroupsVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeLoadBalancerTargetGroupsVersionEnum || (GetDescribeLoadBalancerTargetGroupsVersionEnum = {}));
var GetDescribeLoadBalancerTargetGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeLoadBalancerTargetGroupsQueryParams, _super);
    function GetDescribeLoadBalancerTargetGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancerTargetGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancerTargetGroupsQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeLoadBalancerTargetGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancerTargetGroupsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancerTargetGroupsQueryParams.prototype, "version", void 0);
    return GetDescribeLoadBalancerTargetGroupsQueryParams;
}(SpeakeasyBase));
export { GetDescribeLoadBalancerTargetGroupsQueryParams };
var GetDescribeLoadBalancerTargetGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeLoadBalancerTargetGroupsHeaders, _super);
    function GetDescribeLoadBalancerTargetGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeLoadBalancerTargetGroupsHeaders;
}(SpeakeasyBase));
export { GetDescribeLoadBalancerTargetGroupsHeaders };
var GetDescribeLoadBalancerTargetGroupsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeLoadBalancerTargetGroupsRequest, _super);
    function GetDescribeLoadBalancerTargetGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeLoadBalancerTargetGroupsQueryParams)
    ], GetDescribeLoadBalancerTargetGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeLoadBalancerTargetGroupsHeaders)
    ], GetDescribeLoadBalancerTargetGroupsRequest.prototype, "headers", void 0);
    return GetDescribeLoadBalancerTargetGroupsRequest;
}(SpeakeasyBase));
export { GetDescribeLoadBalancerTargetGroupsRequest };
var GetDescribeLoadBalancerTargetGroupsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeLoadBalancerTargetGroupsResponse, _super);
    function GetDescribeLoadBalancerTargetGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeLoadBalancerTargetGroupsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeLoadBalancerTargetGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeLoadBalancerTargetGroupsResponse.prototype, "statusCode", void 0);
    return GetDescribeLoadBalancerTargetGroupsResponse;
}(SpeakeasyBase));
export { GetDescribeLoadBalancerTargetGroupsResponse };
