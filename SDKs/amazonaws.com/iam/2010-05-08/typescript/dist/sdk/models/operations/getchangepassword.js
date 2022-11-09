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
export var GetChangePasswordActionEnum;
(function (GetChangePasswordActionEnum) {
    GetChangePasswordActionEnum["ChangePassword"] = "ChangePassword";
})(GetChangePasswordActionEnum || (GetChangePasswordActionEnum = {}));
export var GetChangePasswordVersionEnum;
(function (GetChangePasswordVersionEnum) {
    GetChangePasswordVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetChangePasswordVersionEnum || (GetChangePasswordVersionEnum = {}));
var GetChangePasswordQueryParams = /** @class */ (function (_super) {
    __extends(GetChangePasswordQueryParams, _super);
    function GetChangePasswordQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetChangePasswordQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NewPassword" }),
        __metadata("design:type", String)
    ], GetChangePasswordQueryParams.prototype, "newPassword", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=OldPassword" }),
        __metadata("design:type", String)
    ], GetChangePasswordQueryParams.prototype, "oldPassword", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetChangePasswordQueryParams.prototype, "version", void 0);
    return GetChangePasswordQueryParams;
}(SpeakeasyBase));
export { GetChangePasswordQueryParams };
var GetChangePasswordHeaders = /** @class */ (function (_super) {
    __extends(GetChangePasswordHeaders, _super);
    function GetChangePasswordHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetChangePasswordHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetChangePasswordHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetChangePasswordHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetChangePasswordHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetChangePasswordHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetChangePasswordHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetChangePasswordHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetChangePasswordHeaders;
}(SpeakeasyBase));
export { GetChangePasswordHeaders };
var GetChangePasswordRequest = /** @class */ (function (_super) {
    __extends(GetChangePasswordRequest, _super);
    function GetChangePasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetChangePasswordQueryParams)
    ], GetChangePasswordRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetChangePasswordHeaders)
    ], GetChangePasswordRequest.prototype, "headers", void 0);
    return GetChangePasswordRequest;
}(SpeakeasyBase));
export { GetChangePasswordRequest };
var GetChangePasswordResponse = /** @class */ (function (_super) {
    __extends(GetChangePasswordResponse, _super);
    function GetChangePasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetChangePasswordResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetChangePasswordResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetChangePasswordResponse.prototype, "statusCode", void 0);
    return GetChangePasswordResponse;
}(SpeakeasyBase));
export { GetChangePasswordResponse };
