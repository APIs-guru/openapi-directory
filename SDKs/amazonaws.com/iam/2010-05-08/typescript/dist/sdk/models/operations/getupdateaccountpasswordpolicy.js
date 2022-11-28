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
export var GetUpdateAccountPasswordPolicyActionEnum;
(function (GetUpdateAccountPasswordPolicyActionEnum) {
    GetUpdateAccountPasswordPolicyActionEnum["UpdateAccountPasswordPolicy"] = "UpdateAccountPasswordPolicy";
})(GetUpdateAccountPasswordPolicyActionEnum || (GetUpdateAccountPasswordPolicyActionEnum = {}));
export var GetUpdateAccountPasswordPolicyVersionEnum;
(function (GetUpdateAccountPasswordPolicyVersionEnum) {
    GetUpdateAccountPasswordPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUpdateAccountPasswordPolicyVersionEnum || (GetUpdateAccountPasswordPolicyVersionEnum = {}));
var GetUpdateAccountPasswordPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateAccountPasswordPolicyQueryParams, _super);
    function GetUpdateAccountPasswordPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateAccountPasswordPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllowUsersToChangePassword" }),
        __metadata("design:type", Boolean)
    ], GetUpdateAccountPasswordPolicyQueryParams.prototype, "allowUsersToChangePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HardExpiry" }),
        __metadata("design:type", Boolean)
    ], GetUpdateAccountPasswordPolicyQueryParams.prototype, "hardExpiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxPasswordAge" }),
        __metadata("design:type", Number)
    ], GetUpdateAccountPasswordPolicyQueryParams.prototype, "maxPasswordAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MinimumPasswordLength" }),
        __metadata("design:type", Number)
    ], GetUpdateAccountPasswordPolicyQueryParams.prototype, "minimumPasswordLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PasswordReusePrevention" }),
        __metadata("design:type", Number)
    ], GetUpdateAccountPasswordPolicyQueryParams.prototype, "passwordReusePrevention", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RequireLowercaseCharacters" }),
        __metadata("design:type", Boolean)
    ], GetUpdateAccountPasswordPolicyQueryParams.prototype, "requireLowercaseCharacters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RequireNumbers" }),
        __metadata("design:type", Boolean)
    ], GetUpdateAccountPasswordPolicyQueryParams.prototype, "requireNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RequireSymbols" }),
        __metadata("design:type", Boolean)
    ], GetUpdateAccountPasswordPolicyQueryParams.prototype, "requireSymbols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RequireUppercaseCharacters" }),
        __metadata("design:type", Boolean)
    ], GetUpdateAccountPasswordPolicyQueryParams.prototype, "requireUppercaseCharacters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateAccountPasswordPolicyQueryParams.prototype, "version", void 0);
    return GetUpdateAccountPasswordPolicyQueryParams;
}(SpeakeasyBase));
export { GetUpdateAccountPasswordPolicyQueryParams };
var GetUpdateAccountPasswordPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateAccountPasswordPolicyHeaders, _super);
    function GetUpdateAccountPasswordPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateAccountPasswordPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateAccountPasswordPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateAccountPasswordPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateAccountPasswordPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateAccountPasswordPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateAccountPasswordPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateAccountPasswordPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateAccountPasswordPolicyHeaders;
}(SpeakeasyBase));
export { GetUpdateAccountPasswordPolicyHeaders };
var GetUpdateAccountPasswordPolicyRequest = /** @class */ (function (_super) {
    __extends(GetUpdateAccountPasswordPolicyRequest, _super);
    function GetUpdateAccountPasswordPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateAccountPasswordPolicyQueryParams)
    ], GetUpdateAccountPasswordPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateAccountPasswordPolicyHeaders)
    ], GetUpdateAccountPasswordPolicyRequest.prototype, "headers", void 0);
    return GetUpdateAccountPasswordPolicyRequest;
}(SpeakeasyBase));
export { GetUpdateAccountPasswordPolicyRequest };
var GetUpdateAccountPasswordPolicyResponse = /** @class */ (function (_super) {
    __extends(GetUpdateAccountPasswordPolicyResponse, _super);
    function GetUpdateAccountPasswordPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateAccountPasswordPolicyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUpdateAccountPasswordPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUpdateAccountPasswordPolicyResponse.prototype, "statusCode", void 0);
    return GetUpdateAccountPasswordPolicyResponse;
}(SpeakeasyBase));
export { GetUpdateAccountPasswordPolicyResponse };
