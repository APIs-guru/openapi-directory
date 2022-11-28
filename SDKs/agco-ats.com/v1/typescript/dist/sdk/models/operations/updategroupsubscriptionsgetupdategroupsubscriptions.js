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
var UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams = /** @class */ (function (_super) {
    __extends(UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams, _super);
    function UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientID" }),
        __metadata("design:type", String)
    ], UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PackageTypeID" }),
        __metadata("design:type", String)
    ], UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams.prototype, "packageTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" }),
        __metadata("design:type", String)
    ], UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams.prototype, "updateGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams.prototype, "offset", void 0);
    return UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams;
}(SpeakeasyBase));
export { UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams };
var UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest = /** @class */ (function (_super) {
    __extends(UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest, _super);
    function UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams)
    ], UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest.prototype, "queryParams", void 0);
    return UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest;
}(SpeakeasyBase));
export { UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest };
var UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse, _super);
    function UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseUpdateSystemModelsUpdateGroupSubscription)
    ], UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse.prototype, "apiPagedResponseUpdateSystemModelsUpdateGroupSubscription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse.prototype, "statusCode", void 0);
    return UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse;
}(SpeakeasyBase));
export { UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse };
