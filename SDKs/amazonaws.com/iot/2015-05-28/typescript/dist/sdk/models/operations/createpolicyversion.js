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
var CreatePolicyVersionPathParams = /** @class */ (function (_super) {
    __extends(CreatePolicyVersionPathParams, _super);
    function CreatePolicyVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=policyName" }),
        __metadata("design:type", String)
    ], CreatePolicyVersionPathParams.prototype, "policyName", void 0);
    return CreatePolicyVersionPathParams;
}(SpeakeasyBase));
export { CreatePolicyVersionPathParams };
var CreatePolicyVersionQueryParams = /** @class */ (function (_super) {
    __extends(CreatePolicyVersionQueryParams, _super);
    function CreatePolicyVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setAsDefault" }),
        __metadata("design:type", Boolean)
    ], CreatePolicyVersionQueryParams.prototype, "setAsDefault", void 0);
    return CreatePolicyVersionQueryParams;
}(SpeakeasyBase));
export { CreatePolicyVersionQueryParams };
var CreatePolicyVersionHeaders = /** @class */ (function (_super) {
    __extends(CreatePolicyVersionHeaders, _super);
    function CreatePolicyVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreatePolicyVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreatePolicyVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreatePolicyVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreatePolicyVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreatePolicyVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreatePolicyVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreatePolicyVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreatePolicyVersionHeaders;
}(SpeakeasyBase));
export { CreatePolicyVersionHeaders };
var CreatePolicyVersionRequestBody = /** @class */ (function (_super) {
    __extends(CreatePolicyVersionRequestBody, _super);
    function CreatePolicyVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyDocument" }),
        __metadata("design:type", String)
    ], CreatePolicyVersionRequestBody.prototype, "policyDocument", void 0);
    return CreatePolicyVersionRequestBody;
}(SpeakeasyBase));
export { CreatePolicyVersionRequestBody };
var CreatePolicyVersionRequest = /** @class */ (function (_super) {
    __extends(CreatePolicyVersionRequest, _super);
    function CreatePolicyVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePolicyVersionPathParams)
    ], CreatePolicyVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePolicyVersionQueryParams)
    ], CreatePolicyVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePolicyVersionHeaders)
    ], CreatePolicyVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreatePolicyVersionRequestBody)
    ], CreatePolicyVersionRequest.prototype, "request", void 0);
    return CreatePolicyVersionRequest;
}(SpeakeasyBase));
export { CreatePolicyVersionRequest };
var CreatePolicyVersionResponse = /** @class */ (function (_super) {
    __extends(CreatePolicyVersionResponse, _super);
    function CreatePolicyVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePolicyVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreatePolicyVersionResponse)
    ], CreatePolicyVersionResponse.prototype, "createPolicyVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePolicyVersionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePolicyVersionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePolicyVersionResponse.prototype, "malformedPolicyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePolicyVersionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePolicyVersionResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePolicyVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePolicyVersionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePolicyVersionResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePolicyVersionResponse.prototype, "versionsLimitExceededException", void 0);
    return CreatePolicyVersionResponse;
}(SpeakeasyBase));
export { CreatePolicyVersionResponse };
