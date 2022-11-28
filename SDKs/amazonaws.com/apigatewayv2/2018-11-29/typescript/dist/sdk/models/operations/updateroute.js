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
var UpdateRoutePathParams = /** @class */ (function (_super) {
    __extends(UpdateRoutePathParams, _super);
    function UpdateRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateRoutePathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=routeId" }),
        __metadata("design:type", String)
    ], UpdateRoutePathParams.prototype, "routeId", void 0);
    return UpdateRoutePathParams;
}(SpeakeasyBase));
export { UpdateRoutePathParams };
var UpdateRouteHeaders = /** @class */ (function (_super) {
    __extends(UpdateRouteHeaders, _super);
    function UpdateRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateRouteHeaders;
}(SpeakeasyBase));
export { UpdateRouteHeaders };
export var UpdateRouteRequestBodyAuthorizationTypeEnum;
(function (UpdateRouteRequestBodyAuthorizationTypeEnum) {
    UpdateRouteRequestBodyAuthorizationTypeEnum["None"] = "NONE";
    UpdateRouteRequestBodyAuthorizationTypeEnum["AwsIam"] = "AWS_IAM";
    UpdateRouteRequestBodyAuthorizationTypeEnum["Custom"] = "CUSTOM";
    UpdateRouteRequestBodyAuthorizationTypeEnum["Jwt"] = "JWT";
})(UpdateRouteRequestBodyAuthorizationTypeEnum || (UpdateRouteRequestBodyAuthorizationTypeEnum = {}));
var UpdateRouteRequestBody = /** @class */ (function (_super) {
    __extends(UpdateRouteRequestBody, _super);
    function UpdateRouteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKeyRequired" }),
        __metadata("design:type", Boolean)
    ], UpdateRouteRequestBody.prototype, "apiKeyRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationScopes" }),
        __metadata("design:type", Array)
    ], UpdateRouteRequestBody.prototype, "authorizationScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationType" }),
        __metadata("design:type", String)
    ], UpdateRouteRequestBody.prototype, "authorizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizerId" }),
        __metadata("design:type", String)
    ], UpdateRouteRequestBody.prototype, "authorizerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelSelectionExpression" }),
        __metadata("design:type", String)
    ], UpdateRouteRequestBody.prototype, "modelSelectionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationName" }),
        __metadata("design:type", String)
    ], UpdateRouteRequestBody.prototype, "operationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestModels" }),
        __metadata("design:type", Map)
    ], UpdateRouteRequestBody.prototype, "requestModels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestParameters", elemType: shared.ParameterConstraints }),
        __metadata("design:type", Map)
    ], UpdateRouteRequestBody.prototype, "requestParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeKey" }),
        __metadata("design:type", String)
    ], UpdateRouteRequestBody.prototype, "routeKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeResponseSelectionExpression" }),
        __metadata("design:type", String)
    ], UpdateRouteRequestBody.prototype, "routeResponseSelectionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], UpdateRouteRequestBody.prototype, "target", void 0);
    return UpdateRouteRequestBody;
}(SpeakeasyBase));
export { UpdateRouteRequestBody };
var UpdateRouteRequest = /** @class */ (function (_super) {
    __extends(UpdateRouteRequest, _super);
    function UpdateRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRoutePathParams)
    ], UpdateRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRouteHeaders)
    ], UpdateRouteRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateRouteRequestBody)
    ], UpdateRouteRequest.prototype, "request", void 0);
    return UpdateRouteRequest;
}(SpeakeasyBase));
export { UpdateRouteRequest };
var UpdateRouteResponse = /** @class */ (function (_super) {
    __extends(UpdateRouteResponse, _super);
    function UpdateRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRouteResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRouteResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRouteResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateRouteResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateRouteResult)
    ], UpdateRouteResponse.prototype, "updateRouteResult", void 0);
    return UpdateRouteResponse;
}(SpeakeasyBase));
export { UpdateRouteResponse };
