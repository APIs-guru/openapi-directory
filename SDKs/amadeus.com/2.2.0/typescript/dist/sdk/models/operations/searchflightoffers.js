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
var SearchFlightOffersHeaders = /** @class */ (function (_super) {
    __extends(SearchFlightOffersHeaders, _super);
    function SearchFlightOffersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HTTP-Method-Override" }),
        __metadata("design:type", String)
    ], SearchFlightOffersHeaders.prototype, "xHttpMethodOverride", void 0);
    return SearchFlightOffersHeaders;
}(SpeakeasyBase));
export { SearchFlightOffersHeaders };
var SearchFlightOffersRequest = /** @class */ (function (_super) {
    __extends(SearchFlightOffersRequest, _super);
    function SearchFlightOffersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchFlightOffersHeaders)
    ], SearchFlightOffersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/vnd.amadeus+json" }),
        __metadata("design:type", Object)
    ], SearchFlightOffersRequest.prototype, "request", void 0);
    return SearchFlightOffersRequest;
}(SpeakeasyBase));
export { SearchFlightOffersRequest };
var SearchFlightOffersResponse = /** @class */ (function (_super) {
    __extends(SearchFlightOffersResponse, _super);
    function SearchFlightOffersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchFlightOffersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchFlightOffersResponse.prototype, "error400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchFlightOffersResponse.prototype, "error500", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchFlightOffersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SearchFlightOffersResponse.prototype, "success", void 0);
    return SearchFlightOffersResponse;
}(SpeakeasyBase));
export { SearchFlightOffersResponse };
