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
var TestInvokeAuthorizerPathParams = /** @class */ (function (_super) {
    __extends(TestInvokeAuthorizerPathParams, _super);
    function TestInvokeAuthorizerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorizerName" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerPathParams.prototype, "authorizerName", void 0);
    return TestInvokeAuthorizerPathParams;
}(SpeakeasyBase));
export { TestInvokeAuthorizerPathParams };
var TestInvokeAuthorizerHeaders = /** @class */ (function (_super) {
    __extends(TestInvokeAuthorizerHeaders, _super);
    function TestInvokeAuthorizerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return TestInvokeAuthorizerHeaders;
}(SpeakeasyBase));
export { TestInvokeAuthorizerHeaders };
// TestInvokeAuthorizerRequestBodyHttpContext
/**
 * Specifies the HTTP context to use for the test authorizer request.
**/
var TestInvokeAuthorizerRequestBodyHttpContext = /** @class */ (function (_super) {
    __extends(TestInvokeAuthorizerRequestBodyHttpContext, _super);
    function TestInvokeAuthorizerRequestBodyHttpContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], TestInvokeAuthorizerRequestBodyHttpContext.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryString" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerRequestBodyHttpContext.prototype, "queryString", void 0);
    return TestInvokeAuthorizerRequestBodyHttpContext;
}(SpeakeasyBase));
export { TestInvokeAuthorizerRequestBodyHttpContext };
// TestInvokeAuthorizerRequestBodyMqttContext
/**
 * Specifies the MQTT context to use for the test authorizer request
**/
var TestInvokeAuthorizerRequestBodyMqttContext = /** @class */ (function (_super) {
    __extends(TestInvokeAuthorizerRequestBodyMqttContext, _super);
    function TestInvokeAuthorizerRequestBodyMqttContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerRequestBodyMqttContext.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerRequestBodyMqttContext.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerRequestBodyMqttContext.prototype, "username", void 0);
    return TestInvokeAuthorizerRequestBodyMqttContext;
}(SpeakeasyBase));
export { TestInvokeAuthorizerRequestBodyMqttContext };
// TestInvokeAuthorizerRequestBodyTlsContext
/**
 * Specifies the TLS context to use for the test authorizer request.
**/
var TestInvokeAuthorizerRequestBodyTlsContext = /** @class */ (function (_super) {
    __extends(TestInvokeAuthorizerRequestBodyTlsContext, _super);
    function TestInvokeAuthorizerRequestBodyTlsContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverName" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerRequestBodyTlsContext.prototype, "serverName", void 0);
    return TestInvokeAuthorizerRequestBodyTlsContext;
}(SpeakeasyBase));
export { TestInvokeAuthorizerRequestBodyTlsContext };
var TestInvokeAuthorizerRequestBody = /** @class */ (function (_super) {
    __extends(TestInvokeAuthorizerRequestBody, _super);
    function TestInvokeAuthorizerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpContext" }),
        __metadata("design:type", TestInvokeAuthorizerRequestBodyHttpContext)
    ], TestInvokeAuthorizerRequestBody.prototype, "httpContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mqttContext" }),
        __metadata("design:type", TestInvokeAuthorizerRequestBodyMqttContext)
    ], TestInvokeAuthorizerRequestBody.prototype, "mqttContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tlsContext" }),
        __metadata("design:type", TestInvokeAuthorizerRequestBodyTlsContext)
    ], TestInvokeAuthorizerRequestBody.prototype, "tlsContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerRequestBody.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokenSignature" }),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerRequestBody.prototype, "tokenSignature", void 0);
    return TestInvokeAuthorizerRequestBody;
}(SpeakeasyBase));
export { TestInvokeAuthorizerRequestBody };
var TestInvokeAuthorizerRequest = /** @class */ (function (_super) {
    __extends(TestInvokeAuthorizerRequest, _super);
    function TestInvokeAuthorizerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestInvokeAuthorizerPathParams)
    ], TestInvokeAuthorizerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestInvokeAuthorizerHeaders)
    ], TestInvokeAuthorizerRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TestInvokeAuthorizerRequestBody)
    ], TestInvokeAuthorizerRequest.prototype, "request", void 0);
    return TestInvokeAuthorizerRequest;
}(SpeakeasyBase));
export { TestInvokeAuthorizerRequest };
var TestInvokeAuthorizerResponse = /** @class */ (function (_super) {
    __extends(TestInvokeAuthorizerResponse, _super);
    function TestInvokeAuthorizerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TestInvokeAuthorizerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestInvokeAuthorizerResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestInvokeAuthorizerResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestInvokeAuthorizerResponse.prototype, "invalidResponseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestInvokeAuthorizerResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestInvokeAuthorizerResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TestInvokeAuthorizerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestInvokeAuthorizerResponse)
    ], TestInvokeAuthorizerResponse.prototype, "testInvokeAuthorizerResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestInvokeAuthorizerResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestInvokeAuthorizerResponse.prototype, "unauthorizedException", void 0);
    return TestInvokeAuthorizerResponse;
}(SpeakeasyBase));
export { TestInvokeAuthorizerResponse };
