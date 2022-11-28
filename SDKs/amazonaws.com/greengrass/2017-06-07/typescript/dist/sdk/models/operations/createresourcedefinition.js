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
var CreateResourceDefinitionHeaders = /** @class */ (function (_super) {
    __extends(CreateResourceDefinitionHeaders, _super);
    function CreateResourceDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionHeaders.prototype, "xAmznClientToken", void 0);
    return CreateResourceDefinitionHeaders;
}(SpeakeasyBase));
export { CreateResourceDefinitionHeaders };
// CreateResourceDefinitionRequestBodyInitialVersion
/**
 * Information about a resource definition version.
**/
var CreateResourceDefinitionRequestBodyInitialVersion = /** @class */ (function (_super) {
    __extends(CreateResourceDefinitionRequestBodyInitialVersion, _super);
    function CreateResourceDefinitionRequestBodyInitialVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Resources", elemType: shared.Resource }),
        __metadata("design:type", Array)
    ], CreateResourceDefinitionRequestBodyInitialVersion.prototype, "resources", void 0);
    return CreateResourceDefinitionRequestBodyInitialVersion;
}(SpeakeasyBase));
export { CreateResourceDefinitionRequestBodyInitialVersion };
var CreateResourceDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(CreateResourceDefinitionRequestBody, _super);
    function CreateResourceDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InitialVersion" }),
        __metadata("design:type", CreateResourceDefinitionRequestBodyInitialVersion)
    ], CreateResourceDefinitionRequestBody.prototype, "initialVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateResourceDefinitionRequestBody.prototype, "tags", void 0);
    return CreateResourceDefinitionRequestBody;
}(SpeakeasyBase));
export { CreateResourceDefinitionRequestBody };
var CreateResourceDefinitionRequest = /** @class */ (function (_super) {
    __extends(CreateResourceDefinitionRequest, _super);
    function CreateResourceDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateResourceDefinitionHeaders)
    ], CreateResourceDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateResourceDefinitionRequestBody)
    ], CreateResourceDefinitionRequest.prototype, "request", void 0);
    return CreateResourceDefinitionRequest;
}(SpeakeasyBase));
export { CreateResourceDefinitionRequest };
var CreateResourceDefinitionResponse = /** @class */ (function (_super) {
    __extends(CreateResourceDefinitionResponse, _super);
    function CreateResourceDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateResourceDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateResourceDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateResourceDefinitionResponse)
    ], CreateResourceDefinitionResponse.prototype, "createResourceDefinitionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateResourceDefinitionResponse.prototype, "statusCode", void 0);
    return CreateResourceDefinitionResponse;
}(SpeakeasyBase));
export { CreateResourceDefinitionResponse };
