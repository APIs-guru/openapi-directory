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
var CreateCoreDefinitionHeaders = /** @class */ (function (_super) {
    __extends(CreateCoreDefinitionHeaders, _super);
    function CreateCoreDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateCoreDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateCoreDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateCoreDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateCoreDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateCoreDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateCoreDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateCoreDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateCoreDefinitionHeaders.prototype, "xAmznClientToken", void 0);
    return CreateCoreDefinitionHeaders;
}(SpeakeasyBase));
export { CreateCoreDefinitionHeaders };
// CreateCoreDefinitionRequestBodyInitialVersion
/**
 * Information about a core definition version.
**/
var CreateCoreDefinitionRequestBodyInitialVersion = /** @class */ (function (_super) {
    __extends(CreateCoreDefinitionRequestBodyInitialVersion, _super);
    function CreateCoreDefinitionRequestBodyInitialVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cores", elemType: shared.Core }),
        __metadata("design:type", Array)
    ], CreateCoreDefinitionRequestBodyInitialVersion.prototype, "cores", void 0);
    return CreateCoreDefinitionRequestBodyInitialVersion;
}(SpeakeasyBase));
export { CreateCoreDefinitionRequestBodyInitialVersion };
var CreateCoreDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(CreateCoreDefinitionRequestBody, _super);
    function CreateCoreDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InitialVersion" }),
        __metadata("design:type", CreateCoreDefinitionRequestBodyInitialVersion)
    ], CreateCoreDefinitionRequestBody.prototype, "initialVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateCoreDefinitionRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateCoreDefinitionRequestBody.prototype, "tags", void 0);
    return CreateCoreDefinitionRequestBody;
}(SpeakeasyBase));
export { CreateCoreDefinitionRequestBody };
var CreateCoreDefinitionRequest = /** @class */ (function (_super) {
    __extends(CreateCoreDefinitionRequest, _super);
    function CreateCoreDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCoreDefinitionHeaders)
    ], CreateCoreDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCoreDefinitionRequestBody)
    ], CreateCoreDefinitionRequest.prototype, "request", void 0);
    return CreateCoreDefinitionRequest;
}(SpeakeasyBase));
export { CreateCoreDefinitionRequest };
var CreateCoreDefinitionResponse = /** @class */ (function (_super) {
    __extends(CreateCoreDefinitionResponse, _super);
    function CreateCoreDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCoreDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCoreDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateCoreDefinitionResponse)
    ], CreateCoreDefinitionResponse.prototype, "createCoreDefinitionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCoreDefinitionResponse.prototype, "statusCode", void 0);
    return CreateCoreDefinitionResponse;
}(SpeakeasyBase));
export { CreateCoreDefinitionResponse };
