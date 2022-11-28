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
var ContentSubmissionsGetContentSubmissionPathParams = /** @class */ (function (_super) {
    __extends(ContentSubmissionsGetContentSubmissionPathParams, _super);
    function ContentSubmissionsGetContentSubmissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentSubmissionID" }),
        __metadata("design:type", Number)
    ], ContentSubmissionsGetContentSubmissionPathParams.prototype, "contentSubmissionId", void 0);
    return ContentSubmissionsGetContentSubmissionPathParams;
}(SpeakeasyBase));
export { ContentSubmissionsGetContentSubmissionPathParams };
var ContentSubmissionsGetContentSubmissionQueryParams = /** @class */ (function (_super) {
    __extends(ContentSubmissionsGetContentSubmissionQueryParams, _super);
    function ContentSubmissionsGetContentSubmissionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" }),
        __metadata("design:type", String)
    ], ContentSubmissionsGetContentSubmissionQueryParams.prototype, "includeAttributes", void 0);
    return ContentSubmissionsGetContentSubmissionQueryParams;
}(SpeakeasyBase));
export { ContentSubmissionsGetContentSubmissionQueryParams };
var ContentSubmissionsGetContentSubmissionRequest = /** @class */ (function (_super) {
    __extends(ContentSubmissionsGetContentSubmissionRequest, _super);
    function ContentSubmissionsGetContentSubmissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentSubmissionsGetContentSubmissionPathParams)
    ], ContentSubmissionsGetContentSubmissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentSubmissionsGetContentSubmissionQueryParams)
    ], ContentSubmissionsGetContentSubmissionRequest.prototype, "queryParams", void 0);
    return ContentSubmissionsGetContentSubmissionRequest;
}(SpeakeasyBase));
export { ContentSubmissionsGetContentSubmissionRequest };
var ContentSubmissionsGetContentSubmissionResponse = /** @class */ (function (_super) {
    __extends(ContentSubmissionsGetContentSubmissionResponse, _super);
    function ContentSubmissionsGetContentSubmissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], ContentSubmissionsGetContentSubmissionResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ContentSubmissionsGetContentSubmissionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContentSubmissionSharedBusinessEntitiesContentSubmission)
    ], ContentSubmissionsGetContentSubmissionResponse.prototype, "contentSubmissionSharedBusinessEntitiesContentSubmission", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentSubmissionsGetContentSubmissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentSubmissionsGetContentSubmissionResponse.prototype, "statusCode", void 0);
    return ContentSubmissionsGetContentSubmissionResponse;
}(SpeakeasyBase));
export { ContentSubmissionsGetContentSubmissionResponse };
