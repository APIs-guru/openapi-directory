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
var ReportingPackageStatusSummaryQueryParams = /** @class */ (function (_super) {
    __extends(ReportingPackageStatusSummaryQueryParams, _super);
    function ReportingPackageStatusSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PackageID" }),
        __metadata("design:type", String)
    ], ReportingPackageStatusSummaryQueryParams.prototype, "packageId", void 0);
    return ReportingPackageStatusSummaryQueryParams;
}(SpeakeasyBase));
export { ReportingPackageStatusSummaryQueryParams };
var ReportingPackageStatusSummaryRequest = /** @class */ (function (_super) {
    __extends(ReportingPackageStatusSummaryRequest, _super);
    function ReportingPackageStatusSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportingPackageStatusSummaryQueryParams)
    ], ReportingPackageStatusSummaryRequest.prototype, "queryParams", void 0);
    return ReportingPackageStatusSummaryRequest;
}(SpeakeasyBase));
export { ReportingPackageStatusSummaryRequest };
var ReportingPackageStatusSummaryResponse = /** @class */ (function (_super) {
    __extends(ReportingPackageStatusSummaryResponse, _super);
    function ReportingPackageStatusSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], ReportingPackageStatusSummaryResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReportingPackageStatusSummaryResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReportingPackageStatusSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReportingPackageStatusSummaryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateSystemModelsPackageStatusSummary)
    ], ReportingPackageStatusSummaryResponse.prototype, "updateSystemModelsPackageStatusSummary", void 0);
    return ReportingPackageStatusSummaryResponse;
}(SpeakeasyBase));
export { ReportingPackageStatusSummaryResponse };
