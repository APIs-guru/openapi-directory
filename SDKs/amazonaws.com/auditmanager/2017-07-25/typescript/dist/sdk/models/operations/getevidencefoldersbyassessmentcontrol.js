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
var GetEvidenceFoldersByAssessmentControlPathParams = /** @class */ (function (_super) {
    __extends(GetEvidenceFoldersByAssessmentControlPathParams, _super);
    function GetEvidenceFoldersByAssessmentControlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentControlPathParams.prototype, "assessmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=controlId" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentControlPathParams.prototype, "controlId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=controlSetId" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentControlPathParams.prototype, "controlSetId", void 0);
    return GetEvidenceFoldersByAssessmentControlPathParams;
}(SpeakeasyBase));
export { GetEvidenceFoldersByAssessmentControlPathParams };
var GetEvidenceFoldersByAssessmentControlQueryParams = /** @class */ (function (_super) {
    __extends(GetEvidenceFoldersByAssessmentControlQueryParams, _super);
    function GetEvidenceFoldersByAssessmentControlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetEvidenceFoldersByAssessmentControlQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentControlQueryParams.prototype, "nextToken", void 0);
    return GetEvidenceFoldersByAssessmentControlQueryParams;
}(SpeakeasyBase));
export { GetEvidenceFoldersByAssessmentControlQueryParams };
var GetEvidenceFoldersByAssessmentControlHeaders = /** @class */ (function (_super) {
    __extends(GetEvidenceFoldersByAssessmentControlHeaders, _super);
    function GetEvidenceFoldersByAssessmentControlHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentControlHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentControlHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentControlHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentControlHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentControlHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentControlHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentControlHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetEvidenceFoldersByAssessmentControlHeaders;
}(SpeakeasyBase));
export { GetEvidenceFoldersByAssessmentControlHeaders };
var GetEvidenceFoldersByAssessmentControlRequest = /** @class */ (function (_super) {
    __extends(GetEvidenceFoldersByAssessmentControlRequest, _super);
    function GetEvidenceFoldersByAssessmentControlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEvidenceFoldersByAssessmentControlPathParams)
    ], GetEvidenceFoldersByAssessmentControlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEvidenceFoldersByAssessmentControlQueryParams)
    ], GetEvidenceFoldersByAssessmentControlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEvidenceFoldersByAssessmentControlHeaders)
    ], GetEvidenceFoldersByAssessmentControlRequest.prototype, "headers", void 0);
    return GetEvidenceFoldersByAssessmentControlRequest;
}(SpeakeasyBase));
export { GetEvidenceFoldersByAssessmentControlRequest };
var GetEvidenceFoldersByAssessmentControlResponse = /** @class */ (function (_super) {
    __extends(GetEvidenceFoldersByAssessmentControlResponse, _super);
    function GetEvidenceFoldersByAssessmentControlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEvidenceFoldersByAssessmentControlResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEvidenceFoldersByAssessmentControlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetEvidenceFoldersByAssessmentControlResponse)
    ], GetEvidenceFoldersByAssessmentControlResponse.prototype, "getEvidenceFoldersByAssessmentControlResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEvidenceFoldersByAssessmentControlResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEvidenceFoldersByAssessmentControlResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEvidenceFoldersByAssessmentControlResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEvidenceFoldersByAssessmentControlResponse.prototype, "validationException", void 0);
    return GetEvidenceFoldersByAssessmentControlResponse;
}(SpeakeasyBase));
export { GetEvidenceFoldersByAssessmentControlResponse };
