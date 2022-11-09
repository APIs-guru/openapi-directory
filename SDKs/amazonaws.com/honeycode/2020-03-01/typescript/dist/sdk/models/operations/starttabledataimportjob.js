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
var StartTableDataImportJobPathParams = /** @class */ (function (_super) {
    __extends(StartTableDataImportJobPathParams, _super);
    function StartTableDataImportJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tableId" }),
        __metadata("design:type", String)
    ], StartTableDataImportJobPathParams.prototype, "tableId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=workbookId" }),
        __metadata("design:type", String)
    ], StartTableDataImportJobPathParams.prototype, "workbookId", void 0);
    return StartTableDataImportJobPathParams;
}(SpeakeasyBase));
export { StartTableDataImportJobPathParams };
var StartTableDataImportJobHeaders = /** @class */ (function (_super) {
    __extends(StartTableDataImportJobHeaders, _super);
    function StartTableDataImportJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartTableDataImportJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartTableDataImportJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartTableDataImportJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartTableDataImportJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartTableDataImportJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartTableDataImportJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartTableDataImportJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartTableDataImportJobHeaders;
}(SpeakeasyBase));
export { StartTableDataImportJobHeaders };
export var StartTableDataImportJobRequestBodyDataFormatEnum;
(function (StartTableDataImportJobRequestBodyDataFormatEnum) {
    StartTableDataImportJobRequestBodyDataFormatEnum["DelimitedText"] = "DELIMITED_TEXT";
})(StartTableDataImportJobRequestBodyDataFormatEnum || (StartTableDataImportJobRequestBodyDataFormatEnum = {}));
// StartTableDataImportJobRequestBodyDataSource
/**
 * An object that has details about the source of the data that was submitted for import.
**/
var StartTableDataImportJobRequestBodyDataSource = /** @class */ (function (_super) {
    __extends(StartTableDataImportJobRequestBodyDataSource, _super);
    function StartTableDataImportJobRequestBodyDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=dataSourceConfig" }),
        __metadata("design:type", shared.ImportDataSourceConfig)
    ], StartTableDataImportJobRequestBodyDataSource.prototype, "dataSourceConfig", void 0);
    return StartTableDataImportJobRequestBodyDataSource;
}(SpeakeasyBase));
export { StartTableDataImportJobRequestBodyDataSource };
// StartTableDataImportJobRequestBodyImportOptions
/**
 * An object that contains the options specified by the sumitter of the import request.
**/
var StartTableDataImportJobRequestBodyImportOptions = /** @class */ (function (_super) {
    __extends(StartTableDataImportJobRequestBodyImportOptions, _super);
    function StartTableDataImportJobRequestBodyImportOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=delimitedTextOptions" }),
        __metadata("design:type", shared.DelimitedTextImportOptions)
    ], StartTableDataImportJobRequestBodyImportOptions.prototype, "delimitedTextOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=destinationOptions" }),
        __metadata("design:type", shared.DestinationOptions)
    ], StartTableDataImportJobRequestBodyImportOptions.prototype, "destinationOptions", void 0);
    return StartTableDataImportJobRequestBodyImportOptions;
}(SpeakeasyBase));
export { StartTableDataImportJobRequestBodyImportOptions };
var StartTableDataImportJobRequestBody = /** @class */ (function (_super) {
    __extends(StartTableDataImportJobRequestBody, _super);
    function StartTableDataImportJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], StartTableDataImportJobRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=dataFormat" }),
        __metadata("design:type", String)
    ], StartTableDataImportJobRequestBody.prototype, "dataFormat", void 0);
    __decorate([
        Metadata({ data: "json, name=dataSource" }),
        __metadata("design:type", StartTableDataImportJobRequestBodyDataSource)
    ], StartTableDataImportJobRequestBody.prototype, "dataSource", void 0);
    __decorate([
        Metadata({ data: "json, name=importOptions" }),
        __metadata("design:type", StartTableDataImportJobRequestBodyImportOptions)
    ], StartTableDataImportJobRequestBody.prototype, "importOptions", void 0);
    return StartTableDataImportJobRequestBody;
}(SpeakeasyBase));
export { StartTableDataImportJobRequestBody };
var StartTableDataImportJobRequest = /** @class */ (function (_super) {
    __extends(StartTableDataImportJobRequest, _super);
    function StartTableDataImportJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StartTableDataImportJobPathParams)
    ], StartTableDataImportJobRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StartTableDataImportJobHeaders)
    ], StartTableDataImportJobRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartTableDataImportJobRequestBody)
    ], StartTableDataImportJobRequest.prototype, "request", void 0);
    return StartTableDataImportJobRequest;
}(SpeakeasyBase));
export { StartTableDataImportJobRequest };
var StartTableDataImportJobResponse = /** @class */ (function (_super) {
    __extends(StartTableDataImportJobResponse, _super);
    function StartTableDataImportJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartTableDataImportJobResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StartTableDataImportJobResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartTableDataImportJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartTableDataImportJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartTableDataImportJobResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StartTableDataImportJobResult)
    ], StartTableDataImportJobResponse.prototype, "startTableDataImportJobResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StartTableDataImportJobResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartTableDataImportJobResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartTableDataImportJobResponse.prototype, "validationException", void 0);
    return StartTableDataImportJobResponse;
}(SpeakeasyBase));
export { StartTableDataImportJobResponse };
