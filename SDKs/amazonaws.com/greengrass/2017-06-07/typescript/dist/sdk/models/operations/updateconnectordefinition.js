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
var UpdateConnectorDefinitionPathParams = /** @class */ (function (_super) {
    __extends(UpdateConnectorDefinitionPathParams, _super);
    function UpdateConnectorDefinitionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConnectorDefinitionId" }),
        __metadata("design:type", String)
    ], UpdateConnectorDefinitionPathParams.prototype, "connectorDefinitionId", void 0);
    return UpdateConnectorDefinitionPathParams;
}(SpeakeasyBase));
export { UpdateConnectorDefinitionPathParams };
var UpdateConnectorDefinitionHeaders = /** @class */ (function (_super) {
    __extends(UpdateConnectorDefinitionHeaders, _super);
    function UpdateConnectorDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateConnectorDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateConnectorDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateConnectorDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateConnectorDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateConnectorDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateConnectorDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateConnectorDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateConnectorDefinitionHeaders;
}(SpeakeasyBase));
export { UpdateConnectorDefinitionHeaders };
var UpdateConnectorDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateConnectorDefinitionRequestBody, _super);
    function UpdateConnectorDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateConnectorDefinitionRequestBody.prototype, "name", void 0);
    return UpdateConnectorDefinitionRequestBody;
}(SpeakeasyBase));
export { UpdateConnectorDefinitionRequestBody };
var UpdateConnectorDefinitionRequest = /** @class */ (function (_super) {
    __extends(UpdateConnectorDefinitionRequest, _super);
    function UpdateConnectorDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateConnectorDefinitionPathParams)
    ], UpdateConnectorDefinitionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateConnectorDefinitionHeaders)
    ], UpdateConnectorDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateConnectorDefinitionRequestBody)
    ], UpdateConnectorDefinitionRequest.prototype, "request", void 0);
    return UpdateConnectorDefinitionRequest;
}(SpeakeasyBase));
export { UpdateConnectorDefinitionRequest };
var UpdateConnectorDefinitionResponse = /** @class */ (function (_super) {
    __extends(UpdateConnectorDefinitionResponse, _super);
    function UpdateConnectorDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateConnectorDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateConnectorDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateConnectorDefinitionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateConnectorDefinitionResponse.prototype, "updateConnectorDefinitionResponse", void 0);
    return UpdateConnectorDefinitionResponse;
}(SpeakeasyBase));
export { UpdateConnectorDefinitionResponse };
