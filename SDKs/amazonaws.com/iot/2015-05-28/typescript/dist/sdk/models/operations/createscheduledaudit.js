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
var CreateScheduledAuditPathParams = /** @class */ (function (_super) {
    __extends(CreateScheduledAuditPathParams, _super);
    function CreateScheduledAuditPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheduledAuditName" }),
        __metadata("design:type", String)
    ], CreateScheduledAuditPathParams.prototype, "scheduledAuditName", void 0);
    return CreateScheduledAuditPathParams;
}(SpeakeasyBase));
export { CreateScheduledAuditPathParams };
var CreateScheduledAuditHeaders = /** @class */ (function (_super) {
    __extends(CreateScheduledAuditHeaders, _super);
    function CreateScheduledAuditHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateScheduledAuditHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateScheduledAuditHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateScheduledAuditHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateScheduledAuditHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateScheduledAuditHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateScheduledAuditHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateScheduledAuditHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateScheduledAuditHeaders;
}(SpeakeasyBase));
export { CreateScheduledAuditHeaders };
export var CreateScheduledAuditRequestBodyDayOfWeekEnum;
(function (CreateScheduledAuditRequestBodyDayOfWeekEnum) {
    CreateScheduledAuditRequestBodyDayOfWeekEnum["Sun"] = "SUN";
    CreateScheduledAuditRequestBodyDayOfWeekEnum["Mon"] = "MON";
    CreateScheduledAuditRequestBodyDayOfWeekEnum["Tue"] = "TUE";
    CreateScheduledAuditRequestBodyDayOfWeekEnum["Wed"] = "WED";
    CreateScheduledAuditRequestBodyDayOfWeekEnum["Thu"] = "THU";
    CreateScheduledAuditRequestBodyDayOfWeekEnum["Fri"] = "FRI";
    CreateScheduledAuditRequestBodyDayOfWeekEnum["Sat"] = "SAT";
})(CreateScheduledAuditRequestBodyDayOfWeekEnum || (CreateScheduledAuditRequestBodyDayOfWeekEnum = {}));
export var CreateScheduledAuditRequestBodyFrequencyEnum;
(function (CreateScheduledAuditRequestBodyFrequencyEnum) {
    CreateScheduledAuditRequestBodyFrequencyEnum["Daily"] = "DAILY";
    CreateScheduledAuditRequestBodyFrequencyEnum["Weekly"] = "WEEKLY";
    CreateScheduledAuditRequestBodyFrequencyEnum["Biweekly"] = "BIWEEKLY";
    CreateScheduledAuditRequestBodyFrequencyEnum["Monthly"] = "MONTHLY";
})(CreateScheduledAuditRequestBodyFrequencyEnum || (CreateScheduledAuditRequestBodyFrequencyEnum = {}));
var CreateScheduledAuditRequestBody = /** @class */ (function (_super) {
    __extends(CreateScheduledAuditRequestBody, _super);
    function CreateScheduledAuditRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayOfMonth" }),
        __metadata("design:type", String)
    ], CreateScheduledAuditRequestBody.prototype, "dayOfMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayOfWeek" }),
        __metadata("design:type", String)
    ], CreateScheduledAuditRequestBody.prototype, "dayOfWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], CreateScheduledAuditRequestBody.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateScheduledAuditRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetCheckNames" }),
        __metadata("design:type", Array)
    ], CreateScheduledAuditRequestBody.prototype, "targetCheckNames", void 0);
    return CreateScheduledAuditRequestBody;
}(SpeakeasyBase));
export { CreateScheduledAuditRequestBody };
var CreateScheduledAuditRequest = /** @class */ (function (_super) {
    __extends(CreateScheduledAuditRequest, _super);
    function CreateScheduledAuditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateScheduledAuditPathParams)
    ], CreateScheduledAuditRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateScheduledAuditHeaders)
    ], CreateScheduledAuditRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateScheduledAuditRequestBody)
    ], CreateScheduledAuditRequest.prototype, "request", void 0);
    return CreateScheduledAuditRequest;
}(SpeakeasyBase));
export { CreateScheduledAuditRequest };
var CreateScheduledAuditResponse = /** @class */ (function (_super) {
    __extends(CreateScheduledAuditResponse, _super);
    function CreateScheduledAuditResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateScheduledAuditResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateScheduledAuditResponse)
    ], CreateScheduledAuditResponse.prototype, "createScheduledAuditResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateScheduledAuditResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateScheduledAuditResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateScheduledAuditResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateScheduledAuditResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateScheduledAuditResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateScheduledAuditResponse.prototype, "throttlingException", void 0);
    return CreateScheduledAuditResponse;
}(SpeakeasyBase));
export { CreateScheduledAuditResponse };
