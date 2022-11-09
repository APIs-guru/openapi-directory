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
var RegisterClusterHeaders = /** @class */ (function (_super) {
    __extends(RegisterClusterHeaders, _super);
    function RegisterClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RegisterClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RegisterClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RegisterClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RegisterClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RegisterClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RegisterClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RegisterClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RegisterClusterHeaders;
}(SpeakeasyBase));
export { RegisterClusterHeaders };
// RegisterClusterRequestBodyConnectorConfig
/**
 * The configuration sent to a cluster for configuration.
**/
var RegisterClusterRequestBodyConnectorConfig = /** @class */ (function (_super) {
    __extends(RegisterClusterRequestBodyConnectorConfig, _super);
    function RegisterClusterRequestBodyConnectorConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], RegisterClusterRequestBodyConnectorConfig.prototype, "provider", void 0);
    __decorate([
        Metadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], RegisterClusterRequestBodyConnectorConfig.prototype, "roleArn", void 0);
    return RegisterClusterRequestBodyConnectorConfig;
}(SpeakeasyBase));
export { RegisterClusterRequestBodyConnectorConfig };
var RegisterClusterRequestBody = /** @class */ (function (_super) {
    __extends(RegisterClusterRequestBody, _super);
    function RegisterClusterRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], RegisterClusterRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=connectorConfig" }),
        __metadata("design:type", RegisterClusterRequestBodyConnectorConfig)
    ], RegisterClusterRequestBody.prototype, "connectorConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RegisterClusterRequestBody.prototype, "name", void 0);
    return RegisterClusterRequestBody;
}(SpeakeasyBase));
export { RegisterClusterRequestBody };
var RegisterClusterRequest = /** @class */ (function (_super) {
    __extends(RegisterClusterRequest, _super);
    function RegisterClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RegisterClusterHeaders)
    ], RegisterClusterRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RegisterClusterRequestBody)
    ], RegisterClusterRequest.prototype, "request", void 0);
    return RegisterClusterRequest;
}(SpeakeasyBase));
export { RegisterClusterRequest };
var RegisterClusterResponse = /** @class */ (function (_super) {
    __extends(RegisterClusterResponse, _super);
    function RegisterClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegisterClusterResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RegisterClusterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegisterClusterResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RegisterClusterResponse)
    ], RegisterClusterResponse.prototype, "registerClusterResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegisterClusterResponse.prototype, "resourceLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegisterClusterResponse.prototype, "serverException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegisterClusterResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RegisterClusterResponse.prototype, "statusCode", void 0);
    return RegisterClusterResponse;
}(SpeakeasyBase));
export { RegisterClusterResponse };
