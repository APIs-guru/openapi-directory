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
var UpdateAlarmModelPathParams = /** @class */ (function (_super) {
    __extends(UpdateAlarmModelPathParams, _super);
    function UpdateAlarmModelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alarmModelName" }),
        __metadata("design:type", String)
    ], UpdateAlarmModelPathParams.prototype, "alarmModelName", void 0);
    return UpdateAlarmModelPathParams;
}(SpeakeasyBase));
export { UpdateAlarmModelPathParams };
var UpdateAlarmModelHeaders = /** @class */ (function (_super) {
    __extends(UpdateAlarmModelHeaders, _super);
    function UpdateAlarmModelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAlarmModelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAlarmModelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAlarmModelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAlarmModelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAlarmModelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAlarmModelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAlarmModelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAlarmModelHeaders;
}(SpeakeasyBase));
export { UpdateAlarmModelHeaders };
// UpdateAlarmModelRequestBodyAlarmCapabilities
/**
 * Contains the configuration information of alarm state changes.
**/
var UpdateAlarmModelRequestBodyAlarmCapabilities = /** @class */ (function (_super) {
    __extends(UpdateAlarmModelRequestBodyAlarmCapabilities, _super);
    function UpdateAlarmModelRequestBodyAlarmCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acknowledgeFlow" }),
        __metadata("design:type", shared.AcknowledgeFlow)
    ], UpdateAlarmModelRequestBodyAlarmCapabilities.prototype, "acknowledgeFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initializationConfiguration" }),
        __metadata("design:type", shared.InitializationConfiguration)
    ], UpdateAlarmModelRequestBodyAlarmCapabilities.prototype, "initializationConfiguration", void 0);
    return UpdateAlarmModelRequestBodyAlarmCapabilities;
}(SpeakeasyBase));
export { UpdateAlarmModelRequestBodyAlarmCapabilities };
// UpdateAlarmModelRequestBodyAlarmEventActions
/**
 * Contains information about one or more alarm actions.
**/
var UpdateAlarmModelRequestBodyAlarmEventActions = /** @class */ (function (_super) {
    __extends(UpdateAlarmModelRequestBodyAlarmEventActions, _super);
    function UpdateAlarmModelRequestBodyAlarmEventActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alarmActions", elemType: shared.AlarmAction }),
        __metadata("design:type", Array)
    ], UpdateAlarmModelRequestBodyAlarmEventActions.prototype, "alarmActions", void 0);
    return UpdateAlarmModelRequestBodyAlarmEventActions;
}(SpeakeasyBase));
export { UpdateAlarmModelRequestBodyAlarmEventActions };
// UpdateAlarmModelRequestBodyAlarmNotification
/**
 * Contains information about one or more notification actions.
**/
var UpdateAlarmModelRequestBodyAlarmNotification = /** @class */ (function (_super) {
    __extends(UpdateAlarmModelRequestBodyAlarmNotification, _super);
    function UpdateAlarmModelRequestBodyAlarmNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationActions", elemType: shared.NotificationAction }),
        __metadata("design:type", Array)
    ], UpdateAlarmModelRequestBodyAlarmNotification.prototype, "notificationActions", void 0);
    return UpdateAlarmModelRequestBodyAlarmNotification;
}(SpeakeasyBase));
export { UpdateAlarmModelRequestBodyAlarmNotification };
// UpdateAlarmModelRequestBodyAlarmRule
/**
 * Defines when your alarm is invoked.
**/
var UpdateAlarmModelRequestBodyAlarmRule = /** @class */ (function (_super) {
    __extends(UpdateAlarmModelRequestBodyAlarmRule, _super);
    function UpdateAlarmModelRequestBodyAlarmRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=simpleRule" }),
        __metadata("design:type", shared.SimpleRule)
    ], UpdateAlarmModelRequestBodyAlarmRule.prototype, "simpleRule", void 0);
    return UpdateAlarmModelRequestBodyAlarmRule;
}(SpeakeasyBase));
export { UpdateAlarmModelRequestBodyAlarmRule };
var UpdateAlarmModelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAlarmModelRequestBody, _super);
    function UpdateAlarmModelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alarmCapabilities" }),
        __metadata("design:type", UpdateAlarmModelRequestBodyAlarmCapabilities)
    ], UpdateAlarmModelRequestBody.prototype, "alarmCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alarmEventActions" }),
        __metadata("design:type", UpdateAlarmModelRequestBodyAlarmEventActions)
    ], UpdateAlarmModelRequestBody.prototype, "alarmEventActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alarmModelDescription" }),
        __metadata("design:type", String)
    ], UpdateAlarmModelRequestBody.prototype, "alarmModelDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alarmNotification" }),
        __metadata("design:type", UpdateAlarmModelRequestBodyAlarmNotification)
    ], UpdateAlarmModelRequestBody.prototype, "alarmNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alarmRule" }),
        __metadata("design:type", UpdateAlarmModelRequestBodyAlarmRule)
    ], UpdateAlarmModelRequestBody.prototype, "alarmRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], UpdateAlarmModelRequestBody.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", Number)
    ], UpdateAlarmModelRequestBody.prototype, "severity", void 0);
    return UpdateAlarmModelRequestBody;
}(SpeakeasyBase));
export { UpdateAlarmModelRequestBody };
var UpdateAlarmModelRequest = /** @class */ (function (_super) {
    __extends(UpdateAlarmModelRequest, _super);
    function UpdateAlarmModelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAlarmModelPathParams)
    ], UpdateAlarmModelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAlarmModelHeaders)
    ], UpdateAlarmModelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAlarmModelRequestBody)
    ], UpdateAlarmModelRequest.prototype, "request", void 0);
    return UpdateAlarmModelRequest;
}(SpeakeasyBase));
export { UpdateAlarmModelRequest };
var UpdateAlarmModelResponse = /** @class */ (function (_super) {
    __extends(UpdateAlarmModelResponse, _super);
    function UpdateAlarmModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAlarmModelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAlarmModelResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAlarmModelResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAlarmModelResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAlarmModelResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAlarmModelResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAlarmModelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAlarmModelResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateAlarmModelResponse)
    ], UpdateAlarmModelResponse.prototype, "updateAlarmModelResponse", void 0);
    return UpdateAlarmModelResponse;
}(SpeakeasyBase));
export { UpdateAlarmModelResponse };
