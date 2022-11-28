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
var ListInfrastructureConfigurationsQueryParams = /** @class */ (function (_super) {
    __extends(ListInfrastructureConfigurationsQueryParams, _super);
    function ListInfrastructureConfigurationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListInfrastructureConfigurationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListInfrastructureConfigurationsQueryParams.prototype, "nextToken", void 0);
    return ListInfrastructureConfigurationsQueryParams;
}(SpeakeasyBase));
export { ListInfrastructureConfigurationsQueryParams };
var ListInfrastructureConfigurationsHeaders = /** @class */ (function (_super) {
    __extends(ListInfrastructureConfigurationsHeaders, _super);
    function ListInfrastructureConfigurationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListInfrastructureConfigurationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListInfrastructureConfigurationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListInfrastructureConfigurationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListInfrastructureConfigurationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListInfrastructureConfigurationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListInfrastructureConfigurationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListInfrastructureConfigurationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListInfrastructureConfigurationsHeaders;
}(SpeakeasyBase));
export { ListInfrastructureConfigurationsHeaders };
var ListInfrastructureConfigurationsRequestBody = /** @class */ (function (_super) {
    __extends(ListInfrastructureConfigurationsRequestBody, _super);
    function ListInfrastructureConfigurationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters", elemType: shared.Filter }),
        __metadata("design:type", Array)
    ], ListInfrastructureConfigurationsRequestBody.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListInfrastructureConfigurationsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListInfrastructureConfigurationsRequestBody.prototype, "nextToken", void 0);
    return ListInfrastructureConfigurationsRequestBody;
}(SpeakeasyBase));
export { ListInfrastructureConfigurationsRequestBody };
var ListInfrastructureConfigurationsRequest = /** @class */ (function (_super) {
    __extends(ListInfrastructureConfigurationsRequest, _super);
    function ListInfrastructureConfigurationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListInfrastructureConfigurationsQueryParams)
    ], ListInfrastructureConfigurationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListInfrastructureConfigurationsHeaders)
    ], ListInfrastructureConfigurationsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListInfrastructureConfigurationsRequestBody)
    ], ListInfrastructureConfigurationsRequest.prototype, "request", void 0);
    return ListInfrastructureConfigurationsRequest;
}(SpeakeasyBase));
export { ListInfrastructureConfigurationsRequest };
var ListInfrastructureConfigurationsResponse = /** @class */ (function (_super) {
    __extends(ListInfrastructureConfigurationsResponse, _super);
    function ListInfrastructureConfigurationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListInfrastructureConfigurationsResponse.prototype, "callRateLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListInfrastructureConfigurationsResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListInfrastructureConfigurationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListInfrastructureConfigurationsResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListInfrastructureConfigurationsResponse.prototype, "invalidPaginationTokenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListInfrastructureConfigurationsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListInfrastructureConfigurationsResponse)
    ], ListInfrastructureConfigurationsResponse.prototype, "listInfrastructureConfigurationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListInfrastructureConfigurationsResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListInfrastructureConfigurationsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListInfrastructureConfigurationsResponse.prototype, "statusCode", void 0);
    return ListInfrastructureConfigurationsResponse;
}(SpeakeasyBase));
export { ListInfrastructureConfigurationsResponse };
