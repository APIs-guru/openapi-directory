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
import * as shared from "../shared";
var GetFindingsReportAccountSummaryQueryParams = /** @class */ (function (_super) {
    __extends(GetFindingsReportAccountSummaryQueryParams, _super);
    function GetFindingsReportAccountSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dailyReportsOnly" }),
        __metadata("design:type", Boolean)
    ], GetFindingsReportAccountSummaryQueryParams.prototype, "dailyReportsOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetFindingsReportAccountSummaryQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetFindingsReportAccountSummaryQueryParams.prototype, "nextToken", void 0);
    return GetFindingsReportAccountSummaryQueryParams;
}(SpeakeasyBase));
export { GetFindingsReportAccountSummaryQueryParams };
var GetFindingsReportAccountSummaryHeaders = /** @class */ (function (_super) {
    __extends(GetFindingsReportAccountSummaryHeaders, _super);
    function GetFindingsReportAccountSummaryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetFindingsReportAccountSummaryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetFindingsReportAccountSummaryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetFindingsReportAccountSummaryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetFindingsReportAccountSummaryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetFindingsReportAccountSummaryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetFindingsReportAccountSummaryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetFindingsReportAccountSummaryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetFindingsReportAccountSummaryHeaders;
}(SpeakeasyBase));
export { GetFindingsReportAccountSummaryHeaders };
var GetFindingsReportAccountSummaryRequest = /** @class */ (function (_super) {
    __extends(GetFindingsReportAccountSummaryRequest, _super);
    function GetFindingsReportAccountSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFindingsReportAccountSummaryQueryParams)
    ], GetFindingsReportAccountSummaryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFindingsReportAccountSummaryHeaders)
    ], GetFindingsReportAccountSummaryRequest.prototype, "headers", void 0);
    return GetFindingsReportAccountSummaryRequest;
}(SpeakeasyBase));
export { GetFindingsReportAccountSummaryRequest };
var GetFindingsReportAccountSummaryResponse = /** @class */ (function (_super) {
    __extends(GetFindingsReportAccountSummaryResponse, _super);
    function GetFindingsReportAccountSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFindingsReportAccountSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetFindingsReportAccountSummaryResponse)
    ], GetFindingsReportAccountSummaryResponse.prototype, "getFindingsReportAccountSummaryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingsReportAccountSummaryResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFindingsReportAccountSummaryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingsReportAccountSummaryResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingsReportAccountSummaryResponse.prototype, "validationException", void 0);
    return GetFindingsReportAccountSummaryResponse;
}(SpeakeasyBase));
export { GetFindingsReportAccountSummaryResponse };
