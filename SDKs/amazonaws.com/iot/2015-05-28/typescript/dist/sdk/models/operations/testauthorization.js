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
var TestAuthorizationQueryParams = /** @class */ (function (_super) {
    __extends(TestAuthorizationQueryParams, _super);
    function TestAuthorizationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientId" }),
        __metadata("design:type", String)
    ], TestAuthorizationQueryParams.prototype, "clientId", void 0);
    return TestAuthorizationQueryParams;
}(SpeakeasyBase));
export { TestAuthorizationQueryParams };
var TestAuthorizationHeaders = /** @class */ (function (_super) {
    __extends(TestAuthorizationHeaders, _super);
    function TestAuthorizationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], TestAuthorizationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], TestAuthorizationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], TestAuthorizationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], TestAuthorizationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], TestAuthorizationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], TestAuthorizationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], TestAuthorizationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return TestAuthorizationHeaders;
}(SpeakeasyBase));
export { TestAuthorizationHeaders };
var TestAuthorizationRequestBody = /** @class */ (function (_super) {
    __extends(TestAuthorizationRequestBody, _super);
    function TestAuthorizationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authInfos", elemType: shared.AuthInfo }),
        __metadata("design:type", Array)
    ], TestAuthorizationRequestBody.prototype, "authInfos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cognitoIdentityPoolId" }),
        __metadata("design:type", String)
    ], TestAuthorizationRequestBody.prototype, "cognitoIdentityPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyNamesToAdd" }),
        __metadata("design:type", Array)
    ], TestAuthorizationRequestBody.prototype, "policyNamesToAdd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyNamesToSkip" }),
        __metadata("design:type", Array)
    ], TestAuthorizationRequestBody.prototype, "policyNamesToSkip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principal" }),
        __metadata("design:type", String)
    ], TestAuthorizationRequestBody.prototype, "principal", void 0);
    return TestAuthorizationRequestBody;
}(SpeakeasyBase));
export { TestAuthorizationRequestBody };
var TestAuthorizationRequest = /** @class */ (function (_super) {
    __extends(TestAuthorizationRequest, _super);
    function TestAuthorizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestAuthorizationQueryParams)
    ], TestAuthorizationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TestAuthorizationHeaders)
    ], TestAuthorizationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TestAuthorizationRequestBody)
    ], TestAuthorizationRequest.prototype, "request", void 0);
    return TestAuthorizationRequest;
}(SpeakeasyBase));
export { TestAuthorizationRequest };
var TestAuthorizationResponse = /** @class */ (function (_super) {
    __extends(TestAuthorizationResponse, _super);
    function TestAuthorizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TestAuthorizationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestAuthorizationResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestAuthorizationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestAuthorizationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestAuthorizationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestAuthorizationResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TestAuthorizationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestAuthorizationResponse)
    ], TestAuthorizationResponse.prototype, "testAuthorizationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestAuthorizationResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TestAuthorizationResponse.prototype, "unauthorizedException", void 0);
    return TestAuthorizationResponse;
}(SpeakeasyBase));
export { TestAuthorizationResponse };
