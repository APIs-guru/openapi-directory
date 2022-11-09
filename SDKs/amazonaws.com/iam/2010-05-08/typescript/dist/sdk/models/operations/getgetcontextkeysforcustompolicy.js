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
export var GetGetContextKeysForCustomPolicyActionEnum;
(function (GetGetContextKeysForCustomPolicyActionEnum) {
    GetGetContextKeysForCustomPolicyActionEnum["GetContextKeysForCustomPolicy"] = "GetContextKeysForCustomPolicy";
})(GetGetContextKeysForCustomPolicyActionEnum || (GetGetContextKeysForCustomPolicyActionEnum = {}));
export var GetGetContextKeysForCustomPolicyVersionEnum;
(function (GetGetContextKeysForCustomPolicyVersionEnum) {
    GetGetContextKeysForCustomPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGetContextKeysForCustomPolicyVersionEnum || (GetGetContextKeysForCustomPolicyVersionEnum = {}));
var GetGetContextKeysForCustomPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetGetContextKeysForCustomPolicyQueryParams, _super);
    function GetGetContextKeysForCustomPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForCustomPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicyInputList" }),
        __metadata("design:type", Array)
    ], GetGetContextKeysForCustomPolicyQueryParams.prototype, "policyInputList", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForCustomPolicyQueryParams.prototype, "version", void 0);
    return GetGetContextKeysForCustomPolicyQueryParams;
}(SpeakeasyBase));
export { GetGetContextKeysForCustomPolicyQueryParams };
var GetGetContextKeysForCustomPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetGetContextKeysForCustomPolicyHeaders, _super);
    function GetGetContextKeysForCustomPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForCustomPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForCustomPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForCustomPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForCustomPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForCustomPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForCustomPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForCustomPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetContextKeysForCustomPolicyHeaders;
}(SpeakeasyBase));
export { GetGetContextKeysForCustomPolicyHeaders };
var GetGetContextKeysForCustomPolicyRequest = /** @class */ (function (_super) {
    __extends(GetGetContextKeysForCustomPolicyRequest, _super);
    function GetGetContextKeysForCustomPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetContextKeysForCustomPolicyQueryParams)
    ], GetGetContextKeysForCustomPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetContextKeysForCustomPolicyHeaders)
    ], GetGetContextKeysForCustomPolicyRequest.prototype, "headers", void 0);
    return GetGetContextKeysForCustomPolicyRequest;
}(SpeakeasyBase));
export { GetGetContextKeysForCustomPolicyRequest };
var GetGetContextKeysForCustomPolicyResponse = /** @class */ (function (_super) {
    __extends(GetGetContextKeysForCustomPolicyResponse, _super);
    function GetGetContextKeysForCustomPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetContextKeysForCustomPolicyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetContextKeysForCustomPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetContextKeysForCustomPolicyResponse.prototype, "statusCode", void 0);
    return GetGetContextKeysForCustomPolicyResponse;
}(SpeakeasyBase));
export { GetGetContextKeysForCustomPolicyResponse };
