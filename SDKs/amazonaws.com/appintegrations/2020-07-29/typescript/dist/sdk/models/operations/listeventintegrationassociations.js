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
var ListEventIntegrationAssociationsPathParams = /** @class */ (function (_super) {
    __extends(ListEventIntegrationAssociationsPathParams, _super);
    function ListEventIntegrationAssociationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Name" }),
        __metadata("design:type", String)
    ], ListEventIntegrationAssociationsPathParams.prototype, "name", void 0);
    return ListEventIntegrationAssociationsPathParams;
}(SpeakeasyBase));
export { ListEventIntegrationAssociationsPathParams };
var ListEventIntegrationAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(ListEventIntegrationAssociationsQueryParams, _super);
    function ListEventIntegrationAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListEventIntegrationAssociationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListEventIntegrationAssociationsQueryParams.prototype, "nextToken", void 0);
    return ListEventIntegrationAssociationsQueryParams;
}(SpeakeasyBase));
export { ListEventIntegrationAssociationsQueryParams };
var ListEventIntegrationAssociationsHeaders = /** @class */ (function (_super) {
    __extends(ListEventIntegrationAssociationsHeaders, _super);
    function ListEventIntegrationAssociationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListEventIntegrationAssociationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListEventIntegrationAssociationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListEventIntegrationAssociationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListEventIntegrationAssociationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListEventIntegrationAssociationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListEventIntegrationAssociationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListEventIntegrationAssociationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListEventIntegrationAssociationsHeaders;
}(SpeakeasyBase));
export { ListEventIntegrationAssociationsHeaders };
var ListEventIntegrationAssociationsRequest = /** @class */ (function (_super) {
    __extends(ListEventIntegrationAssociationsRequest, _super);
    function ListEventIntegrationAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListEventIntegrationAssociationsPathParams)
    ], ListEventIntegrationAssociationsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEventIntegrationAssociationsQueryParams)
    ], ListEventIntegrationAssociationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEventIntegrationAssociationsHeaders)
    ], ListEventIntegrationAssociationsRequest.prototype, "headers", void 0);
    return ListEventIntegrationAssociationsRequest;
}(SpeakeasyBase));
export { ListEventIntegrationAssociationsRequest };
var ListEventIntegrationAssociationsResponse = /** @class */ (function (_super) {
    __extends(ListEventIntegrationAssociationsResponse, _super);
    function ListEventIntegrationAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEventIntegrationAssociationsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEventIntegrationAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEventIntegrationAssociationsResponse.prototype, "internalServiceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEventIntegrationAssociationsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListEventIntegrationAssociationsResponse)
    ], ListEventIntegrationAssociationsResponse.prototype, "listEventIntegrationAssociationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEventIntegrationAssociationsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListEventIntegrationAssociationsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListEventIntegrationAssociationsResponse.prototype, "throttlingException", void 0);
    return ListEventIntegrationAssociationsResponse;
}(SpeakeasyBase));
export { ListEventIntegrationAssociationsResponse };
