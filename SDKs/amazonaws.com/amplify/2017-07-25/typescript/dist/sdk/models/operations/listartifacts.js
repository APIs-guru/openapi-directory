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
var ListArtifactsPathParams = /** @class */ (function (_super) {
    __extends(ListArtifactsPathParams, _super);
    function ListArtifactsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], ListArtifactsPathParams.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=branchName" }),
        __metadata("design:type", String)
    ], ListArtifactsPathParams.prototype, "branchName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], ListArtifactsPathParams.prototype, "jobId", void 0);
    return ListArtifactsPathParams;
}(SpeakeasyBase));
export { ListArtifactsPathParams };
var ListArtifactsQueryParams = /** @class */ (function (_super) {
    __extends(ListArtifactsQueryParams, _super);
    function ListArtifactsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListArtifactsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListArtifactsQueryParams.prototype, "nextToken", void 0);
    return ListArtifactsQueryParams;
}(SpeakeasyBase));
export { ListArtifactsQueryParams };
var ListArtifactsHeaders = /** @class */ (function (_super) {
    __extends(ListArtifactsHeaders, _super);
    function ListArtifactsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListArtifactsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListArtifactsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListArtifactsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListArtifactsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListArtifactsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListArtifactsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListArtifactsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListArtifactsHeaders;
}(SpeakeasyBase));
export { ListArtifactsHeaders };
var ListArtifactsRequest = /** @class */ (function (_super) {
    __extends(ListArtifactsRequest, _super);
    function ListArtifactsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListArtifactsPathParams)
    ], ListArtifactsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListArtifactsQueryParams)
    ], ListArtifactsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListArtifactsHeaders)
    ], ListArtifactsRequest.prototype, "headers", void 0);
    return ListArtifactsRequest;
}(SpeakeasyBase));
export { ListArtifactsRequest };
var ListArtifactsResponse = /** @class */ (function (_super) {
    __extends(ListArtifactsResponse, _super);
    function ListArtifactsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListArtifactsResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListArtifactsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListArtifactsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListArtifactsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListArtifactsResult)
    ], ListArtifactsResponse.prototype, "listArtifactsResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListArtifactsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListArtifactsResponse.prototype, "unauthorizedException", void 0);
    return ListArtifactsResponse;
}(SpeakeasyBase));
export { ListArtifactsResponse };
