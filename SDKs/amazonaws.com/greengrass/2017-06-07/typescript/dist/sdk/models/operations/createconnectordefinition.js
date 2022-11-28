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
var CreateConnectorDefinitionHeaders = /** @class */ (function (_super) {
    __extends(CreateConnectorDefinitionHeaders, _super);
    function CreateConnectorDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateConnectorDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateConnectorDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateConnectorDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateConnectorDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateConnectorDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateConnectorDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateConnectorDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateConnectorDefinitionHeaders.prototype, "xAmznClientToken", void 0);
    return CreateConnectorDefinitionHeaders;
}(SpeakeasyBase));
export { CreateConnectorDefinitionHeaders };
// CreateConnectorDefinitionRequestBodyInitialVersion
/**
 * Information about the connector definition version, which is a container for connectors.
**/
var CreateConnectorDefinitionRequestBodyInitialVersion = /** @class */ (function (_super) {
    __extends(CreateConnectorDefinitionRequestBodyInitialVersion, _super);
    function CreateConnectorDefinitionRequestBodyInitialVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Connectors", elemType: shared.Connector }),
        __metadata("design:type", Array)
    ], CreateConnectorDefinitionRequestBodyInitialVersion.prototype, "connectors", void 0);
    return CreateConnectorDefinitionRequestBodyInitialVersion;
}(SpeakeasyBase));
export { CreateConnectorDefinitionRequestBodyInitialVersion };
var CreateConnectorDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(CreateConnectorDefinitionRequestBody, _super);
    function CreateConnectorDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InitialVersion" }),
        __metadata("design:type", CreateConnectorDefinitionRequestBodyInitialVersion)
    ], CreateConnectorDefinitionRequestBody.prototype, "initialVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateConnectorDefinitionRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateConnectorDefinitionRequestBody.prototype, "tags", void 0);
    return CreateConnectorDefinitionRequestBody;
}(SpeakeasyBase));
export { CreateConnectorDefinitionRequestBody };
var CreateConnectorDefinitionRequest = /** @class */ (function (_super) {
    __extends(CreateConnectorDefinitionRequest, _super);
    function CreateConnectorDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateConnectorDefinitionHeaders)
    ], CreateConnectorDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateConnectorDefinitionRequestBody)
    ], CreateConnectorDefinitionRequest.prototype, "request", void 0);
    return CreateConnectorDefinitionRequest;
}(SpeakeasyBase));
export { CreateConnectorDefinitionRequest };
var CreateConnectorDefinitionResponse = /** @class */ (function (_super) {
    __extends(CreateConnectorDefinitionResponse, _super);
    function CreateConnectorDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateConnectorDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateConnectorDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateConnectorDefinitionResponse)
    ], CreateConnectorDefinitionResponse.prototype, "createConnectorDefinitionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateConnectorDefinitionResponse.prototype, "statusCode", void 0);
    return CreateConnectorDefinitionResponse;
}(SpeakeasyBase));
export { CreateConnectorDefinitionResponse };
