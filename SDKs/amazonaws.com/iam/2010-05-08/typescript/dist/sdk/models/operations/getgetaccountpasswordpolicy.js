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
export var GetGetAccountPasswordPolicyActionEnum;
(function (GetGetAccountPasswordPolicyActionEnum) {
    GetGetAccountPasswordPolicyActionEnum["GetAccountPasswordPolicy"] = "GetAccountPasswordPolicy";
})(GetGetAccountPasswordPolicyActionEnum || (GetGetAccountPasswordPolicyActionEnum = {}));
export var GetGetAccountPasswordPolicyVersionEnum;
(function (GetGetAccountPasswordPolicyVersionEnum) {
    GetGetAccountPasswordPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGetAccountPasswordPolicyVersionEnum || (GetGetAccountPasswordPolicyVersionEnum = {}));
var GetGetAccountPasswordPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetGetAccountPasswordPolicyQueryParams, _super);
    function GetGetAccountPasswordPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetAccountPasswordPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetAccountPasswordPolicyQueryParams.prototype, "version", void 0);
    return GetGetAccountPasswordPolicyQueryParams;
}(SpeakeasyBase));
export { GetGetAccountPasswordPolicyQueryParams };
var GetGetAccountPasswordPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetGetAccountPasswordPolicyHeaders, _super);
    function GetGetAccountPasswordPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetAccountPasswordPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetAccountPasswordPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetAccountPasswordPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetAccountPasswordPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetAccountPasswordPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetAccountPasswordPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetAccountPasswordPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetAccountPasswordPolicyHeaders;
}(SpeakeasyBase));
export { GetGetAccountPasswordPolicyHeaders };
var GetGetAccountPasswordPolicyRequest = /** @class */ (function (_super) {
    __extends(GetGetAccountPasswordPolicyRequest, _super);
    function GetGetAccountPasswordPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetAccountPasswordPolicyQueryParams)
    ], GetGetAccountPasswordPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetAccountPasswordPolicyHeaders)
    ], GetGetAccountPasswordPolicyRequest.prototype, "headers", void 0);
    return GetGetAccountPasswordPolicyRequest;
}(SpeakeasyBase));
export { GetGetAccountPasswordPolicyRequest };
var GetGetAccountPasswordPolicyResponse = /** @class */ (function (_super) {
    __extends(GetGetAccountPasswordPolicyResponse, _super);
    function GetGetAccountPasswordPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetAccountPasswordPolicyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetAccountPasswordPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetAccountPasswordPolicyResponse.prototype, "statusCode", void 0);
    return GetGetAccountPasswordPolicyResponse;
}(SpeakeasyBase));
export { GetGetAccountPasswordPolicyResponse };
