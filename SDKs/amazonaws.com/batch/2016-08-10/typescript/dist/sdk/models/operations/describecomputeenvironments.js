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
var DescribeComputeEnvironmentsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeComputeEnvironmentsQueryParams, _super);
    function DescribeComputeEnvironmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], DescribeComputeEnvironmentsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeComputeEnvironmentsQueryParams.prototype, "nextToken", void 0);
    return DescribeComputeEnvironmentsQueryParams;
}(SpeakeasyBase));
export { DescribeComputeEnvironmentsQueryParams };
var DescribeComputeEnvironmentsHeaders = /** @class */ (function (_super) {
    __extends(DescribeComputeEnvironmentsHeaders, _super);
    function DescribeComputeEnvironmentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeComputeEnvironmentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeComputeEnvironmentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeComputeEnvironmentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeComputeEnvironmentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeComputeEnvironmentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeComputeEnvironmentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeComputeEnvironmentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeComputeEnvironmentsHeaders;
}(SpeakeasyBase));
export { DescribeComputeEnvironmentsHeaders };
var DescribeComputeEnvironmentsRequestBody = /** @class */ (function (_super) {
    __extends(DescribeComputeEnvironmentsRequestBody, _super);
    function DescribeComputeEnvironmentsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeEnvironments" }),
        __metadata("design:type", Array)
    ], DescribeComputeEnvironmentsRequestBody.prototype, "computeEnvironments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], DescribeComputeEnvironmentsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeComputeEnvironmentsRequestBody.prototype, "nextToken", void 0);
    return DescribeComputeEnvironmentsRequestBody;
}(SpeakeasyBase));
export { DescribeComputeEnvironmentsRequestBody };
var DescribeComputeEnvironmentsRequest = /** @class */ (function (_super) {
    __extends(DescribeComputeEnvironmentsRequest, _super);
    function DescribeComputeEnvironmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeComputeEnvironmentsQueryParams)
    ], DescribeComputeEnvironmentsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeComputeEnvironmentsHeaders)
    ], DescribeComputeEnvironmentsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeComputeEnvironmentsRequestBody)
    ], DescribeComputeEnvironmentsRequest.prototype, "request", void 0);
    return DescribeComputeEnvironmentsRequest;
}(SpeakeasyBase));
export { DescribeComputeEnvironmentsRequest };
var DescribeComputeEnvironmentsResponse = /** @class */ (function (_super) {
    __extends(DescribeComputeEnvironmentsResponse, _super);
    function DescribeComputeEnvironmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeComputeEnvironmentsResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeComputeEnvironmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeComputeEnvironmentsResponse)
    ], DescribeComputeEnvironmentsResponse.prototype, "describeComputeEnvironmentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeComputeEnvironmentsResponse.prototype, "serverException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeComputeEnvironmentsResponse.prototype, "statusCode", void 0);
    return DescribeComputeEnvironmentsResponse;
}(SpeakeasyBase));
export { DescribeComputeEnvironmentsResponse };
