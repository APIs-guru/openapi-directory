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
export var GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum;
(function (GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum) {
    GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum["DecreaseNodeGroupsInGlobalReplicationGroup"] = "DecreaseNodeGroupsInGlobalReplicationGroup";
})(GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum || (GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum = {}));
export var GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum;
(function (GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum) {
    GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum || (GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum = {}));
var GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams, _super);
    function GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" }),
        __metadata("design:type", Boolean)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams.prototype, "applyImmediately", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GlobalNodeGroupsToRemove" }),
        __metadata("design:type", Array)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams.prototype, "globalNodeGroupsToRemove", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GlobalNodeGroupsToRetain" }),
        __metadata("design:type", Array)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams.prototype, "globalNodeGroupsToRetain", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" }),
        __metadata("design:type", String)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams.prototype, "globalReplicationGroupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NodeGroupCount" }),
        __metadata("design:type", Number)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams.prototype, "nodeGroupCount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams.prototype, "version", void 0);
    return GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams;
}(SpeakeasyBase));
export { GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams };
var GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders, _super);
    function GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders;
}(SpeakeasyBase));
export { GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders };
var GetDecreaseNodeGroupsInGlobalReplicationGroupRequest = /** @class */ (function (_super) {
    __extends(GetDecreaseNodeGroupsInGlobalReplicationGroupRequest, _super);
    function GetDecreaseNodeGroupsInGlobalReplicationGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupRequest.prototype, "headers", void 0);
    return GetDecreaseNodeGroupsInGlobalReplicationGroupRequest;
}(SpeakeasyBase));
export { GetDecreaseNodeGroupsInGlobalReplicationGroupRequest };
var GetDecreaseNodeGroupsInGlobalReplicationGroupResponse = /** @class */ (function (_super) {
    __extends(GetDecreaseNodeGroupsInGlobalReplicationGroupResponse, _super);
    function GetDecreaseNodeGroupsInGlobalReplicationGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDecreaseNodeGroupsInGlobalReplicationGroupResponse.prototype, "statusCode", void 0);
    return GetDecreaseNodeGroupsInGlobalReplicationGroupResponse;
}(SpeakeasyBase));
export { GetDecreaseNodeGroupsInGlobalReplicationGroupResponse };
