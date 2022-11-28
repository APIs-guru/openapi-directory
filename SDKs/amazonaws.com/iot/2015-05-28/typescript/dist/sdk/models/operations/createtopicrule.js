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
var CreateTopicRulePathParams = /** @class */ (function (_super) {
    __extends(CreateTopicRulePathParams, _super);
    function CreateTopicRulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleName" }),
        __metadata("design:type", String)
    ], CreateTopicRulePathParams.prototype, "ruleName", void 0);
    return CreateTopicRulePathParams;
}(SpeakeasyBase));
export { CreateTopicRulePathParams };
var CreateTopicRuleHeaders = /** @class */ (function (_super) {
    __extends(CreateTopicRuleHeaders, _super);
    function CreateTopicRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateTopicRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateTopicRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateTopicRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateTopicRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateTopicRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateTopicRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateTopicRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-tagging" }),
        __metadata("design:type", String)
    ], CreateTopicRuleHeaders.prototype, "xAmzTagging", void 0);
    return CreateTopicRuleHeaders;
}(SpeakeasyBase));
export { CreateTopicRuleHeaders };
// CreateTopicRuleRequestBodyTopicRulePayload
/**
 * Describes a rule.
**/
var CreateTopicRuleRequestBodyTopicRulePayload = /** @class */ (function (_super) {
    __extends(CreateTopicRuleRequestBodyTopicRulePayload, _super);
    function CreateTopicRuleRequestBodyTopicRulePayload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.Action }),
        __metadata("design:type", Array)
    ], CreateTopicRuleRequestBodyTopicRulePayload.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsIotSqlVersion" }),
        __metadata("design:type", String)
    ], CreateTopicRuleRequestBodyTopicRulePayload.prototype, "awsIotSqlVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateTopicRuleRequestBodyTopicRulePayload.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorAction" }),
        __metadata("design:type", shared.Action)
    ], CreateTopicRuleRequestBodyTopicRulePayload.prototype, "errorAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleDisabled" }),
        __metadata("design:type", Boolean)
    ], CreateTopicRuleRequestBodyTopicRulePayload.prototype, "ruleDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sql" }),
        __metadata("design:type", String)
    ], CreateTopicRuleRequestBodyTopicRulePayload.prototype, "sql", void 0);
    return CreateTopicRuleRequestBodyTopicRulePayload;
}(SpeakeasyBase));
export { CreateTopicRuleRequestBodyTopicRulePayload };
var CreateTopicRuleRequestBody = /** @class */ (function (_super) {
    __extends(CreateTopicRuleRequestBody, _super);
    function CreateTopicRuleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topicRulePayload" }),
        __metadata("design:type", CreateTopicRuleRequestBodyTopicRulePayload)
    ], CreateTopicRuleRequestBody.prototype, "topicRulePayload", void 0);
    return CreateTopicRuleRequestBody;
}(SpeakeasyBase));
export { CreateTopicRuleRequestBody };
var CreateTopicRuleRequest = /** @class */ (function (_super) {
    __extends(CreateTopicRuleRequest, _super);
    function CreateTopicRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTopicRulePathParams)
    ], CreateTopicRuleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTopicRuleHeaders)
    ], CreateTopicRuleRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateTopicRuleRequestBody)
    ], CreateTopicRuleRequest.prototype, "request", void 0);
    return CreateTopicRuleRequest;
}(SpeakeasyBase));
export { CreateTopicRuleRequest };
var CreateTopicRuleResponse = /** @class */ (function (_super) {
    __extends(CreateTopicRuleResponse, _super);
    function CreateTopicRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateTopicRuleResponse.prototype, "conflictingResourceUpdateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTopicRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateTopicRuleResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateTopicRuleResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateTopicRuleResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateTopicRuleResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateTopicRuleResponse.prototype, "sqlParseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTopicRuleResponse.prototype, "statusCode", void 0);
    return CreateTopicRuleResponse;
}(SpeakeasyBase));
export { CreateTopicRuleResponse };
