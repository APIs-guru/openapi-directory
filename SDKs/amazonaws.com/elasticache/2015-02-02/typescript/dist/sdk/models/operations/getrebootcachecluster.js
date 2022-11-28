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
export var GetRebootCacheClusterActionEnum;
(function (GetRebootCacheClusterActionEnum) {
    GetRebootCacheClusterActionEnum["RebootCacheCluster"] = "RebootCacheCluster";
})(GetRebootCacheClusterActionEnum || (GetRebootCacheClusterActionEnum = {}));
export var GetRebootCacheClusterVersionEnum;
(function (GetRebootCacheClusterVersionEnum) {
    GetRebootCacheClusterVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetRebootCacheClusterVersionEnum || (GetRebootCacheClusterVersionEnum = {}));
var GetRebootCacheClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetRebootCacheClusterQueryParams, _super);
    function GetRebootCacheClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRebootCacheClusterQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheClusterId" }),
        __metadata("design:type", String)
    ], GetRebootCacheClusterQueryParams.prototype, "cacheClusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheNodeIdsToReboot" }),
        __metadata("design:type", Array)
    ], GetRebootCacheClusterQueryParams.prototype, "cacheNodeIdsToReboot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRebootCacheClusterQueryParams.prototype, "version", void 0);
    return GetRebootCacheClusterQueryParams;
}(SpeakeasyBase));
export { GetRebootCacheClusterQueryParams };
var GetRebootCacheClusterHeaders = /** @class */ (function (_super) {
    __extends(GetRebootCacheClusterHeaders, _super);
    function GetRebootCacheClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRebootCacheClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRebootCacheClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRebootCacheClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRebootCacheClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRebootCacheClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRebootCacheClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRebootCacheClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRebootCacheClusterHeaders;
}(SpeakeasyBase));
export { GetRebootCacheClusterHeaders };
var GetRebootCacheClusterRequest = /** @class */ (function (_super) {
    __extends(GetRebootCacheClusterRequest, _super);
    function GetRebootCacheClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRebootCacheClusterQueryParams)
    ], GetRebootCacheClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRebootCacheClusterHeaders)
    ], GetRebootCacheClusterRequest.prototype, "headers", void 0);
    return GetRebootCacheClusterRequest;
}(SpeakeasyBase));
export { GetRebootCacheClusterRequest };
var GetRebootCacheClusterResponse = /** @class */ (function (_super) {
    __extends(GetRebootCacheClusterResponse, _super);
    function GetRebootCacheClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRebootCacheClusterResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRebootCacheClusterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRebootCacheClusterResponse.prototype, "statusCode", void 0);
    return GetRebootCacheClusterResponse;
}(SpeakeasyBase));
export { GetRebootCacheClusterResponse };
