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
var ClientsGetAvailableSubscriptionsPathParams = /** @class */ (function (_super) {
    __extends(ClientsGetAvailableSubscriptionsPathParams, _super);
    function ClientsGetAvailableSubscriptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" }),
        __metadata("design:type", String)
    ], ClientsGetAvailableSubscriptionsPathParams.prototype, "id", void 0);
    return ClientsGetAvailableSubscriptionsPathParams;
}(SpeakeasyBase));
export { ClientsGetAvailableSubscriptionsPathParams };
var ClientsGetAvailableSubscriptionsQueryParams = /** @class */ (function (_super) {
    __extends(ClientsGetAvailableSubscriptionsQueryParams, _super);
    function ClientsGetAvailableSubscriptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" }),
        __metadata("design:type", String)
    ], ClientsGetAvailableSubscriptionsQueryParams.prototype, "updateGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ClientsGetAvailableSubscriptionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ClientsGetAvailableSubscriptionsQueryParams.prototype, "offset", void 0);
    return ClientsGetAvailableSubscriptionsQueryParams;
}(SpeakeasyBase));
export { ClientsGetAvailableSubscriptionsQueryParams };
var ClientsGetAvailableSubscriptionsRequest = /** @class */ (function (_super) {
    __extends(ClientsGetAvailableSubscriptionsRequest, _super);
    function ClientsGetAvailableSubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClientsGetAvailableSubscriptionsPathParams)
    ], ClientsGetAvailableSubscriptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClientsGetAvailableSubscriptionsQueryParams)
    ], ClientsGetAvailableSubscriptionsRequest.prototype, "queryParams", void 0);
    return ClientsGetAvailableSubscriptionsRequest;
}(SpeakeasyBase));
export { ClientsGetAvailableSubscriptionsRequest };
var ClientsGetAvailableSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(ClientsGetAvailableSubscriptionsResponse, _super);
    function ClientsGetAvailableSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], ClientsGetAvailableSubscriptionsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription)
    ], ClientsGetAvailableSubscriptionsResponse.prototype, "apiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClientsGetAvailableSubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClientsGetAvailableSubscriptionsResponse.prototype, "statusCode", void 0);
    return ClientsGetAvailableSubscriptionsResponse;
}(SpeakeasyBase));
export { ClientsGetAvailableSubscriptionsResponse };
