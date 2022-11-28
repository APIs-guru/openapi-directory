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
var GetSubscriptionDefinitionVersionPathParams = /** @class */ (function (_super) {
    __extends(GetSubscriptionDefinitionVersionPathParams, _super);
    function GetSubscriptionDefinitionVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionDefinitionId" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionVersionPathParams.prototype, "subscriptionDefinitionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionDefinitionVersionId" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionVersionPathParams.prototype, "subscriptionDefinitionVersionId", void 0);
    return GetSubscriptionDefinitionVersionPathParams;
}(SpeakeasyBase));
export { GetSubscriptionDefinitionVersionPathParams };
var GetSubscriptionDefinitionVersionQueryParams = /** @class */ (function (_super) {
    __extends(GetSubscriptionDefinitionVersionQueryParams, _super);
    function GetSubscriptionDefinitionVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionVersionQueryParams.prototype, "nextToken", void 0);
    return GetSubscriptionDefinitionVersionQueryParams;
}(SpeakeasyBase));
export { GetSubscriptionDefinitionVersionQueryParams };
var GetSubscriptionDefinitionVersionHeaders = /** @class */ (function (_super) {
    __extends(GetSubscriptionDefinitionVersionHeaders, _super);
    function GetSubscriptionDefinitionVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSubscriptionDefinitionVersionHeaders;
}(SpeakeasyBase));
export { GetSubscriptionDefinitionVersionHeaders };
var GetSubscriptionDefinitionVersionRequest = /** @class */ (function (_super) {
    __extends(GetSubscriptionDefinitionVersionRequest, _super);
    function GetSubscriptionDefinitionVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubscriptionDefinitionVersionPathParams)
    ], GetSubscriptionDefinitionVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubscriptionDefinitionVersionQueryParams)
    ], GetSubscriptionDefinitionVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubscriptionDefinitionVersionHeaders)
    ], GetSubscriptionDefinitionVersionRequest.prototype, "headers", void 0);
    return GetSubscriptionDefinitionVersionRequest;
}(SpeakeasyBase));
export { GetSubscriptionDefinitionVersionRequest };
var GetSubscriptionDefinitionVersionResponse = /** @class */ (function (_super) {
    __extends(GetSubscriptionDefinitionVersionResponse, _super);
    function GetSubscriptionDefinitionVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSubscriptionDefinitionVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSubscriptionDefinitionVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetSubscriptionDefinitionVersionResponse)
    ], GetSubscriptionDefinitionVersionResponse.prototype, "getSubscriptionDefinitionVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSubscriptionDefinitionVersionResponse.prototype, "statusCode", void 0);
    return GetSubscriptionDefinitionVersionResponse;
}(SpeakeasyBase));
export { GetSubscriptionDefinitionVersionResponse };
