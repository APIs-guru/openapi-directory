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
var StartDeploymentPathParams = /** @class */ (function (_super) {
    __extends(StartDeploymentPathParams, _super);
    function StartDeploymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], StartDeploymentPathParams.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=branchName" }),
        __metadata("design:type", String)
    ], StartDeploymentPathParams.prototype, "branchName", void 0);
    return StartDeploymentPathParams;
}(SpeakeasyBase));
export { StartDeploymentPathParams };
var StartDeploymentHeaders = /** @class */ (function (_super) {
    __extends(StartDeploymentHeaders, _super);
    function StartDeploymentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartDeploymentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartDeploymentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartDeploymentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartDeploymentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartDeploymentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartDeploymentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartDeploymentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartDeploymentHeaders;
}(SpeakeasyBase));
export { StartDeploymentHeaders };
var StartDeploymentRequestBody = /** @class */ (function (_super) {
    __extends(StartDeploymentRequestBody, _super);
    function StartDeploymentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], StartDeploymentRequestBody.prototype, "jobId", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceUrl" }),
        __metadata("design:type", String)
    ], StartDeploymentRequestBody.prototype, "sourceUrl", void 0);
    return StartDeploymentRequestBody;
}(SpeakeasyBase));
export { StartDeploymentRequestBody };
var StartDeploymentRequest = /** @class */ (function (_super) {
    __extends(StartDeploymentRequest, _super);
    function StartDeploymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StartDeploymentPathParams)
    ], StartDeploymentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StartDeploymentHeaders)
    ], StartDeploymentRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartDeploymentRequestBody)
    ], StartDeploymentRequest.prototype, "request", void 0);
    return StartDeploymentRequest;
}(SpeakeasyBase));
export { StartDeploymentRequest };
var StartDeploymentResponse = /** @class */ (function (_super) {
    __extends(StartDeploymentResponse, _super);
    function StartDeploymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDeploymentResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StartDeploymentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDeploymentResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDeploymentResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDeploymentResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StartDeploymentResult)
    ], StartDeploymentResponse.prototype, "startDeploymentResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StartDeploymentResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], StartDeploymentResponse.prototype, "unauthorizedException", void 0);
    return StartDeploymentResponse;
}(SpeakeasyBase));
export { StartDeploymentResponse };
