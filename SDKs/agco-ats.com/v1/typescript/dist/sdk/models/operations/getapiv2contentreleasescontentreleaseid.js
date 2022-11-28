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
var GetApiV2ContentReleasesContentReleaseIdPathParams = /** @class */ (function (_super) {
    __extends(GetApiV2ContentReleasesContentReleaseIdPathParams, _super);
    function GetApiV2ContentReleasesContentReleaseIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ContentReleaseId" }),
        __metadata("design:type", Number)
    ], GetApiV2ContentReleasesContentReleaseIdPathParams.prototype, "contentReleaseId", void 0);
    return GetApiV2ContentReleasesContentReleaseIdPathParams;
}(SpeakeasyBase));
export { GetApiV2ContentReleasesContentReleaseIdPathParams };
var GetApiV2ContentReleasesContentReleaseIdRequest = /** @class */ (function (_super) {
    __extends(GetApiV2ContentReleasesContentReleaseIdRequest, _super);
    function GetApiV2ContentReleasesContentReleaseIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV2ContentReleasesContentReleaseIdPathParams)
    ], GetApiV2ContentReleasesContentReleaseIdRequest.prototype, "pathParams", void 0);
    return GetApiV2ContentReleasesContentReleaseIdRequest;
}(SpeakeasyBase));
export { GetApiV2ContentReleasesContentReleaseIdRequest };
var GetApiV2ContentReleasesContentReleaseIdResponse = /** @class */ (function (_super) {
    __extends(GetApiV2ContentReleasesContentReleaseIdResponse, _super);
    function GetApiV2ContentReleasesContentReleaseIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], GetApiV2ContentReleasesContentReleaseIdResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiV2ContentReleasesContentReleaseIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion)
    ], GetApiV2ContentReleasesContentReleaseIdResponse.prototype, "contentSubmissionSharedBusinessEntitiesContentReleaseVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV2ContentReleasesContentReleaseIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV2ContentReleasesContentReleaseIdResponse.prototype, "statusCode", void 0);
    return GetApiV2ContentReleasesContentReleaseIdResponse;
}(SpeakeasyBase));
export { GetApiV2ContentReleasesContentReleaseIdResponse };
