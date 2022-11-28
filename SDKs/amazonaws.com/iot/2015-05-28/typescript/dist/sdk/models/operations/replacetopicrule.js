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
var ReplaceTopicRulePathParams = /** @class */ (function (_super) {
    __extends(ReplaceTopicRulePathParams, _super);
    function ReplaceTopicRulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleName" }),
        __metadata("design:type", String)
    ], ReplaceTopicRulePathParams.prototype, "ruleName", void 0);
    return ReplaceTopicRulePathParams;
}(SpeakeasyBase));
export { ReplaceTopicRulePathParams };
var ReplaceTopicRuleHeaders = /** @class */ (function (_super) {
    __extends(ReplaceTopicRuleHeaders, _super);
    function ReplaceTopicRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ReplaceTopicRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ReplaceTopicRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ReplaceTopicRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ReplaceTopicRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ReplaceTopicRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ReplaceTopicRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ReplaceTopicRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ReplaceTopicRuleHeaders;
}(SpeakeasyBase));
export { ReplaceTopicRuleHeaders };
// ReplaceTopicRuleRequestBodyTopicRulePayload
/**
 * Describes a rule.
**/
var ReplaceTopicRuleRequestBodyTopicRulePayload = /** @class */ (function (_super) {
    __extends(ReplaceTopicRuleRequestBodyTopicRulePayload, _super);
    function ReplaceTopicRuleRequestBodyTopicRulePayload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.Action }),
        __metadata("design:type", Array)
    ], ReplaceTopicRuleRequestBodyTopicRulePayload.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsIotSqlVersion" }),
        __metadata("design:type", String)
    ], ReplaceTopicRuleRequestBodyTopicRulePayload.prototype, "awsIotSqlVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReplaceTopicRuleRequestBodyTopicRulePayload.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorAction" }),
        __metadata("design:type", shared.Action)
    ], ReplaceTopicRuleRequestBodyTopicRulePayload.prototype, "errorAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleDisabled" }),
        __metadata("design:type", Boolean)
    ], ReplaceTopicRuleRequestBodyTopicRulePayload.prototype, "ruleDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql" }),
        __metadata("design:type", String)
    ], ReplaceTopicRuleRequestBodyTopicRulePayload.prototype, "sql", void 0);
    return ReplaceTopicRuleRequestBodyTopicRulePayload;
}(SpeakeasyBase));
export { ReplaceTopicRuleRequestBodyTopicRulePayload };
var ReplaceTopicRuleRequestBody = /** @class */ (function (_super) {
    __extends(ReplaceTopicRuleRequestBody, _super);
    function ReplaceTopicRuleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topicRulePayload" }),
        __metadata("design:type", ReplaceTopicRuleRequestBodyTopicRulePayload)
    ], ReplaceTopicRuleRequestBody.prototype, "topicRulePayload", void 0);
    return ReplaceTopicRuleRequestBody;
}(SpeakeasyBase));
export { ReplaceTopicRuleRequestBody };
var ReplaceTopicRuleRequest = /** @class */ (function (_super) {
    __extends(ReplaceTopicRuleRequest, _super);
    function ReplaceTopicRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceTopicRulePathParams)
    ], ReplaceTopicRuleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceTopicRuleHeaders)
    ], ReplaceTopicRuleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReplaceTopicRuleRequestBody)
    ], ReplaceTopicRuleRequest.prototype, "request", void 0);
    return ReplaceTopicRuleRequest;
}(SpeakeasyBase));
export { ReplaceTopicRuleRequest };
var ReplaceTopicRuleResponse = /** @class */ (function (_super) {
    __extends(ReplaceTopicRuleResponse, _super);
    function ReplaceTopicRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ReplaceTopicRuleResponse.prototype, "conflictingResourceUpdateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplaceTopicRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ReplaceTopicRuleResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ReplaceTopicRuleResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ReplaceTopicRuleResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ReplaceTopicRuleResponse.prototype, "sqlParseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplaceTopicRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ReplaceTopicRuleResponse.prototype, "unauthorizedException", void 0);
    return ReplaceTopicRuleResponse;
}(SpeakeasyBase));
export { ReplaceTopicRuleResponse };
