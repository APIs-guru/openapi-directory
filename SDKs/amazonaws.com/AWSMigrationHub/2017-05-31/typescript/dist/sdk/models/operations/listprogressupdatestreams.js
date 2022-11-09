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
var ListProgressUpdateStreamsQueryParams = /** @class */ (function (_super) {
    __extends(ListProgressUpdateStreamsQueryParams, _super);
    function ListProgressUpdateStreamsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListProgressUpdateStreamsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListProgressUpdateStreamsQueryParams.prototype, "nextToken", void 0);
    return ListProgressUpdateStreamsQueryParams;
}(SpeakeasyBase));
export { ListProgressUpdateStreamsQueryParams };
export var ListProgressUpdateStreamsXAmzTargetEnum;
(function (ListProgressUpdateStreamsXAmzTargetEnum) {
    ListProgressUpdateStreamsXAmzTargetEnum["AwsMigrationHubListProgressUpdateStreams"] = "AWSMigrationHub.ListProgressUpdateStreams";
})(ListProgressUpdateStreamsXAmzTargetEnum || (ListProgressUpdateStreamsXAmzTargetEnum = {}));
var ListProgressUpdateStreamsHeaders = /** @class */ (function (_super) {
    __extends(ListProgressUpdateStreamsHeaders, _super);
    function ListProgressUpdateStreamsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListProgressUpdateStreamsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListProgressUpdateStreamsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListProgressUpdateStreamsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListProgressUpdateStreamsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListProgressUpdateStreamsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListProgressUpdateStreamsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListProgressUpdateStreamsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListProgressUpdateStreamsHeaders.prototype, "xAmzTarget", void 0);
    return ListProgressUpdateStreamsHeaders;
}(SpeakeasyBase));
export { ListProgressUpdateStreamsHeaders };
var ListProgressUpdateStreamsRequest = /** @class */ (function (_super) {
    __extends(ListProgressUpdateStreamsRequest, _super);
    function ListProgressUpdateStreamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListProgressUpdateStreamsQueryParams)
    ], ListProgressUpdateStreamsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListProgressUpdateStreamsHeaders)
    ], ListProgressUpdateStreamsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListProgressUpdateStreamsRequest)
    ], ListProgressUpdateStreamsRequest.prototype, "request", void 0);
    return ListProgressUpdateStreamsRequest;
}(SpeakeasyBase));
export { ListProgressUpdateStreamsRequest };
var ListProgressUpdateStreamsResponse = /** @class */ (function (_super) {
    __extends(ListProgressUpdateStreamsResponse, _super);
    function ListProgressUpdateStreamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListProgressUpdateStreamsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListProgressUpdateStreamsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListProgressUpdateStreamsResponse.prototype, "homeRegionNotSetException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListProgressUpdateStreamsResponse.prototype, "internalServerError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListProgressUpdateStreamsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListProgressUpdateStreamsResult)
    ], ListProgressUpdateStreamsResponse.prototype, "listProgressUpdateStreamsResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListProgressUpdateStreamsResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListProgressUpdateStreamsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListProgressUpdateStreamsResponse.prototype, "throttlingException", void 0);
    return ListProgressUpdateStreamsResponse;
}(SpeakeasyBase));
export { ListProgressUpdateStreamsResponse };
