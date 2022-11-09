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
export var GetDescribeApplicationVersionsActionEnum;
(function (GetDescribeApplicationVersionsActionEnum) {
    GetDescribeApplicationVersionsActionEnum["DescribeApplicationVersions"] = "DescribeApplicationVersions";
})(GetDescribeApplicationVersionsActionEnum || (GetDescribeApplicationVersionsActionEnum = {}));
export var GetDescribeApplicationVersionsVersionEnum;
(function (GetDescribeApplicationVersionsVersionEnum) {
    GetDescribeApplicationVersionsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDescribeApplicationVersionsVersionEnum || (GetDescribeApplicationVersionsVersionEnum = {}));
var GetDescribeApplicationVersionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeApplicationVersionsQueryParams, _super);
    function GetDescribeApplicationVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeApplicationVersionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" }),
        __metadata("design:type", String)
    ], GetDescribeApplicationVersionsQueryParams.prototype, "applicationName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeApplicationVersionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeApplicationVersionsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeApplicationVersionsQueryParams.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VersionLabels" }),
        __metadata("design:type", Array)
    ], GetDescribeApplicationVersionsQueryParams.prototype, "versionLabels", void 0);
    return GetDescribeApplicationVersionsQueryParams;
}(SpeakeasyBase));
export { GetDescribeApplicationVersionsQueryParams };
var GetDescribeApplicationVersionsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeApplicationVersionsHeaders, _super);
    function GetDescribeApplicationVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeApplicationVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeApplicationVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeApplicationVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeApplicationVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeApplicationVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeApplicationVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeApplicationVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeApplicationVersionsHeaders;
}(SpeakeasyBase));
export { GetDescribeApplicationVersionsHeaders };
var GetDescribeApplicationVersionsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeApplicationVersionsRequest, _super);
    function GetDescribeApplicationVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeApplicationVersionsQueryParams)
    ], GetDescribeApplicationVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeApplicationVersionsHeaders)
    ], GetDescribeApplicationVersionsRequest.prototype, "headers", void 0);
    return GetDescribeApplicationVersionsRequest;
}(SpeakeasyBase));
export { GetDescribeApplicationVersionsRequest };
var GetDescribeApplicationVersionsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeApplicationVersionsResponse, _super);
    function GetDescribeApplicationVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeApplicationVersionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeApplicationVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeApplicationVersionsResponse.prototype, "statusCode", void 0);
    return GetDescribeApplicationVersionsResponse;
}(SpeakeasyBase));
export { GetDescribeApplicationVersionsResponse };
