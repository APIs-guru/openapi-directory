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
export var GetDeleteGlobalReplicationGroupActionEnum;
(function (GetDeleteGlobalReplicationGroupActionEnum) {
    GetDeleteGlobalReplicationGroupActionEnum["DeleteGlobalReplicationGroup"] = "DeleteGlobalReplicationGroup";
})(GetDeleteGlobalReplicationGroupActionEnum || (GetDeleteGlobalReplicationGroupActionEnum = {}));
export var GetDeleteGlobalReplicationGroupVersionEnum;
(function (GetDeleteGlobalReplicationGroupVersionEnum) {
    GetDeleteGlobalReplicationGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDeleteGlobalReplicationGroupVersionEnum || (GetDeleteGlobalReplicationGroupVersionEnum = {}));
var GetDeleteGlobalReplicationGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteGlobalReplicationGroupQueryParams, _super);
    function GetDeleteGlobalReplicationGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteGlobalReplicationGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" }),
        __metadata("design:type", String)
    ], GetDeleteGlobalReplicationGroupQueryParams.prototype, "globalReplicationGroupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RetainPrimaryReplicationGroup" }),
        __metadata("design:type", Boolean)
    ], GetDeleteGlobalReplicationGroupQueryParams.prototype, "retainPrimaryReplicationGroup", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteGlobalReplicationGroupQueryParams.prototype, "version", void 0);
    return GetDeleteGlobalReplicationGroupQueryParams;
}(SpeakeasyBase));
export { GetDeleteGlobalReplicationGroupQueryParams };
var GetDeleteGlobalReplicationGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteGlobalReplicationGroupHeaders, _super);
    function GetDeleteGlobalReplicationGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteGlobalReplicationGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteGlobalReplicationGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteGlobalReplicationGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteGlobalReplicationGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteGlobalReplicationGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteGlobalReplicationGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteGlobalReplicationGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteGlobalReplicationGroupHeaders;
}(SpeakeasyBase));
export { GetDeleteGlobalReplicationGroupHeaders };
var GetDeleteGlobalReplicationGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteGlobalReplicationGroupRequest, _super);
    function GetDeleteGlobalReplicationGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteGlobalReplicationGroupQueryParams)
    ], GetDeleteGlobalReplicationGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteGlobalReplicationGroupHeaders)
    ], GetDeleteGlobalReplicationGroupRequest.prototype, "headers", void 0);
    return GetDeleteGlobalReplicationGroupRequest;
}(SpeakeasyBase));
export { GetDeleteGlobalReplicationGroupRequest };
var GetDeleteGlobalReplicationGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteGlobalReplicationGroupResponse, _super);
    function GetDeleteGlobalReplicationGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteGlobalReplicationGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteGlobalReplicationGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteGlobalReplicationGroupResponse.prototype, "statusCode", void 0);
    return GetDeleteGlobalReplicationGroupResponse;
}(SpeakeasyBase));
export { GetDeleteGlobalReplicationGroupResponse };
