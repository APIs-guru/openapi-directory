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
export var GetListRolePoliciesActionEnum;
(function (GetListRolePoliciesActionEnum) {
    GetListRolePoliciesActionEnum["ListRolePolicies"] = "ListRolePolicies";
})(GetListRolePoliciesActionEnum || (GetListRolePoliciesActionEnum = {}));
export var GetListRolePoliciesVersionEnum;
(function (GetListRolePoliciesVersionEnum) {
    GetListRolePoliciesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListRolePoliciesVersionEnum || (GetListRolePoliciesVersionEnum = {}));
var GetListRolePoliciesQueryParams = /** @class */ (function (_super) {
    __extends(GetListRolePoliciesQueryParams, _super);
    function GetListRolePoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListRolePoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListRolePoliciesQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListRolePoliciesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=RoleName" }),
        __metadata("design:type", String)
    ], GetListRolePoliciesQueryParams.prototype, "roleName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListRolePoliciesQueryParams.prototype, "version", void 0);
    return GetListRolePoliciesQueryParams;
}(SpeakeasyBase));
export { GetListRolePoliciesQueryParams };
var GetListRolePoliciesHeaders = /** @class */ (function (_super) {
    __extends(GetListRolePoliciesHeaders, _super);
    function GetListRolePoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListRolePoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListRolePoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListRolePoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListRolePoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListRolePoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListRolePoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListRolePoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListRolePoliciesHeaders;
}(SpeakeasyBase));
export { GetListRolePoliciesHeaders };
var GetListRolePoliciesRequest = /** @class */ (function (_super) {
    __extends(GetListRolePoliciesRequest, _super);
    function GetListRolePoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListRolePoliciesQueryParams)
    ], GetListRolePoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListRolePoliciesHeaders)
    ], GetListRolePoliciesRequest.prototype, "headers", void 0);
    return GetListRolePoliciesRequest;
}(SpeakeasyBase));
export { GetListRolePoliciesRequest };
var GetListRolePoliciesResponse = /** @class */ (function (_super) {
    __extends(GetListRolePoliciesResponse, _super);
    function GetListRolePoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetListRolePoliciesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListRolePoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListRolePoliciesResponse.prototype, "statusCode", void 0);
    return GetListRolePoliciesResponse;
}(SpeakeasyBase));
export { GetListRolePoliciesResponse };
