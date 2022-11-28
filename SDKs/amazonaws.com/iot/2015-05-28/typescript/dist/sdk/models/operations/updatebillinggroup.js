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
var UpdateBillingGroupPathParams = /** @class */ (function (_super) {
    __extends(UpdateBillingGroupPathParams, _super);
    function UpdateBillingGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billingGroupName" }),
        __metadata("design:type", String)
    ], UpdateBillingGroupPathParams.prototype, "billingGroupName", void 0);
    return UpdateBillingGroupPathParams;
}(SpeakeasyBase));
export { UpdateBillingGroupPathParams };
var UpdateBillingGroupHeaders = /** @class */ (function (_super) {
    __extends(UpdateBillingGroupHeaders, _super);
    function UpdateBillingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateBillingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateBillingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateBillingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateBillingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateBillingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateBillingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateBillingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateBillingGroupHeaders;
}(SpeakeasyBase));
export { UpdateBillingGroupHeaders };
// UpdateBillingGroupRequestBodyBillingGroupProperties
/**
 * The properties of a billing group.
**/
var UpdateBillingGroupRequestBodyBillingGroupProperties = /** @class */ (function (_super) {
    __extends(UpdateBillingGroupRequestBodyBillingGroupProperties, _super);
    function UpdateBillingGroupRequestBodyBillingGroupProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingGroupDescription" }),
        __metadata("design:type", String)
    ], UpdateBillingGroupRequestBodyBillingGroupProperties.prototype, "billingGroupDescription", void 0);
    return UpdateBillingGroupRequestBodyBillingGroupProperties;
}(SpeakeasyBase));
export { UpdateBillingGroupRequestBodyBillingGroupProperties };
var UpdateBillingGroupRequestBody = /** @class */ (function (_super) {
    __extends(UpdateBillingGroupRequestBody, _super);
    function UpdateBillingGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingGroupProperties" }),
        __metadata("design:type", UpdateBillingGroupRequestBodyBillingGroupProperties)
    ], UpdateBillingGroupRequestBody.prototype, "billingGroupProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedVersion" }),
        __metadata("design:type", Number)
    ], UpdateBillingGroupRequestBody.prototype, "expectedVersion", void 0);
    return UpdateBillingGroupRequestBody;
}(SpeakeasyBase));
export { UpdateBillingGroupRequestBody };
var UpdateBillingGroupRequest = /** @class */ (function (_super) {
    __extends(UpdateBillingGroupRequest, _super);
    function UpdateBillingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBillingGroupPathParams)
    ], UpdateBillingGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBillingGroupHeaders)
    ], UpdateBillingGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateBillingGroupRequestBody)
    ], UpdateBillingGroupRequest.prototype, "request", void 0);
    return UpdateBillingGroupRequest;
}(SpeakeasyBase));
export { UpdateBillingGroupRequest };
var UpdateBillingGroupResponse = /** @class */ (function (_super) {
    __extends(UpdateBillingGroupResponse, _super);
    function UpdateBillingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateBillingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBillingGroupResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBillingGroupResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBillingGroupResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateBillingGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBillingGroupResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateBillingGroupResponse)
    ], UpdateBillingGroupResponse.prototype, "updateBillingGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateBillingGroupResponse.prototype, "versionConflictException", void 0);
    return UpdateBillingGroupResponse;
}(SpeakeasyBase));
export { UpdateBillingGroupResponse };
