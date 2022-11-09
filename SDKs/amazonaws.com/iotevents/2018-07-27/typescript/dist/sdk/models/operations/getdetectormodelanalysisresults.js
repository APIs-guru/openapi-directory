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
import * as shared from "../shared";
var GetDetectorModelAnalysisResultsPathParams = /** @class */ (function (_super) {
    __extends(GetDetectorModelAnalysisResultsPathParams, _super);
    function GetDetectorModelAnalysisResultsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=analysisId" }),
        __metadata("design:type", String)
    ], GetDetectorModelAnalysisResultsPathParams.prototype, "analysisId", void 0);
    return GetDetectorModelAnalysisResultsPathParams;
}(SpeakeasyBase));
export { GetDetectorModelAnalysisResultsPathParams };
var GetDetectorModelAnalysisResultsQueryParams = /** @class */ (function (_super) {
    __extends(GetDetectorModelAnalysisResultsQueryParams, _super);
    function GetDetectorModelAnalysisResultsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetDetectorModelAnalysisResultsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetDetectorModelAnalysisResultsQueryParams.prototype, "nextToken", void 0);
    return GetDetectorModelAnalysisResultsQueryParams;
}(SpeakeasyBase));
export { GetDetectorModelAnalysisResultsQueryParams };
var GetDetectorModelAnalysisResultsHeaders = /** @class */ (function (_super) {
    __extends(GetDetectorModelAnalysisResultsHeaders, _super);
    function GetDetectorModelAnalysisResultsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDetectorModelAnalysisResultsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDetectorModelAnalysisResultsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDetectorModelAnalysisResultsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDetectorModelAnalysisResultsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDetectorModelAnalysisResultsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDetectorModelAnalysisResultsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDetectorModelAnalysisResultsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDetectorModelAnalysisResultsHeaders;
}(SpeakeasyBase));
export { GetDetectorModelAnalysisResultsHeaders };
var GetDetectorModelAnalysisResultsRequest = /** @class */ (function (_super) {
    __extends(GetDetectorModelAnalysisResultsRequest, _super);
    function GetDetectorModelAnalysisResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDetectorModelAnalysisResultsPathParams)
    ], GetDetectorModelAnalysisResultsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDetectorModelAnalysisResultsQueryParams)
    ], GetDetectorModelAnalysisResultsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDetectorModelAnalysisResultsHeaders)
    ], GetDetectorModelAnalysisResultsRequest.prototype, "headers", void 0);
    return GetDetectorModelAnalysisResultsRequest;
}(SpeakeasyBase));
export { GetDetectorModelAnalysisResultsRequest };
var GetDetectorModelAnalysisResultsResponse = /** @class */ (function (_super) {
    __extends(GetDetectorModelAnalysisResultsResponse, _super);
    function GetDetectorModelAnalysisResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDetectorModelAnalysisResultsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetDetectorModelAnalysisResultsResponse)
    ], GetDetectorModelAnalysisResultsResponse.prototype, "getDetectorModelAnalysisResultsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDetectorModelAnalysisResultsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDetectorModelAnalysisResultsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDetectorModelAnalysisResultsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDetectorModelAnalysisResultsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDetectorModelAnalysisResultsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetDetectorModelAnalysisResultsResponse.prototype, "throttlingException", void 0);
    return GetDetectorModelAnalysisResultsResponse;
}(SpeakeasyBase));
export { GetDetectorModelAnalysisResultsResponse };
