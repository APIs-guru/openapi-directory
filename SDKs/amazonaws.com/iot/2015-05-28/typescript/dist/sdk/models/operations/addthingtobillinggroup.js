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
var AddThingToBillingGroupHeaders = /** @class */ (function (_super) {
    __extends(AddThingToBillingGroupHeaders, _super);
    function AddThingToBillingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AddThingToBillingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AddThingToBillingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AddThingToBillingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AddThingToBillingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AddThingToBillingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AddThingToBillingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AddThingToBillingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AddThingToBillingGroupHeaders;
}(SpeakeasyBase));
export { AddThingToBillingGroupHeaders };
var AddThingToBillingGroupRequestBody = /** @class */ (function (_super) {
    __extends(AddThingToBillingGroupRequestBody, _super);
    function AddThingToBillingGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingGroupArn" }),
        __metadata("design:type", String)
    ], AddThingToBillingGroupRequestBody.prototype, "billingGroupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingGroupName" }),
        __metadata("design:type", String)
    ], AddThingToBillingGroupRequestBody.prototype, "billingGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingArn" }),
        __metadata("design:type", String)
    ], AddThingToBillingGroupRequestBody.prototype, "thingArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thingName" }),
        __metadata("design:type", String)
    ], AddThingToBillingGroupRequestBody.prototype, "thingName", void 0);
    return AddThingToBillingGroupRequestBody;
}(SpeakeasyBase));
export { AddThingToBillingGroupRequestBody };
var AddThingToBillingGroupRequest = /** @class */ (function (_super) {
    __extends(AddThingToBillingGroupRequest, _super);
    function AddThingToBillingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddThingToBillingGroupHeaders)
    ], AddThingToBillingGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddThingToBillingGroupRequestBody)
    ], AddThingToBillingGroupRequest.prototype, "request", void 0);
    return AddThingToBillingGroupRequest;
}(SpeakeasyBase));
export { AddThingToBillingGroupRequest };
var AddThingToBillingGroupResponse = /** @class */ (function (_super) {
    __extends(AddThingToBillingGroupResponse, _super);
    function AddThingToBillingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AddThingToBillingGroupResponse.prototype, "addThingToBillingGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddThingToBillingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddThingToBillingGroupResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddThingToBillingGroupResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddThingToBillingGroupResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddThingToBillingGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddThingToBillingGroupResponse.prototype, "throttlingException", void 0);
    return AddThingToBillingGroupResponse;
}(SpeakeasyBase));
export { AddThingToBillingGroupResponse };
