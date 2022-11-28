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
var DeleteJobExecutionPathParams = /** @class */ (function (_super) {
    __extends(DeleteJobExecutionPathParams, _super);
    function DeleteJobExecutionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionNumber" }),
        __metadata("design:type", Number)
    ], DeleteJobExecutionPathParams.prototype, "executionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DeleteJobExecutionPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingName" }),
        __metadata("design:type", String)
    ], DeleteJobExecutionPathParams.prototype, "thingName", void 0);
    return DeleteJobExecutionPathParams;
}(SpeakeasyBase));
export { DeleteJobExecutionPathParams };
var DeleteJobExecutionQueryParams = /** @class */ (function (_super) {
    __extends(DeleteJobExecutionQueryParams, _super);
    function DeleteJobExecutionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], DeleteJobExecutionQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=namespaceId" }),
        __metadata("design:type", String)
    ], DeleteJobExecutionQueryParams.prototype, "namespaceId", void 0);
    return DeleteJobExecutionQueryParams;
}(SpeakeasyBase));
export { DeleteJobExecutionQueryParams };
var DeleteJobExecutionHeaders = /** @class */ (function (_super) {
    __extends(DeleteJobExecutionHeaders, _super);
    function DeleteJobExecutionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteJobExecutionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteJobExecutionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteJobExecutionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteJobExecutionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteJobExecutionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteJobExecutionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteJobExecutionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteJobExecutionHeaders;
}(SpeakeasyBase));
export { DeleteJobExecutionHeaders };
var DeleteJobExecutionRequest = /** @class */ (function (_super) {
    __extends(DeleteJobExecutionRequest, _super);
    function DeleteJobExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteJobExecutionPathParams)
    ], DeleteJobExecutionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteJobExecutionQueryParams)
    ], DeleteJobExecutionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteJobExecutionHeaders)
    ], DeleteJobExecutionRequest.prototype, "headers", void 0);
    return DeleteJobExecutionRequest;
}(SpeakeasyBase));
export { DeleteJobExecutionRequest };
var DeleteJobExecutionResponse = /** @class */ (function (_super) {
    __extends(DeleteJobExecutionResponse, _super);
    function DeleteJobExecutionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteJobExecutionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteJobExecutionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteJobExecutionResponse.prototype, "invalidStateTransitionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteJobExecutionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteJobExecutionResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteJobExecutionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteJobExecutionResponse.prototype, "throttlingException", void 0);
    return DeleteJobExecutionResponse;
}(SpeakeasyBase));
export { DeleteJobExecutionResponse };
