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
export var GetAttachRolePolicyActionEnum;
(function (GetAttachRolePolicyActionEnum) {
    GetAttachRolePolicyActionEnum["AttachRolePolicy"] = "AttachRolePolicy";
})(GetAttachRolePolicyActionEnum || (GetAttachRolePolicyActionEnum = {}));
export var GetAttachRolePolicyVersionEnum;
(function (GetAttachRolePolicyVersionEnum) {
    GetAttachRolePolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetAttachRolePolicyVersionEnum || (GetAttachRolePolicyVersionEnum = {}));
var GetAttachRolePolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetAttachRolePolicyQueryParams, _super);
    function GetAttachRolePolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAttachRolePolicyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" }),
        __metadata("design:type", String)
    ], GetAttachRolePolicyQueryParams.prototype, "policyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleName" }),
        __metadata("design:type", String)
    ], GetAttachRolePolicyQueryParams.prototype, "roleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAttachRolePolicyQueryParams.prototype, "version", void 0);
    return GetAttachRolePolicyQueryParams;
}(SpeakeasyBase));
export { GetAttachRolePolicyQueryParams };
var GetAttachRolePolicyHeaders = /** @class */ (function (_super) {
    __extends(GetAttachRolePolicyHeaders, _super);
    function GetAttachRolePolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAttachRolePolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAttachRolePolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAttachRolePolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAttachRolePolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAttachRolePolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAttachRolePolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAttachRolePolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAttachRolePolicyHeaders;
}(SpeakeasyBase));
export { GetAttachRolePolicyHeaders };
var GetAttachRolePolicyRequest = /** @class */ (function (_super) {
    __extends(GetAttachRolePolicyRequest, _super);
    function GetAttachRolePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttachRolePolicyQueryParams)
    ], GetAttachRolePolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttachRolePolicyHeaders)
    ], GetAttachRolePolicyRequest.prototype, "headers", void 0);
    return GetAttachRolePolicyRequest;
}(SpeakeasyBase));
export { GetAttachRolePolicyRequest };
var GetAttachRolePolicyResponse = /** @class */ (function (_super) {
    __extends(GetAttachRolePolicyResponse, _super);
    function GetAttachRolePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAttachRolePolicyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAttachRolePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAttachRolePolicyResponse.prototype, "statusCode", void 0);
    return GetAttachRolePolicyResponse;
}(SpeakeasyBase));
export { GetAttachRolePolicyResponse };
