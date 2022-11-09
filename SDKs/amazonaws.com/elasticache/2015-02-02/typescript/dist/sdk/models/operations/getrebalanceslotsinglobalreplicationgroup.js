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
export var GetRebalanceSlotsInGlobalReplicationGroupActionEnum;
(function (GetRebalanceSlotsInGlobalReplicationGroupActionEnum) {
    GetRebalanceSlotsInGlobalReplicationGroupActionEnum["RebalanceSlotsInGlobalReplicationGroup"] = "RebalanceSlotsInGlobalReplicationGroup";
})(GetRebalanceSlotsInGlobalReplicationGroupActionEnum || (GetRebalanceSlotsInGlobalReplicationGroupActionEnum = {}));
export var GetRebalanceSlotsInGlobalReplicationGroupVersionEnum;
(function (GetRebalanceSlotsInGlobalReplicationGroupVersionEnum) {
    GetRebalanceSlotsInGlobalReplicationGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetRebalanceSlotsInGlobalReplicationGroupVersionEnum || (GetRebalanceSlotsInGlobalReplicationGroupVersionEnum = {}));
var GetRebalanceSlotsInGlobalReplicationGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetRebalanceSlotsInGlobalReplicationGroupQueryParams, _super);
    function GetRebalanceSlotsInGlobalReplicationGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRebalanceSlotsInGlobalReplicationGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" }),
        __metadata("design:type", Boolean)
    ], GetRebalanceSlotsInGlobalReplicationGroupQueryParams.prototype, "applyImmediately", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" }),
        __metadata("design:type", String)
    ], GetRebalanceSlotsInGlobalReplicationGroupQueryParams.prototype, "globalReplicationGroupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRebalanceSlotsInGlobalReplicationGroupQueryParams.prototype, "version", void 0);
    return GetRebalanceSlotsInGlobalReplicationGroupQueryParams;
}(SpeakeasyBase));
export { GetRebalanceSlotsInGlobalReplicationGroupQueryParams };
var GetRebalanceSlotsInGlobalReplicationGroupHeaders = /** @class */ (function (_super) {
    __extends(GetRebalanceSlotsInGlobalReplicationGroupHeaders, _super);
    function GetRebalanceSlotsInGlobalReplicationGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRebalanceSlotsInGlobalReplicationGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRebalanceSlotsInGlobalReplicationGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRebalanceSlotsInGlobalReplicationGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRebalanceSlotsInGlobalReplicationGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRebalanceSlotsInGlobalReplicationGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRebalanceSlotsInGlobalReplicationGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRebalanceSlotsInGlobalReplicationGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRebalanceSlotsInGlobalReplicationGroupHeaders;
}(SpeakeasyBase));
export { GetRebalanceSlotsInGlobalReplicationGroupHeaders };
var GetRebalanceSlotsInGlobalReplicationGroupRequest = /** @class */ (function (_super) {
    __extends(GetRebalanceSlotsInGlobalReplicationGroupRequest, _super);
    function GetRebalanceSlotsInGlobalReplicationGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRebalanceSlotsInGlobalReplicationGroupQueryParams)
    ], GetRebalanceSlotsInGlobalReplicationGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRebalanceSlotsInGlobalReplicationGroupHeaders)
    ], GetRebalanceSlotsInGlobalReplicationGroupRequest.prototype, "headers", void 0);
    return GetRebalanceSlotsInGlobalReplicationGroupRequest;
}(SpeakeasyBase));
export { GetRebalanceSlotsInGlobalReplicationGroupRequest };
var GetRebalanceSlotsInGlobalReplicationGroupResponse = /** @class */ (function (_super) {
    __extends(GetRebalanceSlotsInGlobalReplicationGroupResponse, _super);
    function GetRebalanceSlotsInGlobalReplicationGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRebalanceSlotsInGlobalReplicationGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRebalanceSlotsInGlobalReplicationGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRebalanceSlotsInGlobalReplicationGroupResponse.prototype, "statusCode", void 0);
    return GetRebalanceSlotsInGlobalReplicationGroupResponse;
}(SpeakeasyBase));
export { GetRebalanceSlotsInGlobalReplicationGroupResponse };
