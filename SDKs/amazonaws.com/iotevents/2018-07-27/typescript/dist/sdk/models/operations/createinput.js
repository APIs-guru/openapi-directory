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
var CreateInputHeaders = /** @class */ (function (_super) {
    __extends(CreateInputHeaders, _super);
    function CreateInputHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateInputHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateInputHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateInputHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateInputHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateInputHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateInputHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateInputHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateInputHeaders;
}(SpeakeasyBase));
export { CreateInputHeaders };
// CreateInputRequestBodyInputDefinition
/**
 * The definition of the input.
**/
var CreateInputRequestBodyInputDefinition = /** @class */ (function (_super) {
    __extends(CreateInputRequestBodyInputDefinition, _super);
    function CreateInputRequestBodyInputDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: shared.Attribute }),
        __metadata("design:type", Array)
    ], CreateInputRequestBodyInputDefinition.prototype, "attributes", void 0);
    return CreateInputRequestBodyInputDefinition;
}(SpeakeasyBase));
export { CreateInputRequestBodyInputDefinition };
var CreateInputRequestBody = /** @class */ (function (_super) {
    __extends(CreateInputRequestBody, _super);
    function CreateInputRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputDefinition" }),
        __metadata("design:type", CreateInputRequestBodyInputDefinition)
    ], CreateInputRequestBody.prototype, "inputDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputDescription" }),
        __metadata("design:type", String)
    ], CreateInputRequestBody.prototype, "inputDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputName" }),
        __metadata("design:type", String)
    ], CreateInputRequestBody.prototype, "inputName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateInputRequestBody.prototype, "tags", void 0);
    return CreateInputRequestBody;
}(SpeakeasyBase));
export { CreateInputRequestBody };
var CreateInputRequest = /** @class */ (function (_super) {
    __extends(CreateInputRequest, _super);
    function CreateInputRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInputHeaders)
    ], CreateInputRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateInputRequestBody)
    ], CreateInputRequest.prototype, "request", void 0);
    return CreateInputRequest;
}(SpeakeasyBase));
export { CreateInputRequest };
var CreateInputResponse = /** @class */ (function (_super) {
    __extends(CreateInputResponse, _super);
    function CreateInputResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateInputResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateInputResponse)
    ], CreateInputResponse.prototype, "createInputResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInputResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInputResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInputResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInputResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateInputResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInputResponse.prototype, "throttlingException", void 0);
    return CreateInputResponse;
}(SpeakeasyBase));
export { CreateInputResponse };
