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
export var GetDescribeStaleSecurityGroupsActionEnum;
(function (GetDescribeStaleSecurityGroupsActionEnum) {
    GetDescribeStaleSecurityGroupsActionEnum["DescribeStaleSecurityGroups"] = "DescribeStaleSecurityGroups";
})(GetDescribeStaleSecurityGroupsActionEnum || (GetDescribeStaleSecurityGroupsActionEnum = {}));
export var GetDescribeStaleSecurityGroupsVersionEnum;
(function (GetDescribeStaleSecurityGroupsVersionEnum) {
    GetDescribeStaleSecurityGroupsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDescribeStaleSecurityGroupsVersionEnum || (GetDescribeStaleSecurityGroupsVersionEnum = {}));
var GetDescribeStaleSecurityGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeStaleSecurityGroupsQueryParams, _super);
    function GetDescribeStaleSecurityGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeStaleSecurityGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDescribeStaleSecurityGroupsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetDescribeStaleSecurityGroupsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeStaleSecurityGroupsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeStaleSecurityGroupsQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VpcId" }),
        __metadata("design:type", String)
    ], GetDescribeStaleSecurityGroupsQueryParams.prototype, "vpcId", void 0);
    return GetDescribeStaleSecurityGroupsQueryParams;
}(SpeakeasyBase));
export { GetDescribeStaleSecurityGroupsQueryParams };
var GetDescribeStaleSecurityGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeStaleSecurityGroupsHeaders, _super);
    function GetDescribeStaleSecurityGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeStaleSecurityGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeStaleSecurityGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeStaleSecurityGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeStaleSecurityGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeStaleSecurityGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeStaleSecurityGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeStaleSecurityGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeStaleSecurityGroupsHeaders;
}(SpeakeasyBase));
export { GetDescribeStaleSecurityGroupsHeaders };
var GetDescribeStaleSecurityGroupsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeStaleSecurityGroupsRequest, _super);
    function GetDescribeStaleSecurityGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeStaleSecurityGroupsQueryParams)
    ], GetDescribeStaleSecurityGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeStaleSecurityGroupsHeaders)
    ], GetDescribeStaleSecurityGroupsRequest.prototype, "headers", void 0);
    return GetDescribeStaleSecurityGroupsRequest;
}(SpeakeasyBase));
export { GetDescribeStaleSecurityGroupsRequest };
var GetDescribeStaleSecurityGroupsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeStaleSecurityGroupsResponse, _super);
    function GetDescribeStaleSecurityGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeStaleSecurityGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeStaleSecurityGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeStaleSecurityGroupsResponse.prototype, "statusCode", void 0);
    return GetDescribeStaleSecurityGroupsResponse;
}(SpeakeasyBase));
export { GetDescribeStaleSecurityGroupsResponse };
