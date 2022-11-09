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
export var GetModifyGlobalReplicationGroupActionEnum;
(function (GetModifyGlobalReplicationGroupActionEnum) {
    GetModifyGlobalReplicationGroupActionEnum["ModifyGlobalReplicationGroup"] = "ModifyGlobalReplicationGroup";
})(GetModifyGlobalReplicationGroupActionEnum || (GetModifyGlobalReplicationGroupActionEnum = {}));
export var GetModifyGlobalReplicationGroupVersionEnum;
(function (GetModifyGlobalReplicationGroupVersionEnum) {
    GetModifyGlobalReplicationGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetModifyGlobalReplicationGroupVersionEnum || (GetModifyGlobalReplicationGroupVersionEnum = {}));
var GetModifyGlobalReplicationGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyGlobalReplicationGroupQueryParams, _super);
    function GetModifyGlobalReplicationGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" }),
        __metadata("design:type", Boolean)
    ], GetModifyGlobalReplicationGroupQueryParams.prototype, "applyImmediately", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AutomaticFailoverEnabled" }),
        __metadata("design:type", Boolean)
    ], GetModifyGlobalReplicationGroupQueryParams.prototype, "automaticFailoverEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CacheNodeType" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupQueryParams.prototype, "cacheNodeType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CacheParameterGroupName" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupQueryParams.prototype, "cacheParameterGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupQueryParams.prototype, "engineVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupDescription" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupQueryParams.prototype, "globalReplicationGroupDescription", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupQueryParams.prototype, "globalReplicationGroupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupQueryParams.prototype, "version", void 0);
    return GetModifyGlobalReplicationGroupQueryParams;
}(SpeakeasyBase));
export { GetModifyGlobalReplicationGroupQueryParams };
var GetModifyGlobalReplicationGroupHeaders = /** @class */ (function (_super) {
    __extends(GetModifyGlobalReplicationGroupHeaders, _super);
    function GetModifyGlobalReplicationGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyGlobalReplicationGroupHeaders;
}(SpeakeasyBase));
export { GetModifyGlobalReplicationGroupHeaders };
var GetModifyGlobalReplicationGroupRequest = /** @class */ (function (_super) {
    __extends(GetModifyGlobalReplicationGroupRequest, _super);
    function GetModifyGlobalReplicationGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyGlobalReplicationGroupQueryParams)
    ], GetModifyGlobalReplicationGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyGlobalReplicationGroupHeaders)
    ], GetModifyGlobalReplicationGroupRequest.prototype, "headers", void 0);
    return GetModifyGlobalReplicationGroupRequest;
}(SpeakeasyBase));
export { GetModifyGlobalReplicationGroupRequest };
var GetModifyGlobalReplicationGroupResponse = /** @class */ (function (_super) {
    __extends(GetModifyGlobalReplicationGroupResponse, _super);
    function GetModifyGlobalReplicationGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyGlobalReplicationGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyGlobalReplicationGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyGlobalReplicationGroupResponse.prototype, "statusCode", void 0);
    return GetModifyGlobalReplicationGroupResponse;
}(SpeakeasyBase));
export { GetModifyGlobalReplicationGroupResponse };
