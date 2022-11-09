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
var PutMethodResponsePathParams = /** @class */ (function (_super) {
    __extends(PutMethodResponsePathParams, _super);
    function PutMethodResponsePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=http_method" }),
        __metadata("design:type", String)
    ], PutMethodResponsePathParams.prototype, "httpMethod", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource_id" }),
        __metadata("design:type", String)
    ], PutMethodResponsePathParams.prototype, "resourceId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], PutMethodResponsePathParams.prototype, "restapiId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=status_code" }),
        __metadata("design:type", String)
    ], PutMethodResponsePathParams.prototype, "statusCode", void 0);
    return PutMethodResponsePathParams;
}(SpeakeasyBase));
export { PutMethodResponsePathParams };
var PutMethodResponseHeaders = /** @class */ (function (_super) {
    __extends(PutMethodResponseHeaders, _super);
    function PutMethodResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutMethodResponseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutMethodResponseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutMethodResponseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutMethodResponseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutMethodResponseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutMethodResponseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutMethodResponseHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutMethodResponseHeaders;
}(SpeakeasyBase));
export { PutMethodResponseHeaders };
var PutMethodResponseRequestBody = /** @class */ (function (_super) {
    __extends(PutMethodResponseRequestBody, _super);
    function PutMethodResponseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=responseModels" }),
        __metadata("design:type", Map)
    ], PutMethodResponseRequestBody.prototype, "responseModels", void 0);
    __decorate([
        Metadata({ data: "json, name=responseParameters" }),
        __metadata("design:type", Map)
    ], PutMethodResponseRequestBody.prototype, "responseParameters", void 0);
    return PutMethodResponseRequestBody;
}(SpeakeasyBase));
export { PutMethodResponseRequestBody };
var PutMethodResponseRequest = /** @class */ (function (_super) {
    __extends(PutMethodResponseRequest, _super);
    function PutMethodResponseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutMethodResponsePathParams)
    ], PutMethodResponseRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutMethodResponseHeaders)
    ], PutMethodResponseRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutMethodResponseRequestBody)
    ], PutMethodResponseRequest.prototype, "request", void 0);
    return PutMethodResponseRequest;
}(SpeakeasyBase));
export { PutMethodResponseRequest };
var PutMethodResponseResponse = /** @class */ (function (_super) {
    __extends(PutMethodResponseResponse, _super);
    function PutMethodResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutMethodResponseResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutMethodResponseResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutMethodResponseResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutMethodResponseResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MethodResponse)
    ], PutMethodResponseResponse.prototype, "methodResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutMethodResponseResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutMethodResponseResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutMethodResponseResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutMethodResponseResponse.prototype, "unauthorizedException", void 0);
    return PutMethodResponseResponse;
}(SpeakeasyBase));
export { PutMethodResponseResponse };
