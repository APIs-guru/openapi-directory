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
export var GetListAttachedRolePoliciesActionEnum;
(function (GetListAttachedRolePoliciesActionEnum) {
    GetListAttachedRolePoliciesActionEnum["ListAttachedRolePolicies"] = "ListAttachedRolePolicies";
})(GetListAttachedRolePoliciesActionEnum || (GetListAttachedRolePoliciesActionEnum = {}));
export var GetListAttachedRolePoliciesVersionEnum;
(function (GetListAttachedRolePoliciesVersionEnum) {
    GetListAttachedRolePoliciesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListAttachedRolePoliciesVersionEnum || (GetListAttachedRolePoliciesVersionEnum = {}));
var GetListAttachedRolePoliciesQueryParams = /** @class */ (function (_super) {
    __extends(GetListAttachedRolePoliciesQueryParams, _super);
    function GetListAttachedRolePoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListAttachedRolePoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListAttachedRolePoliciesQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListAttachedRolePoliciesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PathPrefix" }),
        __metadata("design:type", String)
    ], GetListAttachedRolePoliciesQueryParams.prototype, "pathPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleName" }),
        __metadata("design:type", String)
    ], GetListAttachedRolePoliciesQueryParams.prototype, "roleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListAttachedRolePoliciesQueryParams.prototype, "version", void 0);
    return GetListAttachedRolePoliciesQueryParams;
}(SpeakeasyBase));
export { GetListAttachedRolePoliciesQueryParams };
var GetListAttachedRolePoliciesHeaders = /** @class */ (function (_super) {
    __extends(GetListAttachedRolePoliciesHeaders, _super);
    function GetListAttachedRolePoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListAttachedRolePoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListAttachedRolePoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListAttachedRolePoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListAttachedRolePoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListAttachedRolePoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListAttachedRolePoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListAttachedRolePoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListAttachedRolePoliciesHeaders;
}(SpeakeasyBase));
export { GetListAttachedRolePoliciesHeaders };
var GetListAttachedRolePoliciesRequest = /** @class */ (function (_super) {
    __extends(GetListAttachedRolePoliciesRequest, _super);
    function GetListAttachedRolePoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListAttachedRolePoliciesQueryParams)
    ], GetListAttachedRolePoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListAttachedRolePoliciesHeaders)
    ], GetListAttachedRolePoliciesRequest.prototype, "headers", void 0);
    return GetListAttachedRolePoliciesRequest;
}(SpeakeasyBase));
export { GetListAttachedRolePoliciesRequest };
var GetListAttachedRolePoliciesResponse = /** @class */ (function (_super) {
    __extends(GetListAttachedRolePoliciesResponse, _super);
    function GetListAttachedRolePoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListAttachedRolePoliciesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListAttachedRolePoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListAttachedRolePoliciesResponse.prototype, "statusCode", void 0);
    return GetListAttachedRolePoliciesResponse;
}(SpeakeasyBase));
export { GetListAttachedRolePoliciesResponse };
