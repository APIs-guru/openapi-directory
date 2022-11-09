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
export var GetRemoveRoleFromInstanceProfileActionEnum;
(function (GetRemoveRoleFromInstanceProfileActionEnum) {
    GetRemoveRoleFromInstanceProfileActionEnum["RemoveRoleFromInstanceProfile"] = "RemoveRoleFromInstanceProfile";
})(GetRemoveRoleFromInstanceProfileActionEnum || (GetRemoveRoleFromInstanceProfileActionEnum = {}));
export var GetRemoveRoleFromInstanceProfileVersionEnum;
(function (GetRemoveRoleFromInstanceProfileVersionEnum) {
    GetRemoveRoleFromInstanceProfileVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetRemoveRoleFromInstanceProfileVersionEnum || (GetRemoveRoleFromInstanceProfileVersionEnum = {}));
var GetRemoveRoleFromInstanceProfileQueryParams = /** @class */ (function (_super) {
    __extends(GetRemoveRoleFromInstanceProfileQueryParams, _super);
    function GetRemoveRoleFromInstanceProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromInstanceProfileQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InstanceProfileName" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromInstanceProfileQueryParams.prototype, "instanceProfileName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromInstanceProfileQueryParams.prototype, "roleName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromInstanceProfileQueryParams.prototype, "version", void 0);
    return GetRemoveRoleFromInstanceProfileQueryParams;
}(SpeakeasyBase));
export { GetRemoveRoleFromInstanceProfileQueryParams };
var GetRemoveRoleFromInstanceProfileHeaders = /** @class */ (function (_super) {
    __extends(GetRemoveRoleFromInstanceProfileHeaders, _super);
    function GetRemoveRoleFromInstanceProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRemoveRoleFromInstanceProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRemoveRoleFromInstanceProfileHeaders;
}(SpeakeasyBase));
export { GetRemoveRoleFromInstanceProfileHeaders };
var GetRemoveRoleFromInstanceProfileRequest = /** @class */ (function (_super) {
    __extends(GetRemoveRoleFromInstanceProfileRequest, _super);
    function GetRemoveRoleFromInstanceProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemoveRoleFromInstanceProfileQueryParams)
    ], GetRemoveRoleFromInstanceProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemoveRoleFromInstanceProfileHeaders)
    ], GetRemoveRoleFromInstanceProfileRequest.prototype, "headers", void 0);
    return GetRemoveRoleFromInstanceProfileRequest;
}(SpeakeasyBase));
export { GetRemoveRoleFromInstanceProfileRequest };
var GetRemoveRoleFromInstanceProfileResponse = /** @class */ (function (_super) {
    __extends(GetRemoveRoleFromInstanceProfileResponse, _super);
    function GetRemoveRoleFromInstanceProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRemoveRoleFromInstanceProfileResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRemoveRoleFromInstanceProfileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRemoveRoleFromInstanceProfileResponse.prototype, "statusCode", void 0);
    return GetRemoveRoleFromInstanceProfileResponse;
}(SpeakeasyBase));
export { GetRemoveRoleFromInstanceProfileResponse };
