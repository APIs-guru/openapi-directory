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
var UpdateReportDefinitionPathParams = /** @class */ (function (_super) {
    __extends(UpdateReportDefinitionPathParams, _super);
    function UpdateReportDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=reportId" }),
        __metadata("design:type", String)
    ], UpdateReportDefinitionPathParams.prototype, "reportId", void 0);
    return UpdateReportDefinitionPathParams;
}(SpeakeasyBase));
export { UpdateReportDefinitionPathParams };
var UpdateReportDefinitionHeaders = /** @class */ (function (_super) {
    __extends(UpdateReportDefinitionHeaders, _super);
    function UpdateReportDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateReportDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateReportDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateReportDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateReportDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateReportDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateReportDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateReportDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateReportDefinitionHeaders;
}(SpeakeasyBase));
export { UpdateReportDefinitionHeaders };
// UpdateReportDefinitionRequestBodyDestinationS3Location
/**
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
**/
var UpdateReportDefinitionRequestBodyDestinationS3Location = /** @class */ (function (_super) {
    __extends(UpdateReportDefinitionRequestBodyDestinationS3Location, _super);
    function UpdateReportDefinitionRequestBodyDestinationS3Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bucket" }),
        __metadata("design:type", String)
    ], UpdateReportDefinitionRequestBodyDestinationS3Location.prototype, "bucket", void 0);
    __decorate([
        Metadata({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], UpdateReportDefinitionRequestBodyDestinationS3Location.prototype, "prefix", void 0);
    return UpdateReportDefinitionRequestBodyDestinationS3Location;
}(SpeakeasyBase));
export { UpdateReportDefinitionRequestBodyDestinationS3Location };
export var UpdateReportDefinitionRequestBodyFormatEnum;
(function (UpdateReportDefinitionRequestBodyFormatEnum) {
    UpdateReportDefinitionRequestBodyFormatEnum["Csv"] = "CSV";
    UpdateReportDefinitionRequestBodyFormatEnum["Parquet"] = "PARQUET";
})(UpdateReportDefinitionRequestBodyFormatEnum || (UpdateReportDefinitionRequestBodyFormatEnum = {}));
export var UpdateReportDefinitionRequestBodyReportFrequencyEnum;
(function (UpdateReportDefinitionRequestBodyReportFrequencyEnum) {
    UpdateReportDefinitionRequestBodyReportFrequencyEnum["Monthly"] = "MONTHLY";
    UpdateReportDefinitionRequestBodyReportFrequencyEnum["Daily"] = "DAILY";
    UpdateReportDefinitionRequestBodyReportFrequencyEnum["All"] = "ALL";
})(UpdateReportDefinitionRequestBodyReportFrequencyEnum || (UpdateReportDefinitionRequestBodyReportFrequencyEnum = {}));
var UpdateReportDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateReportDefinitionRequestBody, _super);
    function UpdateReportDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=destinationS3Location" }),
        __metadata("design:type", UpdateReportDefinitionRequestBodyDestinationS3Location)
    ], UpdateReportDefinitionRequestBody.prototype, "destinationS3Location", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], UpdateReportDefinitionRequestBody.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=reportDescription" }),
        __metadata("design:type", String)
    ], UpdateReportDefinitionRequestBody.prototype, "reportDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=reportFrequency" }),
        __metadata("design:type", String)
    ], UpdateReportDefinitionRequestBody.prototype, "reportFrequency", void 0);
    return UpdateReportDefinitionRequestBody;
}(SpeakeasyBase));
export { UpdateReportDefinitionRequestBody };
var UpdateReportDefinitionRequest = /** @class */ (function (_super) {
    __extends(UpdateReportDefinitionRequest, _super);
    function UpdateReportDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateReportDefinitionPathParams)
    ], UpdateReportDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateReportDefinitionHeaders)
    ], UpdateReportDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateReportDefinitionRequestBody)
    ], UpdateReportDefinitionRequest.prototype, "request", void 0);
    return UpdateReportDefinitionRequest;
}(SpeakeasyBase));
export { UpdateReportDefinitionRequest };
var UpdateReportDefinitionResponse = /** @class */ (function (_super) {
    __extends(UpdateReportDefinitionResponse, _super);
    function UpdateReportDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateReportDefinitionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateReportDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateReportDefinitionResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateReportDefinitionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateReportDefinitionResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateReportDefinitionResult)
    ], UpdateReportDefinitionResponse.prototype, "updateReportDefinitionResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateReportDefinitionResponse.prototype, "validationException", void 0);
    return UpdateReportDefinitionResponse;
}(SpeakeasyBase));
export { UpdateReportDefinitionResponse };
