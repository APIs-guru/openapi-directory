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
export var GetDescribeAccountLimitsActionEnum;
(function (GetDescribeAccountLimitsActionEnum) {
    GetDescribeAccountLimitsActionEnum["DescribeAccountLimits"] = "DescribeAccountLimits";
})(GetDescribeAccountLimitsActionEnum || (GetDescribeAccountLimitsActionEnum = {}));
export var GetDescribeAccountLimitsVersionEnum;
(function (GetDescribeAccountLimitsVersionEnum) {
    GetDescribeAccountLimitsVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(GetDescribeAccountLimitsVersionEnum || (GetDescribeAccountLimitsVersionEnum = {}));
var GetDescribeAccountLimitsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeAccountLimitsQueryParams, _super);
    function GetDescribeAccountLimitsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeAccountLimitsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeAccountLimitsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], GetDescribeAccountLimitsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeAccountLimitsQueryParams.prototype, "version", void 0);
    return GetDescribeAccountLimitsQueryParams;
}(SpeakeasyBase));
export { GetDescribeAccountLimitsQueryParams };
var GetDescribeAccountLimitsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeAccountLimitsHeaders, _super);
    function GetDescribeAccountLimitsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeAccountLimitsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeAccountLimitsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeAccountLimitsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeAccountLimitsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeAccountLimitsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeAccountLimitsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeAccountLimitsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeAccountLimitsHeaders;
}(SpeakeasyBase));
export { GetDescribeAccountLimitsHeaders };
var GetDescribeAccountLimitsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeAccountLimitsRequest, _super);
    function GetDescribeAccountLimitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeAccountLimitsQueryParams)
    ], GetDescribeAccountLimitsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeAccountLimitsHeaders)
    ], GetDescribeAccountLimitsRequest.prototype, "headers", void 0);
    return GetDescribeAccountLimitsRequest;
}(SpeakeasyBase));
export { GetDescribeAccountLimitsRequest };
var GetDescribeAccountLimitsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeAccountLimitsResponse, _super);
    function GetDescribeAccountLimitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeAccountLimitsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeAccountLimitsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeAccountLimitsResponse.prototype, "statusCode", void 0);
    return GetDescribeAccountLimitsResponse;
}(SpeakeasyBase));
export { GetDescribeAccountLimitsResponse };
