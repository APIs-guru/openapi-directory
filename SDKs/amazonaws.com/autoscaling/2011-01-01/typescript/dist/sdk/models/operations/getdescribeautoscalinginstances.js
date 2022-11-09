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
export var GetDescribeAutoScalingInstancesActionEnum;
(function (GetDescribeAutoScalingInstancesActionEnum) {
    GetDescribeAutoScalingInstancesActionEnum["DescribeAutoScalingInstances"] = "DescribeAutoScalingInstances";
})(GetDescribeAutoScalingInstancesActionEnum || (GetDescribeAutoScalingInstancesActionEnum = {}));
export var GetDescribeAutoScalingInstancesVersionEnum;
(function (GetDescribeAutoScalingInstancesVersionEnum) {
    GetDescribeAutoScalingInstancesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeAutoScalingInstancesVersionEnum || (GetDescribeAutoScalingInstancesVersionEnum = {}));
var GetDescribeAutoScalingInstancesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeAutoScalingInstancesQueryParams, _super);
    function GetDescribeAutoScalingInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceIds" }),
        __metadata("design:type", Array)
    ], GetDescribeAutoScalingInstancesQueryParams.prototype, "instanceIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeAutoScalingInstancesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingInstancesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingInstancesQueryParams.prototype, "version", void 0);
    return GetDescribeAutoScalingInstancesQueryParams;
}(SpeakeasyBase));
export { GetDescribeAutoScalingInstancesQueryParams };
var GetDescribeAutoScalingInstancesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeAutoScalingInstancesHeaders, _super);
    function GetDescribeAutoScalingInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeAutoScalingInstancesHeaders;
}(SpeakeasyBase));
export { GetDescribeAutoScalingInstancesHeaders };
var GetDescribeAutoScalingInstancesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeAutoScalingInstancesRequest, _super);
    function GetDescribeAutoScalingInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAutoScalingInstancesQueryParams)
    ], GetDescribeAutoScalingInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAutoScalingInstancesHeaders)
    ], GetDescribeAutoScalingInstancesRequest.prototype, "headers", void 0);
    return GetDescribeAutoScalingInstancesRequest;
}(SpeakeasyBase));
export { GetDescribeAutoScalingInstancesRequest };
var GetDescribeAutoScalingInstancesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeAutoScalingInstancesResponse, _super);
    function GetDescribeAutoScalingInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeAutoScalingInstancesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeAutoScalingInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeAutoScalingInstancesResponse.prototype, "statusCode", void 0);
    return GetDescribeAutoScalingInstancesResponse;
}(SpeakeasyBase));
export { GetDescribeAutoScalingInstancesResponse };
