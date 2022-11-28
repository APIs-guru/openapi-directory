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
var UpdateTopicRuleDestinationHeaders = /** @class */ (function (_super) {
    __extends(UpdateTopicRuleDestinationHeaders, _super);
    function UpdateTopicRuleDestinationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateTopicRuleDestinationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateTopicRuleDestinationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateTopicRuleDestinationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateTopicRuleDestinationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateTopicRuleDestinationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateTopicRuleDestinationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateTopicRuleDestinationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateTopicRuleDestinationHeaders;
}(SpeakeasyBase));
export { UpdateTopicRuleDestinationHeaders };
export var UpdateTopicRuleDestinationRequestBodyStatusEnum;
(function (UpdateTopicRuleDestinationRequestBodyStatusEnum) {
    UpdateTopicRuleDestinationRequestBodyStatusEnum["Enabled"] = "ENABLED";
    UpdateTopicRuleDestinationRequestBodyStatusEnum["InProgress"] = "IN_PROGRESS";
    UpdateTopicRuleDestinationRequestBodyStatusEnum["Disabled"] = "DISABLED";
    UpdateTopicRuleDestinationRequestBodyStatusEnum["Error"] = "ERROR";
    UpdateTopicRuleDestinationRequestBodyStatusEnum["Deleting"] = "DELETING";
})(UpdateTopicRuleDestinationRequestBodyStatusEnum || (UpdateTopicRuleDestinationRequestBodyStatusEnum = {}));
var UpdateTopicRuleDestinationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateTopicRuleDestinationRequestBody, _super);
    function UpdateTopicRuleDestinationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], UpdateTopicRuleDestinationRequestBody.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateTopicRuleDestinationRequestBody.prototype, "status", void 0);
    return UpdateTopicRuleDestinationRequestBody;
}(SpeakeasyBase));
export { UpdateTopicRuleDestinationRequestBody };
var UpdateTopicRuleDestinationRequest = /** @class */ (function (_super) {
    __extends(UpdateTopicRuleDestinationRequest, _super);
    function UpdateTopicRuleDestinationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTopicRuleDestinationHeaders)
    ], UpdateTopicRuleDestinationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateTopicRuleDestinationRequestBody)
    ], UpdateTopicRuleDestinationRequest.prototype, "request", void 0);
    return UpdateTopicRuleDestinationRequest;
}(SpeakeasyBase));
export { UpdateTopicRuleDestinationRequest };
var UpdateTopicRuleDestinationResponse = /** @class */ (function (_super) {
    __extends(UpdateTopicRuleDestinationResponse, _super);
    function UpdateTopicRuleDestinationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTopicRuleDestinationResponse.prototype, "conflictingResourceUpdateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateTopicRuleDestinationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTopicRuleDestinationResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTopicRuleDestinationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTopicRuleDestinationResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateTopicRuleDestinationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTopicRuleDestinationResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateTopicRuleDestinationResponse.prototype, "updateTopicRuleDestinationResponse", void 0);
    return UpdateTopicRuleDestinationResponse;
}(SpeakeasyBase));
export { UpdateTopicRuleDestinationResponse };
