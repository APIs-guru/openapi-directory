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
var FilesPostFileRequests = /** @class */ (function (_super) {
    __extends(FilesPostFileRequests, _super);
    function FilesPostFileRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], FilesPostFileRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GlobalResourcesSharedModelsFileDownload)
    ], FilesPostFileRequests.prototype, "globalResourcesSharedModelsFileDownload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.GlobalResourcesSharedModelsFileDownload)
    ], FilesPostFileRequests.prototype, "globalResourcesSharedModelsFileDownload1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.GlobalResourcesSharedModelsFileDownload)
    ], FilesPostFileRequests.prototype, "globalResourcesSharedModelsFileDownload2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], FilesPostFileRequests.prototype, "textXml", void 0);
    return FilesPostFileRequests;
}(SpeakeasyBase));
export { FilesPostFileRequests };
var FilesPostFileRequest = /** @class */ (function (_super) {
    __extends(FilesPostFileRequest, _super);
    function FilesPostFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FilesPostFileRequests)
    ], FilesPostFileRequest.prototype, "request", void 0);
    return FilesPostFileRequest;
}(SpeakeasyBase));
export { FilesPostFileRequest };
var FilesPostFileResponse = /** @class */ (function (_super) {
    __extends(FilesPostFileResponse, _super);
    function FilesPostFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], FilesPostFileResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], FilesPostFileResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FilesPostFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FilesPostFileResponse.prototype, "filesPostFile200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FilesPostFileResponse.prototype, "filesPostFile200ApplicationXmlString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FilesPostFileResponse.prototype, "filesPostFile200TextJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FilesPostFileResponse.prototype, "filesPostFile200TextXmlString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FilesPostFileResponse.prototype, "statusCode", void 0);
    return FilesPostFileResponse;
}(SpeakeasyBase));
export { FilesPostFileResponse };
