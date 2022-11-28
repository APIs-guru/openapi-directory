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
var CreateVirtualClusterHeaders = /** @class */ (function (_super) {
    __extends(CreateVirtualClusterHeaders, _super);
    function CreateVirtualClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateVirtualClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateVirtualClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateVirtualClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateVirtualClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateVirtualClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateVirtualClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateVirtualClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateVirtualClusterHeaders;
}(SpeakeasyBase));
export { CreateVirtualClusterHeaders };
// CreateVirtualClusterRequestBodyContainerProvider
/**
 * The information about the container provider.
**/
var CreateVirtualClusterRequestBodyContainerProvider = /** @class */ (function (_super) {
    __extends(CreateVirtualClusterRequestBodyContainerProvider, _super);
    function CreateVirtualClusterRequestBodyContainerProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateVirtualClusterRequestBodyContainerProvider.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=info" }),
        __metadata("design:type", shared.ContainerInfo)
    ], CreateVirtualClusterRequestBodyContainerProvider.prototype, "info", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateVirtualClusterRequestBodyContainerProvider.prototype, "type", void 0);
    return CreateVirtualClusterRequestBodyContainerProvider;
}(SpeakeasyBase));
export { CreateVirtualClusterRequestBodyContainerProvider };
var CreateVirtualClusterRequestBody = /** @class */ (function (_super) {
    __extends(CreateVirtualClusterRequestBody, _super);
    function CreateVirtualClusterRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateVirtualClusterRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerProvider" }),
        __metadata("design:type", CreateVirtualClusterRequestBodyContainerProvider)
    ], CreateVirtualClusterRequestBody.prototype, "containerProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateVirtualClusterRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateVirtualClusterRequestBody.prototype, "tags", void 0);
    return CreateVirtualClusterRequestBody;
}(SpeakeasyBase));
export { CreateVirtualClusterRequestBody };
var CreateVirtualClusterRequest = /** @class */ (function (_super) {
    __extends(CreateVirtualClusterRequest, _super);
    function CreateVirtualClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVirtualClusterHeaders)
    ], CreateVirtualClusterRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateVirtualClusterRequestBody)
    ], CreateVirtualClusterRequest.prototype, "request", void 0);
    return CreateVirtualClusterRequest;
}(SpeakeasyBase));
export { CreateVirtualClusterRequest };
var CreateVirtualClusterResponse = /** @class */ (function (_super) {
    __extends(CreateVirtualClusterResponse, _super);
    function CreateVirtualClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateVirtualClusterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateVirtualClusterResponse)
    ], CreateVirtualClusterResponse.prototype, "createVirtualClusterResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualClusterResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualClusterResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateVirtualClusterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualClusterResponse.prototype, "validationException", void 0);
    return CreateVirtualClusterResponse;
}(SpeakeasyBase));
export { CreateVirtualClusterResponse };
