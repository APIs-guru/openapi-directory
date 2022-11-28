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
var GetEvidenceByEvidenceFolderPathParams = /** @class */ (function (_super) {
    __extends(GetEvidenceByEvidenceFolderPathParams, _super);
    function GetEvidenceByEvidenceFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], GetEvidenceByEvidenceFolderPathParams.prototype, "assessmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=controlSetId" }),
        __metadata("design:type", String)
    ], GetEvidenceByEvidenceFolderPathParams.prototype, "controlSetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=evidenceFolderId" }),
        __metadata("design:type", String)
    ], GetEvidenceByEvidenceFolderPathParams.prototype, "evidenceFolderId", void 0);
    return GetEvidenceByEvidenceFolderPathParams;
}(SpeakeasyBase));
export { GetEvidenceByEvidenceFolderPathParams };
var GetEvidenceByEvidenceFolderQueryParams = /** @class */ (function (_super) {
    __extends(GetEvidenceByEvidenceFolderQueryParams, _super);
    function GetEvidenceByEvidenceFolderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GetEvidenceByEvidenceFolderQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetEvidenceByEvidenceFolderQueryParams.prototype, "nextToken", void 0);
    return GetEvidenceByEvidenceFolderQueryParams;
}(SpeakeasyBase));
export { GetEvidenceByEvidenceFolderQueryParams };
var GetEvidenceByEvidenceFolderHeaders = /** @class */ (function (_super) {
    __extends(GetEvidenceByEvidenceFolderHeaders, _super);
    function GetEvidenceByEvidenceFolderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEvidenceByEvidenceFolderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEvidenceByEvidenceFolderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEvidenceByEvidenceFolderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEvidenceByEvidenceFolderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEvidenceByEvidenceFolderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEvidenceByEvidenceFolderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEvidenceByEvidenceFolderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetEvidenceByEvidenceFolderHeaders;
}(SpeakeasyBase));
export { GetEvidenceByEvidenceFolderHeaders };
var GetEvidenceByEvidenceFolderRequest = /** @class */ (function (_super) {
    __extends(GetEvidenceByEvidenceFolderRequest, _super);
    function GetEvidenceByEvidenceFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEvidenceByEvidenceFolderPathParams)
    ], GetEvidenceByEvidenceFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEvidenceByEvidenceFolderQueryParams)
    ], GetEvidenceByEvidenceFolderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEvidenceByEvidenceFolderHeaders)
    ], GetEvidenceByEvidenceFolderRequest.prototype, "headers", void 0);
    return GetEvidenceByEvidenceFolderRequest;
}(SpeakeasyBase));
export { GetEvidenceByEvidenceFolderRequest };
var GetEvidenceByEvidenceFolderResponse = /** @class */ (function (_super) {
    __extends(GetEvidenceByEvidenceFolderResponse, _super);
    function GetEvidenceByEvidenceFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEvidenceByEvidenceFolderResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEvidenceByEvidenceFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetEvidenceByEvidenceFolderResponse)
    ], GetEvidenceByEvidenceFolderResponse.prototype, "getEvidenceByEvidenceFolderResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEvidenceByEvidenceFolderResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEvidenceByEvidenceFolderResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEvidenceByEvidenceFolderResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEvidenceByEvidenceFolderResponse.prototype, "validationException", void 0);
    return GetEvidenceByEvidenceFolderResponse;
}(SpeakeasyBase));
export { GetEvidenceByEvidenceFolderResponse };
