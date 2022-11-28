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
var ActivityRunsPutActivityRunStatusPathParams = /** @class */ (function (_super) {
    __extends(ActivityRunsPutActivityRunStatusPathParams, _super);
    function ActivityRunsPutActivityRunStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityRunID" }),
        __metadata("design:type", Number)
    ], ActivityRunsPutActivityRunStatusPathParams.prototype, "activityRunId", void 0);
    return ActivityRunsPutActivityRunStatusPathParams;
}(SpeakeasyBase));
export { ActivityRunsPutActivityRunStatusPathParams };
var ActivityRunsPutActivityRunStatusRequests = /** @class */ (function (_super) {
    __extends(ActivityRunsPutActivityRunStatusRequests, _super);
    function ActivityRunsPutActivityRunStatusRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], ActivityRunsPutActivityRunStatusRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BuildSystemSharedDtoActivityRunStatus)
    ], ActivityRunsPutActivityRunStatusRequests.prototype, "buildSystemSharedDtoActivityRunStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.BuildSystemSharedDtoActivityRunStatus)
    ], ActivityRunsPutActivityRunStatusRequests.prototype, "buildSystemSharedDtoActivityRunStatus1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.BuildSystemSharedDtoActivityRunStatus)
    ], ActivityRunsPutActivityRunStatusRequests.prototype, "buildSystemSharedDtoActivityRunStatus2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], ActivityRunsPutActivityRunStatusRequests.prototype, "textXml", void 0);
    return ActivityRunsPutActivityRunStatusRequests;
}(SpeakeasyBase));
export { ActivityRunsPutActivityRunStatusRequests };
var ActivityRunsPutActivityRunStatusRequest = /** @class */ (function (_super) {
    __extends(ActivityRunsPutActivityRunStatusRequest, _super);
    function ActivityRunsPutActivityRunStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityRunsPutActivityRunStatusPathParams)
    ], ActivityRunsPutActivityRunStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityRunsPutActivityRunStatusRequests)
    ], ActivityRunsPutActivityRunStatusRequest.prototype, "request", void 0);
    return ActivityRunsPutActivityRunStatusRequest;
}(SpeakeasyBase));
export { ActivityRunsPutActivityRunStatusRequest };
var ActivityRunsPutActivityRunStatusResponse = /** @class */ (function (_super) {
    __extends(ActivityRunsPutActivityRunStatusResponse, _super);
    function ActivityRunsPutActivityRunStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ActivityRunsPutActivityRunStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivityRunsPutActivityRunStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivityRunsPutActivityRunStatusResponse.prototype, "statusCode", void 0);
    return ActivityRunsPutActivityRunStatusResponse;
}(SpeakeasyBase));
export { ActivityRunsPutActivityRunStatusResponse };
