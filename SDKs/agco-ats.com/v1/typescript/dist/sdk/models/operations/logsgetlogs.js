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
var LogsGetLogsQueryParams = /** @class */ (function (_super) {
    __extends(LogsGetLogsQueryParams, _super);
    function LogsGetLogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], LogsGetLogsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], LogsGetLogsQueryParams.prototype, "offset", void 0);
    return LogsGetLogsQueryParams;
}(SpeakeasyBase));
export { LogsGetLogsQueryParams };
var LogsGetLogsRequest = /** @class */ (function (_super) {
    __extends(LogsGetLogsRequest, _super);
    function LogsGetLogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LogsGetLogsQueryParams)
    ], LogsGetLogsRequest.prototype, "queryParams", void 0);
    return LogsGetLogsRequest;
}(SpeakeasyBase));
export { LogsGetLogsRequest };
var LogsGetLogsResponse = /** @class */ (function (_super) {
    __extends(LogsGetLogsResponse, _super);
    function LogsGetLogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], LogsGetLogsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseApiModelsLog)
    ], LogsGetLogsResponse.prototype, "apiPagedResponseApiModelsLog", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LogsGetLogsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LogsGetLogsResponse.prototype, "statusCode", void 0);
    return LogsGetLogsResponse;
}(SpeakeasyBase));
export { LogsGetLogsResponse };
