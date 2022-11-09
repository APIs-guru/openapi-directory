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
export var GetListAccountAliasesActionEnum;
(function (GetListAccountAliasesActionEnum) {
    GetListAccountAliasesActionEnum["ListAccountAliases"] = "ListAccountAliases";
})(GetListAccountAliasesActionEnum || (GetListAccountAliasesActionEnum = {}));
export var GetListAccountAliasesVersionEnum;
(function (GetListAccountAliasesVersionEnum) {
    GetListAccountAliasesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListAccountAliasesVersionEnum || (GetListAccountAliasesVersionEnum = {}));
var GetListAccountAliasesQueryParams = /** @class */ (function (_super) {
    __extends(GetListAccountAliasesQueryParams, _super);
    function GetListAccountAliasesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListAccountAliasesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesQueryParams.prototype, "version", void 0);
    return GetListAccountAliasesQueryParams;
}(SpeakeasyBase));
export { GetListAccountAliasesQueryParams };
var GetListAccountAliasesHeaders = /** @class */ (function (_super) {
    __extends(GetListAccountAliasesHeaders, _super);
    function GetListAccountAliasesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListAccountAliasesHeaders;
}(SpeakeasyBase));
export { GetListAccountAliasesHeaders };
var GetListAccountAliasesRequest = /** @class */ (function (_super) {
    __extends(GetListAccountAliasesRequest, _super);
    function GetListAccountAliasesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListAccountAliasesQueryParams)
    ], GetListAccountAliasesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListAccountAliasesHeaders)
    ], GetListAccountAliasesRequest.prototype, "headers", void 0);
    return GetListAccountAliasesRequest;
}(SpeakeasyBase));
export { GetListAccountAliasesRequest };
var GetListAccountAliasesResponse = /** @class */ (function (_super) {
    __extends(GetListAccountAliasesResponse, _super);
    function GetListAccountAliasesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetListAccountAliasesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListAccountAliasesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListAccountAliasesResponse.prototype, "statusCode", void 0);
    return GetListAccountAliasesResponse;
}(SpeakeasyBase));
export { GetListAccountAliasesResponse };
