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
var ImportApplicationUsageHeaders = /** @class */ (function (_super) {
    __extends(ImportApplicationUsageHeaders, _super);
    function ImportApplicationUsageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ImportApplicationUsageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ImportApplicationUsageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ImportApplicationUsageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ImportApplicationUsageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ImportApplicationUsageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ImportApplicationUsageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ImportApplicationUsageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ImportApplicationUsageHeaders;
}(SpeakeasyBase));
export { ImportApplicationUsageHeaders };
// ImportApplicationUsageRequestBodySourceS3Location
/**
 * Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.
**/
var ImportApplicationUsageRequestBodySourceS3Location = /** @class */ (function (_super) {
    __extends(ImportApplicationUsageRequestBodySourceS3Location, _super);
    function ImportApplicationUsageRequestBodySourceS3Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bucket" }),
        __metadata("design:type", String)
    ], ImportApplicationUsageRequestBodySourceS3Location.prototype, "bucket", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ImportApplicationUsageRequestBodySourceS3Location.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], ImportApplicationUsageRequestBodySourceS3Location.prototype, "region", void 0);
    return ImportApplicationUsageRequestBodySourceS3Location;
}(SpeakeasyBase));
export { ImportApplicationUsageRequestBodySourceS3Location };
var ImportApplicationUsageRequestBody = /** @class */ (function (_super) {
    __extends(ImportApplicationUsageRequestBody, _super);
    function ImportApplicationUsageRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=sourceS3Location" }),
        __metadata("design:type", ImportApplicationUsageRequestBodySourceS3Location)
    ], ImportApplicationUsageRequestBody.prototype, "sourceS3Location", void 0);
    return ImportApplicationUsageRequestBody;
}(SpeakeasyBase));
export { ImportApplicationUsageRequestBody };
var ImportApplicationUsageRequest = /** @class */ (function (_super) {
    __extends(ImportApplicationUsageRequest, _super);
    function ImportApplicationUsageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ImportApplicationUsageHeaders)
    ], ImportApplicationUsageRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ImportApplicationUsageRequestBody)
    ], ImportApplicationUsageRequest.prototype, "request", void 0);
    return ImportApplicationUsageRequest;
}(SpeakeasyBase));
export { ImportApplicationUsageRequest };
var ImportApplicationUsageResponse = /** @class */ (function (_super) {
    __extends(ImportApplicationUsageResponse, _super);
    function ImportApplicationUsageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportApplicationUsageResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ImportApplicationUsageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ImportApplicationUsageResult)
    ], ImportApplicationUsageResponse.prototype, "importApplicationUsageResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportApplicationUsageResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ImportApplicationUsageResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportApplicationUsageResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ImportApplicationUsageResponse.prototype, "validationException", void 0);
    return ImportApplicationUsageResponse;
}(SpeakeasyBase));
export { ImportApplicationUsageResponse };
