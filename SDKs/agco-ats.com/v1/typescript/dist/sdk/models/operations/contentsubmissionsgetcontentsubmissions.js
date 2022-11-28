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
var ContentSubmissionsGetContentSubmissionsQueryParams = /** @class */ (function (_super) {
    __extends(ContentSubmissionsGetContentSubmissionsQueryParams, _super);
    function ContentSubmissionsGetContentSubmissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentDefinitionID" }),
        __metadata("design:type", Number)
    ], ContentSubmissionsGetContentSubmissionsQueryParams.prototype, "contentDefinitionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" }),
        __metadata("design:type", String)
    ], ContentSubmissionsGetContentSubmissionsQueryParams.prototype, "includeAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDefinition" }),
        __metadata("design:type", Boolean)
    ], ContentSubmissionsGetContentSubmissionsQueryParams.prototype, "includeDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ContentSubmissionsGetContentSubmissionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ContentSubmissionsGetContentSubmissionsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=releaseID" }),
        __metadata("design:type", Number)
    ], ContentSubmissionsGetContentSubmissionsQueryParams.prototype, "releaseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=typeID" }),
        __metadata("design:type", Number)
    ], ContentSubmissionsGetContentSubmissionsQueryParams.prototype, "typeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userID" }),
        __metadata("design:type", Number)
    ], ContentSubmissionsGetContentSubmissionsQueryParams.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", Number)
    ], ContentSubmissionsGetContentSubmissionsQueryParams.prototype, "version", void 0);
    return ContentSubmissionsGetContentSubmissionsQueryParams;
}(SpeakeasyBase));
export { ContentSubmissionsGetContentSubmissionsQueryParams };
var ContentSubmissionsGetContentSubmissionsRequest = /** @class */ (function (_super) {
    __extends(ContentSubmissionsGetContentSubmissionsRequest, _super);
    function ContentSubmissionsGetContentSubmissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentSubmissionsGetContentSubmissionsQueryParams)
    ], ContentSubmissionsGetContentSubmissionsRequest.prototype, "queryParams", void 0);
    return ContentSubmissionsGetContentSubmissionsRequest;
}(SpeakeasyBase));
export { ContentSubmissionsGetContentSubmissionsRequest };
var ContentSubmissionsGetContentSubmissionsResponse = /** @class */ (function (_super) {
    __extends(ContentSubmissionsGetContentSubmissionsResponse, _super);
    function ContentSubmissionsGetContentSubmissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], ContentSubmissionsGetContentSubmissionsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission)
    ], ContentSubmissionsGetContentSubmissionsResponse.prototype, "apiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentSubmissionsGetContentSubmissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentSubmissionsGetContentSubmissionsResponse.prototype, "statusCode", void 0);
    return ContentSubmissionsGetContentSubmissionsResponse;
}(SpeakeasyBase));
export { ContentSubmissionsGetContentSubmissionsResponse };
