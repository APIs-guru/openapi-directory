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
export var GetDescribeAutoScalingGroupsActionEnum;
(function (GetDescribeAutoScalingGroupsActionEnum) {
    GetDescribeAutoScalingGroupsActionEnum["DescribeAutoScalingGroups"] = "DescribeAutoScalingGroups";
})(GetDescribeAutoScalingGroupsActionEnum || (GetDescribeAutoScalingGroupsActionEnum = {}));
export var GetDescribeAutoScalingGroupsVersionEnum;
(function (GetDescribeAutoScalingGroupsVersionEnum) {
    GetDescribeAutoScalingGroupsVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeAutoScalingGroupsVersionEnum || (GetDescribeAutoScalingGroupsVersionEnum = {}));
var GetDescribeAutoScalingGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeAutoScalingGroupsQueryParams, _super);
    function GetDescribeAutoScalingGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupNames" }),
        __metadata("design:type", Array)
    ], GetDescribeAutoScalingGroupsQueryParams.prototype, "autoScalingGroupNames", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeAutoScalingGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingGroupsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingGroupsQueryParams.prototype, "version", void 0);
    return GetDescribeAutoScalingGroupsQueryParams;
}(SpeakeasyBase));
export { GetDescribeAutoScalingGroupsQueryParams };
var GetDescribeAutoScalingGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeAutoScalingGroupsHeaders, _super);
    function GetDescribeAutoScalingGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeAutoScalingGroupsHeaders;
}(SpeakeasyBase));
export { GetDescribeAutoScalingGroupsHeaders };
var GetDescribeAutoScalingGroupsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeAutoScalingGroupsRequest, _super);
    function GetDescribeAutoScalingGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAutoScalingGroupsQueryParams)
    ], GetDescribeAutoScalingGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAutoScalingGroupsHeaders)
    ], GetDescribeAutoScalingGroupsRequest.prototype, "headers", void 0);
    return GetDescribeAutoScalingGroupsRequest;
}(SpeakeasyBase));
export { GetDescribeAutoScalingGroupsRequest };
var GetDescribeAutoScalingGroupsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeAutoScalingGroupsResponse, _super);
    function GetDescribeAutoScalingGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeAutoScalingGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeAutoScalingGroupsResponse.prototype, "statusCode", void 0);
    return GetDescribeAutoScalingGroupsResponse;
}(SpeakeasyBase));
export { GetDescribeAutoScalingGroupsResponse };
