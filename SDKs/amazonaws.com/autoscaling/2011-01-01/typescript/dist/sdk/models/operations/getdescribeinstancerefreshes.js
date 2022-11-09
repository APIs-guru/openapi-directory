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
export var GetDescribeInstanceRefreshesActionEnum;
(function (GetDescribeInstanceRefreshesActionEnum) {
    GetDescribeInstanceRefreshesActionEnum["DescribeInstanceRefreshes"] = "DescribeInstanceRefreshes";
})(GetDescribeInstanceRefreshesActionEnum || (GetDescribeInstanceRefreshesActionEnum = {}));
export var GetDescribeInstanceRefreshesVersionEnum;
(function (GetDescribeInstanceRefreshesVersionEnum) {
    GetDescribeInstanceRefreshesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeInstanceRefreshesVersionEnum || (GetDescribeInstanceRefreshesVersionEnum = {}));
var GetDescribeInstanceRefreshesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeInstanceRefreshesQueryParams, _super);
    function GetDescribeInstanceRefreshesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceRefreshesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceRefreshesQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceRefreshIds" }),
        __metadata("design:type", Array)
    ], GetDescribeInstanceRefreshesQueryParams.prototype, "instanceRefreshIds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeInstanceRefreshesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceRefreshesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceRefreshesQueryParams.prototype, "version", void 0);
    return GetDescribeInstanceRefreshesQueryParams;
}(SpeakeasyBase));
export { GetDescribeInstanceRefreshesQueryParams };
var GetDescribeInstanceRefreshesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeInstanceRefreshesHeaders, _super);
    function GetDescribeInstanceRefreshesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceRefreshesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceRefreshesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceRefreshesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceRefreshesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceRefreshesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceRefreshesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeInstanceRefreshesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeInstanceRefreshesHeaders;
}(SpeakeasyBase));
export { GetDescribeInstanceRefreshesHeaders };
var GetDescribeInstanceRefreshesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeInstanceRefreshesRequest, _super);
    function GetDescribeInstanceRefreshesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeInstanceRefreshesQueryParams)
    ], GetDescribeInstanceRefreshesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeInstanceRefreshesHeaders)
    ], GetDescribeInstanceRefreshesRequest.prototype, "headers", void 0);
    return GetDescribeInstanceRefreshesRequest;
}(SpeakeasyBase));
export { GetDescribeInstanceRefreshesRequest };
var GetDescribeInstanceRefreshesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeInstanceRefreshesResponse, _super);
    function GetDescribeInstanceRefreshesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeInstanceRefreshesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeInstanceRefreshesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeInstanceRefreshesResponse.prototype, "statusCode", void 0);
    return GetDescribeInstanceRefreshesResponse;
}(SpeakeasyBase));
export { GetDescribeInstanceRefreshesResponse };
