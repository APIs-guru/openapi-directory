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
var TestInvokeMethodPathParams = /** @class */ (function (_super) {
    __extends(TestInvokeMethodPathParams, _super);
    function TestInvokeMethodPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=http_method" }),
        __metadata("design:type", String)
    ], TestInvokeMethodPathParams.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" }),
        __metadata("design:type", String)
    ], TestInvokeMethodPathParams.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], TestInvokeMethodPathParams.prototype, "restapiId", void 0);
    return TestInvokeMethodPathParams;
}(SpeakeasyBase));
export { TestInvokeMethodPathParams };
var TestInvokeMethodHeaders = /** @class */ (function (_super) {
    __extends(TestInvokeMethodHeaders, _super);
    function TestInvokeMethodHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], TestInvokeMethodHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], TestInvokeMethodHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], TestInvokeMethodHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], TestInvokeMethodHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], TestInvokeMethodHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], TestInvokeMethodHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], TestInvokeMethodHeaders.prototype, "xAmzSignedHeaders", void 0);
    return TestInvokeMethodHeaders;
}(SpeakeasyBase));
export { TestInvokeMethodHeaders };
var TestInvokeMethodRequestBody = /** @class */ (function (_super) {
    __extends(TestInvokeMethodRequestBody, _super);
    function TestInvokeMethodRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], TestInvokeMethodRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientCertificateId" }),
        __metadata("design:type", String)
    ], TestInvokeMethodRequestBody.prototype, "clientCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], TestInvokeMethodRequestBody.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiValueHeaders" }),
        __metadata("design:type", Map)
    ], TestInvokeMethodRequestBody.prototype, "multiValueHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pathWithQueryString" }),
        __metadata("design:type", String)
    ], TestInvokeMethodRequestBody.prototype, "pathWithQueryString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stageVariables" }),
        __metadata("design:type", Map)
    ], TestInvokeMethodRequestBody.prototype, "stageVariables", void 0);
    return TestInvokeMethodRequestBody;
}(SpeakeasyBase));
export { TestInvokeMethodRequestBody };
var TestInvokeMethodRequest = /** @class */ (function (_super) {
    __extends(TestInvokeMethodRequest, _super);
    function TestInvokeMethodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestInvokeMethodPathParams)
    ], TestInvokeMethodRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestInvokeMethodHeaders)
    ], TestInvokeMethodRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TestInvokeMethodRequestBody)
    ], TestInvokeMethodRequest.prototype, "request", void 0);
    return TestInvokeMethodRequest;
}(SpeakeasyBase));
export { TestInvokeMethodRequest };
var TestInvokeMethodResponse = /** @class */ (function (_super) {
    __extends(TestInvokeMethodResponse, _super);
    function TestInvokeMethodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestInvokeMethodResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TestInvokeMethodResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestInvokeMethodResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TestInvokeMethodResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestInvokeMethodResponse)
    ], TestInvokeMethodResponse.prototype, "testInvokeMethodResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestInvokeMethodResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestInvokeMethodResponse.prototype, "unauthorizedException", void 0);
    return TestInvokeMethodResponse;
}(SpeakeasyBase));
export { TestInvokeMethodResponse };
