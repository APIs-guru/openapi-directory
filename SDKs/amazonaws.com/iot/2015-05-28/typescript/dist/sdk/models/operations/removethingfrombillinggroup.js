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
var RemoveThingFromBillingGroupHeaders = /** @class */ (function (_super) {
    __extends(RemoveThingFromBillingGroupHeaders, _super);
    function RemoveThingFromBillingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RemoveThingFromBillingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RemoveThingFromBillingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RemoveThingFromBillingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RemoveThingFromBillingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RemoveThingFromBillingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RemoveThingFromBillingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RemoveThingFromBillingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RemoveThingFromBillingGroupHeaders;
}(SpeakeasyBase));
export { RemoveThingFromBillingGroupHeaders };
var RemoveThingFromBillingGroupRequestBody = /** @class */ (function (_super) {
    __extends(RemoveThingFromBillingGroupRequestBody, _super);
    function RemoveThingFromBillingGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingGroupArn" }),
        __metadata("design:type", String)
    ], RemoveThingFromBillingGroupRequestBody.prototype, "billingGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingGroupName" }),
        __metadata("design:type", String)
    ], RemoveThingFromBillingGroupRequestBody.prototype, "billingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingArn" }),
        __metadata("design:type", String)
    ], RemoveThingFromBillingGroupRequestBody.prototype, "thingArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingName" }),
        __metadata("design:type", String)
    ], RemoveThingFromBillingGroupRequestBody.prototype, "thingName", void 0);
    return RemoveThingFromBillingGroupRequestBody;
}(SpeakeasyBase));
export { RemoveThingFromBillingGroupRequestBody };
var RemoveThingFromBillingGroupRequest = /** @class */ (function (_super) {
    __extends(RemoveThingFromBillingGroupRequest, _super);
    function RemoveThingFromBillingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveThingFromBillingGroupHeaders)
    ], RemoveThingFromBillingGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveThingFromBillingGroupRequestBody)
    ], RemoveThingFromBillingGroupRequest.prototype, "request", void 0);
    return RemoveThingFromBillingGroupRequest;
}(SpeakeasyBase));
export { RemoveThingFromBillingGroupRequest };
var RemoveThingFromBillingGroupResponse = /** @class */ (function (_super) {
    __extends(RemoveThingFromBillingGroupResponse, _super);
    function RemoveThingFromBillingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveThingFromBillingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveThingFromBillingGroupResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveThingFromBillingGroupResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RemoveThingFromBillingGroupResponse.prototype, "removeThingFromBillingGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveThingFromBillingGroupResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveThingFromBillingGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveThingFromBillingGroupResponse.prototype, "throttlingException", void 0);
    return RemoveThingFromBillingGroupResponse;
}(SpeakeasyBase));
export { RemoveThingFromBillingGroupResponse };
