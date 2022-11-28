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
var CreateSubscriptionDefinitionVersionPathParams = /** @class */ (function (_super) {
    __extends(CreateSubscriptionDefinitionVersionPathParams, _super);
    function CreateSubscriptionDefinitionVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionDefinitionId" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionVersionPathParams.prototype, "subscriptionDefinitionId", void 0);
    return CreateSubscriptionDefinitionVersionPathParams;
}(SpeakeasyBase));
export { CreateSubscriptionDefinitionVersionPathParams };
var CreateSubscriptionDefinitionVersionHeaders = /** @class */ (function (_super) {
    __extends(CreateSubscriptionDefinitionVersionHeaders, _super);
    function CreateSubscriptionDefinitionVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionVersionHeaders.prototype, "xAmznClientToken", void 0);
    return CreateSubscriptionDefinitionVersionHeaders;
}(SpeakeasyBase));
export { CreateSubscriptionDefinitionVersionHeaders };
var CreateSubscriptionDefinitionVersionRequestBody = /** @class */ (function (_super) {
    __extends(CreateSubscriptionDefinitionVersionRequestBody, _super);
    function CreateSubscriptionDefinitionVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subscriptions", elemType: shared.Subscription }),
        __metadata("design:type", Array)
    ], CreateSubscriptionDefinitionVersionRequestBody.prototype, "subscriptions", void 0);
    return CreateSubscriptionDefinitionVersionRequestBody;
}(SpeakeasyBase));
export { CreateSubscriptionDefinitionVersionRequestBody };
var CreateSubscriptionDefinitionVersionRequest = /** @class */ (function (_super) {
    __extends(CreateSubscriptionDefinitionVersionRequest, _super);
    function CreateSubscriptionDefinitionVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSubscriptionDefinitionVersionPathParams)
    ], CreateSubscriptionDefinitionVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSubscriptionDefinitionVersionHeaders)
    ], CreateSubscriptionDefinitionVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSubscriptionDefinitionVersionRequestBody)
    ], CreateSubscriptionDefinitionVersionRequest.prototype, "request", void 0);
    return CreateSubscriptionDefinitionVersionRequest;
}(SpeakeasyBase));
export { CreateSubscriptionDefinitionVersionRequest };
var CreateSubscriptionDefinitionVersionResponse = /** @class */ (function (_super) {
    __extends(CreateSubscriptionDefinitionVersionResponse, _super);
    function CreateSubscriptionDefinitionVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateSubscriptionDefinitionVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSubscriptionDefinitionVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateSubscriptionDefinitionVersionResponse)
    ], CreateSubscriptionDefinitionVersionResponse.prototype, "createSubscriptionDefinitionVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSubscriptionDefinitionVersionResponse.prototype, "statusCode", void 0);
    return CreateSubscriptionDefinitionVersionResponse;
}(SpeakeasyBase));
export { CreateSubscriptionDefinitionVersionResponse };
