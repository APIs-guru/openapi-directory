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
var AftermarketServicesPutEcuPathParams = /** @class */ (function (_super) {
    __extends(AftermarketServicesPutEcuPathParams, _super);
    function AftermarketServicesPutEcuPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serialNumber" }),
        __metadata("design:type", String)
    ], AftermarketServicesPutEcuPathParams.prototype, "serialNumber", void 0);
    return AftermarketServicesPutEcuPathParams;
}(SpeakeasyBase));
export { AftermarketServicesPutEcuPathParams };
var AftermarketServicesPutEcuQueryParams = /** @class */ (function (_super) {
    __extends(AftermarketServicesPutEcuQueryParams, _super);
    function AftermarketServicesPutEcuQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EDTInstanceId" }),
        __metadata("design:type", String)
    ], AftermarketServicesPutEcuQueryParams.prototype, "edtInstanceId", void 0);
    return AftermarketServicesPutEcuQueryParams;
}(SpeakeasyBase));
export { AftermarketServicesPutEcuQueryParams };
var AftermarketServicesPutEcuRequests = /** @class */ (function (_super) {
    __extends(AftermarketServicesPutEcuRequests, _super);
    function AftermarketServicesPutEcuRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AgcoPowerServicesModelsEcu)
    ], AftermarketServicesPutEcuRequests.prototype, "agcoPowerServicesModelsEcu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.AgcoPowerServicesModelsEcu)
    ], AftermarketServicesPutEcuRequests.prototype, "agcoPowerServicesModelsEcu1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.AgcoPowerServicesModelsEcu)
    ], AftermarketServicesPutEcuRequests.prototype, "agcoPowerServicesModelsEcu2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], AftermarketServicesPutEcuRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], AftermarketServicesPutEcuRequests.prototype, "textXml", void 0);
    return AftermarketServicesPutEcuRequests;
}(SpeakeasyBase));
export { AftermarketServicesPutEcuRequests };
var AftermarketServicesPutEcuRequest = /** @class */ (function (_super) {
    __extends(AftermarketServicesPutEcuRequest, _super);
    function AftermarketServicesPutEcuRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AftermarketServicesPutEcuPathParams)
    ], AftermarketServicesPutEcuRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AftermarketServicesPutEcuQueryParams)
    ], AftermarketServicesPutEcuRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AftermarketServicesPutEcuRequests)
    ], AftermarketServicesPutEcuRequest.prototype, "request", void 0);
    return AftermarketServicesPutEcuRequest;
}(SpeakeasyBase));
export { AftermarketServicesPutEcuRequest };
var AftermarketServicesPutEcuResponse = /** @class */ (function (_super) {
    __extends(AftermarketServicesPutEcuResponse, _super);
    function AftermarketServicesPutEcuResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AgcoPowerServicesModelsEcu)
    ], AftermarketServicesPutEcuResponse.prototype, "agcoPowerServicesModelsEcu", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], AftermarketServicesPutEcuResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AftermarketServicesPutEcuResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AftermarketServicesPutEcuResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AftermarketServicesPutEcuResponse.prototype, "statusCode", void 0);
    return AftermarketServicesPutEcuResponse;
}(SpeakeasyBase));
export { AftermarketServicesPutEcuResponse };
