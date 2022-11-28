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
var ListDocumentClassificationJobsQueryParams = /** @class */ (function (_super) {
    __extends(ListDocumentClassificationJobsQueryParams, _super);
    function ListDocumentClassificationJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListDocumentClassificationJobsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListDocumentClassificationJobsQueryParams.prototype, "nextToken", void 0);
    return ListDocumentClassificationJobsQueryParams;
}(SpeakeasyBase));
export { ListDocumentClassificationJobsQueryParams };
export var ListDocumentClassificationJobsXAmzTargetEnum;
(function (ListDocumentClassificationJobsXAmzTargetEnum) {
    ListDocumentClassificationJobsXAmzTargetEnum["Comprehend20171127ListDocumentClassificationJobs"] = "Comprehend_20171127.ListDocumentClassificationJobs";
})(ListDocumentClassificationJobsXAmzTargetEnum || (ListDocumentClassificationJobsXAmzTargetEnum = {}));
var ListDocumentClassificationJobsHeaders = /** @class */ (function (_super) {
    __extends(ListDocumentClassificationJobsHeaders, _super);
    function ListDocumentClassificationJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDocumentClassificationJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDocumentClassificationJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDocumentClassificationJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDocumentClassificationJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDocumentClassificationJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDocumentClassificationJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDocumentClassificationJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListDocumentClassificationJobsHeaders.prototype, "xAmzTarget", void 0);
    return ListDocumentClassificationJobsHeaders;
}(SpeakeasyBase));
export { ListDocumentClassificationJobsHeaders };
var ListDocumentClassificationJobsRequest = /** @class */ (function (_super) {
    __extends(ListDocumentClassificationJobsRequest, _super);
    function ListDocumentClassificationJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDocumentClassificationJobsQueryParams)
    ], ListDocumentClassificationJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDocumentClassificationJobsHeaders)
    ], ListDocumentClassificationJobsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListDocumentClassificationJobsRequest)
    ], ListDocumentClassificationJobsRequest.prototype, "request", void 0);
    return ListDocumentClassificationJobsRequest;
}(SpeakeasyBase));
export { ListDocumentClassificationJobsRequest };
var ListDocumentClassificationJobsResponse = /** @class */ (function (_super) {
    __extends(ListDocumentClassificationJobsResponse, _super);
    function ListDocumentClassificationJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDocumentClassificationJobsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDocumentClassificationJobsResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDocumentClassificationJobsResponse.prototype, "invalidFilterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDocumentClassificationJobsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDocumentClassificationJobsResponse)
    ], ListDocumentClassificationJobsResponse.prototype, "listDocumentClassificationJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDocumentClassificationJobsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDocumentClassificationJobsResponse.prototype, "tooManyRequestsException", void 0);
    return ListDocumentClassificationJobsResponse;
}(SpeakeasyBase));
export { ListDocumentClassificationJobsResponse };
