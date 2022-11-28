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
var UpdateScheduledAuditPathParams = /** @class */ (function (_super) {
    __extends(UpdateScheduledAuditPathParams, _super);
    function UpdateScheduledAuditPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheduledAuditName" }),
        __metadata("design:type", String)
    ], UpdateScheduledAuditPathParams.prototype, "scheduledAuditName", void 0);
    return UpdateScheduledAuditPathParams;
}(SpeakeasyBase));
export { UpdateScheduledAuditPathParams };
var UpdateScheduledAuditHeaders = /** @class */ (function (_super) {
    __extends(UpdateScheduledAuditHeaders, _super);
    function UpdateScheduledAuditHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateScheduledAuditHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateScheduledAuditHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateScheduledAuditHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateScheduledAuditHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateScheduledAuditHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateScheduledAuditHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateScheduledAuditHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateScheduledAuditHeaders;
}(SpeakeasyBase));
export { UpdateScheduledAuditHeaders };
export var UpdateScheduledAuditRequestBodyDayOfWeekEnum;
(function (UpdateScheduledAuditRequestBodyDayOfWeekEnum) {
    UpdateScheduledAuditRequestBodyDayOfWeekEnum["Sun"] = "SUN";
    UpdateScheduledAuditRequestBodyDayOfWeekEnum["Mon"] = "MON";
    UpdateScheduledAuditRequestBodyDayOfWeekEnum["Tue"] = "TUE";
    UpdateScheduledAuditRequestBodyDayOfWeekEnum["Wed"] = "WED";
    UpdateScheduledAuditRequestBodyDayOfWeekEnum["Thu"] = "THU";
    UpdateScheduledAuditRequestBodyDayOfWeekEnum["Fri"] = "FRI";
    UpdateScheduledAuditRequestBodyDayOfWeekEnum["Sat"] = "SAT";
})(UpdateScheduledAuditRequestBodyDayOfWeekEnum || (UpdateScheduledAuditRequestBodyDayOfWeekEnum = {}));
export var UpdateScheduledAuditRequestBodyFrequencyEnum;
(function (UpdateScheduledAuditRequestBodyFrequencyEnum) {
    UpdateScheduledAuditRequestBodyFrequencyEnum["Daily"] = "DAILY";
    UpdateScheduledAuditRequestBodyFrequencyEnum["Weekly"] = "WEEKLY";
    UpdateScheduledAuditRequestBodyFrequencyEnum["Biweekly"] = "BIWEEKLY";
    UpdateScheduledAuditRequestBodyFrequencyEnum["Monthly"] = "MONTHLY";
})(UpdateScheduledAuditRequestBodyFrequencyEnum || (UpdateScheduledAuditRequestBodyFrequencyEnum = {}));
var UpdateScheduledAuditRequestBody = /** @class */ (function (_super) {
    __extends(UpdateScheduledAuditRequestBody, _super);
    function UpdateScheduledAuditRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayOfMonth" }),
        __metadata("design:type", String)
    ], UpdateScheduledAuditRequestBody.prototype, "dayOfMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayOfWeek" }),
        __metadata("design:type", String)
    ], UpdateScheduledAuditRequestBody.prototype, "dayOfWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], UpdateScheduledAuditRequestBody.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetCheckNames" }),
        __metadata("design:type", Array)
    ], UpdateScheduledAuditRequestBody.prototype, "targetCheckNames", void 0);
    return UpdateScheduledAuditRequestBody;
}(SpeakeasyBase));
export { UpdateScheduledAuditRequestBody };
var UpdateScheduledAuditRequest = /** @class */ (function (_super) {
    __extends(UpdateScheduledAuditRequest, _super);
    function UpdateScheduledAuditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateScheduledAuditPathParams)
    ], UpdateScheduledAuditRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateScheduledAuditHeaders)
    ], UpdateScheduledAuditRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateScheduledAuditRequestBody)
    ], UpdateScheduledAuditRequest.prototype, "request", void 0);
    return UpdateScheduledAuditRequest;
}(SpeakeasyBase));
export { UpdateScheduledAuditRequest };
var UpdateScheduledAuditResponse = /** @class */ (function (_super) {
    __extends(UpdateScheduledAuditResponse, _super);
    function UpdateScheduledAuditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateScheduledAuditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateScheduledAuditResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateScheduledAuditResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateScheduledAuditResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateScheduledAuditResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateScheduledAuditResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateScheduledAuditResponse)
    ], UpdateScheduledAuditResponse.prototype, "updateScheduledAuditResponse", void 0);
    return UpdateScheduledAuditResponse;
}(SpeakeasyBase));
export { UpdateScheduledAuditResponse };
