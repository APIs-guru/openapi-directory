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
export var GetFlightOffersTravelClassEnum;
(function (GetFlightOffersTravelClassEnum) {
    GetFlightOffersTravelClassEnum["Economy"] = "ECONOMY";
    GetFlightOffersTravelClassEnum["PremiumEconomy"] = "PREMIUM_ECONOMY";
    GetFlightOffersTravelClassEnum["Business"] = "BUSINESS";
    GetFlightOffersTravelClassEnum["First"] = "FIRST";
})(GetFlightOffersTravelClassEnum || (GetFlightOffersTravelClassEnum = {}));
var GetFlightOffersQueryParams = /** @class */ (function (_super) {
    __extends(GetFlightOffersQueryParams, _super);
    function GetFlightOffersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adults" }),
        __metadata("design:type", Number)
    ], GetFlightOffersQueryParams.prototype, "adults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=children" }),
        __metadata("design:type", Number)
    ], GetFlightOffersQueryParams.prototype, "children", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currencyCode" }),
        __metadata("design:type", String)
    ], GetFlightOffersQueryParams.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departureDate" }),
        __metadata("design:type", Date)
    ], GetFlightOffersQueryParams.prototype, "departureDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationLocationCode" }),
        __metadata("design:type", String)
    ], GetFlightOffersQueryParams.prototype, "destinationLocationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=excludedAirlineCodes" }),
        __metadata("design:type", String)
    ], GetFlightOffersQueryParams.prototype, "excludedAirlineCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=includedAirlineCodes" }),
        __metadata("design:type", String)
    ], GetFlightOffersQueryParams.prototype, "includedAirlineCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=infants" }),
        __metadata("design:type", Number)
    ], GetFlightOffersQueryParams.prototype, "infants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], GetFlightOffersQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxPrice" }),
        __metadata("design:type", Number)
    ], GetFlightOffersQueryParams.prototype, "maxPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nonStop" }),
        __metadata("design:type", Boolean)
    ], GetFlightOffersQueryParams.prototype, "nonStop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=originLocationCode" }),
        __metadata("design:type", String)
    ], GetFlightOffersQueryParams.prototype, "originLocationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnDate" }),
        __metadata("design:type", Date)
    ], GetFlightOffersQueryParams.prototype, "returnDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelClass" }),
        __metadata("design:type", String)
    ], GetFlightOffersQueryParams.prototype, "travelClass", void 0);
    return GetFlightOffersQueryParams;
}(SpeakeasyBase));
export { GetFlightOffersQueryParams };
var GetFlightOffersRequest = /** @class */ (function (_super) {
    __extends(GetFlightOffersRequest, _super);
    function GetFlightOffersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFlightOffersQueryParams)
    ], GetFlightOffersRequest.prototype, "queryParams", void 0);
    return GetFlightOffersRequest;
}(SpeakeasyBase));
export { GetFlightOffersRequest };
var GetFlightOffersResponse = /** @class */ (function (_super) {
    __extends(GetFlightOffersResponse, _super);
    function GetFlightOffersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFlightOffersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFlightOffersResponse.prototype, "error400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFlightOffersResponse.prototype, "error500", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFlightOffersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFlightOffersResponse.prototype, "success", void 0);
    return GetFlightOffersResponse;
}(SpeakeasyBase));
export { GetFlightOffersResponse };
