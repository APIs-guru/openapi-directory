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
var GetEvidenceFoldersByAssessmentPathParams = /** @class */ (function (_super) {
    __extends(GetEvidenceFoldersByAssessmentPathParams, _super);
    function GetEvidenceFoldersByAssessmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentPathParams.prototype, "assessmentId", void 0);
    return GetEvidenceFoldersByAssessmentPathParams;
}(SpeakeasyBase));
export { GetEvidenceFoldersByAssessmentPathParams };
var GetEvidenceFoldersByAssessmentQueryParams = /** @class */ (function (_super) {
    __extends(GetEvidenceFoldersByAssessmentQueryParams, _super);
    function GetEvidenceFoldersByAssessmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetEvidenceFoldersByAssessmentQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentQueryParams.prototype, "nextToken", void 0);
    return GetEvidenceFoldersByAssessmentQueryParams;
}(SpeakeasyBase));
export { GetEvidenceFoldersByAssessmentQueryParams };
var GetEvidenceFoldersByAssessmentHeaders = /** @class */ (function (_super) {
    __extends(GetEvidenceFoldersByAssessmentHeaders, _super);
    function GetEvidenceFoldersByAssessmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetEvidenceFoldersByAssessmentHeaders;
}(SpeakeasyBase));
export { GetEvidenceFoldersByAssessmentHeaders };
var GetEvidenceFoldersByAssessmentRequest = /** @class */ (function (_super) {
    __extends(GetEvidenceFoldersByAssessmentRequest, _super);
    function GetEvidenceFoldersByAssessmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEvidenceFoldersByAssessmentPathParams)
    ], GetEvidenceFoldersByAssessmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEvidenceFoldersByAssessmentQueryParams)
    ], GetEvidenceFoldersByAssessmentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEvidenceFoldersByAssessmentHeaders)
    ], GetEvidenceFoldersByAssessmentRequest.prototype, "headers", void 0);
    return GetEvidenceFoldersByAssessmentRequest;
}(SpeakeasyBase));
export { GetEvidenceFoldersByAssessmentRequest };
var GetEvidenceFoldersByAssessmentResponse = /** @class */ (function (_super) {
    __extends(GetEvidenceFoldersByAssessmentResponse, _super);
    function GetEvidenceFoldersByAssessmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEvidenceFoldersByAssessmentResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetEvidenceFoldersByAssessmentResponse)
    ], GetEvidenceFoldersByAssessmentResponse.prototype, "getEvidenceFoldersByAssessmentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEvidenceFoldersByAssessmentResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEvidenceFoldersByAssessmentResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEvidenceFoldersByAssessmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEvidenceFoldersByAssessmentResponse.prototype, "validationException", void 0);
    return GetEvidenceFoldersByAssessmentResponse;
}(SpeakeasyBase));
export { GetEvidenceFoldersByAssessmentResponse };
