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
var CreateTopicRuleDestinationHeaders = /** @class */ (function (_super) {
    __extends(CreateTopicRuleDestinationHeaders, _super);
    function CreateTopicRuleDestinationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateTopicRuleDestinationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateTopicRuleDestinationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateTopicRuleDestinationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateTopicRuleDestinationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateTopicRuleDestinationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateTopicRuleDestinationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateTopicRuleDestinationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateTopicRuleDestinationHeaders;
}(SpeakeasyBase));
export { CreateTopicRuleDestinationHeaders };
// CreateTopicRuleDestinationRequestBodyDestinationConfiguration
/**
 * Configuration of the topic rule destination.
**/
var CreateTopicRuleDestinationRequestBodyDestinationConfiguration = /** @class */ (function (_super) {
    __extends(CreateTopicRuleDestinationRequestBodyDestinationConfiguration, _super);
    function CreateTopicRuleDestinationRequestBodyDestinationConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpUrlConfiguration" }),
        __metadata("design:type", shared.HttpUrlDestinationConfiguration)
    ], CreateTopicRuleDestinationRequestBodyDestinationConfiguration.prototype, "httpUrlConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcConfiguration" }),
        __metadata("design:type", shared.VpcDestinationConfiguration)
    ], CreateTopicRuleDestinationRequestBodyDestinationConfiguration.prototype, "vpcConfiguration", void 0);
    return CreateTopicRuleDestinationRequestBodyDestinationConfiguration;
}(SpeakeasyBase));
export { CreateTopicRuleDestinationRequestBodyDestinationConfiguration };
var CreateTopicRuleDestinationRequestBody = /** @class */ (function (_super) {
    __extends(CreateTopicRuleDestinationRequestBody, _super);
    function CreateTopicRuleDestinationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationConfiguration" }),
        __metadata("design:type", CreateTopicRuleDestinationRequestBodyDestinationConfiguration)
    ], CreateTopicRuleDestinationRequestBody.prototype, "destinationConfiguration", void 0);
    return CreateTopicRuleDestinationRequestBody;
}(SpeakeasyBase));
export { CreateTopicRuleDestinationRequestBody };
var CreateTopicRuleDestinationRequest = /** @class */ (function (_super) {
    __extends(CreateTopicRuleDestinationRequest, _super);
    function CreateTopicRuleDestinationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTopicRuleDestinationHeaders)
    ], CreateTopicRuleDestinationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateTopicRuleDestinationRequestBody)
    ], CreateTopicRuleDestinationRequest.prototype, "request", void 0);
    return CreateTopicRuleDestinationRequest;
}(SpeakeasyBase));
export { CreateTopicRuleDestinationRequest };
var CreateTopicRuleDestinationResponse = /** @class */ (function (_super) {
    __extends(CreateTopicRuleDestinationResponse, _super);
    function CreateTopicRuleDestinationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateTopicRuleDestinationResponse.prototype, "conflictingResourceUpdateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTopicRuleDestinationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateTopicRuleDestinationResponse)
    ], CreateTopicRuleDestinationResponse.prototype, "createTopicRuleDestinationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateTopicRuleDestinationResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateTopicRuleDestinationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateTopicRuleDestinationResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateTopicRuleDestinationResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTopicRuleDestinationResponse.prototype, "statusCode", void 0);
    return CreateTopicRuleDestinationResponse;
}(SpeakeasyBase));
export { CreateTopicRuleDestinationResponse };
