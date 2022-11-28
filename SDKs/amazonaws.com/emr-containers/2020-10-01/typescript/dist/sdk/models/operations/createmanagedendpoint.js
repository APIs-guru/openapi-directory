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
var CreateManagedEndpointPathParams = /** @class */ (function (_super) {
    __extends(CreateManagedEndpointPathParams, _super);
    function CreateManagedEndpointPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualClusterId" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointPathParams.prototype, "virtualClusterId", void 0);
    return CreateManagedEndpointPathParams;
}(SpeakeasyBase));
export { CreateManagedEndpointPathParams };
var CreateManagedEndpointHeaders = /** @class */ (function (_super) {
    __extends(CreateManagedEndpointHeaders, _super);
    function CreateManagedEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateManagedEndpointHeaders;
}(SpeakeasyBase));
export { CreateManagedEndpointHeaders };
// CreateManagedEndpointRequestBodyConfigurationOverrides
/**
 * A configuration specification to be used to override existing configurations.
**/
var CreateManagedEndpointRequestBodyConfigurationOverrides = /** @class */ (function (_super) {
    __extends(CreateManagedEndpointRequestBodyConfigurationOverrides, _super);
    function CreateManagedEndpointRequestBodyConfigurationOverrides() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationConfiguration", elemType: shared.Configuration }),
        __metadata("design:type", Array)
    ], CreateManagedEndpointRequestBodyConfigurationOverrides.prototype, "applicationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoringConfiguration" }),
        __metadata("design:type", shared.MonitoringConfiguration)
    ], CreateManagedEndpointRequestBodyConfigurationOverrides.prototype, "monitoringConfiguration", void 0);
    return CreateManagedEndpointRequestBodyConfigurationOverrides;
}(SpeakeasyBase));
export { CreateManagedEndpointRequestBodyConfigurationOverrides };
var CreateManagedEndpointRequestBody = /** @class */ (function (_super) {
    __extends(CreateManagedEndpointRequestBody, _super);
    function CreateManagedEndpointRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateArn" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointRequestBody.prototype, "certificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurationOverrides" }),
        __metadata("design:type", CreateManagedEndpointRequestBodyConfigurationOverrides)
    ], CreateManagedEndpointRequestBody.prototype, "configurationOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionRoleArn" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointRequestBody.prototype, "executionRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseLabel" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointRequestBody.prototype, "releaseLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateManagedEndpointRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateManagedEndpointRequestBody.prototype, "type", void 0);
    return CreateManagedEndpointRequestBody;
}(SpeakeasyBase));
export { CreateManagedEndpointRequestBody };
var CreateManagedEndpointRequest = /** @class */ (function (_super) {
    __extends(CreateManagedEndpointRequest, _super);
    function CreateManagedEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateManagedEndpointPathParams)
    ], CreateManagedEndpointRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateManagedEndpointHeaders)
    ], CreateManagedEndpointRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateManagedEndpointRequestBody)
    ], CreateManagedEndpointRequest.prototype, "request", void 0);
    return CreateManagedEndpointRequest;
}(SpeakeasyBase));
export { CreateManagedEndpointRequest };
var CreateManagedEndpointResponse = /** @class */ (function (_super) {
    __extends(CreateManagedEndpointResponse, _super);
    function CreateManagedEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateManagedEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateManagedEndpointResponse)
    ], CreateManagedEndpointResponse.prototype, "createManagedEndpointResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateManagedEndpointResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateManagedEndpointResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateManagedEndpointResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateManagedEndpointResponse.prototype, "validationException", void 0);
    return CreateManagedEndpointResponse;
}(SpeakeasyBase));
export { CreateManagedEndpointResponse };
