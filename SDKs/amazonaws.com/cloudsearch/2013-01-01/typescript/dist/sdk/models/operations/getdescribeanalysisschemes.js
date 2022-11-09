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
export var GetDescribeAnalysisSchemesActionEnum;
(function (GetDescribeAnalysisSchemesActionEnum) {
    GetDescribeAnalysisSchemesActionEnum["DescribeAnalysisSchemes"] = "DescribeAnalysisSchemes";
})(GetDescribeAnalysisSchemesActionEnum || (GetDescribeAnalysisSchemesActionEnum = {}));
export var GetDescribeAnalysisSchemesVersionEnum;
(function (GetDescribeAnalysisSchemesVersionEnum) {
    GetDescribeAnalysisSchemesVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(GetDescribeAnalysisSchemesVersionEnum || (GetDescribeAnalysisSchemesVersionEnum = {}));
var GetDescribeAnalysisSchemesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeAnalysisSchemesQueryParams, _super);
    function GetDescribeAnalysisSchemesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeAnalysisSchemesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AnalysisSchemeNames" }),
        __metadata("design:type", Array)
    ], GetDescribeAnalysisSchemesQueryParams.prototype, "analysisSchemeNames", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Deployed" }),
        __metadata("design:type", Boolean)
    ], GetDescribeAnalysisSchemesQueryParams.prototype, "deployed", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetDescribeAnalysisSchemesQueryParams.prototype, "domainName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeAnalysisSchemesQueryParams.prototype, "version", void 0);
    return GetDescribeAnalysisSchemesQueryParams;
}(SpeakeasyBase));
export { GetDescribeAnalysisSchemesQueryParams };
var GetDescribeAnalysisSchemesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeAnalysisSchemesHeaders, _super);
    function GetDescribeAnalysisSchemesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeAnalysisSchemesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeAnalysisSchemesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeAnalysisSchemesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeAnalysisSchemesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeAnalysisSchemesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeAnalysisSchemesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeAnalysisSchemesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeAnalysisSchemesHeaders;
}(SpeakeasyBase));
export { GetDescribeAnalysisSchemesHeaders };
var GetDescribeAnalysisSchemesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeAnalysisSchemesRequest, _super);
    function GetDescribeAnalysisSchemesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAnalysisSchemesQueryParams)
    ], GetDescribeAnalysisSchemesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAnalysisSchemesHeaders)
    ], GetDescribeAnalysisSchemesRequest.prototype, "headers", void 0);
    return GetDescribeAnalysisSchemesRequest;
}(SpeakeasyBase));
export { GetDescribeAnalysisSchemesRequest };
var GetDescribeAnalysisSchemesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeAnalysisSchemesResponse, _super);
    function GetDescribeAnalysisSchemesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeAnalysisSchemesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeAnalysisSchemesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeAnalysisSchemesResponse.prototype, "statusCode", void 0);
    return GetDescribeAnalysisSchemesResponse;
}(SpeakeasyBase));
export { GetDescribeAnalysisSchemesResponse };
