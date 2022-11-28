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
var DeleteSubscriptionDefinitionPathParams = /** @class */ (function (_super) {
    __extends(DeleteSubscriptionDefinitionPathParams, _super);
    function DeleteSubscriptionDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionDefinitionId" }),
        __metadata("design:type", String)
    ], DeleteSubscriptionDefinitionPathParams.prototype, "subscriptionDefinitionId", void 0);
    return DeleteSubscriptionDefinitionPathParams;
}(SpeakeasyBase));
export { DeleteSubscriptionDefinitionPathParams };
var DeleteSubscriptionDefinitionHeaders = /** @class */ (function (_super) {
    __extends(DeleteSubscriptionDefinitionHeaders, _super);
    function DeleteSubscriptionDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteSubscriptionDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteSubscriptionDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteSubscriptionDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteSubscriptionDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteSubscriptionDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteSubscriptionDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteSubscriptionDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteSubscriptionDefinitionHeaders;
}(SpeakeasyBase));
export { DeleteSubscriptionDefinitionHeaders };
var DeleteSubscriptionDefinitionRequest = /** @class */ (function (_super) {
    __extends(DeleteSubscriptionDefinitionRequest, _super);
    function DeleteSubscriptionDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSubscriptionDefinitionPathParams)
    ], DeleteSubscriptionDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSubscriptionDefinitionHeaders)
    ], DeleteSubscriptionDefinitionRequest.prototype, "headers", void 0);
    return DeleteSubscriptionDefinitionRequest;
}(SpeakeasyBase));
export { DeleteSubscriptionDefinitionRequest };
var DeleteSubscriptionDefinitionResponse = /** @class */ (function (_super) {
    __extends(DeleteSubscriptionDefinitionResponse, _super);
    function DeleteSubscriptionDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteSubscriptionDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSubscriptionDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteSubscriptionDefinitionResponse.prototype, "deleteSubscriptionDefinitionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSubscriptionDefinitionResponse.prototype, "statusCode", void 0);
    return DeleteSubscriptionDefinitionResponse;
}(SpeakeasyBase));
export { DeleteSubscriptionDefinitionResponse };
