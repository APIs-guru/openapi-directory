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
export var GetModifyUserActionEnum;
(function (GetModifyUserActionEnum) {
    GetModifyUserActionEnum["ModifyUser"] = "ModifyUser";
})(GetModifyUserActionEnum || (GetModifyUserActionEnum = {}));
export var GetModifyUserVersionEnum;
(function (GetModifyUserVersionEnum) {
    GetModifyUserVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetModifyUserVersionEnum || (GetModifyUserVersionEnum = {}));
var GetModifyUserQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyUserQueryParams, _super);
    function GetModifyUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AccessString" }),
        __metadata("design:type", String)
    ], GetModifyUserQueryParams.prototype, "accessString", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyUserQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AppendAccessString" }),
        __metadata("design:type", String)
    ], GetModifyUserQueryParams.prototype, "appendAccessString", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NoPasswordRequired" }),
        __metadata("design:type", Boolean)
    ], GetModifyUserQueryParams.prototype, "noPasswordRequired", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Passwords" }),
        __metadata("design:type", Array)
    ], GetModifyUserQueryParams.prototype, "passwords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UserId" }),
        __metadata("design:type", String)
    ], GetModifyUserQueryParams.prototype, "userId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyUserQueryParams.prototype, "version", void 0);
    return GetModifyUserQueryParams;
}(SpeakeasyBase));
export { GetModifyUserQueryParams };
var GetModifyUserHeaders = /** @class */ (function (_super) {
    __extends(GetModifyUserHeaders, _super);
    function GetModifyUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyUserHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyUserHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyUserHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyUserHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyUserHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyUserHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyUserHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyUserHeaders;
}(SpeakeasyBase));
export { GetModifyUserHeaders };
var GetModifyUserRequest = /** @class */ (function (_super) {
    __extends(GetModifyUserRequest, _super);
    function GetModifyUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyUserQueryParams)
    ], GetModifyUserRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetModifyUserHeaders)
    ], GetModifyUserRequest.prototype, "headers", void 0);
    return GetModifyUserRequest;
}(SpeakeasyBase));
export { GetModifyUserRequest };
var GetModifyUserResponse = /** @class */ (function (_super) {
    __extends(GetModifyUserResponse, _super);
    function GetModifyUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyUserResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetModifyUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetModifyUserResponse.prototype, "statusCode", void 0);
    return GetModifyUserResponse;
}(SpeakeasyBase));
export { GetModifyUserResponse };
