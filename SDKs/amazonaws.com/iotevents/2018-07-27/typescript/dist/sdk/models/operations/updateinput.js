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
var UpdateInputPathParams = /** @class */ (function (_super) {
    __extends(UpdateInputPathParams, _super);
    function UpdateInputPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=inputName" }),
        __metadata("design:type", String)
    ], UpdateInputPathParams.prototype, "inputName", void 0);
    return UpdateInputPathParams;
}(SpeakeasyBase));
export { UpdateInputPathParams };
var UpdateInputHeaders = /** @class */ (function (_super) {
    __extends(UpdateInputHeaders, _super);
    function UpdateInputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateInputHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateInputHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateInputHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateInputHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateInputHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateInputHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateInputHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateInputHeaders;
}(SpeakeasyBase));
export { UpdateInputHeaders };
// UpdateInputRequestBodyInputDefinition
/**
 * The definition of the input.
**/
var UpdateInputRequestBodyInputDefinition = /** @class */ (function (_super) {
    __extends(UpdateInputRequestBodyInputDefinition, _super);
    function UpdateInputRequestBodyInputDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=attributes", elemType: shared.Attribute }),
        __metadata("design:type", Array)
    ], UpdateInputRequestBodyInputDefinition.prototype, "attributes", void 0);
    return UpdateInputRequestBodyInputDefinition;
}(SpeakeasyBase));
export { UpdateInputRequestBodyInputDefinition };
var UpdateInputRequestBody = /** @class */ (function (_super) {
    __extends(UpdateInputRequestBody, _super);
    function UpdateInputRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=inputDefinition" }),
        __metadata("design:type", UpdateInputRequestBodyInputDefinition)
    ], UpdateInputRequestBody.prototype, "inputDefinition", void 0);
    __decorate([
        Metadata({ data: "json, name=inputDescription" }),
        __metadata("design:type", String)
    ], UpdateInputRequestBody.prototype, "inputDescription", void 0);
    return UpdateInputRequestBody;
}(SpeakeasyBase));
export { UpdateInputRequestBody };
var UpdateInputRequest = /** @class */ (function (_super) {
    __extends(UpdateInputRequest, _super);
    function UpdateInputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateInputPathParams)
    ], UpdateInputRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateInputHeaders)
    ], UpdateInputRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateInputRequestBody)
    ], UpdateInputRequest.prototype, "request", void 0);
    return UpdateInputRequest;
}(SpeakeasyBase));
export { UpdateInputRequest };
var UpdateInputResponse = /** @class */ (function (_super) {
    __extends(UpdateInputResponse, _super);
    function UpdateInputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateInputResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInputResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInputResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInputResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInputResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInputResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateInputResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateInputResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateInputResponse)
    ], UpdateInputResponse.prototype, "updateInputResponse", void 0);
    return UpdateInputResponse;
}(SpeakeasyBase));
export { UpdateInputResponse };
