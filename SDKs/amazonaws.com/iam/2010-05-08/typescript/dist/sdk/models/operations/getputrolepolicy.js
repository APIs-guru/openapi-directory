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
export var GetPutRolePolicyActionEnum;
(function (GetPutRolePolicyActionEnum) {
    GetPutRolePolicyActionEnum["PutRolePolicy"] = "PutRolePolicy";
})(GetPutRolePolicyActionEnum || (GetPutRolePolicyActionEnum = {}));
export var GetPutRolePolicyVersionEnum;
(function (GetPutRolePolicyVersionEnum) {
    GetPutRolePolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetPutRolePolicyVersionEnum || (GetPutRolePolicyVersionEnum = {}));
var GetPutRolePolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetPutRolePolicyQueryParams, _super);
    function GetPutRolePolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPutRolePolicyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyDocument" }),
        __metadata("design:type", String)
    ], GetPutRolePolicyQueryParams.prototype, "policyDocument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyName" }),
        __metadata("design:type", String)
    ], GetPutRolePolicyQueryParams.prototype, "policyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleName" }),
        __metadata("design:type", String)
    ], GetPutRolePolicyQueryParams.prototype, "roleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPutRolePolicyQueryParams.prototype, "version", void 0);
    return GetPutRolePolicyQueryParams;
}(SpeakeasyBase));
export { GetPutRolePolicyQueryParams };
var GetPutRolePolicyHeaders = /** @class */ (function (_super) {
    __extends(GetPutRolePolicyHeaders, _super);
    function GetPutRolePolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPutRolePolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPutRolePolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPutRolePolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPutRolePolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPutRolePolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPutRolePolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPutRolePolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPutRolePolicyHeaders;
}(SpeakeasyBase));
export { GetPutRolePolicyHeaders };
var GetPutRolePolicyRequest = /** @class */ (function (_super) {
    __extends(GetPutRolePolicyRequest, _super);
    function GetPutRolePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPutRolePolicyQueryParams)
    ], GetPutRolePolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPutRolePolicyHeaders)
    ], GetPutRolePolicyRequest.prototype, "headers", void 0);
    return GetPutRolePolicyRequest;
}(SpeakeasyBase));
export { GetPutRolePolicyRequest };
var GetPutRolePolicyResponse = /** @class */ (function (_super) {
    __extends(GetPutRolePolicyResponse, _super);
    function GetPutRolePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPutRolePolicyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPutRolePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPutRolePolicyResponse.prototype, "statusCode", void 0);
    return GetPutRolePolicyResponse;
}(SpeakeasyBase));
export { GetPutRolePolicyResponse };
