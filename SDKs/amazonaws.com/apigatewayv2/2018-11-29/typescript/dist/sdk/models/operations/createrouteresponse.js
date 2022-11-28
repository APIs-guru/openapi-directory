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
var CreateRouteResponsePathParams = /** @class */ (function (_super) {
    __extends(CreateRouteResponsePathParams, _super);
    function CreateRouteResponsePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], CreateRouteResponsePathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=routeId" }),
        __metadata("design:type", String)
    ], CreateRouteResponsePathParams.prototype, "routeId", void 0);
    return CreateRouteResponsePathParams;
}(SpeakeasyBase));
export { CreateRouteResponsePathParams };
var CreateRouteResponseHeaders = /** @class */ (function (_super) {
    __extends(CreateRouteResponseHeaders, _super);
    function CreateRouteResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateRouteResponseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateRouteResponseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateRouteResponseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateRouteResponseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateRouteResponseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateRouteResponseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateRouteResponseHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateRouteResponseHeaders;
}(SpeakeasyBase));
export { CreateRouteResponseHeaders };
var CreateRouteResponseRequestBody = /** @class */ (function (_super) {
    __extends(CreateRouteResponseRequestBody, _super);
    function CreateRouteResponseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelSelectionExpression" }),
        __metadata("design:type", String)
    ], CreateRouteResponseRequestBody.prototype, "modelSelectionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseModels" }),
        __metadata("design:type", Map)
    ], CreateRouteResponseRequestBody.prototype, "responseModels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseParameters", elemType: shared.ParameterConstraints }),
        __metadata("design:type", Map)
    ], CreateRouteResponseRequestBody.prototype, "responseParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeResponseKey" }),
        __metadata("design:type", String)
    ], CreateRouteResponseRequestBody.prototype, "routeResponseKey", void 0);
    return CreateRouteResponseRequestBody;
}(SpeakeasyBase));
export { CreateRouteResponseRequestBody };
var CreateRouteResponseRequest = /** @class */ (function (_super) {
    __extends(CreateRouteResponseRequest, _super);
    function CreateRouteResponseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRouteResponsePathParams)
    ], CreateRouteResponseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRouteResponseHeaders)
    ], CreateRouteResponseRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateRouteResponseRequestBody)
    ], CreateRouteResponseRequest.prototype, "request", void 0);
    return CreateRouteResponseRequest;
}(SpeakeasyBase));
export { CreateRouteResponseRequest };
var CreateRouteResponseResponse = /** @class */ (function (_super) {
    __extends(CreateRouteResponseResponse, _super);
    function CreateRouteResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteResponseResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteResponseResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRouteResponseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateRouteResponseResponse)
    ], CreateRouteResponseResponse.prototype, "createRouteResponseResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteResponseResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateRouteResponseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateRouteResponseResponse.prototype, "tooManyRequestsException", void 0);
    return CreateRouteResponseResponse;
}(SpeakeasyBase));
export { CreateRouteResponseResponse };
