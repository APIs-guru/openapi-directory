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
var StringDefinitionsGetDefinitionPathParams = /** @class */ (function (_super) {
    __extends(StringDefinitionsGetDefinitionPathParams, _super);
    function StringDefinitionsGetDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" }),
        __metadata("design:type", String)
    ], StringDefinitionsGetDefinitionPathParams.prototype, "id", void 0);
    return StringDefinitionsGetDefinitionPathParams;
}(SpeakeasyBase));
export { StringDefinitionsGetDefinitionPathParams };
var StringDefinitionsGetDefinitionQueryParams = /** @class */ (function (_super) {
    __extends(StringDefinitionsGetDefinitionQueryParams, _super);
    function StringDefinitionsGetDefinitionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDeletedLanguages" }),
        __metadata("design:type", Boolean)
    ], StringDefinitionsGetDefinitionQueryParams.prototype, "includeDeletedLanguages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTranslations" }),
        __metadata("design:type", Boolean)
    ], StringDefinitionsGetDefinitionQueryParams.prototype, "includeTranslations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageIds" }),
        __metadata("design:type", String)
    ], StringDefinitionsGetDefinitionQueryParams.prototype, "languageIds", void 0);
    return StringDefinitionsGetDefinitionQueryParams;
}(SpeakeasyBase));
export { StringDefinitionsGetDefinitionQueryParams };
var StringDefinitionsGetDefinitionRequest = /** @class */ (function (_super) {
    __extends(StringDefinitionsGetDefinitionRequest, _super);
    function StringDefinitionsGetDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StringDefinitionsGetDefinitionPathParams)
    ], StringDefinitionsGetDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StringDefinitionsGetDefinitionQueryParams)
    ], StringDefinitionsGetDefinitionRequest.prototype, "queryParams", void 0);
    return StringDefinitionsGetDefinitionRequest;
}(SpeakeasyBase));
export { StringDefinitionsGetDefinitionRequest };
var StringDefinitionsGetDefinitionResponse = /** @class */ (function (_super) {
    __extends(StringDefinitionsGetDefinitionResponse, _super);
    function StringDefinitionsGetDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], StringDefinitionsGetDefinitionResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], StringDefinitionsGetDefinitionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StringDefinitionsGetDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GlobalResourcesSharedModelsStringDefinition)
    ], StringDefinitionsGetDefinitionResponse.prototype, "globalResourcesSharedModelsStringDefinition", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StringDefinitionsGetDefinitionResponse.prototype, "statusCode", void 0);
    return StringDefinitionsGetDefinitionResponse;
}(SpeakeasyBase));
export { StringDefinitionsGetDefinitionResponse };
