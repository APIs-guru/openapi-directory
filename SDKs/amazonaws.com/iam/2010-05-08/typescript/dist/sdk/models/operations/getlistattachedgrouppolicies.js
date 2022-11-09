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
export var GetListAttachedGroupPoliciesActionEnum;
(function (GetListAttachedGroupPoliciesActionEnum) {
    GetListAttachedGroupPoliciesActionEnum["ListAttachedGroupPolicies"] = "ListAttachedGroupPolicies";
})(GetListAttachedGroupPoliciesActionEnum || (GetListAttachedGroupPoliciesActionEnum = {}));
export var GetListAttachedGroupPoliciesVersionEnum;
(function (GetListAttachedGroupPoliciesVersionEnum) {
    GetListAttachedGroupPoliciesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListAttachedGroupPoliciesVersionEnum || (GetListAttachedGroupPoliciesVersionEnum = {}));
var GetListAttachedGroupPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(GetListAttachedGroupPoliciesQueryParams, _super);
    function GetListAttachedGroupPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListAttachedGroupPoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" }),
        __metadata("design:type", String)
    ], GetListAttachedGroupPoliciesQueryParams.prototype, "groupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListAttachedGroupPoliciesQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListAttachedGroupPoliciesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PathPrefix" }),
        __metadata("design:type", String)
    ], GetListAttachedGroupPoliciesQueryParams.prototype, "pathPrefix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListAttachedGroupPoliciesQueryParams.prototype, "version", void 0);
    return GetListAttachedGroupPoliciesQueryParams;
}(SpeakeasyBase));
export { GetListAttachedGroupPoliciesQueryParams };
var GetListAttachedGroupPoliciesHeaders = /** @class */ (function (_super) {
    __extends(GetListAttachedGroupPoliciesHeaders, _super);
    function GetListAttachedGroupPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListAttachedGroupPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListAttachedGroupPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListAttachedGroupPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListAttachedGroupPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListAttachedGroupPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListAttachedGroupPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListAttachedGroupPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListAttachedGroupPoliciesHeaders;
}(SpeakeasyBase));
export { GetListAttachedGroupPoliciesHeaders };
var GetListAttachedGroupPoliciesRequest = /** @class */ (function (_super) {
    __extends(GetListAttachedGroupPoliciesRequest, _super);
    function GetListAttachedGroupPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListAttachedGroupPoliciesQueryParams)
    ], GetListAttachedGroupPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListAttachedGroupPoliciesHeaders)
    ], GetListAttachedGroupPoliciesRequest.prototype, "headers", void 0);
    return GetListAttachedGroupPoliciesRequest;
}(SpeakeasyBase));
export { GetListAttachedGroupPoliciesRequest };
var GetListAttachedGroupPoliciesResponse = /** @class */ (function (_super) {
    __extends(GetListAttachedGroupPoliciesResponse, _super);
    function GetListAttachedGroupPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetListAttachedGroupPoliciesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListAttachedGroupPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListAttachedGroupPoliciesResponse.prototype, "statusCode", void 0);
    return GetListAttachedGroupPoliciesResponse;
}(SpeakeasyBase));
export { GetListAttachedGroupPoliciesResponse };
