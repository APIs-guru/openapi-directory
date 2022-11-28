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
export var GetListRoleTagsActionEnum;
(function (GetListRoleTagsActionEnum) {
    GetListRoleTagsActionEnum["ListRoleTags"] = "ListRoleTags";
})(GetListRoleTagsActionEnum || (GetListRoleTagsActionEnum = {}));
export var GetListRoleTagsVersionEnum;
(function (GetListRoleTagsVersionEnum) {
    GetListRoleTagsVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListRoleTagsVersionEnum || (GetListRoleTagsVersionEnum = {}));
var GetListRoleTagsQueryParams = /** @class */ (function (_super) {
    __extends(GetListRoleTagsQueryParams, _super);
    function GetListRoleTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListRoleTagsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListRoleTagsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListRoleTagsQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleName" }),
        __metadata("design:type", String)
    ], GetListRoleTagsQueryParams.prototype, "roleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListRoleTagsQueryParams.prototype, "version", void 0);
    return GetListRoleTagsQueryParams;
}(SpeakeasyBase));
export { GetListRoleTagsQueryParams };
var GetListRoleTagsHeaders = /** @class */ (function (_super) {
    __extends(GetListRoleTagsHeaders, _super);
    function GetListRoleTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListRoleTagsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListRoleTagsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListRoleTagsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListRoleTagsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListRoleTagsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListRoleTagsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListRoleTagsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListRoleTagsHeaders;
}(SpeakeasyBase));
export { GetListRoleTagsHeaders };
var GetListRoleTagsRequest = /** @class */ (function (_super) {
    __extends(GetListRoleTagsRequest, _super);
    function GetListRoleTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListRoleTagsQueryParams)
    ], GetListRoleTagsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListRoleTagsHeaders)
    ], GetListRoleTagsRequest.prototype, "headers", void 0);
    return GetListRoleTagsRequest;
}(SpeakeasyBase));
export { GetListRoleTagsRequest };
var GetListRoleTagsResponse = /** @class */ (function (_super) {
    __extends(GetListRoleTagsResponse, _super);
    function GetListRoleTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListRoleTagsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListRoleTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListRoleTagsResponse.prototype, "statusCode", void 0);
    return GetListRoleTagsResponse;
}(SpeakeasyBase));
export { GetListRoleTagsResponse };
