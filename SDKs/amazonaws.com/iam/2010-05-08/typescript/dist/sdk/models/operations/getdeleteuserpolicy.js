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
export var GetDeleteUserPolicyActionEnum;
(function (GetDeleteUserPolicyActionEnum) {
    GetDeleteUserPolicyActionEnum["DeleteUserPolicy"] = "DeleteUserPolicy";
})(GetDeleteUserPolicyActionEnum || (GetDeleteUserPolicyActionEnum = {}));
export var GetDeleteUserPolicyVersionEnum;
(function (GetDeleteUserPolicyVersionEnum) {
    GetDeleteUserPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetDeleteUserPolicyVersionEnum || (GetDeleteUserPolicyVersionEnum = {}));
var GetDeleteUserPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteUserPolicyQueryParams, _super);
    function GetDeleteUserPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteUserPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" }),
        __metadata("design:type", String)
    ], GetDeleteUserPolicyQueryParams.prototype, "policyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetDeleteUserPolicyQueryParams.prototype, "userName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteUserPolicyQueryParams.prototype, "version", void 0);
    return GetDeleteUserPolicyQueryParams;
}(SpeakeasyBase));
export { GetDeleteUserPolicyQueryParams };
var GetDeleteUserPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteUserPolicyHeaders, _super);
    function GetDeleteUserPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteUserPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteUserPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteUserPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteUserPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteUserPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteUserPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteUserPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteUserPolicyHeaders;
}(SpeakeasyBase));
export { GetDeleteUserPolicyHeaders };
var GetDeleteUserPolicyRequest = /** @class */ (function (_super) {
    __extends(GetDeleteUserPolicyRequest, _super);
    function GetDeleteUserPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteUserPolicyQueryParams)
    ], GetDeleteUserPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteUserPolicyHeaders)
    ], GetDeleteUserPolicyRequest.prototype, "headers", void 0);
    return GetDeleteUserPolicyRequest;
}(SpeakeasyBase));
export { GetDeleteUserPolicyRequest };
var GetDeleteUserPolicyResponse = /** @class */ (function (_super) {
    __extends(GetDeleteUserPolicyResponse, _super);
    function GetDeleteUserPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteUserPolicyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteUserPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteUserPolicyResponse.prototype, "statusCode", void 0);
    return GetDeleteUserPolicyResponse;
}(SpeakeasyBase));
export { GetDeleteUserPolicyResponse };
