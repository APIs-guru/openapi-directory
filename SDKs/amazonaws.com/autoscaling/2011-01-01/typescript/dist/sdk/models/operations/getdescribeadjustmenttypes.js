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
export var GetDescribeAdjustmentTypesActionEnum;
(function (GetDescribeAdjustmentTypesActionEnum) {
    GetDescribeAdjustmentTypesActionEnum["DescribeAdjustmentTypes"] = "DescribeAdjustmentTypes";
})(GetDescribeAdjustmentTypesActionEnum || (GetDescribeAdjustmentTypesActionEnum = {}));
export var GetDescribeAdjustmentTypesVersionEnum;
(function (GetDescribeAdjustmentTypesVersionEnum) {
    GetDescribeAdjustmentTypesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeAdjustmentTypesVersionEnum || (GetDescribeAdjustmentTypesVersionEnum = {}));
var GetDescribeAdjustmentTypesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeAdjustmentTypesQueryParams, _super);
    function GetDescribeAdjustmentTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeAdjustmentTypesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeAdjustmentTypesQueryParams.prototype, "version", void 0);
    return GetDescribeAdjustmentTypesQueryParams;
}(SpeakeasyBase));
export { GetDescribeAdjustmentTypesQueryParams };
var GetDescribeAdjustmentTypesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeAdjustmentTypesHeaders, _super);
    function GetDescribeAdjustmentTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeAdjustmentTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeAdjustmentTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeAdjustmentTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeAdjustmentTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeAdjustmentTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeAdjustmentTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeAdjustmentTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeAdjustmentTypesHeaders;
}(SpeakeasyBase));
export { GetDescribeAdjustmentTypesHeaders };
var GetDescribeAdjustmentTypesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeAdjustmentTypesRequest, _super);
    function GetDescribeAdjustmentTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeAdjustmentTypesQueryParams)
    ], GetDescribeAdjustmentTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeAdjustmentTypesHeaders)
    ], GetDescribeAdjustmentTypesRequest.prototype, "headers", void 0);
    return GetDescribeAdjustmentTypesRequest;
}(SpeakeasyBase));
export { GetDescribeAdjustmentTypesRequest };
var GetDescribeAdjustmentTypesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeAdjustmentTypesResponse, _super);
    function GetDescribeAdjustmentTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeAdjustmentTypesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeAdjustmentTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeAdjustmentTypesResponse.prototype, "statusCode", void 0);
    return GetDescribeAdjustmentTypesResponse;
}(SpeakeasyBase));
export { GetDescribeAdjustmentTypesResponse };
