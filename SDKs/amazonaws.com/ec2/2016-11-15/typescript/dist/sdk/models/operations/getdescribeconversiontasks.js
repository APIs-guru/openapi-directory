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
export var GetDescribeConversionTasksActionEnum;
(function (GetDescribeConversionTasksActionEnum) {
    GetDescribeConversionTasksActionEnum["DescribeConversionTasks"] = "DescribeConversionTasks";
})(GetDescribeConversionTasksActionEnum || (GetDescribeConversionTasksActionEnum = {}));
export var GetDescribeConversionTasksVersionEnum;
(function (GetDescribeConversionTasksVersionEnum) {
    GetDescribeConversionTasksVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDescribeConversionTasksVersionEnum || (GetDescribeConversionTasksVersionEnum = {}));
var GetDescribeConversionTasksQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeConversionTasksQueryParams, _super);
    function GetDescribeConversionTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeConversionTasksQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConversionTaskId" }),
        __metadata("design:type", Array)
    ], GetDescribeConversionTasksQueryParams.prototype, "conversionTaskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDescribeConversionTasksQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeConversionTasksQueryParams.prototype, "version", void 0);
    return GetDescribeConversionTasksQueryParams;
}(SpeakeasyBase));
export { GetDescribeConversionTasksQueryParams };
var GetDescribeConversionTasksHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeConversionTasksHeaders, _super);
    function GetDescribeConversionTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeConversionTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeConversionTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeConversionTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeConversionTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeConversionTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeConversionTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeConversionTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeConversionTasksHeaders;
}(SpeakeasyBase));
export { GetDescribeConversionTasksHeaders };
var GetDescribeConversionTasksRequest = /** @class */ (function (_super) {
    __extends(GetDescribeConversionTasksRequest, _super);
    function GetDescribeConversionTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeConversionTasksQueryParams)
    ], GetDescribeConversionTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeConversionTasksHeaders)
    ], GetDescribeConversionTasksRequest.prototype, "headers", void 0);
    return GetDescribeConversionTasksRequest;
}(SpeakeasyBase));
export { GetDescribeConversionTasksRequest };
var GetDescribeConversionTasksResponse = /** @class */ (function (_super) {
    __extends(GetDescribeConversionTasksResponse, _super);
    function GetDescribeConversionTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeConversionTasksResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeConversionTasksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeConversionTasksResponse.prototype, "statusCode", void 0);
    return GetDescribeConversionTasksResponse;
}(SpeakeasyBase));
export { GetDescribeConversionTasksResponse };
