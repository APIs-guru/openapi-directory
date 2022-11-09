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
var GetEvidenceFolderPathParams = /** @class */ (function (_super) {
    __extends(GetEvidenceFolderPathParams, _super);
    function GetEvidenceFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" }),
        __metadata("design:type", String)
    ], GetEvidenceFolderPathParams.prototype, "assessmentId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=controlSetId" }),
        __metadata("design:type", String)
    ], GetEvidenceFolderPathParams.prototype, "controlSetId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=evidenceFolderId" }),
        __metadata("design:type", String)
    ], GetEvidenceFolderPathParams.prototype, "evidenceFolderId", void 0);
    return GetEvidenceFolderPathParams;
}(SpeakeasyBase));
export { GetEvidenceFolderPathParams };
var GetEvidenceFolderHeaders = /** @class */ (function (_super) {
    __extends(GetEvidenceFolderHeaders, _super);
    function GetEvidenceFolderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEvidenceFolderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEvidenceFolderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEvidenceFolderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEvidenceFolderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEvidenceFolderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEvidenceFolderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEvidenceFolderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetEvidenceFolderHeaders;
}(SpeakeasyBase));
export { GetEvidenceFolderHeaders };
var GetEvidenceFolderRequest = /** @class */ (function (_super) {
    __extends(GetEvidenceFolderRequest, _super);
    function GetEvidenceFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEvidenceFolderPathParams)
    ], GetEvidenceFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetEvidenceFolderHeaders)
    ], GetEvidenceFolderRequest.prototype, "headers", void 0);
    return GetEvidenceFolderRequest;
}(SpeakeasyBase));
export { GetEvidenceFolderRequest };
var GetEvidenceFolderResponse = /** @class */ (function (_super) {
    __extends(GetEvidenceFolderResponse, _super);
    function GetEvidenceFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEvidenceFolderResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEvidenceFolderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetEvidenceFolderResponse)
    ], GetEvidenceFolderResponse.prototype, "getEvidenceFolderResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEvidenceFolderResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEvidenceFolderResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEvidenceFolderResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetEvidenceFolderResponse.prototype, "validationException", void 0);
    return GetEvidenceFolderResponse;
}(SpeakeasyBase));
export { GetEvidenceFolderResponse };
