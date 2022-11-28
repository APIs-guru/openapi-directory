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
export var GetCreateGlobalReplicationGroupActionEnum;
(function (GetCreateGlobalReplicationGroupActionEnum) {
    GetCreateGlobalReplicationGroupActionEnum["CreateGlobalReplicationGroup"] = "CreateGlobalReplicationGroup";
})(GetCreateGlobalReplicationGroupActionEnum || (GetCreateGlobalReplicationGroupActionEnum = {}));
export var GetCreateGlobalReplicationGroupVersionEnum;
(function (GetCreateGlobalReplicationGroupVersionEnum) {
    GetCreateGlobalReplicationGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetCreateGlobalReplicationGroupVersionEnum || (GetCreateGlobalReplicationGroupVersionEnum = {}));
var GetCreateGlobalReplicationGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateGlobalReplicationGroupQueryParams, _super);
    function GetCreateGlobalReplicationGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateGlobalReplicationGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupDescription" }),
        __metadata("design:type", String)
    ], GetCreateGlobalReplicationGroupQueryParams.prototype, "globalReplicationGroupDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GlobalReplicationGroupIdSuffix" }),
        __metadata("design:type", String)
    ], GetCreateGlobalReplicationGroupQueryParams.prototype, "globalReplicationGroupIdSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrimaryReplicationGroupId" }),
        __metadata("design:type", String)
    ], GetCreateGlobalReplicationGroupQueryParams.prototype, "primaryReplicationGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateGlobalReplicationGroupQueryParams.prototype, "version", void 0);
    return GetCreateGlobalReplicationGroupQueryParams;
}(SpeakeasyBase));
export { GetCreateGlobalReplicationGroupQueryParams };
var GetCreateGlobalReplicationGroupHeaders = /** @class */ (function (_super) {
    __extends(GetCreateGlobalReplicationGroupHeaders, _super);
    function GetCreateGlobalReplicationGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateGlobalReplicationGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateGlobalReplicationGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateGlobalReplicationGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateGlobalReplicationGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateGlobalReplicationGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateGlobalReplicationGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateGlobalReplicationGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateGlobalReplicationGroupHeaders;
}(SpeakeasyBase));
export { GetCreateGlobalReplicationGroupHeaders };
var GetCreateGlobalReplicationGroupRequest = /** @class */ (function (_super) {
    __extends(GetCreateGlobalReplicationGroupRequest, _super);
    function GetCreateGlobalReplicationGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateGlobalReplicationGroupQueryParams)
    ], GetCreateGlobalReplicationGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCreateGlobalReplicationGroupHeaders)
    ], GetCreateGlobalReplicationGroupRequest.prototype, "headers", void 0);
    return GetCreateGlobalReplicationGroupRequest;
}(SpeakeasyBase));
export { GetCreateGlobalReplicationGroupRequest };
var GetCreateGlobalReplicationGroupResponse = /** @class */ (function (_super) {
    __extends(GetCreateGlobalReplicationGroupResponse, _super);
    function GetCreateGlobalReplicationGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateGlobalReplicationGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCreateGlobalReplicationGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCreateGlobalReplicationGroupResponse.prototype, "statusCode", void 0);
    return GetCreateGlobalReplicationGroupResponse;
}(SpeakeasyBase));
export { GetCreateGlobalReplicationGroupResponse };
