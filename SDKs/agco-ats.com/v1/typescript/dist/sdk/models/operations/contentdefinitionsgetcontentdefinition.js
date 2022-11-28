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
var ContentDefinitionsGetContentDefinitionPathParams = /** @class */ (function (_super) {
    __extends(ContentDefinitionsGetContentDefinitionPathParams, _super);
    function ContentDefinitionsGetContentDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentDefinitionID" }),
        __metadata("design:type", Number)
    ], ContentDefinitionsGetContentDefinitionPathParams.prototype, "contentDefinitionId", void 0);
    return ContentDefinitionsGetContentDefinitionPathParams;
}(SpeakeasyBase));
export { ContentDefinitionsGetContentDefinitionPathParams };
var ContentDefinitionsGetContentDefinitionQueryParams = /** @class */ (function (_super) {
    __extends(ContentDefinitionsGetContentDefinitionQueryParams, _super);
    function ContentDefinitionsGetContentDefinitionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" }),
        __metadata("design:type", String)
    ], ContentDefinitionsGetContentDefinitionQueryParams.prototype, "includeAttributes", void 0);
    return ContentDefinitionsGetContentDefinitionQueryParams;
}(SpeakeasyBase));
export { ContentDefinitionsGetContentDefinitionQueryParams };
var ContentDefinitionsGetContentDefinitionRequest = /** @class */ (function (_super) {
    __extends(ContentDefinitionsGetContentDefinitionRequest, _super);
    function ContentDefinitionsGetContentDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentDefinitionsGetContentDefinitionPathParams)
    ], ContentDefinitionsGetContentDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentDefinitionsGetContentDefinitionQueryParams)
    ], ContentDefinitionsGetContentDefinitionRequest.prototype, "queryParams", void 0);
    return ContentDefinitionsGetContentDefinitionRequest;
}(SpeakeasyBase));
export { ContentDefinitionsGetContentDefinitionRequest };
var ContentDefinitionsGetContentDefinitionResponse = /** @class */ (function (_super) {
    __extends(ContentDefinitionsGetContentDefinitionResponse, _super);
    function ContentDefinitionsGetContentDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], ContentDefinitionsGetContentDefinitionResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ContentDefinitionsGetContentDefinitionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContentSubmissionSharedBusinessEntitiesContentDefinition)
    ], ContentDefinitionsGetContentDefinitionResponse.prototype, "contentSubmissionSharedBusinessEntitiesContentDefinition", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentDefinitionsGetContentDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentDefinitionsGetContentDefinitionResponse.prototype, "statusCode", void 0);
    return ContentDefinitionsGetContentDefinitionResponse;
}(SpeakeasyBase));
export { ContentDefinitionsGetContentDefinitionResponse };
