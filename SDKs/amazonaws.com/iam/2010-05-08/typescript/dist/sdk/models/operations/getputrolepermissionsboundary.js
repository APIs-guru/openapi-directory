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
export var GetPutRolePermissionsBoundaryActionEnum;
(function (GetPutRolePermissionsBoundaryActionEnum) {
    GetPutRolePermissionsBoundaryActionEnum["PutRolePermissionsBoundary"] = "PutRolePermissionsBoundary";
})(GetPutRolePermissionsBoundaryActionEnum || (GetPutRolePermissionsBoundaryActionEnum = {}));
export var GetPutRolePermissionsBoundaryVersionEnum;
(function (GetPutRolePermissionsBoundaryVersionEnum) {
    GetPutRolePermissionsBoundaryVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetPutRolePermissionsBoundaryVersionEnum || (GetPutRolePermissionsBoundaryVersionEnum = {}));
var GetPutRolePermissionsBoundaryQueryParams = /** @class */ (function (_super) {
    __extends(GetPutRolePermissionsBoundaryQueryParams, _super);
    function GetPutRolePermissionsBoundaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPutRolePermissionsBoundaryQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PermissionsBoundary" }),
        __metadata("design:type", String)
    ], GetPutRolePermissionsBoundaryQueryParams.prototype, "permissionsBoundary", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" }),
        __metadata("design:type", String)
    ], GetPutRolePermissionsBoundaryQueryParams.prototype, "roleName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPutRolePermissionsBoundaryQueryParams.prototype, "version", void 0);
    return GetPutRolePermissionsBoundaryQueryParams;
}(SpeakeasyBase));
export { GetPutRolePermissionsBoundaryQueryParams };
var GetPutRolePermissionsBoundaryHeaders = /** @class */ (function (_super) {
    __extends(GetPutRolePermissionsBoundaryHeaders, _super);
    function GetPutRolePermissionsBoundaryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPutRolePermissionsBoundaryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPutRolePermissionsBoundaryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPutRolePermissionsBoundaryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPutRolePermissionsBoundaryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPutRolePermissionsBoundaryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPutRolePermissionsBoundaryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPutRolePermissionsBoundaryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPutRolePermissionsBoundaryHeaders;
}(SpeakeasyBase));
export { GetPutRolePermissionsBoundaryHeaders };
var GetPutRolePermissionsBoundaryRequest = /** @class */ (function (_super) {
    __extends(GetPutRolePermissionsBoundaryRequest, _super);
    function GetPutRolePermissionsBoundaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPutRolePermissionsBoundaryQueryParams)
    ], GetPutRolePermissionsBoundaryRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPutRolePermissionsBoundaryHeaders)
    ], GetPutRolePermissionsBoundaryRequest.prototype, "headers", void 0);
    return GetPutRolePermissionsBoundaryRequest;
}(SpeakeasyBase));
export { GetPutRolePermissionsBoundaryRequest };
var GetPutRolePermissionsBoundaryResponse = /** @class */ (function (_super) {
    __extends(GetPutRolePermissionsBoundaryResponse, _super);
    function GetPutRolePermissionsBoundaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPutRolePermissionsBoundaryResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPutRolePermissionsBoundaryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPutRolePermissionsBoundaryResponse.prototype, "statusCode", void 0);
    return GetPutRolePermissionsBoundaryResponse;
}(SpeakeasyBase));
export { GetPutRolePermissionsBoundaryResponse };
