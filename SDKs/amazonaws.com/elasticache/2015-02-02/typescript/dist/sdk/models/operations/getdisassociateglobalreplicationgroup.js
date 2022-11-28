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
export var GetDisassociateGlobalReplicationGroupActionEnum;
(function (GetDisassociateGlobalReplicationGroupActionEnum) {
    GetDisassociateGlobalReplicationGroupActionEnum["DisassociateGlobalReplicationGroup"] = "DisassociateGlobalReplicationGroup";
})(GetDisassociateGlobalReplicationGroupActionEnum || (GetDisassociateGlobalReplicationGroupActionEnum = {}));
export var GetDisassociateGlobalReplicationGroupVersionEnum;
(function (GetDisassociateGlobalReplicationGroupVersionEnum) {
    GetDisassociateGlobalReplicationGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDisassociateGlobalReplicationGroupVersionEnum || (GetDisassociateGlobalReplicationGroupVersionEnum = {}));
var GetDisassociateGlobalReplicationGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDisassociateGlobalReplicationGroupQueryParams, _super);
    function GetDisassociateGlobalReplicationGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisassociateGlobalReplicationGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupId" }),
        __metadata("design:type", String)
    ], GetDisassociateGlobalReplicationGroupQueryParams.prototype, "globalReplicationGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" }),
        __metadata("design:type", String)
    ], GetDisassociateGlobalReplicationGroupQueryParams.prototype, "replicationGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupRegion" }),
        __metadata("design:type", String)
    ], GetDisassociateGlobalReplicationGroupQueryParams.prototype, "replicationGroupRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisassociateGlobalReplicationGroupQueryParams.prototype, "version", void 0);
    return GetDisassociateGlobalReplicationGroupQueryParams;
}(SpeakeasyBase));
export { GetDisassociateGlobalReplicationGroupQueryParams };
var GetDisassociateGlobalReplicationGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDisassociateGlobalReplicationGroupHeaders, _super);
    function GetDisassociateGlobalReplicationGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisassociateGlobalReplicationGroupHeaders;
}(SpeakeasyBase));
export { GetDisassociateGlobalReplicationGroupHeaders };
var GetDisassociateGlobalReplicationGroupRequest = /** @class */ (function (_super) {
    __extends(GetDisassociateGlobalReplicationGroupRequest, _super);
    function GetDisassociateGlobalReplicationGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisassociateGlobalReplicationGroupQueryParams)
    ], GetDisassociateGlobalReplicationGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisassociateGlobalReplicationGroupHeaders)
    ], GetDisassociateGlobalReplicationGroupRequest.prototype, "headers", void 0);
    return GetDisassociateGlobalReplicationGroupRequest;
}(SpeakeasyBase));
export { GetDisassociateGlobalReplicationGroupRequest };
var GetDisassociateGlobalReplicationGroupResponse = /** @class */ (function (_super) {
    __extends(GetDisassociateGlobalReplicationGroupResponse, _super);
    function GetDisassociateGlobalReplicationGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDisassociateGlobalReplicationGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDisassociateGlobalReplicationGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDisassociateGlobalReplicationGroupResponse.prototype, "statusCode", void 0);
    return GetDisassociateGlobalReplicationGroupResponse;
}(SpeakeasyBase));
export { GetDisassociateGlobalReplicationGroupResponse };
