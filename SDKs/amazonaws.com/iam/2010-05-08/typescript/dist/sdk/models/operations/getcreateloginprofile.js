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
export var GetCreateLoginProfileActionEnum;
(function (GetCreateLoginProfileActionEnum) {
    GetCreateLoginProfileActionEnum["CreateLoginProfile"] = "CreateLoginProfile";
})(GetCreateLoginProfileActionEnum || (GetCreateLoginProfileActionEnum = {}));
export var GetCreateLoginProfileVersionEnum;
(function (GetCreateLoginProfileVersionEnum) {
    GetCreateLoginProfileVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetCreateLoginProfileVersionEnum || (GetCreateLoginProfileVersionEnum = {}));
var GetCreateLoginProfileQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateLoginProfileQueryParams, _super);
    function GetCreateLoginProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateLoginProfileQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Password" }),
        __metadata("design:type", String)
    ], GetCreateLoginProfileQueryParams.prototype, "password", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PasswordResetRequired" }),
        __metadata("design:type", Boolean)
    ], GetCreateLoginProfileQueryParams.prototype, "passwordResetRequired", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetCreateLoginProfileQueryParams.prototype, "userName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateLoginProfileQueryParams.prototype, "version", void 0);
    return GetCreateLoginProfileQueryParams;
}(SpeakeasyBase));
export { GetCreateLoginProfileQueryParams };
var GetCreateLoginProfileHeaders = /** @class */ (function (_super) {
    __extends(GetCreateLoginProfileHeaders, _super);
    function GetCreateLoginProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateLoginProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateLoginProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateLoginProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateLoginProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateLoginProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateLoginProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateLoginProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateLoginProfileHeaders;
}(SpeakeasyBase));
export { GetCreateLoginProfileHeaders };
var GetCreateLoginProfileRequest = /** @class */ (function (_super) {
    __extends(GetCreateLoginProfileRequest, _super);
    function GetCreateLoginProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateLoginProfileQueryParams)
    ], GetCreateLoginProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreateLoginProfileHeaders)
    ], GetCreateLoginProfileRequest.prototype, "headers", void 0);
    return GetCreateLoginProfileRequest;
}(SpeakeasyBase));
export { GetCreateLoginProfileRequest };
var GetCreateLoginProfileResponse = /** @class */ (function (_super) {
    __extends(GetCreateLoginProfileResponse, _super);
    function GetCreateLoginProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreateLoginProfileResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreateLoginProfileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreateLoginProfileResponse.prototype, "statusCode", void 0);
    return GetCreateLoginProfileResponse;
}(SpeakeasyBase));
export { GetCreateLoginProfileResponse };
