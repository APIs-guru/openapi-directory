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
export var GetDeleteReplicationGroupActionEnum;
(function (GetDeleteReplicationGroupActionEnum) {
    GetDeleteReplicationGroupActionEnum["DeleteReplicationGroup"] = "DeleteReplicationGroup";
})(GetDeleteReplicationGroupActionEnum || (GetDeleteReplicationGroupActionEnum = {}));
export var GetDeleteReplicationGroupVersionEnum;
(function (GetDeleteReplicationGroupVersionEnum) {
    GetDeleteReplicationGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDeleteReplicationGroupVersionEnum || (GetDeleteReplicationGroupVersionEnum = {}));
var GetDeleteReplicationGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteReplicationGroupQueryParams, _super);
    function GetDeleteReplicationGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteReplicationGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FinalSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetDeleteReplicationGroupQueryParams.prototype, "finalSnapshotIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" }),
        __metadata("design:type", String)
    ], GetDeleteReplicationGroupQueryParams.prototype, "replicationGroupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RetainPrimaryCluster" }),
        __metadata("design:type", Boolean)
    ], GetDeleteReplicationGroupQueryParams.prototype, "retainPrimaryCluster", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteReplicationGroupQueryParams.prototype, "version", void 0);
    return GetDeleteReplicationGroupQueryParams;
}(SpeakeasyBase));
export { GetDeleteReplicationGroupQueryParams };
var GetDeleteReplicationGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteReplicationGroupHeaders, _super);
    function GetDeleteReplicationGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteReplicationGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteReplicationGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteReplicationGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteReplicationGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteReplicationGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteReplicationGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteReplicationGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteReplicationGroupHeaders;
}(SpeakeasyBase));
export { GetDeleteReplicationGroupHeaders };
var GetDeleteReplicationGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteReplicationGroupRequest, _super);
    function GetDeleteReplicationGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteReplicationGroupQueryParams)
    ], GetDeleteReplicationGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteReplicationGroupHeaders)
    ], GetDeleteReplicationGroupRequest.prototype, "headers", void 0);
    return GetDeleteReplicationGroupRequest;
}(SpeakeasyBase));
export { GetDeleteReplicationGroupRequest };
var GetDeleteReplicationGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteReplicationGroupResponse, _super);
    function GetDeleteReplicationGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteReplicationGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteReplicationGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteReplicationGroupResponse.prototype, "statusCode", void 0);
    return GetDeleteReplicationGroupResponse;
}(SpeakeasyBase));
export { GetDeleteReplicationGroupResponse };
