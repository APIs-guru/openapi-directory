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
export var GetAddRoleToInstanceProfileActionEnum;
(function (GetAddRoleToInstanceProfileActionEnum) {
    GetAddRoleToInstanceProfileActionEnum["AddRoleToInstanceProfile"] = "AddRoleToInstanceProfile";
})(GetAddRoleToInstanceProfileActionEnum || (GetAddRoleToInstanceProfileActionEnum = {}));
export var GetAddRoleToInstanceProfileVersionEnum;
(function (GetAddRoleToInstanceProfileVersionEnum) {
    GetAddRoleToInstanceProfileVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetAddRoleToInstanceProfileVersionEnum || (GetAddRoleToInstanceProfileVersionEnum = {}));
var GetAddRoleToInstanceProfileQueryParams = /** @class */ (function (_super) {
    __extends(GetAddRoleToInstanceProfileQueryParams, _super);
    function GetAddRoleToInstanceProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAddRoleToInstanceProfileQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceProfileName" }),
        __metadata("design:type", String)
    ], GetAddRoleToInstanceProfileQueryParams.prototype, "instanceProfileName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" }),
        __metadata("design:type", String)
    ], GetAddRoleToInstanceProfileQueryParams.prototype, "roleName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAddRoleToInstanceProfileQueryParams.prototype, "version", void 0);
    return GetAddRoleToInstanceProfileQueryParams;
}(SpeakeasyBase));
export { GetAddRoleToInstanceProfileQueryParams };
var GetAddRoleToInstanceProfileHeaders = /** @class */ (function (_super) {
    __extends(GetAddRoleToInstanceProfileHeaders, _super);
    function GetAddRoleToInstanceProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAddRoleToInstanceProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAddRoleToInstanceProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAddRoleToInstanceProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAddRoleToInstanceProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAddRoleToInstanceProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAddRoleToInstanceProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAddRoleToInstanceProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAddRoleToInstanceProfileHeaders;
}(SpeakeasyBase));
export { GetAddRoleToInstanceProfileHeaders };
var GetAddRoleToInstanceProfileRequest = /** @class */ (function (_super) {
    __extends(GetAddRoleToInstanceProfileRequest, _super);
    function GetAddRoleToInstanceProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAddRoleToInstanceProfileQueryParams)
    ], GetAddRoleToInstanceProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAddRoleToInstanceProfileHeaders)
    ], GetAddRoleToInstanceProfileRequest.prototype, "headers", void 0);
    return GetAddRoleToInstanceProfileRequest;
}(SpeakeasyBase));
export { GetAddRoleToInstanceProfileRequest };
var GetAddRoleToInstanceProfileResponse = /** @class */ (function (_super) {
    __extends(GetAddRoleToInstanceProfileResponse, _super);
    function GetAddRoleToInstanceProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAddRoleToInstanceProfileResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAddRoleToInstanceProfileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAddRoleToInstanceProfileResponse.prototype, "statusCode", void 0);
    return GetAddRoleToInstanceProfileResponse;
}(SpeakeasyBase));
export { GetAddRoleToInstanceProfileResponse };
