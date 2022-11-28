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
var UpdateRouteResponsePathParams = /** @class */ (function (_super) {
    __extends(UpdateRouteResponsePathParams, _super);
    function UpdateRouteResponsePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateRouteResponsePathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=routeId" }),
        __metadata("design:type", String)
    ], UpdateRouteResponsePathParams.prototype, "routeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=routeResponseId" }),
        __metadata("design:type", String)
    ], UpdateRouteResponsePathParams.prototype, "routeResponseId", void 0);
    return UpdateRouteResponsePathParams;
}(SpeakeasyBase));
export { UpdateRouteResponsePathParams };
var UpdateRouteResponseHeaders = /** @class */ (function (_super) {
    __extends(UpdateRouteResponseHeaders, _super);
    function UpdateRouteResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateRouteResponseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateRouteResponseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateRouteResponseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateRouteResponseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateRouteResponseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateRouteResponseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateRouteResponseHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateRouteResponseHeaders;
}(SpeakeasyBase));
export { UpdateRouteResponseHeaders };
var UpdateRouteResponseRequestBody = /** @class */ (function (_super) {
    __extends(UpdateRouteResponseRequestBody, _super);
    function UpdateRouteResponseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelSelectionExpression" }),
        __metadata("design:type", String)
    ], UpdateRouteResponseRequestBody.prototype, "modelSelectionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseModels" }),
        __metadata("design:type", Map)
    ], UpdateRouteResponseRequestBody.prototype, "responseModels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseParameters", elemType: shared.ParameterConstraints }),
        __metadata("design:type", Map)
    ], UpdateRouteResponseRequestBody.prototype, "responseParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeResponseKey" }),
        __metadata("design:type", String)
    ], UpdateRouteResponseRequestBody.prototype, "routeResponseKey", void 0);
    return UpdateRouteResponseRequestBody;
}(SpeakeasyBase));
export { UpdateRouteResponseRequestBody };
var UpdateRouteResponseRequest = /** @class */ (function (_super) {
    __extends(UpdateRouteResponseRequest, _super);
    function UpdateRouteResponseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRouteResponsePathParams)
    ], UpdateRouteResponseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRouteResponseHeaders)
    ], UpdateRouteResponseRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateRouteResponseRequestBody)
    ], UpdateRouteResponseRequest.prototype, "request", void 0);
    return UpdateRouteResponseRequest;
}(SpeakeasyBase));
export { UpdateRouteResponseRequest };
var UpdateRouteResponseResponse = /** @class */ (function (_super) {
    __extends(UpdateRouteResponseResponse, _super);
    function UpdateRouteResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRouteResponseResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRouteResponseResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateRouteResponseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRouteResponseResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateRouteResponseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRouteResponseResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateRouteResponseResponse)
    ], UpdateRouteResponseResponse.prototype, "updateRouteResponseResponse", void 0);
    return UpdateRouteResponseResponse;
}(SpeakeasyBase));
export { UpdateRouteResponseResponse };
