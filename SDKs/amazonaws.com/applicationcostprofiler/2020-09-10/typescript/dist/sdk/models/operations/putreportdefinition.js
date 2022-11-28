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
var PutReportDefinitionHeaders = /** @class */ (function (_super) {
    __extends(PutReportDefinitionHeaders, _super);
    function PutReportDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutReportDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutReportDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutReportDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutReportDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutReportDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutReportDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutReportDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutReportDefinitionHeaders;
}(SpeakeasyBase));
export { PutReportDefinitionHeaders };
// PutReportDefinitionRequestBodyDestinationS3Location
/**
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
**/
var PutReportDefinitionRequestBodyDestinationS3Location = /** @class */ (function (_super) {
    __extends(PutReportDefinitionRequestBodyDestinationS3Location, _super);
    function PutReportDefinitionRequestBodyDestinationS3Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucket" }),
        __metadata("design:type", String)
    ], PutReportDefinitionRequestBodyDestinationS3Location.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], PutReportDefinitionRequestBodyDestinationS3Location.prototype, "prefix", void 0);
    return PutReportDefinitionRequestBodyDestinationS3Location;
}(SpeakeasyBase));
export { PutReportDefinitionRequestBodyDestinationS3Location };
export var PutReportDefinitionRequestBodyFormatEnum;
(function (PutReportDefinitionRequestBodyFormatEnum) {
    PutReportDefinitionRequestBodyFormatEnum["Csv"] = "CSV";
    PutReportDefinitionRequestBodyFormatEnum["Parquet"] = "PARQUET";
})(PutReportDefinitionRequestBodyFormatEnum || (PutReportDefinitionRequestBodyFormatEnum = {}));
export var PutReportDefinitionRequestBodyReportFrequencyEnum;
(function (PutReportDefinitionRequestBodyReportFrequencyEnum) {
    PutReportDefinitionRequestBodyReportFrequencyEnum["Monthly"] = "MONTHLY";
    PutReportDefinitionRequestBodyReportFrequencyEnum["Daily"] = "DAILY";
    PutReportDefinitionRequestBodyReportFrequencyEnum["All"] = "ALL";
})(PutReportDefinitionRequestBodyReportFrequencyEnum || (PutReportDefinitionRequestBodyReportFrequencyEnum = {}));
var PutReportDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(PutReportDefinitionRequestBody, _super);
    function PutReportDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationS3Location" }),
        __metadata("design:type", PutReportDefinitionRequestBodyDestinationS3Location)
    ], PutReportDefinitionRequestBody.prototype, "destinationS3Location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PutReportDefinitionRequestBody.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportDescription" }),
        __metadata("design:type", String)
    ], PutReportDefinitionRequestBody.prototype, "reportDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportFrequency" }),
        __metadata("design:type", String)
    ], PutReportDefinitionRequestBody.prototype, "reportFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportId" }),
        __metadata("design:type", String)
    ], PutReportDefinitionRequestBody.prototype, "reportId", void 0);
    return PutReportDefinitionRequestBody;
}(SpeakeasyBase));
export { PutReportDefinitionRequestBody };
var PutReportDefinitionRequest = /** @class */ (function (_super) {
    __extends(PutReportDefinitionRequest, _super);
    function PutReportDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutReportDefinitionHeaders)
    ], PutReportDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutReportDefinitionRequestBody)
    ], PutReportDefinitionRequest.prototype, "request", void 0);
    return PutReportDefinitionRequest;
}(SpeakeasyBase));
export { PutReportDefinitionRequest };
var PutReportDefinitionResponse = /** @class */ (function (_super) {
    __extends(PutReportDefinitionResponse, _super);
    function PutReportDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutReportDefinitionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutReportDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutReportDefinitionResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PutReportDefinitionResult)
    ], PutReportDefinitionResponse.prototype, "putReportDefinitionResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutReportDefinitionResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutReportDefinitionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutReportDefinitionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutReportDefinitionResponse.prototype, "validationException", void 0);
    return PutReportDefinitionResponse;
}(SpeakeasyBase));
export { PutReportDefinitionResponse };
