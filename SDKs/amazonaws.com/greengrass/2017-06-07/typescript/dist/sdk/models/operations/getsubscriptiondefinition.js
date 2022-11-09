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
var GetSubscriptionDefinitionPathParams = /** @class */ (function (_super) {
    __extends(GetSubscriptionDefinitionPathParams, _super);
    function GetSubscriptionDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionDefinitionId" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionPathParams.prototype, "subscriptionDefinitionId", void 0);
    return GetSubscriptionDefinitionPathParams;
}(SpeakeasyBase));
export { GetSubscriptionDefinitionPathParams };
var GetSubscriptionDefinitionHeaders = /** @class */ (function (_super) {
    __extends(GetSubscriptionDefinitionHeaders, _super);
    function GetSubscriptionDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSubscriptionDefinitionHeaders;
}(SpeakeasyBase));
export { GetSubscriptionDefinitionHeaders };
var GetSubscriptionDefinitionRequest = /** @class */ (function (_super) {
    __extends(GetSubscriptionDefinitionRequest, _super);
    function GetSubscriptionDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSubscriptionDefinitionPathParams)
    ], GetSubscriptionDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSubscriptionDefinitionHeaders)
    ], GetSubscriptionDefinitionRequest.prototype, "headers", void 0);
    return GetSubscriptionDefinitionRequest;
}(SpeakeasyBase));
export { GetSubscriptionDefinitionRequest };
var GetSubscriptionDefinitionResponse = /** @class */ (function (_super) {
    __extends(GetSubscriptionDefinitionResponse, _super);
    function GetSubscriptionDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSubscriptionDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetSubscriptionDefinitionResponse)
    ], GetSubscriptionDefinitionResponse.prototype, "getSubscriptionDefinitionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSubscriptionDefinitionResponse.prototype, "statusCode", void 0);
    return GetSubscriptionDefinitionResponse;
}(SpeakeasyBase));
export { GetSubscriptionDefinitionResponse };
