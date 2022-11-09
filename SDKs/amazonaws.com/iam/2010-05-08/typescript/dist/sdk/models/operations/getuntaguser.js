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
export var GetUntagUserActionEnum;
(function (GetUntagUserActionEnum) {
    GetUntagUserActionEnum["UntagUser"] = "UntagUser";
})(GetUntagUserActionEnum || (GetUntagUserActionEnum = {}));
export var GetUntagUserVersionEnum;
(function (GetUntagUserVersionEnum) {
    GetUntagUserVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUntagUserVersionEnum || (GetUntagUserVersionEnum = {}));
var GetUntagUserQueryParams = /** @class */ (function (_super) {
    __extends(GetUntagUserQueryParams, _super);
    function GetUntagUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUntagUserQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" }),
        __metadata("design:type", Array)
    ], GetUntagUserQueryParams.prototype, "tagKeys", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetUntagUserQueryParams.prototype, "userName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUntagUserQueryParams.prototype, "version", void 0);
    return GetUntagUserQueryParams;
}(SpeakeasyBase));
export { GetUntagUserQueryParams };
var GetUntagUserHeaders = /** @class */ (function (_super) {
    __extends(GetUntagUserHeaders, _super);
    function GetUntagUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUntagUserHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUntagUserHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUntagUserHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUntagUserHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUntagUserHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUntagUserHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUntagUserHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUntagUserHeaders;
}(SpeakeasyBase));
export { GetUntagUserHeaders };
var GetUntagUserRequest = /** @class */ (function (_super) {
    __extends(GetUntagUserRequest, _super);
    function GetUntagUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetUntagUserQueryParams)
    ], GetUntagUserRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetUntagUserHeaders)
    ], GetUntagUserRequest.prototype, "headers", void 0);
    return GetUntagUserRequest;
}(SpeakeasyBase));
export { GetUntagUserRequest };
var GetUntagUserResponse = /** @class */ (function (_super) {
    __extends(GetUntagUserResponse, _super);
    function GetUntagUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetUntagUserResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetUntagUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetUntagUserResponse.prototype, "statusCode", void 0);
    return GetUntagUserResponse;
}(SpeakeasyBase));
export { GetUntagUserResponse };
