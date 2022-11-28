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
var ListJobsByPipelinePathParams = /** @class */ (function (_super) {
    __extends(ListJobsByPipelinePathParams, _super);
    function ListJobsByPipelinePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PipelineId" }),
        __metadata("design:type", String)
    ], ListJobsByPipelinePathParams.prototype, "pipelineId", void 0);
    return ListJobsByPipelinePathParams;
}(SpeakeasyBase));
export { ListJobsByPipelinePathParams };
var ListJobsByPipelineQueryParams = /** @class */ (function (_super) {
    __extends(ListJobsByPipelineQueryParams, _super);
    function ListJobsByPipelineQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ascending" }),
        __metadata("design:type", String)
    ], ListJobsByPipelineQueryParams.prototype, "ascending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageToken" }),
        __metadata("design:type", String)
    ], ListJobsByPipelineQueryParams.prototype, "pageToken", void 0);
    return ListJobsByPipelineQueryParams;
}(SpeakeasyBase));
export { ListJobsByPipelineQueryParams };
var ListJobsByPipelineHeaders = /** @class */ (function (_super) {
    __extends(ListJobsByPipelineHeaders, _super);
    function ListJobsByPipelineHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListJobsByPipelineHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListJobsByPipelineHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListJobsByPipelineHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListJobsByPipelineHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListJobsByPipelineHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListJobsByPipelineHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListJobsByPipelineHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListJobsByPipelineHeaders;
}(SpeakeasyBase));
export { ListJobsByPipelineHeaders };
var ListJobsByPipelineRequest = /** @class */ (function (_super) {
    __extends(ListJobsByPipelineRequest, _super);
    function ListJobsByPipelineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListJobsByPipelinePathParams)
    ], ListJobsByPipelineRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListJobsByPipelineQueryParams)
    ], ListJobsByPipelineRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListJobsByPipelineHeaders)
    ], ListJobsByPipelineRequest.prototype, "headers", void 0);
    return ListJobsByPipelineRequest;
}(SpeakeasyBase));
export { ListJobsByPipelineRequest };
var ListJobsByPipelineResponse = /** @class */ (function (_super) {
    __extends(ListJobsByPipelineResponse, _super);
    function ListJobsByPipelineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobsByPipelineResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListJobsByPipelineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobsByPipelineResponse.prototype, "incompatibleVersionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobsByPipelineResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListJobsByPipelineResponse)
    ], ListJobsByPipelineResponse.prototype, "listJobsByPipelineResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobsByPipelineResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListJobsByPipelineResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobsByPipelineResponse.prototype, "validationException", void 0);
    return ListJobsByPipelineResponse;
}(SpeakeasyBase));
export { ListJobsByPipelineResponse };
