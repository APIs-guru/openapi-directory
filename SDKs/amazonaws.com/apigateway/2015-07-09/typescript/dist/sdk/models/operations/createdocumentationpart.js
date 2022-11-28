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
var CreateDocumentationPartPathParams = /** @class */ (function (_super) {
    __extends(CreateDocumentationPartPathParams, _super);
    function CreateDocumentationPartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartPathParams.prototype, "restapiId", void 0);
    return CreateDocumentationPartPathParams;
}(SpeakeasyBase));
export { CreateDocumentationPartPathParams };
var CreateDocumentationPartHeaders = /** @class */ (function (_super) {
    __extends(CreateDocumentationPartHeaders, _super);
    function CreateDocumentationPartHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDocumentationPartHeaders;
}(SpeakeasyBase));
export { CreateDocumentationPartHeaders };
// CreateDocumentationPartRequestBodyLocation
/**
 * Specifies the target API entity to which the documentation applies.
**/
var CreateDocumentationPartRequestBodyLocation = /** @class */ (function (_super) {
    __extends(CreateDocumentationPartRequestBodyLocation, _super);
    function CreateDocumentationPartRequestBodyLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartRequestBodyLocation.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartRequestBodyLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartRequestBodyLocation.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusCode" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartRequestBodyLocation.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartRequestBodyLocation.prototype, "type", void 0);
    return CreateDocumentationPartRequestBodyLocation;
}(SpeakeasyBase));
export { CreateDocumentationPartRequestBodyLocation };
var CreateDocumentationPartRequestBody = /** @class */ (function (_super) {
    __extends(CreateDocumentationPartRequestBody, _super);
    function CreateDocumentationPartRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", CreateDocumentationPartRequestBodyLocation)
    ], CreateDocumentationPartRequestBody.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", String)
    ], CreateDocumentationPartRequestBody.prototype, "properties", void 0);
    return CreateDocumentationPartRequestBody;
}(SpeakeasyBase));
export { CreateDocumentationPartRequestBody };
var CreateDocumentationPartRequest = /** @class */ (function (_super) {
    __extends(CreateDocumentationPartRequest, _super);
    function CreateDocumentationPartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDocumentationPartPathParams)
    ], CreateDocumentationPartRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDocumentationPartHeaders)
    ], CreateDocumentationPartRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDocumentationPartRequestBody)
    ], CreateDocumentationPartRequest.prototype, "request", void 0);
    return CreateDocumentationPartRequest;
}(SpeakeasyBase));
export { CreateDocumentationPartRequest };
var CreateDocumentationPartResponse = /** @class */ (function (_super) {
    __extends(CreateDocumentationPartResponse, _super);
    function CreateDocumentationPartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDocumentationPartResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDocumentationPartResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDocumentationPartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DocumentationPart)
    ], CreateDocumentationPartResponse.prototype, "documentationPart", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDocumentationPartResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDocumentationPartResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDocumentationPartResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDocumentationPartResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDocumentationPartResponse.prototype, "unauthorizedException", void 0);
    return CreateDocumentationPartResponse;
}(SpeakeasyBase));
export { CreateDocumentationPartResponse };
