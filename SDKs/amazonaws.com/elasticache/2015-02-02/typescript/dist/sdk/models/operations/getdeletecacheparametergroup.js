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
export var GetDeleteCacheParameterGroupActionEnum;
(function (GetDeleteCacheParameterGroupActionEnum) {
    GetDeleteCacheParameterGroupActionEnum["DeleteCacheParameterGroup"] = "DeleteCacheParameterGroup";
})(GetDeleteCacheParameterGroupActionEnum || (GetDeleteCacheParameterGroupActionEnum = {}));
export var GetDeleteCacheParameterGroupVersionEnum;
(function (GetDeleteCacheParameterGroupVersionEnum) {
    GetDeleteCacheParameterGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDeleteCacheParameterGroupVersionEnum || (GetDeleteCacheParameterGroupVersionEnum = {}));
var GetDeleteCacheParameterGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteCacheParameterGroupQueryParams, _super);
    function GetDeleteCacheParameterGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteCacheParameterGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CacheParameterGroupName" }),
        __metadata("design:type", String)
    ], GetDeleteCacheParameterGroupQueryParams.prototype, "cacheParameterGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteCacheParameterGroupQueryParams.prototype, "version", void 0);
    return GetDeleteCacheParameterGroupQueryParams;
}(SpeakeasyBase));
export { GetDeleteCacheParameterGroupQueryParams };
var GetDeleteCacheParameterGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteCacheParameterGroupHeaders, _super);
    function GetDeleteCacheParameterGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteCacheParameterGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteCacheParameterGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteCacheParameterGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteCacheParameterGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteCacheParameterGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteCacheParameterGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteCacheParameterGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteCacheParameterGroupHeaders;
}(SpeakeasyBase));
export { GetDeleteCacheParameterGroupHeaders };
var GetDeleteCacheParameterGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteCacheParameterGroupRequest, _super);
    function GetDeleteCacheParameterGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteCacheParameterGroupQueryParams)
    ], GetDeleteCacheParameterGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteCacheParameterGroupHeaders)
    ], GetDeleteCacheParameterGroupRequest.prototype, "headers", void 0);
    return GetDeleteCacheParameterGroupRequest;
}(SpeakeasyBase));
export { GetDeleteCacheParameterGroupRequest };
var GetDeleteCacheParameterGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteCacheParameterGroupResponse, _super);
    function GetDeleteCacheParameterGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteCacheParameterGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteCacheParameterGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteCacheParameterGroupResponse.prototype, "statusCode", void 0);
    return GetDeleteCacheParameterGroupResponse;
}(SpeakeasyBase));
export { GetDeleteCacheParameterGroupResponse };
