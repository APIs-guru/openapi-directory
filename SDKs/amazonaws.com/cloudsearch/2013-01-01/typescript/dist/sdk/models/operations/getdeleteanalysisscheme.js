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
export var GetDeleteAnalysisSchemeActionEnum;
(function (GetDeleteAnalysisSchemeActionEnum) {
    GetDeleteAnalysisSchemeActionEnum["DeleteAnalysisScheme"] = "DeleteAnalysisScheme";
})(GetDeleteAnalysisSchemeActionEnum || (GetDeleteAnalysisSchemeActionEnum = {}));
export var GetDeleteAnalysisSchemeVersionEnum;
(function (GetDeleteAnalysisSchemeVersionEnum) {
    GetDeleteAnalysisSchemeVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(GetDeleteAnalysisSchemeVersionEnum || (GetDeleteAnalysisSchemeVersionEnum = {}));
var GetDeleteAnalysisSchemeQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteAnalysisSchemeQueryParams, _super);
    function GetDeleteAnalysisSchemeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteAnalysisSchemeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AnalysisSchemeName" }),
        __metadata("design:type", String)
    ], GetDeleteAnalysisSchemeQueryParams.prototype, "analysisSchemeName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetDeleteAnalysisSchemeQueryParams.prototype, "domainName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteAnalysisSchemeQueryParams.prototype, "version", void 0);
    return GetDeleteAnalysisSchemeQueryParams;
}(SpeakeasyBase));
export { GetDeleteAnalysisSchemeQueryParams };
var GetDeleteAnalysisSchemeHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteAnalysisSchemeHeaders, _super);
    function GetDeleteAnalysisSchemeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteAnalysisSchemeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteAnalysisSchemeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteAnalysisSchemeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteAnalysisSchemeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteAnalysisSchemeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteAnalysisSchemeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteAnalysisSchemeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteAnalysisSchemeHeaders;
}(SpeakeasyBase));
export { GetDeleteAnalysisSchemeHeaders };
var GetDeleteAnalysisSchemeRequest = /** @class */ (function (_super) {
    __extends(GetDeleteAnalysisSchemeRequest, _super);
    function GetDeleteAnalysisSchemeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteAnalysisSchemeQueryParams)
    ], GetDeleteAnalysisSchemeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDeleteAnalysisSchemeHeaders)
    ], GetDeleteAnalysisSchemeRequest.prototype, "headers", void 0);
    return GetDeleteAnalysisSchemeRequest;
}(SpeakeasyBase));
export { GetDeleteAnalysisSchemeRequest };
var GetDeleteAnalysisSchemeResponse = /** @class */ (function (_super) {
    __extends(GetDeleteAnalysisSchemeResponse, _super);
    function GetDeleteAnalysisSchemeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteAnalysisSchemeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDeleteAnalysisSchemeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDeleteAnalysisSchemeResponse.prototype, "statusCode", void 0);
    return GetDeleteAnalysisSchemeResponse;
}(SpeakeasyBase));
export { GetDeleteAnalysisSchemeResponse };
