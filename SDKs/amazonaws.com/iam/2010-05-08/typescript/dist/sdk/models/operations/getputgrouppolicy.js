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
export var GetPutGroupPolicyActionEnum;
(function (GetPutGroupPolicyActionEnum) {
    GetPutGroupPolicyActionEnum["PutGroupPolicy"] = "PutGroupPolicy";
})(GetPutGroupPolicyActionEnum || (GetPutGroupPolicyActionEnum = {}));
export var GetPutGroupPolicyVersionEnum;
(function (GetPutGroupPolicyVersionEnum) {
    GetPutGroupPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetPutGroupPolicyVersionEnum || (GetPutGroupPolicyVersionEnum = {}));
var GetPutGroupPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetPutGroupPolicyQueryParams, _super);
    function GetPutGroupPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetPutGroupPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" }),
        __metadata("design:type", String)
    ], GetPutGroupPolicyQueryParams.prototype, "groupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicyDocument" }),
        __metadata("design:type", String)
    ], GetPutGroupPolicyQueryParams.prototype, "policyDocument", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" }),
        __metadata("design:type", String)
    ], GetPutGroupPolicyQueryParams.prototype, "policyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetPutGroupPolicyQueryParams.prototype, "version", void 0);
    return GetPutGroupPolicyQueryParams;
}(SpeakeasyBase));
export { GetPutGroupPolicyQueryParams };
var GetPutGroupPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetPutGroupPolicyHeaders, _super);
    function GetPutGroupPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetPutGroupPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetPutGroupPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetPutGroupPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetPutGroupPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetPutGroupPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetPutGroupPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetPutGroupPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetPutGroupPolicyHeaders;
}(SpeakeasyBase));
export { GetPutGroupPolicyHeaders };
var GetPutGroupPolicyRequest = /** @class */ (function (_super) {
    __extends(GetPutGroupPolicyRequest, _super);
    function GetPutGroupPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPutGroupPolicyQueryParams)
    ], GetPutGroupPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPutGroupPolicyHeaders)
    ], GetPutGroupPolicyRequest.prototype, "headers", void 0);
    return GetPutGroupPolicyRequest;
}(SpeakeasyBase));
export { GetPutGroupPolicyRequest };
var GetPutGroupPolicyResponse = /** @class */ (function (_super) {
    __extends(GetPutGroupPolicyResponse, _super);
    function GetPutGroupPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPutGroupPolicyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPutGroupPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPutGroupPolicyResponse.prototype, "statusCode", void 0);
    return GetPutGroupPolicyResponse;
}(SpeakeasyBase));
export { GetPutGroupPolicyResponse };
