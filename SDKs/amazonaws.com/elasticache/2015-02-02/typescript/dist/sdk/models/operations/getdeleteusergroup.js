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
export var GetDeleteUserGroupActionEnum;
(function (GetDeleteUserGroupActionEnum) {
    GetDeleteUserGroupActionEnum["DeleteUserGroup"] = "DeleteUserGroup";
})(GetDeleteUserGroupActionEnum || (GetDeleteUserGroupActionEnum = {}));
export var GetDeleteUserGroupVersionEnum;
(function (GetDeleteUserGroupVersionEnum) {
    GetDeleteUserGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDeleteUserGroupVersionEnum || (GetDeleteUserGroupVersionEnum = {}));
var GetDeleteUserGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteUserGroupQueryParams, _super);
    function GetDeleteUserGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteUserGroupQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserGroupId" }),
        __metadata("design:type", String)
    ], GetDeleteUserGroupQueryParams.prototype, "userGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteUserGroupQueryParams.prototype, "version", void 0);
    return GetDeleteUserGroupQueryParams;
}(SpeakeasyBase));
export { GetDeleteUserGroupQueryParams };
var GetDeleteUserGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteUserGroupHeaders, _super);
    function GetDeleteUserGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteUserGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteUserGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteUserGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteUserGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteUserGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteUserGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteUserGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteUserGroupHeaders;
}(SpeakeasyBase));
export { GetDeleteUserGroupHeaders };
var GetDeleteUserGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteUserGroupRequest, _super);
    function GetDeleteUserGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteUserGroupQueryParams)
    ], GetDeleteUserGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteUserGroupHeaders)
    ], GetDeleteUserGroupRequest.prototype, "headers", void 0);
    return GetDeleteUserGroupRequest;
}(SpeakeasyBase));
export { GetDeleteUserGroupRequest };
var GetDeleteUserGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteUserGroupResponse, _super);
    function GetDeleteUserGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteUserGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteUserGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteUserGroupResponse.prototype, "statusCode", void 0);
    return GetDeleteUserGroupResponse;
}(SpeakeasyBase));
export { GetDeleteUserGroupResponse };
