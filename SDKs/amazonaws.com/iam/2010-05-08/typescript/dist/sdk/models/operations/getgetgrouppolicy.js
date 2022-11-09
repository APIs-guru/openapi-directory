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
export var GetGetGroupPolicyActionEnum;
(function (GetGetGroupPolicyActionEnum) {
    GetGetGroupPolicyActionEnum["GetGroupPolicy"] = "GetGroupPolicy";
})(GetGetGroupPolicyActionEnum || (GetGetGroupPolicyActionEnum = {}));
export var GetGetGroupPolicyVersionEnum;
(function (GetGetGroupPolicyVersionEnum) {
    GetGetGroupPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGetGroupPolicyVersionEnum || (GetGetGroupPolicyVersionEnum = {}));
var GetGetGroupPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetGetGroupPolicyQueryParams, _super);
    function GetGetGroupPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetGroupPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" }),
        __metadata("design:type", String)
    ], GetGetGroupPolicyQueryParams.prototype, "groupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" }),
        __metadata("design:type", String)
    ], GetGetGroupPolicyQueryParams.prototype, "policyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetGroupPolicyQueryParams.prototype, "version", void 0);
    return GetGetGroupPolicyQueryParams;
}(SpeakeasyBase));
export { GetGetGroupPolicyQueryParams };
var GetGetGroupPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetGetGroupPolicyHeaders, _super);
    function GetGetGroupPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetGroupPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetGroupPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetGroupPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetGroupPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetGroupPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetGroupPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetGroupPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetGroupPolicyHeaders;
}(SpeakeasyBase));
export { GetGetGroupPolicyHeaders };
var GetGetGroupPolicyRequest = /** @class */ (function (_super) {
    __extends(GetGetGroupPolicyRequest, _super);
    function GetGetGroupPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetGroupPolicyQueryParams)
    ], GetGetGroupPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetGetGroupPolicyHeaders)
    ], GetGetGroupPolicyRequest.prototype, "headers", void 0);
    return GetGetGroupPolicyRequest;
}(SpeakeasyBase));
export { GetGetGroupPolicyRequest };
var GetGetGroupPolicyResponse = /** @class */ (function (_super) {
    __extends(GetGetGroupPolicyResponse, _super);
    function GetGetGroupPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetGroupPolicyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetGetGroupPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetGetGroupPolicyResponse.prototype, "statusCode", void 0);
    return GetGetGroupPolicyResponse;
}(SpeakeasyBase));
export { GetGetGroupPolicyResponse };
