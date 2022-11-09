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
var InvokeScreenAutomationPathParams = /** @class */ (function (_super) {
    __extends(InvokeScreenAutomationPathParams, _super);
    function InvokeScreenAutomationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], InvokeScreenAutomationPathParams.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=automationId" }),
        __metadata("design:type", String)
    ], InvokeScreenAutomationPathParams.prototype, "automationId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=screenId" }),
        __metadata("design:type", String)
    ], InvokeScreenAutomationPathParams.prototype, "screenId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=workbookId" }),
        __metadata("design:type", String)
    ], InvokeScreenAutomationPathParams.prototype, "workbookId", void 0);
    return InvokeScreenAutomationPathParams;
}(SpeakeasyBase));
export { InvokeScreenAutomationPathParams };
var InvokeScreenAutomationHeaders = /** @class */ (function (_super) {
    __extends(InvokeScreenAutomationHeaders, _super);
    function InvokeScreenAutomationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], InvokeScreenAutomationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], InvokeScreenAutomationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], InvokeScreenAutomationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], InvokeScreenAutomationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], InvokeScreenAutomationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], InvokeScreenAutomationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], InvokeScreenAutomationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return InvokeScreenAutomationHeaders;
}(SpeakeasyBase));
export { InvokeScreenAutomationHeaders };
var InvokeScreenAutomationRequestBody = /** @class */ (function (_super) {
    __extends(InvokeScreenAutomationRequestBody, _super);
    function InvokeScreenAutomationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], InvokeScreenAutomationRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=rowId" }),
        __metadata("design:type", String)
    ], InvokeScreenAutomationRequestBody.prototype, "rowId", void 0);
    __decorate([
        Metadata({ data: "json, name=variables", elemType: shared.VariableValue }),
        __metadata("design:type", Map)
    ], InvokeScreenAutomationRequestBody.prototype, "variables", void 0);
    return InvokeScreenAutomationRequestBody;
}(SpeakeasyBase));
export { InvokeScreenAutomationRequestBody };
var InvokeScreenAutomationRequest = /** @class */ (function (_super) {
    __extends(InvokeScreenAutomationRequest, _super);
    function InvokeScreenAutomationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", InvokeScreenAutomationPathParams)
    ], InvokeScreenAutomationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", InvokeScreenAutomationHeaders)
    ], InvokeScreenAutomationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", InvokeScreenAutomationRequestBody)
    ], InvokeScreenAutomationRequest.prototype, "request", void 0);
    return InvokeScreenAutomationRequest;
}(SpeakeasyBase));
export { InvokeScreenAutomationRequest };
var InvokeScreenAutomationResponse = /** @class */ (function (_super) {
    __extends(InvokeScreenAutomationResponse, _super);
    function InvokeScreenAutomationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InvokeScreenAutomationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InvokeScreenAutomationResponse.prototype, "automationExecutionException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InvokeScreenAutomationResponse.prototype, "automationExecutionTimeoutException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], InvokeScreenAutomationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InvokeScreenAutomationResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.InvokeScreenAutomationResult)
    ], InvokeScreenAutomationResponse.prototype, "invokeScreenAutomationResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InvokeScreenAutomationResponse.prototype, "requestTimeoutException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InvokeScreenAutomationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InvokeScreenAutomationResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], InvokeScreenAutomationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InvokeScreenAutomationResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], InvokeScreenAutomationResponse.prototype, "validationException", void 0);
    return InvokeScreenAutomationResponse;
}(SpeakeasyBase));
export { InvokeScreenAutomationResponse };
