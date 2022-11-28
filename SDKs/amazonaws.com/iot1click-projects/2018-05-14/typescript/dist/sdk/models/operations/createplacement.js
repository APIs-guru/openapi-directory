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
var CreatePlacementPathParams = /** @class */ (function (_super) {
    __extends(CreatePlacementPathParams, _super);
    function CreatePlacementPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], CreatePlacementPathParams.prototype, "projectName", void 0);
    return CreatePlacementPathParams;
}(SpeakeasyBase));
export { CreatePlacementPathParams };
var CreatePlacementHeaders = /** @class */ (function (_super) {
    __extends(CreatePlacementHeaders, _super);
    function CreatePlacementHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreatePlacementHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreatePlacementHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreatePlacementHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreatePlacementHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreatePlacementHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreatePlacementHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreatePlacementHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreatePlacementHeaders;
}(SpeakeasyBase));
export { CreatePlacementHeaders };
var CreatePlacementRequestBody = /** @class */ (function (_super) {
    __extends(CreatePlacementRequestBody, _super);
    function CreatePlacementRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], CreatePlacementRequestBody.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementName" }),
        __metadata("design:type", String)
    ], CreatePlacementRequestBody.prototype, "placementName", void 0);
    return CreatePlacementRequestBody;
}(SpeakeasyBase));
export { CreatePlacementRequestBody };
var CreatePlacementRequest = /** @class */ (function (_super) {
    __extends(CreatePlacementRequest, _super);
    function CreatePlacementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePlacementPathParams)
    ], CreatePlacementRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePlacementHeaders)
    ], CreatePlacementRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreatePlacementRequestBody)
    ], CreatePlacementRequest.prototype, "request", void 0);
    return CreatePlacementRequest;
}(SpeakeasyBase));
export { CreatePlacementRequest };
var CreatePlacementResponse = /** @class */ (function (_super) {
    __extends(CreatePlacementResponse, _super);
    function CreatePlacementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePlacementResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreatePlacementResponse.prototype, "createPlacementResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePlacementResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePlacementResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePlacementResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreatePlacementResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePlacementResponse.prototype, "statusCode", void 0);
    return CreatePlacementResponse;
}(SpeakeasyBase));
export { CreatePlacementResponse };
