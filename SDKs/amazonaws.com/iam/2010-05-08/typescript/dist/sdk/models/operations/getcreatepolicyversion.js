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
export var GetCreatePolicyVersionActionEnum;
(function (GetCreatePolicyVersionActionEnum) {
    GetCreatePolicyVersionActionEnum["CreatePolicyVersion"] = "CreatePolicyVersion";
})(GetCreatePolicyVersionActionEnum || (GetCreatePolicyVersionActionEnum = {}));
export var GetCreatePolicyVersionVersionEnum;
(function (GetCreatePolicyVersionVersionEnum) {
    GetCreatePolicyVersionVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetCreatePolicyVersionVersionEnum || (GetCreatePolicyVersionVersionEnum = {}));
var GetCreatePolicyVersionQueryParams = /** @class */ (function (_super) {
    __extends(GetCreatePolicyVersionQueryParams, _super);
    function GetCreatePolicyVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreatePolicyVersionQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" }),
        __metadata("design:type", String)
    ], GetCreatePolicyVersionQueryParams.prototype, "policyArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PolicyDocument" }),
        __metadata("design:type", String)
    ], GetCreatePolicyVersionQueryParams.prototype, "policyDocument", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SetAsDefault" }),
        __metadata("design:type", Boolean)
    ], GetCreatePolicyVersionQueryParams.prototype, "setAsDefault", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreatePolicyVersionQueryParams.prototype, "version", void 0);
    return GetCreatePolicyVersionQueryParams;
}(SpeakeasyBase));
export { GetCreatePolicyVersionQueryParams };
var GetCreatePolicyVersionHeaders = /** @class */ (function (_super) {
    __extends(GetCreatePolicyVersionHeaders, _super);
    function GetCreatePolicyVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreatePolicyVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreatePolicyVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreatePolicyVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreatePolicyVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreatePolicyVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreatePolicyVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreatePolicyVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreatePolicyVersionHeaders;
}(SpeakeasyBase));
export { GetCreatePolicyVersionHeaders };
var GetCreatePolicyVersionRequest = /** @class */ (function (_super) {
    __extends(GetCreatePolicyVersionRequest, _super);
    function GetCreatePolicyVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreatePolicyVersionQueryParams)
    ], GetCreatePolicyVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCreatePolicyVersionHeaders)
    ], GetCreatePolicyVersionRequest.prototype, "headers", void 0);
    return GetCreatePolicyVersionRequest;
}(SpeakeasyBase));
export { GetCreatePolicyVersionRequest };
var GetCreatePolicyVersionResponse = /** @class */ (function (_super) {
    __extends(GetCreatePolicyVersionResponse, _super);
    function GetCreatePolicyVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCreatePolicyVersionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCreatePolicyVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCreatePolicyVersionResponse.prototype, "statusCode", void 0);
    return GetCreatePolicyVersionResponse;
}(SpeakeasyBase));
export { GetCreatePolicyVersionResponse };
