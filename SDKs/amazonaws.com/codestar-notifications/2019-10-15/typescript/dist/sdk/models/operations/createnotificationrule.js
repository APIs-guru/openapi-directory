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
var CreateNotificationRuleHeaders = /** @class */ (function (_super) {
    __extends(CreateNotificationRuleHeaders, _super);
    function CreateNotificationRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateNotificationRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateNotificationRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateNotificationRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateNotificationRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateNotificationRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateNotificationRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateNotificationRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateNotificationRuleHeaders;
}(SpeakeasyBase));
export { CreateNotificationRuleHeaders };
export var CreateNotificationRuleRequestBodyDetailTypeEnum;
(function (CreateNotificationRuleRequestBodyDetailTypeEnum) {
    CreateNotificationRuleRequestBodyDetailTypeEnum["Basic"] = "BASIC";
    CreateNotificationRuleRequestBodyDetailTypeEnum["Full"] = "FULL";
})(CreateNotificationRuleRequestBodyDetailTypeEnum || (CreateNotificationRuleRequestBodyDetailTypeEnum = {}));
export var CreateNotificationRuleRequestBodyStatusEnum;
(function (CreateNotificationRuleRequestBodyStatusEnum) {
    CreateNotificationRuleRequestBodyStatusEnum["Enabled"] = "ENABLED";
    CreateNotificationRuleRequestBodyStatusEnum["Disabled"] = "DISABLED";
})(CreateNotificationRuleRequestBodyStatusEnum || (CreateNotificationRuleRequestBodyStatusEnum = {}));
var CreateNotificationRuleRequestBody = /** @class */ (function (_super) {
    __extends(CreateNotificationRuleRequestBody, _super);
    function CreateNotificationRuleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ClientRequestToken" }),
        __metadata("design:type", String)
    ], CreateNotificationRuleRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=DetailType" }),
        __metadata("design:type", String)
    ], CreateNotificationRuleRequestBody.prototype, "detailType", void 0);
    __decorate([
        Metadata({ data: "json, name=EventTypeIds" }),
        __metadata("design:type", Array)
    ], CreateNotificationRuleRequestBody.prototype, "eventTypeIds", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateNotificationRuleRequestBody.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=Resource" }),
        __metadata("design:type", String)
    ], CreateNotificationRuleRequestBody.prototype, "resource", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], CreateNotificationRuleRequestBody.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], CreateNotificationRuleRequestBody.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=Targets", elemType: shared.Target }),
        __metadata("design:type", Array)
    ], CreateNotificationRuleRequestBody.prototype, "targets", void 0);
    return CreateNotificationRuleRequestBody;
}(SpeakeasyBase));
export { CreateNotificationRuleRequestBody };
var CreateNotificationRuleRequest = /** @class */ (function (_super) {
    __extends(CreateNotificationRuleRequest, _super);
    function CreateNotificationRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateNotificationRuleHeaders)
    ], CreateNotificationRuleRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNotificationRuleRequestBody)
    ], CreateNotificationRuleRequest.prototype, "request", void 0);
    return CreateNotificationRuleRequest;
}(SpeakeasyBase));
export { CreateNotificationRuleRequest };
var CreateNotificationRuleResponse = /** @class */ (function (_super) {
    __extends(CreateNotificationRuleResponse, _super);
    function CreateNotificationRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateNotificationRuleResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateNotificationRuleResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateNotificationRuleResponse.prototype, "configurationException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateNotificationRuleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateNotificationRuleResult)
    ], CreateNotificationRuleResponse.prototype, "createNotificationRuleResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateNotificationRuleResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateNotificationRuleResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateNotificationRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateNotificationRuleResponse.prototype, "validationException", void 0);
    return CreateNotificationRuleResponse;
}(SpeakeasyBase));
export { CreateNotificationRuleResponse };
