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
var ActivityRunsPutActivityRunPathParams = /** @class */ (function (_super) {
    __extends(ActivityRunsPutActivityRunPathParams, _super);
    function ActivityRunsPutActivityRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityRunID" }),
        __metadata("design:type", Number)
    ], ActivityRunsPutActivityRunPathParams.prototype, "activityRunId", void 0);
    return ActivityRunsPutActivityRunPathParams;
}(SpeakeasyBase));
export { ActivityRunsPutActivityRunPathParams };
var ActivityRunsPutActivityRunRequestsInput = /** @class */ (function (_super) {
    __extends(ActivityRunsPutActivityRunRequestsInput, _super);
    function ActivityRunsPutActivityRunRequestsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], ActivityRunsPutActivityRunRequestsInput.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BuildSystemSharedDtoActivityRunInput)
    ], ActivityRunsPutActivityRunRequestsInput.prototype, "buildSystemSharedDtoActivityRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.BuildSystemSharedDtoActivityRunInput)
    ], ActivityRunsPutActivityRunRequestsInput.prototype, "buildSystemSharedDtoActivityRun1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.BuildSystemSharedDtoActivityRunInput)
    ], ActivityRunsPutActivityRunRequestsInput.prototype, "buildSystemSharedDtoActivityRun2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], ActivityRunsPutActivityRunRequestsInput.prototype, "textXml", void 0);
    return ActivityRunsPutActivityRunRequestsInput;
}(SpeakeasyBase));
export { ActivityRunsPutActivityRunRequestsInput };
var ActivityRunsPutActivityRunRequest = /** @class */ (function (_super) {
    __extends(ActivityRunsPutActivityRunRequest, _super);
    function ActivityRunsPutActivityRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityRunsPutActivityRunPathParams)
    ], ActivityRunsPutActivityRunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityRunsPutActivityRunRequestsInput)
    ], ActivityRunsPutActivityRunRequest.prototype, "request", void 0);
    return ActivityRunsPutActivityRunRequest;
}(SpeakeasyBase));
export { ActivityRunsPutActivityRunRequest };
var ActivityRunsPutActivityRunResponse = /** @class */ (function (_super) {
    __extends(ActivityRunsPutActivityRunResponse, _super);
    function ActivityRunsPutActivityRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ActivityRunsPutActivityRunResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivityRunsPutActivityRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivityRunsPutActivityRunResponse.prototype, "statusCode", void 0);
    return ActivityRunsPutActivityRunResponse;
}(SpeakeasyBase));
export { ActivityRunsPutActivityRunResponse };
