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
var ListBulkDeploymentDetailedReportsPathParams = /** @class */ (function (_super) {
    __extends(ListBulkDeploymentDetailedReportsPathParams, _super);
    function ListBulkDeploymentDetailedReportsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BulkDeploymentId" }),
        __metadata("design:type", String)
    ], ListBulkDeploymentDetailedReportsPathParams.prototype, "bulkDeploymentId", void 0);
    return ListBulkDeploymentDetailedReportsPathParams;
}(SpeakeasyBase));
export { ListBulkDeploymentDetailedReportsPathParams };
var ListBulkDeploymentDetailedReportsQueryParams = /** @class */ (function (_super) {
    __extends(ListBulkDeploymentDetailedReportsQueryParams, _super);
    function ListBulkDeploymentDetailedReportsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListBulkDeploymentDetailedReportsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListBulkDeploymentDetailedReportsQueryParams.prototype, "nextToken", void 0);
    return ListBulkDeploymentDetailedReportsQueryParams;
}(SpeakeasyBase));
export { ListBulkDeploymentDetailedReportsQueryParams };
var ListBulkDeploymentDetailedReportsHeaders = /** @class */ (function (_super) {
    __extends(ListBulkDeploymentDetailedReportsHeaders, _super);
    function ListBulkDeploymentDetailedReportsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListBulkDeploymentDetailedReportsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListBulkDeploymentDetailedReportsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListBulkDeploymentDetailedReportsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListBulkDeploymentDetailedReportsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListBulkDeploymentDetailedReportsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListBulkDeploymentDetailedReportsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListBulkDeploymentDetailedReportsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListBulkDeploymentDetailedReportsHeaders;
}(SpeakeasyBase));
export { ListBulkDeploymentDetailedReportsHeaders };
var ListBulkDeploymentDetailedReportsRequest = /** @class */ (function (_super) {
    __extends(ListBulkDeploymentDetailedReportsRequest, _super);
    function ListBulkDeploymentDetailedReportsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBulkDeploymentDetailedReportsPathParams)
    ], ListBulkDeploymentDetailedReportsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBulkDeploymentDetailedReportsQueryParams)
    ], ListBulkDeploymentDetailedReportsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListBulkDeploymentDetailedReportsHeaders)
    ], ListBulkDeploymentDetailedReportsRequest.prototype, "headers", void 0);
    return ListBulkDeploymentDetailedReportsRequest;
}(SpeakeasyBase));
export { ListBulkDeploymentDetailedReportsRequest };
var ListBulkDeploymentDetailedReportsResponse = /** @class */ (function (_super) {
    __extends(ListBulkDeploymentDetailedReportsResponse, _super);
    function ListBulkDeploymentDetailedReportsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListBulkDeploymentDetailedReportsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListBulkDeploymentDetailedReportsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListBulkDeploymentDetailedReportsResponse)
    ], ListBulkDeploymentDetailedReportsResponse.prototype, "listBulkDeploymentDetailedReportsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListBulkDeploymentDetailedReportsResponse.prototype, "statusCode", void 0);
    return ListBulkDeploymentDetailedReportsResponse;
}(SpeakeasyBase));
export { ListBulkDeploymentDetailedReportsResponse };
