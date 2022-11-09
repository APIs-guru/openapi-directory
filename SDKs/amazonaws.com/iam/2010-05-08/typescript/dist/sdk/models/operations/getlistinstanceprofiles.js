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
export var GetListInstanceProfilesActionEnum;
(function (GetListInstanceProfilesActionEnum) {
    GetListInstanceProfilesActionEnum["ListInstanceProfiles"] = "ListInstanceProfiles";
})(GetListInstanceProfilesActionEnum || (GetListInstanceProfilesActionEnum = {}));
export var GetListInstanceProfilesVersionEnum;
(function (GetListInstanceProfilesVersionEnum) {
    GetListInstanceProfilesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListInstanceProfilesVersionEnum || (GetListInstanceProfilesVersionEnum = {}));
var GetListInstanceProfilesQueryParams = /** @class */ (function (_super) {
    __extends(GetListInstanceProfilesQueryParams, _super);
    function GetListInstanceProfilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListInstanceProfilesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListInstanceProfilesQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListInstanceProfilesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PathPrefix" }),
        __metadata("design:type", String)
    ], GetListInstanceProfilesQueryParams.prototype, "pathPrefix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListInstanceProfilesQueryParams.prototype, "version", void 0);
    return GetListInstanceProfilesQueryParams;
}(SpeakeasyBase));
export { GetListInstanceProfilesQueryParams };
var GetListInstanceProfilesHeaders = /** @class */ (function (_super) {
    __extends(GetListInstanceProfilesHeaders, _super);
    function GetListInstanceProfilesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListInstanceProfilesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListInstanceProfilesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListInstanceProfilesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListInstanceProfilesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListInstanceProfilesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListInstanceProfilesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListInstanceProfilesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListInstanceProfilesHeaders;
}(SpeakeasyBase));
export { GetListInstanceProfilesHeaders };
var GetListInstanceProfilesRequest = /** @class */ (function (_super) {
    __extends(GetListInstanceProfilesRequest, _super);
    function GetListInstanceProfilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListInstanceProfilesQueryParams)
    ], GetListInstanceProfilesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListInstanceProfilesHeaders)
    ], GetListInstanceProfilesRequest.prototype, "headers", void 0);
    return GetListInstanceProfilesRequest;
}(SpeakeasyBase));
export { GetListInstanceProfilesRequest };
var GetListInstanceProfilesResponse = /** @class */ (function (_super) {
    __extends(GetListInstanceProfilesResponse, _super);
    function GetListInstanceProfilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetListInstanceProfilesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListInstanceProfilesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListInstanceProfilesResponse.prototype, "statusCode", void 0);
    return GetListInstanceProfilesResponse;
}(SpeakeasyBase));
export { GetListInstanceProfilesResponse };
