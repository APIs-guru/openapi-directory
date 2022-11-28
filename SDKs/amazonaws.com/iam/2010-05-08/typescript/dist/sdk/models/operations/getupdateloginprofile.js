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
export var GetUpdateLoginProfileActionEnum;
(function (GetUpdateLoginProfileActionEnum) {
    GetUpdateLoginProfileActionEnum["UpdateLoginProfile"] = "UpdateLoginProfile";
})(GetUpdateLoginProfileActionEnum || (GetUpdateLoginProfileActionEnum = {}));
export var GetUpdateLoginProfileVersionEnum;
(function (GetUpdateLoginProfileVersionEnum) {
    GetUpdateLoginProfileVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUpdateLoginProfileVersionEnum || (GetUpdateLoginProfileVersionEnum = {}));
var GetUpdateLoginProfileQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateLoginProfileQueryParams, _super);
    function GetUpdateLoginProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateLoginProfileQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Password" }),
        __metadata("design:type", String)
    ], GetUpdateLoginProfileQueryParams.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PasswordResetRequired" }),
        __metadata("design:type", Boolean)
    ], GetUpdateLoginProfileQueryParams.prototype, "passwordResetRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetUpdateLoginProfileQueryParams.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateLoginProfileQueryParams.prototype, "version", void 0);
    return GetUpdateLoginProfileQueryParams;
}(SpeakeasyBase));
export { GetUpdateLoginProfileQueryParams };
var GetUpdateLoginProfileHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateLoginProfileHeaders, _super);
    function GetUpdateLoginProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateLoginProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateLoginProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateLoginProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateLoginProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateLoginProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateLoginProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateLoginProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateLoginProfileHeaders;
}(SpeakeasyBase));
export { GetUpdateLoginProfileHeaders };
var GetUpdateLoginProfileRequest = /** @class */ (function (_super) {
    __extends(GetUpdateLoginProfileRequest, _super);
    function GetUpdateLoginProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateLoginProfileQueryParams)
    ], GetUpdateLoginProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateLoginProfileHeaders)
    ], GetUpdateLoginProfileRequest.prototype, "headers", void 0);
    return GetUpdateLoginProfileRequest;
}(SpeakeasyBase));
export { GetUpdateLoginProfileRequest };
var GetUpdateLoginProfileResponse = /** @class */ (function (_super) {
    __extends(GetUpdateLoginProfileResponse, _super);
    function GetUpdateLoginProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateLoginProfileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUpdateLoginProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUpdateLoginProfileResponse.prototype, "statusCode", void 0);
    return GetUpdateLoginProfileResponse;
}(SpeakeasyBase));
export { GetUpdateLoginProfileResponse };
