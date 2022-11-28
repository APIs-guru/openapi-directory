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
export var GetPutIdentityPolicyActionEnum;
(function (GetPutIdentityPolicyActionEnum) {
    GetPutIdentityPolicyActionEnum["PutIdentityPolicy"] = "PutIdentityPolicy";
})(GetPutIdentityPolicyActionEnum || (GetPutIdentityPolicyActionEnum = {}));
export var GetPutIdentityPolicyVersionEnum;
(function (GetPutIdentityPolicyVersionEnum) {
    GetPutIdentityPolicyVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetPutIdentityPolicyVersionEnum || (GetPutIdentityPolicyVersionEnum = {}));
var GetPutIdentityPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetPutIdentityPolicyQueryParams, _super);
    function GetPutIdentityPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPutIdentityPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", String)
    ], GetPutIdentityPolicyQueryParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Policy" }),
        __metadata("design:type", String)
    ], GetPutIdentityPolicyQueryParams.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyName" }),
        __metadata("design:type", String)
    ], GetPutIdentityPolicyQueryParams.prototype, "policyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPutIdentityPolicyQueryParams.prototype, "version", void 0);
    return GetPutIdentityPolicyQueryParams;
}(SpeakeasyBase));
export { GetPutIdentityPolicyQueryParams };
var GetPutIdentityPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetPutIdentityPolicyHeaders, _super);
    function GetPutIdentityPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPutIdentityPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPutIdentityPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPutIdentityPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPutIdentityPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPutIdentityPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPutIdentityPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPutIdentityPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPutIdentityPolicyHeaders;
}(SpeakeasyBase));
export { GetPutIdentityPolicyHeaders };
var GetPutIdentityPolicyRequest = /** @class */ (function (_super) {
    __extends(GetPutIdentityPolicyRequest, _super);
    function GetPutIdentityPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPutIdentityPolicyQueryParams)
    ], GetPutIdentityPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPutIdentityPolicyHeaders)
    ], GetPutIdentityPolicyRequest.prototype, "headers", void 0);
    return GetPutIdentityPolicyRequest;
}(SpeakeasyBase));
export { GetPutIdentityPolicyRequest };
var GetPutIdentityPolicyResponse = /** @class */ (function (_super) {
    __extends(GetPutIdentityPolicyResponse, _super);
    function GetPutIdentityPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPutIdentityPolicyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPutIdentityPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPutIdentityPolicyResponse.prototype, "statusCode", void 0);
    return GetPutIdentityPolicyResponse;
}(SpeakeasyBase));
export { GetPutIdentityPolicyResponse };
