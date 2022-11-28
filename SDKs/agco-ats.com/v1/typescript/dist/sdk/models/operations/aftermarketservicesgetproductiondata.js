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
var AftermarketServicesGetProductionDataPathParams = /** @class */ (function (_super) {
    __extends(AftermarketServicesGetProductionDataPathParams, _super);
    function AftermarketServicesGetProductionDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serialNumber" }),
        __metadata("design:type", String)
    ], AftermarketServicesGetProductionDataPathParams.prototype, "serialNumber", void 0);
    return AftermarketServicesGetProductionDataPathParams;
}(SpeakeasyBase));
export { AftermarketServicesGetProductionDataPathParams };
var AftermarketServicesGetProductionDataQueryParams = /** @class */ (function (_super) {
    __extends(AftermarketServicesGetProductionDataQueryParams, _super);
    function AftermarketServicesGetProductionDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EDTInstanceId" }),
        __metadata("design:type", String)
    ], AftermarketServicesGetProductionDataQueryParams.prototype, "edtInstanceId", void 0);
    return AftermarketServicesGetProductionDataQueryParams;
}(SpeakeasyBase));
export { AftermarketServicesGetProductionDataQueryParams };
var AftermarketServicesGetProductionDataRequest = /** @class */ (function (_super) {
    __extends(AftermarketServicesGetProductionDataRequest, _super);
    function AftermarketServicesGetProductionDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AftermarketServicesGetProductionDataPathParams)
    ], AftermarketServicesGetProductionDataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AftermarketServicesGetProductionDataQueryParams)
    ], AftermarketServicesGetProductionDataRequest.prototype, "queryParams", void 0);
    return AftermarketServicesGetProductionDataRequest;
}(SpeakeasyBase));
export { AftermarketServicesGetProductionDataRequest };
var AftermarketServicesGetProductionDataResponse = /** @class */ (function (_super) {
    __extends(AftermarketServicesGetProductionDataResponse, _super);
    function AftermarketServicesGetProductionDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.AgcoPowerServicesModelsProductionData }),
        __metadata("design:type", Array)
    ], AftermarketServicesGetProductionDataResponse.prototype, "agcoPowerServicesModelsProductionData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], AftermarketServicesGetProductionDataResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AftermarketServicesGetProductionDataResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AftermarketServicesGetProductionDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AftermarketServicesGetProductionDataResponse.prototype, "statusCode", void 0);
    return AftermarketServicesGetProductionDataResponse;
}(SpeakeasyBase));
export { AftermarketServicesGetProductionDataResponse };
