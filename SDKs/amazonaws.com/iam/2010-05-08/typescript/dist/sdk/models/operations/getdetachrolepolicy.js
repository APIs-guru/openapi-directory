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
export var GetDetachRolePolicyActionEnum;
(function (GetDetachRolePolicyActionEnum) {
    GetDetachRolePolicyActionEnum["DetachRolePolicy"] = "DetachRolePolicy";
})(GetDetachRolePolicyActionEnum || (GetDetachRolePolicyActionEnum = {}));
export var GetDetachRolePolicyVersionEnum;
(function (GetDetachRolePolicyVersionEnum) {
    GetDetachRolePolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetDetachRolePolicyVersionEnum || (GetDetachRolePolicyVersionEnum = {}));
var GetDetachRolePolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetDetachRolePolicyQueryParams, _super);
    function GetDetachRolePolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDetachRolePolicyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" }),
        __metadata("design:type", String)
    ], GetDetachRolePolicyQueryParams.prototype, "policyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleName" }),
        __metadata("design:type", String)
    ], GetDetachRolePolicyQueryParams.prototype, "roleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDetachRolePolicyQueryParams.prototype, "version", void 0);
    return GetDetachRolePolicyQueryParams;
}(SpeakeasyBase));
export { GetDetachRolePolicyQueryParams };
var GetDetachRolePolicyHeaders = /** @class */ (function (_super) {
    __extends(GetDetachRolePolicyHeaders, _super);
    function GetDetachRolePolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDetachRolePolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDetachRolePolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDetachRolePolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDetachRolePolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDetachRolePolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDetachRolePolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDetachRolePolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDetachRolePolicyHeaders;
}(SpeakeasyBase));
export { GetDetachRolePolicyHeaders };
var GetDetachRolePolicyRequest = /** @class */ (function (_super) {
    __extends(GetDetachRolePolicyRequest, _super);
    function GetDetachRolePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDetachRolePolicyQueryParams)
    ], GetDetachRolePolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDetachRolePolicyHeaders)
    ], GetDetachRolePolicyRequest.prototype, "headers", void 0);
    return GetDetachRolePolicyRequest;
}(SpeakeasyBase));
export { GetDetachRolePolicyRequest };
var GetDetachRolePolicyResponse = /** @class */ (function (_super) {
    __extends(GetDetachRolePolicyResponse, _super);
    function GetDetachRolePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDetachRolePolicyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDetachRolePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDetachRolePolicyResponse.prototype, "statusCode", void 0);
    return GetDetachRolePolicyResponse;
}(SpeakeasyBase));
export { GetDetachRolePolicyResponse };
