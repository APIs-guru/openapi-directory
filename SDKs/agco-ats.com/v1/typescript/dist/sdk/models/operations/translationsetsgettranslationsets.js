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
export var TranslationSetsGetTranslationSetsStateEnum;
(function (TranslationSetsGetTranslationSetsStateEnum) {
    TranslationSetsGetTranslationSetsStateEnum["OutForProcessing"] = "OutForProcessing";
    TranslationSetsGetTranslationSetsStateEnum["Processing"] = "Processing";
    TranslationSetsGetTranslationSetsStateEnum["PendingApproval"] = "PendingApproval";
    TranslationSetsGetTranslationSetsStateEnum["OutForTranslation"] = "OutForTranslation";
    TranslationSetsGetTranslationSetsStateEnum["Cancelled"] = "Cancelled";
    TranslationSetsGetTranslationSetsStateEnum["Completed"] = "Completed";
})(TranslationSetsGetTranslationSetsStateEnum || (TranslationSetsGetTranslationSetsStateEnum = {}));
var TranslationSetsGetTranslationSetsQueryParams = /** @class */ (function (_super) {
    __extends(TranslationSetsGetTranslationSetsQueryParams, _super);
    function TranslationSetsGetTranslationSetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" }),
        __metadata("design:type", String)
    ], TranslationSetsGetTranslationSetsQueryParams.prototype, "includeAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageId" }),
        __metadata("design:type", Number)
    ], TranslationSetsGetTranslationSetsQueryParams.prototype, "languageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], TranslationSetsGetTranslationSetsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], TranslationSetsGetTranslationSetsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], TranslationSetsGetTranslationSetsQueryParams.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stringId" }),
        __metadata("design:type", String)
    ], TranslationSetsGetTranslationSetsQueryParams.prototype, "stringId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=translationRequestID" }),
        __metadata("design:type", Number)
    ], TranslationSetsGetTranslationSetsQueryParams.prototype, "translationRequestId", void 0);
    return TranslationSetsGetTranslationSetsQueryParams;
}(SpeakeasyBase));
export { TranslationSetsGetTranslationSetsQueryParams };
var TranslationSetsGetTranslationSetsRequest = /** @class */ (function (_super) {
    __extends(TranslationSetsGetTranslationSetsRequest, _super);
    function TranslationSetsGetTranslationSetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslationSetsGetTranslationSetsQueryParams)
    ], TranslationSetsGetTranslationSetsRequest.prototype, "queryParams", void 0);
    return TranslationSetsGetTranslationSetsRequest;
}(SpeakeasyBase));
export { TranslationSetsGetTranslationSetsRequest };
var TranslationSetsGetTranslationSetsResponse = /** @class */ (function (_super) {
    __extends(TranslationSetsGetTranslationSetsResponse, _super);
    function TranslationSetsGetTranslationSetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationSet)
    ], TranslationSetsGetTranslationSetsResponse.prototype, "apiIPagedResponseGlobalResourcesSharedModelsTranslationSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], TranslationSetsGetTranslationSetsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TranslationSetsGetTranslationSetsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslationSetsGetTranslationSetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslationSetsGetTranslationSetsResponse.prototype, "statusCode", void 0);
    return TranslationSetsGetTranslationSetsResponse;
}(SpeakeasyBase));
export { TranslationSetsGetTranslationSetsResponse };
