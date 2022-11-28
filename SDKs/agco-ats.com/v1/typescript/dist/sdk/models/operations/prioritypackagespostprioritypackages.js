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
var PriorityPackagesPostPriorityPackagesRequests = /** @class */ (function (_super) {
    __extends(PriorityPackagesPostPriorityPackagesRequests, _super);
    function PriorityPackagesPostPriorityPackagesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PriorityPackagesPostPriorityPackagesRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PriorityPackagesPostPriorityPackagesRequests.prototype, "textXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateSystemModelsPriorityPackage)
    ], PriorityPackagesPostPriorityPackagesRequests.prototype, "updateSystemModelsPriorityPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.UpdateSystemModelsPriorityPackage)
    ], PriorityPackagesPostPriorityPackagesRequests.prototype, "updateSystemModelsPriorityPackage1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdateSystemModelsPriorityPackage)
    ], PriorityPackagesPostPriorityPackagesRequests.prototype, "updateSystemModelsPriorityPackage2", void 0);
    return PriorityPackagesPostPriorityPackagesRequests;
}(SpeakeasyBase));
export { PriorityPackagesPostPriorityPackagesRequests };
var PriorityPackagesPostPriorityPackagesRequest = /** @class */ (function (_super) {
    __extends(PriorityPackagesPostPriorityPackagesRequest, _super);
    function PriorityPackagesPostPriorityPackagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PriorityPackagesPostPriorityPackagesRequests)
    ], PriorityPackagesPostPriorityPackagesRequest.prototype, "request", void 0);
    return PriorityPackagesPostPriorityPackagesRequest;
}(SpeakeasyBase));
export { PriorityPackagesPostPriorityPackagesRequest };
var PriorityPackagesPostPriorityPackagesResponse = /** @class */ (function (_super) {
    __extends(PriorityPackagesPostPriorityPackagesResponse, _super);
    function PriorityPackagesPostPriorityPackagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], PriorityPackagesPostPriorityPackagesResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PriorityPackagesPostPriorityPackagesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PriorityPackagesPostPriorityPackagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PriorityPackagesPostPriorityPackagesResponse.prototype, "priorityPackagesPostPriorityPackages200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PriorityPackagesPostPriorityPackagesResponse.prototype, "priorityPackagesPostPriorityPackages200ApplicationXmlString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PriorityPackagesPostPriorityPackagesResponse.prototype, "priorityPackagesPostPriorityPackages200TextJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PriorityPackagesPostPriorityPackagesResponse.prototype, "priorityPackagesPostPriorityPackages200TextXmlString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PriorityPackagesPostPriorityPackagesResponse.prototype, "statusCode", void 0);
    return PriorityPackagesPostPriorityPackagesResponse;
}(SpeakeasyBase));
export { PriorityPackagesPostPriorityPackagesResponse };
