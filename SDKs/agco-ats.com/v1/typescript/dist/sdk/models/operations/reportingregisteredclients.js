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
var ReportingRegisteredClientsQueryParams = /** @class */ (function (_super) {
    __extends(ReportingRegisteredClientsQueryParams, _super);
    function ReportingRegisteredClientsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientID" }),
        __metadata("design:type", String)
    ], ReportingRegisteredClientsQueryParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LastCheckInAfter" }),
        __metadata("design:type", Date)
    ], ReportingRegisteredClientsQueryParams.prototype, "lastCheckInAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LastCheckInBefore" }),
        __metadata("design:type", Date)
    ], ReportingRegisteredClientsQueryParams.prototype, "lastCheckInBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OrderBy" }),
        __metadata("design:type", String)
    ], ReportingRegisteredClientsQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReportResult" }),
        __metadata("design:type", String)
    ], ReportingRegisteredClientsQueryParams.prototype, "reportResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReportResultIsValid" }),
        __metadata("design:type", Boolean)
    ], ReportingRegisteredClientsQueryParams.prototype, "reportResultIsValid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReportValue" }),
        __metadata("design:type", String)
    ], ReportingRegisteredClientsQueryParams.prototype, "reportValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Tag" }),
        __metadata("design:type", String)
    ], ReportingRegisteredClientsQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" }),
        __metadata("design:type", String)
    ], ReportingRegisteredClientsQueryParams.prototype, "updateGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ReportingRegisteredClientsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ReportingRegisteredClientsQueryParams.prototype, "offset", void 0);
    return ReportingRegisteredClientsQueryParams;
}(SpeakeasyBase));
export { ReportingRegisteredClientsQueryParams };
var ReportingRegisteredClientsRequest = /** @class */ (function (_super) {
    __extends(ReportingRegisteredClientsRequest, _super);
    function ReportingRegisteredClientsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReportingRegisteredClientsQueryParams)
    ], ReportingRegisteredClientsRequest.prototype, "queryParams", void 0);
    return ReportingRegisteredClientsRequest;
}(SpeakeasyBase));
export { ReportingRegisteredClientsRequest };
var ReportingRegisteredClientsResponse = /** @class */ (function (_super) {
    __extends(ReportingRegisteredClientsResponse, _super);
    function ReportingRegisteredClientsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], ReportingRegisteredClientsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata)
    ], ReportingRegisteredClientsResponse.prototype, "apiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReportingRegisteredClientsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReportingRegisteredClientsResponse.prototype, "statusCode", void 0);
    return ReportingRegisteredClientsResponse;
}(SpeakeasyBase));
export { ReportingRegisteredClientsResponse };
