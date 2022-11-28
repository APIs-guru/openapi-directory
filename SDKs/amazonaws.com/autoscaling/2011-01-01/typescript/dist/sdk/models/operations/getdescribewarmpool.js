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
export var GetDescribeWarmPoolActionEnum;
(function (GetDescribeWarmPoolActionEnum) {
    GetDescribeWarmPoolActionEnum["DescribeWarmPool"] = "DescribeWarmPool";
})(GetDescribeWarmPoolActionEnum || (GetDescribeWarmPoolActionEnum = {}));
export var GetDescribeWarmPoolVersionEnum;
(function (GetDescribeWarmPoolVersionEnum) {
    GetDescribeWarmPoolVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeWarmPoolVersionEnum || (GetDescribeWarmPoolVersionEnum = {}));
var GetDescribeWarmPoolQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeWarmPoolQueryParams, _super);
    function GetDescribeWarmPoolQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeWarmPoolQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeWarmPoolQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeWarmPoolQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeWarmPoolQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeWarmPoolQueryParams.prototype, "version", void 0);
    return GetDescribeWarmPoolQueryParams;
}(SpeakeasyBase));
export { GetDescribeWarmPoolQueryParams };
var GetDescribeWarmPoolHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeWarmPoolHeaders, _super);
    function GetDescribeWarmPoolHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeWarmPoolHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeWarmPoolHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeWarmPoolHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeWarmPoolHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeWarmPoolHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeWarmPoolHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeWarmPoolHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeWarmPoolHeaders;
}(SpeakeasyBase));
export { GetDescribeWarmPoolHeaders };
var GetDescribeWarmPoolRequest = /** @class */ (function (_super) {
    __extends(GetDescribeWarmPoolRequest, _super);
    function GetDescribeWarmPoolRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeWarmPoolQueryParams)
    ], GetDescribeWarmPoolRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeWarmPoolHeaders)
    ], GetDescribeWarmPoolRequest.prototype, "headers", void 0);
    return GetDescribeWarmPoolRequest;
}(SpeakeasyBase));
export { GetDescribeWarmPoolRequest };
var GetDescribeWarmPoolResponse = /** @class */ (function (_super) {
    __extends(GetDescribeWarmPoolResponse, _super);
    function GetDescribeWarmPoolResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeWarmPoolResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeWarmPoolResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeWarmPoolResponse.prototype, "statusCode", void 0);
    return GetDescribeWarmPoolResponse;
}(SpeakeasyBase));
export { GetDescribeWarmPoolResponse };
