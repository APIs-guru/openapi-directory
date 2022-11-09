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
export var GetDeleteCacheSubnetGroupActionEnum;
(function (GetDeleteCacheSubnetGroupActionEnum) {
    GetDeleteCacheSubnetGroupActionEnum["DeleteCacheSubnetGroup"] = "DeleteCacheSubnetGroup";
})(GetDeleteCacheSubnetGroupActionEnum || (GetDeleteCacheSubnetGroupActionEnum = {}));
export var GetDeleteCacheSubnetGroupVersionEnum;
(function (GetDeleteCacheSubnetGroupVersionEnum) {
    GetDeleteCacheSubnetGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDeleteCacheSubnetGroupVersionEnum || (GetDeleteCacheSubnetGroupVersionEnum = {}));
var GetDeleteCacheSubnetGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteCacheSubnetGroupQueryParams, _super);
    function GetDeleteCacheSubnetGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteCacheSubnetGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CacheSubnetGroupName" }),
        __metadata("design:type", String)
    ], GetDeleteCacheSubnetGroupQueryParams.prototype, "cacheSubnetGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteCacheSubnetGroupQueryParams.prototype, "version", void 0);
    return GetDeleteCacheSubnetGroupQueryParams;
}(SpeakeasyBase));
export { GetDeleteCacheSubnetGroupQueryParams };
var GetDeleteCacheSubnetGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteCacheSubnetGroupHeaders, _super);
    function GetDeleteCacheSubnetGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteCacheSubnetGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteCacheSubnetGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteCacheSubnetGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteCacheSubnetGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteCacheSubnetGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteCacheSubnetGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteCacheSubnetGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteCacheSubnetGroupHeaders;
}(SpeakeasyBase));
export { GetDeleteCacheSubnetGroupHeaders };
var GetDeleteCacheSubnetGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteCacheSubnetGroupRequest, _super);
    function GetDeleteCacheSubnetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteCacheSubnetGroupQueryParams)
    ], GetDeleteCacheSubnetGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteCacheSubnetGroupHeaders)
    ], GetDeleteCacheSubnetGroupRequest.prototype, "headers", void 0);
    return GetDeleteCacheSubnetGroupRequest;
}(SpeakeasyBase));
export { GetDeleteCacheSubnetGroupRequest };
var GetDeleteCacheSubnetGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteCacheSubnetGroupResponse, _super);
    function GetDeleteCacheSubnetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteCacheSubnetGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteCacheSubnetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteCacheSubnetGroupResponse.prototype, "statusCode", void 0);
    return GetDeleteCacheSubnetGroupResponse;
}(SpeakeasyBase));
export { GetDeleteCacheSubnetGroupResponse };
