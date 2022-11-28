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
export var GetGetIdentityPoliciesActionEnum;
(function (GetGetIdentityPoliciesActionEnum) {
    GetGetIdentityPoliciesActionEnum["GetIdentityPolicies"] = "GetIdentityPolicies";
})(GetGetIdentityPoliciesActionEnum || (GetGetIdentityPoliciesActionEnum = {}));
export var GetGetIdentityPoliciesVersionEnum;
(function (GetGetIdentityPoliciesVersionEnum) {
    GetGetIdentityPoliciesVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetGetIdentityPoliciesVersionEnum || (GetGetIdentityPoliciesVersionEnum = {}));
var GetGetIdentityPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(GetGetIdentityPoliciesQueryParams, _super);
    function GetGetIdentityPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetIdentityPoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", String)
    ], GetGetIdentityPoliciesQueryParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyNames" }),
        __metadata("design:type", Array)
    ], GetGetIdentityPoliciesQueryParams.prototype, "policyNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetIdentityPoliciesQueryParams.prototype, "version", void 0);
    return GetGetIdentityPoliciesQueryParams;
}(SpeakeasyBase));
export { GetGetIdentityPoliciesQueryParams };
var GetGetIdentityPoliciesHeaders = /** @class */ (function (_super) {
    __extends(GetGetIdentityPoliciesHeaders, _super);
    function GetGetIdentityPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetIdentityPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetIdentityPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetIdentityPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetIdentityPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetIdentityPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetIdentityPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetIdentityPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetIdentityPoliciesHeaders;
}(SpeakeasyBase));
export { GetGetIdentityPoliciesHeaders };
var GetGetIdentityPoliciesRequest = /** @class */ (function (_super) {
    __extends(GetGetIdentityPoliciesRequest, _super);
    function GetGetIdentityPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetIdentityPoliciesQueryParams)
    ], GetGetIdentityPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetIdentityPoliciesHeaders)
    ], GetGetIdentityPoliciesRequest.prototype, "headers", void 0);
    return GetGetIdentityPoliciesRequest;
}(SpeakeasyBase));
export { GetGetIdentityPoliciesRequest };
var GetGetIdentityPoliciesResponse = /** @class */ (function (_super) {
    __extends(GetGetIdentityPoliciesResponse, _super);
    function GetGetIdentityPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetIdentityPoliciesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetIdentityPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetIdentityPoliciesResponse.prototype, "statusCode", void 0);
    return GetGetIdentityPoliciesResponse;
}(SpeakeasyBase));
export { GetGetIdentityPoliciesResponse };
