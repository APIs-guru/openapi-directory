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
export var GetDescribeIndexFieldsActionEnum;
(function (GetDescribeIndexFieldsActionEnum) {
    GetDescribeIndexFieldsActionEnum["DescribeIndexFields"] = "DescribeIndexFields";
})(GetDescribeIndexFieldsActionEnum || (GetDescribeIndexFieldsActionEnum = {}));
export var GetDescribeIndexFieldsVersionEnum;
(function (GetDescribeIndexFieldsVersionEnum) {
    GetDescribeIndexFieldsVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(GetDescribeIndexFieldsVersionEnum || (GetDescribeIndexFieldsVersionEnum = {}));
var GetDescribeIndexFieldsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeIndexFieldsQueryParams, _super);
    function GetDescribeIndexFieldsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeIndexFieldsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Deployed" }),
        __metadata("design:type", Boolean)
    ], GetDescribeIndexFieldsQueryParams.prototype, "deployed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetDescribeIndexFieldsQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FieldNames" }),
        __metadata("design:type", Array)
    ], GetDescribeIndexFieldsQueryParams.prototype, "fieldNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeIndexFieldsQueryParams.prototype, "version", void 0);
    return GetDescribeIndexFieldsQueryParams;
}(SpeakeasyBase));
export { GetDescribeIndexFieldsQueryParams };
var GetDescribeIndexFieldsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeIndexFieldsHeaders, _super);
    function GetDescribeIndexFieldsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeIndexFieldsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeIndexFieldsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeIndexFieldsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeIndexFieldsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeIndexFieldsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeIndexFieldsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeIndexFieldsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeIndexFieldsHeaders;
}(SpeakeasyBase));
export { GetDescribeIndexFieldsHeaders };
var GetDescribeIndexFieldsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeIndexFieldsRequest, _super);
    function GetDescribeIndexFieldsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeIndexFieldsQueryParams)
    ], GetDescribeIndexFieldsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeIndexFieldsHeaders)
    ], GetDescribeIndexFieldsRequest.prototype, "headers", void 0);
    return GetDescribeIndexFieldsRequest;
}(SpeakeasyBase));
export { GetDescribeIndexFieldsRequest };
var GetDescribeIndexFieldsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeIndexFieldsResponse, _super);
    function GetDescribeIndexFieldsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeIndexFieldsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeIndexFieldsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeIndexFieldsResponse.prototype, "statusCode", void 0);
    return GetDescribeIndexFieldsResponse;
}(SpeakeasyBase));
export { GetDescribeIndexFieldsResponse };
