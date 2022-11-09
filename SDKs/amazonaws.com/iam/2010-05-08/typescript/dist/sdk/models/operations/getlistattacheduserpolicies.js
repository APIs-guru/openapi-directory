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
export var GetListAttachedUserPoliciesActionEnum;
(function (GetListAttachedUserPoliciesActionEnum) {
    GetListAttachedUserPoliciesActionEnum["ListAttachedUserPolicies"] = "ListAttachedUserPolicies";
})(GetListAttachedUserPoliciesActionEnum || (GetListAttachedUserPoliciesActionEnum = {}));
export var GetListAttachedUserPoliciesVersionEnum;
(function (GetListAttachedUserPoliciesVersionEnum) {
    GetListAttachedUserPoliciesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListAttachedUserPoliciesVersionEnum || (GetListAttachedUserPoliciesVersionEnum = {}));
var GetListAttachedUserPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(GetListAttachedUserPoliciesQueryParams, _super);
    function GetListAttachedUserPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListAttachedUserPoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListAttachedUserPoliciesQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListAttachedUserPoliciesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PathPrefix" }),
        __metadata("design:type", String)
    ], GetListAttachedUserPoliciesQueryParams.prototype, "pathPrefix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetListAttachedUserPoliciesQueryParams.prototype, "userName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListAttachedUserPoliciesQueryParams.prototype, "version", void 0);
    return GetListAttachedUserPoliciesQueryParams;
}(SpeakeasyBase));
export { GetListAttachedUserPoliciesQueryParams };
var GetListAttachedUserPoliciesHeaders = /** @class */ (function (_super) {
    __extends(GetListAttachedUserPoliciesHeaders, _super);
    function GetListAttachedUserPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListAttachedUserPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListAttachedUserPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListAttachedUserPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListAttachedUserPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListAttachedUserPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListAttachedUserPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListAttachedUserPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListAttachedUserPoliciesHeaders;
}(SpeakeasyBase));
export { GetListAttachedUserPoliciesHeaders };
var GetListAttachedUserPoliciesRequest = /** @class */ (function (_super) {
    __extends(GetListAttachedUserPoliciesRequest, _super);
    function GetListAttachedUserPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListAttachedUserPoliciesQueryParams)
    ], GetListAttachedUserPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListAttachedUserPoliciesHeaders)
    ], GetListAttachedUserPoliciesRequest.prototype, "headers", void 0);
    return GetListAttachedUserPoliciesRequest;
}(SpeakeasyBase));
export { GetListAttachedUserPoliciesRequest };
var GetListAttachedUserPoliciesResponse = /** @class */ (function (_super) {
    __extends(GetListAttachedUserPoliciesResponse, _super);
    function GetListAttachedUserPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetListAttachedUserPoliciesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListAttachedUserPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListAttachedUserPoliciesResponse.prototype, "statusCode", void 0);
    return GetListAttachedUserPoliciesResponse;
}(SpeakeasyBase));
export { GetListAttachedUserPoliciesResponse };
