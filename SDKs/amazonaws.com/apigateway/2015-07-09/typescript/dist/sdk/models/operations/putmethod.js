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
var PutMethodPathParams = /** @class */ (function (_super) {
    __extends(PutMethodPathParams, _super);
    function PutMethodPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=http_method" }),
        __metadata("design:type", String)
    ], PutMethodPathParams.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" }),
        __metadata("design:type", String)
    ], PutMethodPathParams.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], PutMethodPathParams.prototype, "restapiId", void 0);
    return PutMethodPathParams;
}(SpeakeasyBase));
export { PutMethodPathParams };
var PutMethodHeaders = /** @class */ (function (_super) {
    __extends(PutMethodHeaders, _super);
    function PutMethodHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutMethodHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutMethodHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutMethodHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutMethodHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutMethodHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutMethodHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutMethodHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutMethodHeaders;
}(SpeakeasyBase));
export { PutMethodHeaders };
var PutMethodRequestBody = /** @class */ (function (_super) {
    __extends(PutMethodRequestBody, _super);
    function PutMethodRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKeyRequired" }),
        __metadata("design:type", Boolean)
    ], PutMethodRequestBody.prototype, "apiKeyRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationScopes" }),
        __metadata("design:type", Array)
    ], PutMethodRequestBody.prototype, "authorizationScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationType" }),
        __metadata("design:type", String)
    ], PutMethodRequestBody.prototype, "authorizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizerId" }),
        __metadata("design:type", String)
    ], PutMethodRequestBody.prototype, "authorizerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationName" }),
        __metadata("design:type", String)
    ], PutMethodRequestBody.prototype, "operationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestModels" }),
        __metadata("design:type", Map)
    ], PutMethodRequestBody.prototype, "requestModels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestParameters" }),
        __metadata("design:type", Map)
    ], PutMethodRequestBody.prototype, "requestParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestValidatorId" }),
        __metadata("design:type", String)
    ], PutMethodRequestBody.prototype, "requestValidatorId", void 0);
    return PutMethodRequestBody;
}(SpeakeasyBase));
export { PutMethodRequestBody };
var PutMethodRequest = /** @class */ (function (_super) {
    __extends(PutMethodRequest, _super);
    function PutMethodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutMethodPathParams)
    ], PutMethodRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutMethodHeaders)
    ], PutMethodRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutMethodRequestBody)
    ], PutMethodRequest.prototype, "request", void 0);
    return PutMethodRequest;
}(SpeakeasyBase));
export { PutMethodRequest };
var PutMethodResponse = /** @class */ (function (_super) {
    __extends(PutMethodResponse, _super);
    function PutMethodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutMethodResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutMethodResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutMethodResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutMethodResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Method)
    ], PutMethodResponse.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutMethodResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutMethodResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutMethodResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutMethodResponse.prototype, "unauthorizedException", void 0);
    return PutMethodResponse;
}(SpeakeasyBase));
export { PutMethodResponse };
