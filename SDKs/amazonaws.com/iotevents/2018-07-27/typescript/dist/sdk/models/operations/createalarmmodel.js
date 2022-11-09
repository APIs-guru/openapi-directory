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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CreateAlarmModelHeaders = /** @class */ (function (_super) {
    __extends(CreateAlarmModelHeaders, _super);
    function CreateAlarmModelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateAlarmModelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateAlarmModelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateAlarmModelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateAlarmModelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateAlarmModelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateAlarmModelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateAlarmModelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateAlarmModelHeaders;
}(SpeakeasyBase));
export { CreateAlarmModelHeaders };
// CreateAlarmModelRequestBodyAlarmCapabilities
/**
 * Contains the configuration information of alarm state changes.
**/
var CreateAlarmModelRequestBodyAlarmCapabilities = /** @class */ (function (_super) {
    __extends(CreateAlarmModelRequestBodyAlarmCapabilities, _super);
    function CreateAlarmModelRequestBodyAlarmCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=acknowledgeFlow" }),
        __metadata("design:type", shared.AcknowledgeFlow)
    ], CreateAlarmModelRequestBodyAlarmCapabilities.prototype, "acknowledgeFlow", void 0);
    __decorate([
        Metadata({ data: "json, name=initializationConfiguration" }),
        __metadata("design:type", shared.InitializationConfiguration)
    ], CreateAlarmModelRequestBodyAlarmCapabilities.prototype, "initializationConfiguration", void 0);
    return CreateAlarmModelRequestBodyAlarmCapabilities;
}(SpeakeasyBase));
export { CreateAlarmModelRequestBodyAlarmCapabilities };
// CreateAlarmModelRequestBodyAlarmEventActions
/**
 * Contains information about one or more alarm actions.
**/
var CreateAlarmModelRequestBodyAlarmEventActions = /** @class */ (function (_super) {
    __extends(CreateAlarmModelRequestBodyAlarmEventActions, _super);
    function CreateAlarmModelRequestBodyAlarmEventActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=alarmActions", elemType: shared.AlarmAction }),
        __metadata("design:type", Array)
    ], CreateAlarmModelRequestBodyAlarmEventActions.prototype, "alarmActions", void 0);
    return CreateAlarmModelRequestBodyAlarmEventActions;
}(SpeakeasyBase));
export { CreateAlarmModelRequestBodyAlarmEventActions };
// CreateAlarmModelRequestBodyAlarmNotification
/**
 * Contains information about one or more notification actions.
**/
var CreateAlarmModelRequestBodyAlarmNotification = /** @class */ (function (_super) {
    __extends(CreateAlarmModelRequestBodyAlarmNotification, _super);
    function CreateAlarmModelRequestBodyAlarmNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=notificationActions", elemType: shared.NotificationAction }),
        __metadata("design:type", Array)
    ], CreateAlarmModelRequestBodyAlarmNotification.prototype, "notificationActions", void 0);
    return CreateAlarmModelRequestBodyAlarmNotification;
}(SpeakeasyBase));
export { CreateAlarmModelRequestBodyAlarmNotification };
// CreateAlarmModelRequestBodyAlarmRule
/**
 * Defines when your alarm is invoked.
**/
var CreateAlarmModelRequestBodyAlarmRule = /** @class */ (function (_super) {
    __extends(CreateAlarmModelRequestBodyAlarmRule, _super);
    function CreateAlarmModelRequestBodyAlarmRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=simpleRule" }),
        __metadata("design:type", shared.SimpleRule)
    ], CreateAlarmModelRequestBodyAlarmRule.prototype, "simpleRule", void 0);
    return CreateAlarmModelRequestBodyAlarmRule;
}(SpeakeasyBase));
export { CreateAlarmModelRequestBodyAlarmRule };
var CreateAlarmModelRequestBody = /** @class */ (function (_super) {
    __extends(CreateAlarmModelRequestBody, _super);
    function CreateAlarmModelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=alarmCapabilities" }),
        __metadata("design:type", CreateAlarmModelRequestBodyAlarmCapabilities)
    ], CreateAlarmModelRequestBody.prototype, "alarmCapabilities", void 0);
    __decorate([
        Metadata({ data: "json, name=alarmEventActions" }),
        __metadata("design:type", CreateAlarmModelRequestBodyAlarmEventActions)
    ], CreateAlarmModelRequestBody.prototype, "alarmEventActions", void 0);
    __decorate([
        Metadata({ data: "json, name=alarmModelDescription" }),
        __metadata("design:type", String)
    ], CreateAlarmModelRequestBody.prototype, "alarmModelDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=alarmModelName" }),
        __metadata("design:type", String)
    ], CreateAlarmModelRequestBody.prototype, "alarmModelName", void 0);
    __decorate([
        Metadata({ data: "json, name=alarmNotification" }),
        __metadata("design:type", CreateAlarmModelRequestBodyAlarmNotification)
    ], CreateAlarmModelRequestBody.prototype, "alarmNotification", void 0);
    __decorate([
        Metadata({ data: "json, name=alarmRule" }),
        __metadata("design:type", CreateAlarmModelRequestBodyAlarmRule)
    ], CreateAlarmModelRequestBody.prototype, "alarmRule", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], CreateAlarmModelRequestBody.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], CreateAlarmModelRequestBody.prototype, "roleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=severity" }),
        __metadata("design:type", Number)
    ], CreateAlarmModelRequestBody.prototype, "severity", void 0);
    __decorate([
        Metadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateAlarmModelRequestBody.prototype, "tags", void 0);
    return CreateAlarmModelRequestBody;
}(SpeakeasyBase));
export { CreateAlarmModelRequestBody };
var CreateAlarmModelRequest = /** @class */ (function (_super) {
    __extends(CreateAlarmModelRequest, _super);
    function CreateAlarmModelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateAlarmModelHeaders)
    ], CreateAlarmModelRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAlarmModelRequestBody)
    ], CreateAlarmModelRequest.prototype, "request", void 0);
    return CreateAlarmModelRequest;
}(SpeakeasyBase));
export { CreateAlarmModelRequest };
var CreateAlarmModelResponse = /** @class */ (function (_super) {
    __extends(CreateAlarmModelResponse, _super);
    function CreateAlarmModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateAlarmModelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateAlarmModelResponse)
    ], CreateAlarmModelResponse.prototype, "createAlarmModelResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAlarmModelResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAlarmModelResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAlarmModelResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAlarmModelResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAlarmModelResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAlarmModelResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateAlarmModelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateAlarmModelResponse.prototype, "throttlingException", void 0);
    return CreateAlarmModelResponse;
}(SpeakeasyBase));
export { CreateAlarmModelResponse };
