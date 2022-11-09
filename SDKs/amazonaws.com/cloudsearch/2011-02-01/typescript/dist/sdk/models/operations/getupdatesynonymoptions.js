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
export var GetUpdateSynonymOptionsActionEnum;
(function (GetUpdateSynonymOptionsActionEnum) {
    GetUpdateSynonymOptionsActionEnum["UpdateSynonymOptions"] = "UpdateSynonymOptions";
})(GetUpdateSynonymOptionsActionEnum || (GetUpdateSynonymOptionsActionEnum = {}));
export var GetUpdateSynonymOptionsVersionEnum;
(function (GetUpdateSynonymOptionsVersionEnum) {
    GetUpdateSynonymOptionsVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(GetUpdateSynonymOptionsVersionEnum || (GetUpdateSynonymOptionsVersionEnum = {}));
var GetUpdateSynonymOptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateSynonymOptionsQueryParams, _super);
    function GetUpdateSynonymOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateSynonymOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetUpdateSynonymOptionsQueryParams.prototype, "domainName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Synonyms" }),
        __metadata("design:type", String)
    ], GetUpdateSynonymOptionsQueryParams.prototype, "synonyms", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateSynonymOptionsQueryParams.prototype, "version", void 0);
    return GetUpdateSynonymOptionsQueryParams;
}(SpeakeasyBase));
export { GetUpdateSynonymOptionsQueryParams };
var GetUpdateSynonymOptionsHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateSynonymOptionsHeaders, _super);
    function GetUpdateSynonymOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateSynonymOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateSynonymOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateSynonymOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateSynonymOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateSynonymOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateSynonymOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateSynonymOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateSynonymOptionsHeaders;
}(SpeakeasyBase));
export { GetUpdateSynonymOptionsHeaders };
var GetUpdateSynonymOptionsRequest = /** @class */ (function (_super) {
    __extends(GetUpdateSynonymOptionsRequest, _super);
    function GetUpdateSynonymOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetUpdateSynonymOptionsQueryParams)
    ], GetUpdateSynonymOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetUpdateSynonymOptionsHeaders)
    ], GetUpdateSynonymOptionsRequest.prototype, "headers", void 0);
    return GetUpdateSynonymOptionsRequest;
}(SpeakeasyBase));
export { GetUpdateSynonymOptionsRequest };
var GetUpdateSynonymOptionsResponse = /** @class */ (function (_super) {
    __extends(GetUpdateSynonymOptionsResponse, _super);
    function GetUpdateSynonymOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateSynonymOptionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetUpdateSynonymOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetUpdateSynonymOptionsResponse.prototype, "statusCode", void 0);
    return GetUpdateSynonymOptionsResponse;
}(SpeakeasyBase));
export { GetUpdateSynonymOptionsResponse };
