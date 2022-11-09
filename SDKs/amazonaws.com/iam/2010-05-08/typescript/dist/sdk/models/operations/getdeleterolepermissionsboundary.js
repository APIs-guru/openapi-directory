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
export var GetDeleteRolePermissionsBoundaryActionEnum;
(function (GetDeleteRolePermissionsBoundaryActionEnum) {
    GetDeleteRolePermissionsBoundaryActionEnum["DeleteRolePermissionsBoundary"] = "DeleteRolePermissionsBoundary";
})(GetDeleteRolePermissionsBoundaryActionEnum || (GetDeleteRolePermissionsBoundaryActionEnum = {}));
export var GetDeleteRolePermissionsBoundaryVersionEnum;
(function (GetDeleteRolePermissionsBoundaryVersionEnum) {
    GetDeleteRolePermissionsBoundaryVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetDeleteRolePermissionsBoundaryVersionEnum || (GetDeleteRolePermissionsBoundaryVersionEnum = {}));
var GetDeleteRolePermissionsBoundaryQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteRolePermissionsBoundaryQueryParams, _super);
    function GetDeleteRolePermissionsBoundaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteRolePermissionsBoundaryQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" }),
        __metadata("design:type", String)
    ], GetDeleteRolePermissionsBoundaryQueryParams.prototype, "roleName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteRolePermissionsBoundaryQueryParams.prototype, "version", void 0);
    return GetDeleteRolePermissionsBoundaryQueryParams;
}(SpeakeasyBase));
export { GetDeleteRolePermissionsBoundaryQueryParams };
var GetDeleteRolePermissionsBoundaryHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteRolePermissionsBoundaryHeaders, _super);
    function GetDeleteRolePermissionsBoundaryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteRolePermissionsBoundaryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteRolePermissionsBoundaryHeaders;
}(SpeakeasyBase));
export { GetDeleteRolePermissionsBoundaryHeaders };
var GetDeleteRolePermissionsBoundaryRequest = /** @class */ (function (_super) {
    __extends(GetDeleteRolePermissionsBoundaryRequest, _super);
    function GetDeleteRolePermissionsBoundaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteRolePermissionsBoundaryQueryParams)
    ], GetDeleteRolePermissionsBoundaryRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteRolePermissionsBoundaryHeaders)
    ], GetDeleteRolePermissionsBoundaryRequest.prototype, "headers", void 0);
    return GetDeleteRolePermissionsBoundaryRequest;
}(SpeakeasyBase));
export { GetDeleteRolePermissionsBoundaryRequest };
var GetDeleteRolePermissionsBoundaryResponse = /** @class */ (function (_super) {
    __extends(GetDeleteRolePermissionsBoundaryResponse, _super);
    function GetDeleteRolePermissionsBoundaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteRolePermissionsBoundaryResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteRolePermissionsBoundaryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteRolePermissionsBoundaryResponse.prototype, "statusCode", void 0);
    return GetDeleteRolePermissionsBoundaryResponse;
}(SpeakeasyBase));
export { GetDeleteRolePermissionsBoundaryResponse };
