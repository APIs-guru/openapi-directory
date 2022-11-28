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
export var GetDescribeMetricCollectionTypesActionEnum;
(function (GetDescribeMetricCollectionTypesActionEnum) {
    GetDescribeMetricCollectionTypesActionEnum["DescribeMetricCollectionTypes"] = "DescribeMetricCollectionTypes";
})(GetDescribeMetricCollectionTypesActionEnum || (GetDescribeMetricCollectionTypesActionEnum = {}));
export var GetDescribeMetricCollectionTypesVersionEnum;
(function (GetDescribeMetricCollectionTypesVersionEnum) {
    GetDescribeMetricCollectionTypesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeMetricCollectionTypesVersionEnum || (GetDescribeMetricCollectionTypesVersionEnum = {}));
var GetDescribeMetricCollectionTypesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeMetricCollectionTypesQueryParams, _super);
    function GetDescribeMetricCollectionTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesQueryParams.prototype, "version", void 0);
    return GetDescribeMetricCollectionTypesQueryParams;
}(SpeakeasyBase));
export { GetDescribeMetricCollectionTypesQueryParams };
var GetDescribeMetricCollectionTypesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeMetricCollectionTypesHeaders, _super);
    function GetDescribeMetricCollectionTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeMetricCollectionTypesHeaders;
}(SpeakeasyBase));
export { GetDescribeMetricCollectionTypesHeaders };
var GetDescribeMetricCollectionTypesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeMetricCollectionTypesRequest, _super);
    function GetDescribeMetricCollectionTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeMetricCollectionTypesQueryParams)
    ], GetDescribeMetricCollectionTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeMetricCollectionTypesHeaders)
    ], GetDescribeMetricCollectionTypesRequest.prototype, "headers", void 0);
    return GetDescribeMetricCollectionTypesRequest;
}(SpeakeasyBase));
export { GetDescribeMetricCollectionTypesRequest };
var GetDescribeMetricCollectionTypesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeMetricCollectionTypesResponse, _super);
    function GetDescribeMetricCollectionTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeMetricCollectionTypesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeMetricCollectionTypesResponse.prototype, "statusCode", void 0);
    return GetDescribeMetricCollectionTypesResponse;
}(SpeakeasyBase));
export { GetDescribeMetricCollectionTypesResponse };
