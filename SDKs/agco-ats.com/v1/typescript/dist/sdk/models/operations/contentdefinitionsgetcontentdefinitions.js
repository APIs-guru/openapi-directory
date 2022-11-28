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
var ContentDefinitionsGetContentDefinitionsQueryParams = /** @class */ (function (_super) {
    __extends(ContentDefinitionsGetContentDefinitionsQueryParams, _super);
    function ContentDefinitionsGetContentDefinitionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" }),
        __metadata("design:type", String)
    ], ContentDefinitionsGetContentDefinitionsQueryParams.prototype, "includeAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ContentDefinitionsGetContentDefinitionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ContentDefinitionsGetContentDefinitionsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userID" }),
        __metadata("design:type", Number)
    ], ContentDefinitionsGetContentDefinitionsQueryParams.prototype, "userId", void 0);
    return ContentDefinitionsGetContentDefinitionsQueryParams;
}(SpeakeasyBase));
export { ContentDefinitionsGetContentDefinitionsQueryParams };
var ContentDefinitionsGetContentDefinitionsRequest = /** @class */ (function (_super) {
    __extends(ContentDefinitionsGetContentDefinitionsRequest, _super);
    function ContentDefinitionsGetContentDefinitionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentDefinitionsGetContentDefinitionsQueryParams)
    ], ContentDefinitionsGetContentDefinitionsRequest.prototype, "queryParams", void 0);
    return ContentDefinitionsGetContentDefinitionsRequest;
}(SpeakeasyBase));
export { ContentDefinitionsGetContentDefinitionsRequest };
var ContentDefinitionsGetContentDefinitionsResponse = /** @class */ (function (_super) {
    __extends(ContentDefinitionsGetContentDefinitionsResponse, _super);
    function ContentDefinitionsGetContentDefinitionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], ContentDefinitionsGetContentDefinitionsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition)
    ], ContentDefinitionsGetContentDefinitionsResponse.prototype, "apiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentDefinitionsGetContentDefinitionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentDefinitionsGetContentDefinitionsResponse.prototype, "statusCode", void 0);
    return ContentDefinitionsGetContentDefinitionsResponse;
}(SpeakeasyBase));
export { ContentDefinitionsGetContentDefinitionsResponse };
