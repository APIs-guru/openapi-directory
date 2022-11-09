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
export var GetGetUserPolicyActionEnum;
(function (GetGetUserPolicyActionEnum) {
    GetGetUserPolicyActionEnum["GetUserPolicy"] = "GetUserPolicy";
})(GetGetUserPolicyActionEnum || (GetGetUserPolicyActionEnum = {}));
export var GetGetUserPolicyVersionEnum;
(function (GetGetUserPolicyVersionEnum) {
    GetGetUserPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGetUserPolicyVersionEnum || (GetGetUserPolicyVersionEnum = {}));
var GetGetUserPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetGetUserPolicyQueryParams, _super);
    function GetGetUserPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetUserPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" }),
        __metadata("design:type", String)
    ], GetGetUserPolicyQueryParams.prototype, "policyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetGetUserPolicyQueryParams.prototype, "userName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetUserPolicyQueryParams.prototype, "version", void 0);
    return GetGetUserPolicyQueryParams;
}(SpeakeasyBase));
export { GetGetUserPolicyQueryParams };
var GetGetUserPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetGetUserPolicyHeaders, _super);
    function GetGetUserPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetUserPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetUserPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetUserPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetUserPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetUserPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetUserPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetUserPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetUserPolicyHeaders;
}(SpeakeasyBase));
export { GetGetUserPolicyHeaders };
var GetGetUserPolicyRequest = /** @class */ (function (_super) {
    __extends(GetGetUserPolicyRequest, _super);
    function GetGetUserPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetUserPolicyQueryParams)
    ], GetGetUserPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetUserPolicyHeaders)
    ], GetGetUserPolicyRequest.prototype, "headers", void 0);
    return GetGetUserPolicyRequest;
}(SpeakeasyBase));
export { GetGetUserPolicyRequest };
var GetGetUserPolicyResponse = /** @class */ (function (_super) {
    __extends(GetGetUserPolicyResponse, _super);
    function GetGetUserPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetUserPolicyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetUserPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetUserPolicyResponse.prototype, "statusCode", void 0);
    return GetGetUserPolicyResponse;
}(SpeakeasyBase));
export { GetGetUserPolicyResponse };
