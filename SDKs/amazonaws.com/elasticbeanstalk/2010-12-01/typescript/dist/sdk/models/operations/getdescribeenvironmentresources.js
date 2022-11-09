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
export var GetDescribeEnvironmentResourcesActionEnum;
(function (GetDescribeEnvironmentResourcesActionEnum) {
    GetDescribeEnvironmentResourcesActionEnum["DescribeEnvironmentResources"] = "DescribeEnvironmentResources";
})(GetDescribeEnvironmentResourcesActionEnum || (GetDescribeEnvironmentResourcesActionEnum = {}));
export var GetDescribeEnvironmentResourcesVersionEnum;
(function (GetDescribeEnvironmentResourcesVersionEnum) {
    GetDescribeEnvironmentResourcesVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDescribeEnvironmentResourcesVersionEnum || (GetDescribeEnvironmentResourcesVersionEnum = {}));
var GetDescribeEnvironmentResourcesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeEnvironmentResourcesQueryParams, _super);
    function GetDescribeEnvironmentResourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentResourcesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentResourcesQueryParams.prototype, "environmentId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentResourcesQueryParams.prototype, "environmentName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentResourcesQueryParams.prototype, "version", void 0);
    return GetDescribeEnvironmentResourcesQueryParams;
}(SpeakeasyBase));
export { GetDescribeEnvironmentResourcesQueryParams };
var GetDescribeEnvironmentResourcesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeEnvironmentResourcesHeaders, _super);
    function GetDescribeEnvironmentResourcesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentResourcesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentResourcesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentResourcesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentResourcesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentResourcesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentResourcesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentResourcesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeEnvironmentResourcesHeaders;
}(SpeakeasyBase));
export { GetDescribeEnvironmentResourcesHeaders };
var GetDescribeEnvironmentResourcesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeEnvironmentResourcesRequest, _super);
    function GetDescribeEnvironmentResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeEnvironmentResourcesQueryParams)
    ], GetDescribeEnvironmentResourcesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeEnvironmentResourcesHeaders)
    ], GetDescribeEnvironmentResourcesRequest.prototype, "headers", void 0);
    return GetDescribeEnvironmentResourcesRequest;
}(SpeakeasyBase));
export { GetDescribeEnvironmentResourcesRequest };
var GetDescribeEnvironmentResourcesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeEnvironmentResourcesResponse, _super);
    function GetDescribeEnvironmentResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeEnvironmentResourcesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeEnvironmentResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeEnvironmentResourcesResponse.prototype, "statusCode", void 0);
    return GetDescribeEnvironmentResourcesResponse;
}(SpeakeasyBase));
export { GetDescribeEnvironmentResourcesResponse };
