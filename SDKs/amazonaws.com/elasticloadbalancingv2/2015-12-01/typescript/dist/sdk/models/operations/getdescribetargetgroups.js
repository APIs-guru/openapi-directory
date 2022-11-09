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
export var GetDescribeTargetGroupsActionEnum;
(function (GetDescribeTargetGroupsActionEnum) {
    GetDescribeTargetGroupsActionEnum["DescribeTargetGroups"] = "DescribeTargetGroups";
})(GetDescribeTargetGroupsActionEnum || (GetDescribeTargetGroupsActionEnum = {}));
export var GetDescribeTargetGroupsVersionEnum;
(function (GetDescribeTargetGroupsVersionEnum) {
    GetDescribeTargetGroupsVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(GetDescribeTargetGroupsVersionEnum || (GetDescribeTargetGroupsVersionEnum = {}));
var GetDescribeTargetGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeTargetGroupsQueryParams, _super);
    function GetDescribeTargetGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerArn" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupsQueryParams.prototype, "loadBalancerArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Names" }),
        __metadata("design:type", Array)
    ], GetDescribeTargetGroupsQueryParams.prototype, "names", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], GetDescribeTargetGroupsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupArns" }),
        __metadata("design:type", Array)
    ], GetDescribeTargetGroupsQueryParams.prototype, "targetGroupArns", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupsQueryParams.prototype, "version", void 0);
    return GetDescribeTargetGroupsQueryParams;
}(SpeakeasyBase));
export { GetDescribeTargetGroupsQueryParams };
var GetDescribeTargetGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeTargetGroupsHeaders, _super);
    function GetDescribeTargetGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeTargetGroupsHeaders;
}(SpeakeasyBase));
export { GetDescribeTargetGroupsHeaders };
var GetDescribeTargetGroupsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeTargetGroupsRequest, _super);
    function GetDescribeTargetGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeTargetGroupsQueryParams)
    ], GetDescribeTargetGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeTargetGroupsHeaders)
    ], GetDescribeTargetGroupsRequest.prototype, "headers", void 0);
    return GetDescribeTargetGroupsRequest;
}(SpeakeasyBase));
export { GetDescribeTargetGroupsRequest };
var GetDescribeTargetGroupsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeTargetGroupsResponse, _super);
    function GetDescribeTargetGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeTargetGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeTargetGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeTargetGroupsResponse.prototype, "statusCode", void 0);
    return GetDescribeTargetGroupsResponse;
}(SpeakeasyBase));
export { GetDescribeTargetGroupsResponse };
