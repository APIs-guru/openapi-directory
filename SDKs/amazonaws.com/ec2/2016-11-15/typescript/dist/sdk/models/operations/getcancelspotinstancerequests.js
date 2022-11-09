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
export var GetCancelSpotInstanceRequestsActionEnum;
(function (GetCancelSpotInstanceRequestsActionEnum) {
    GetCancelSpotInstanceRequestsActionEnum["CancelSpotInstanceRequests"] = "CancelSpotInstanceRequests";
})(GetCancelSpotInstanceRequestsActionEnum || (GetCancelSpotInstanceRequestsActionEnum = {}));
export var GetCancelSpotInstanceRequestsVersionEnum;
(function (GetCancelSpotInstanceRequestsVersionEnum) {
    GetCancelSpotInstanceRequestsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetCancelSpotInstanceRequestsVersionEnum || (GetCancelSpotInstanceRequestsVersionEnum = {}));
var GetCancelSpotInstanceRequestsQueryParams = /** @class */ (function (_super) {
    __extends(GetCancelSpotInstanceRequestsQueryParams, _super);
    function GetCancelSpotInstanceRequestsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCancelSpotInstanceRequestsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetCancelSpotInstanceRequestsQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SpotInstanceRequestId" }),
        __metadata("design:type", Array)
    ], GetCancelSpotInstanceRequestsQueryParams.prototype, "spotInstanceRequestId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCancelSpotInstanceRequestsQueryParams.prototype, "version", void 0);
    return GetCancelSpotInstanceRequestsQueryParams;
}(SpeakeasyBase));
export { GetCancelSpotInstanceRequestsQueryParams };
var GetCancelSpotInstanceRequestsHeaders = /** @class */ (function (_super) {
    __extends(GetCancelSpotInstanceRequestsHeaders, _super);
    function GetCancelSpotInstanceRequestsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCancelSpotInstanceRequestsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCancelSpotInstanceRequestsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCancelSpotInstanceRequestsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCancelSpotInstanceRequestsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCancelSpotInstanceRequestsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCancelSpotInstanceRequestsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCancelSpotInstanceRequestsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCancelSpotInstanceRequestsHeaders;
}(SpeakeasyBase));
export { GetCancelSpotInstanceRequestsHeaders };
var GetCancelSpotInstanceRequestsRequest = /** @class */ (function (_super) {
    __extends(GetCancelSpotInstanceRequestsRequest, _super);
    function GetCancelSpotInstanceRequestsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCancelSpotInstanceRequestsQueryParams)
    ], GetCancelSpotInstanceRequestsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCancelSpotInstanceRequestsHeaders)
    ], GetCancelSpotInstanceRequestsRequest.prototype, "headers", void 0);
    return GetCancelSpotInstanceRequestsRequest;
}(SpeakeasyBase));
export { GetCancelSpotInstanceRequestsRequest };
var GetCancelSpotInstanceRequestsResponse = /** @class */ (function (_super) {
    __extends(GetCancelSpotInstanceRequestsResponse, _super);
    function GetCancelSpotInstanceRequestsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCancelSpotInstanceRequestsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCancelSpotInstanceRequestsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCancelSpotInstanceRequestsResponse.prototype, "statusCode", void 0);
    return GetCancelSpotInstanceRequestsResponse;
}(SpeakeasyBase));
export { GetCancelSpotInstanceRequestsResponse };
