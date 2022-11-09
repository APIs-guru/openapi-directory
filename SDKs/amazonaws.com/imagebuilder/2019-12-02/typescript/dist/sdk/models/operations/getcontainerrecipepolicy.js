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
var GetContainerRecipePolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetContainerRecipePolicyQueryParams, _super);
    function GetContainerRecipePolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=containerRecipeArn" }),
        __metadata("design:type", String)
    ], GetContainerRecipePolicyQueryParams.prototype, "containerRecipeArn", void 0);
    return GetContainerRecipePolicyQueryParams;
}(SpeakeasyBase));
export { GetContainerRecipePolicyQueryParams };
var GetContainerRecipePolicyHeaders = /** @class */ (function (_super) {
    __extends(GetContainerRecipePolicyHeaders, _super);
    function GetContainerRecipePolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetContainerRecipePolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetContainerRecipePolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetContainerRecipePolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetContainerRecipePolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetContainerRecipePolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetContainerRecipePolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetContainerRecipePolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetContainerRecipePolicyHeaders;
}(SpeakeasyBase));
export { GetContainerRecipePolicyHeaders };
var GetContainerRecipePolicyRequest = /** @class */ (function (_super) {
    __extends(GetContainerRecipePolicyRequest, _super);
    function GetContainerRecipePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetContainerRecipePolicyQueryParams)
    ], GetContainerRecipePolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetContainerRecipePolicyHeaders)
    ], GetContainerRecipePolicyRequest.prototype, "headers", void 0);
    return GetContainerRecipePolicyRequest;
}(SpeakeasyBase));
export { GetContainerRecipePolicyRequest };
var GetContainerRecipePolicyResponse = /** @class */ (function (_super) {
    __extends(GetContainerRecipePolicyResponse, _super);
    function GetContainerRecipePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetContainerRecipePolicyResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetContainerRecipePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetContainerRecipePolicyResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetContainerRecipePolicyResponse)
    ], GetContainerRecipePolicyResponse.prototype, "getContainerRecipePolicyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetContainerRecipePolicyResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetContainerRecipePolicyResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetContainerRecipePolicyResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetContainerRecipePolicyResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetContainerRecipePolicyResponse.prototype, "statusCode", void 0);
    return GetContainerRecipePolicyResponse;
}(SpeakeasyBase));
export { GetContainerRecipePolicyResponse };
