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
export var GetDescribeServiceUpdatesActionEnum;
(function (GetDescribeServiceUpdatesActionEnum) {
    GetDescribeServiceUpdatesActionEnum["DescribeServiceUpdates"] = "DescribeServiceUpdates";
})(GetDescribeServiceUpdatesActionEnum || (GetDescribeServiceUpdatesActionEnum = {}));
export var GetDescribeServiceUpdatesVersionEnum;
(function (GetDescribeServiceUpdatesVersionEnum) {
    GetDescribeServiceUpdatesVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDescribeServiceUpdatesVersionEnum || (GetDescribeServiceUpdatesVersionEnum = {}));
var GetDescribeServiceUpdatesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeServiceUpdatesQueryParams, _super);
    function GetDescribeServiceUpdatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeServiceUpdatesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeServiceUpdatesQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeServiceUpdatesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateName" }),
        __metadata("design:type", String)
    ], GetDescribeServiceUpdatesQueryParams.prototype, "serviceUpdateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateStatus" }),
        __metadata("design:type", Array)
    ], GetDescribeServiceUpdatesQueryParams.prototype, "serviceUpdateStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeServiceUpdatesQueryParams.prototype, "version", void 0);
    return GetDescribeServiceUpdatesQueryParams;
}(SpeakeasyBase));
export { GetDescribeServiceUpdatesQueryParams };
var GetDescribeServiceUpdatesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeServiceUpdatesHeaders, _super);
    function GetDescribeServiceUpdatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeServiceUpdatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeServiceUpdatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeServiceUpdatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeServiceUpdatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeServiceUpdatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeServiceUpdatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeServiceUpdatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeServiceUpdatesHeaders;
}(SpeakeasyBase));
export { GetDescribeServiceUpdatesHeaders };
var GetDescribeServiceUpdatesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeServiceUpdatesRequest, _super);
    function GetDescribeServiceUpdatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeServiceUpdatesQueryParams)
    ], GetDescribeServiceUpdatesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeServiceUpdatesHeaders)
    ], GetDescribeServiceUpdatesRequest.prototype, "headers", void 0);
    return GetDescribeServiceUpdatesRequest;
}(SpeakeasyBase));
export { GetDescribeServiceUpdatesRequest };
var GetDescribeServiceUpdatesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeServiceUpdatesResponse, _super);
    function GetDescribeServiceUpdatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeServiceUpdatesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeServiceUpdatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeServiceUpdatesResponse.prototype, "statusCode", void 0);
    return GetDescribeServiceUpdatesResponse;
}(SpeakeasyBase));
export { GetDescribeServiceUpdatesResponse };
