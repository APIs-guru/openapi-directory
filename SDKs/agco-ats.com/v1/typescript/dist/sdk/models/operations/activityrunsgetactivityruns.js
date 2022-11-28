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
export var ActivityRunsGetActivityRunsStatusEnum;
(function (ActivityRunsGetActivityRunsStatusEnum) {
    ActivityRunsGetActivityRunsStatusEnum["Ready"] = "Ready";
    ActivityRunsGetActivityRunsStatusEnum["InProgress"] = "InProgress";
    ActivityRunsGetActivityRunsStatusEnum["Succeeded"] = "Succeeded";
    ActivityRunsGetActivityRunsStatusEnum["Cancelled"] = "Cancelled";
    ActivityRunsGetActivityRunsStatusEnum["Failed"] = "Failed";
})(ActivityRunsGetActivityRunsStatusEnum || (ActivityRunsGetActivityRunsStatusEnum = {}));
var ActivityRunsGetActivityRunsQueryParams = /** @class */ (function (_super) {
    __extends(ActivityRunsGetActivityRunsQueryParams, _super);
    function ActivityRunsGetActivityRunsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ActivityRunsGetActivityRunsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ActivityRunsGetActivityRunsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], ActivityRunsGetActivityRunsQueryParams.prototype, "status", void 0);
    return ActivityRunsGetActivityRunsQueryParams;
}(SpeakeasyBase));
export { ActivityRunsGetActivityRunsQueryParams };
var ActivityRunsGetActivityRunsRequest = /** @class */ (function (_super) {
    __extends(ActivityRunsGetActivityRunsRequest, _super);
    function ActivityRunsGetActivityRunsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityRunsGetActivityRunsQueryParams)
    ], ActivityRunsGetActivityRunsRequest.prototype, "queryParams", void 0);
    return ActivityRunsGetActivityRunsRequest;
}(SpeakeasyBase));
export { ActivityRunsGetActivityRunsRequest };
var ActivityRunsGetActivityRunsResponse = /** @class */ (function (_super) {
    __extends(ActivityRunsGetActivityRunsResponse, _super);
    function ActivityRunsGetActivityRunsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiModelsApiError)
    ], ActivityRunsGetActivityRunsResponse.prototype, "apiModelsApiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiPagedResponseBuildSystemSharedDtoActivityRun)
    ], ActivityRunsGetActivityRunsResponse.prototype, "apiPagedResponseBuildSystemSharedDtoActivityRun", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivityRunsGetActivityRunsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivityRunsGetActivityRunsResponse.prototype, "statusCode", void 0);
    return ActivityRunsGetActivityRunsResponse;
}(SpeakeasyBase));
export { ActivityRunsGetActivityRunsResponse };
