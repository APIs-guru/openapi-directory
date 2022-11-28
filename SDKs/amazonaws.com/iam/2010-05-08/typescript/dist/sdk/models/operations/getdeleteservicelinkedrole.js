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
export var GetDeleteServiceLinkedRoleActionEnum;
(function (GetDeleteServiceLinkedRoleActionEnum) {
    GetDeleteServiceLinkedRoleActionEnum["DeleteServiceLinkedRole"] = "DeleteServiceLinkedRole";
})(GetDeleteServiceLinkedRoleActionEnum || (GetDeleteServiceLinkedRoleActionEnum = {}));
export var GetDeleteServiceLinkedRoleVersionEnum;
(function (GetDeleteServiceLinkedRoleVersionEnum) {
    GetDeleteServiceLinkedRoleVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetDeleteServiceLinkedRoleVersionEnum || (GetDeleteServiceLinkedRoleVersionEnum = {}));
var GetDeleteServiceLinkedRoleQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteServiceLinkedRoleQueryParams, _super);
    function GetDeleteServiceLinkedRoleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteServiceLinkedRoleQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleName" }),
        __metadata("design:type", String)
    ], GetDeleteServiceLinkedRoleQueryParams.prototype, "roleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteServiceLinkedRoleQueryParams.prototype, "version", void 0);
    return GetDeleteServiceLinkedRoleQueryParams;
}(SpeakeasyBase));
export { GetDeleteServiceLinkedRoleQueryParams };
var GetDeleteServiceLinkedRoleHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteServiceLinkedRoleHeaders, _super);
    function GetDeleteServiceLinkedRoleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteServiceLinkedRoleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteServiceLinkedRoleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteServiceLinkedRoleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteServiceLinkedRoleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteServiceLinkedRoleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteServiceLinkedRoleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteServiceLinkedRoleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteServiceLinkedRoleHeaders;
}(SpeakeasyBase));
export { GetDeleteServiceLinkedRoleHeaders };
var GetDeleteServiceLinkedRoleRequest = /** @class */ (function (_super) {
    __extends(GetDeleteServiceLinkedRoleRequest, _super);
    function GetDeleteServiceLinkedRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteServiceLinkedRoleQueryParams)
    ], GetDeleteServiceLinkedRoleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteServiceLinkedRoleHeaders)
    ], GetDeleteServiceLinkedRoleRequest.prototype, "headers", void 0);
    return GetDeleteServiceLinkedRoleRequest;
}(SpeakeasyBase));
export { GetDeleteServiceLinkedRoleRequest };
var GetDeleteServiceLinkedRoleResponse = /** @class */ (function (_super) {
    __extends(GetDeleteServiceLinkedRoleResponse, _super);
    function GetDeleteServiceLinkedRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteServiceLinkedRoleResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteServiceLinkedRoleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteServiceLinkedRoleResponse.prototype, "statusCode", void 0);
    return GetDeleteServiceLinkedRoleResponse;
}(SpeakeasyBase));
export { GetDeleteServiceLinkedRoleResponse };
