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
var DescribeObjectsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeObjectsQueryParams, _super);
    function DescribeObjectsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=marker" }),
        __metadata("design:type", String)
    ], DescribeObjectsQueryParams.prototype, "marker", void 0);
    return DescribeObjectsQueryParams;
}(SpeakeasyBase));
export { DescribeObjectsQueryParams };
export var DescribeObjectsXAmzTargetEnum;
(function (DescribeObjectsXAmzTargetEnum) {
    DescribeObjectsXAmzTargetEnum["DataPipelineDescribeObjects"] = "DataPipeline.DescribeObjects";
})(DescribeObjectsXAmzTargetEnum || (DescribeObjectsXAmzTargetEnum = {}));
var DescribeObjectsHeaders = /** @class */ (function (_super) {
    __extends(DescribeObjectsHeaders, _super);
    function DescribeObjectsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeObjectsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeObjectsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeObjectsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeObjectsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeObjectsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeObjectsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeObjectsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeObjectsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeObjectsHeaders;
}(SpeakeasyBase));
export { DescribeObjectsHeaders };
var DescribeObjectsRequest = /** @class */ (function (_super) {
    __extends(DescribeObjectsRequest, _super);
    function DescribeObjectsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeObjectsQueryParams)
    ], DescribeObjectsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeObjectsHeaders)
    ], DescribeObjectsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeObjectsInput)
    ], DescribeObjectsRequest.prototype, "request", void 0);
    return DescribeObjectsRequest;
}(SpeakeasyBase));
export { DescribeObjectsRequest };
var DescribeObjectsResponse = /** @class */ (function (_super) {
    __extends(DescribeObjectsResponse, _super);
    function DescribeObjectsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeObjectsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeObjectsOutput)
    ], DescribeObjectsResponse.prototype, "describeObjectsOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeObjectsResponse.prototype, "internalServiceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeObjectsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeObjectsResponse.prototype, "pipelineDeletedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeObjectsResponse.prototype, "pipelineNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeObjectsResponse.prototype, "statusCode", void 0);
    return DescribeObjectsResponse;
}(SpeakeasyBase));
export { DescribeObjectsResponse };
