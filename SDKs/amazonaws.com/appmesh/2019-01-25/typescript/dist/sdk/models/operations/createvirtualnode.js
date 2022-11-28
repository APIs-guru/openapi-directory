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
var CreateVirtualNodePathParams = /** @class */ (function (_super) {
    __extends(CreateVirtualNodePathParams, _super);
    function CreateVirtualNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], CreateVirtualNodePathParams.prototype, "meshName", void 0);
    return CreateVirtualNodePathParams;
}(SpeakeasyBase));
export { CreateVirtualNodePathParams };
var CreateVirtualNodeQueryParams = /** @class */ (function (_super) {
    __extends(CreateVirtualNodeQueryParams, _super);
    function CreateVirtualNodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeQueryParams.prototype, "meshOwner", void 0);
    return CreateVirtualNodeQueryParams;
}(SpeakeasyBase));
export { CreateVirtualNodeQueryParams };
var CreateVirtualNodeHeaders = /** @class */ (function (_super) {
    __extends(CreateVirtualNodeHeaders, _super);
    function CreateVirtualNodeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateVirtualNodeHeaders;
}(SpeakeasyBase));
export { CreateVirtualNodeHeaders };
// CreateVirtualNodeRequestBodySpec
/**
 * An object that represents the specification of a virtual node.
**/
var CreateVirtualNodeRequestBodySpec = /** @class */ (function (_super) {
    __extends(CreateVirtualNodeRequestBodySpec, _super);
    function CreateVirtualNodeRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backendDefaults" }),
        __metadata("design:type", shared.BackendDefaults)
    ], CreateVirtualNodeRequestBodySpec.prototype, "backendDefaults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backends", elemType: shared.Backend }),
        __metadata("design:type", Array)
    ], CreateVirtualNodeRequestBodySpec.prototype, "backends", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listeners", elemType: shared.Listener }),
        __metadata("design:type", Array)
    ], CreateVirtualNodeRequestBodySpec.prototype, "listeners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logging" }),
        __metadata("design:type", shared.Logging)
    ], CreateVirtualNodeRequestBodySpec.prototype, "logging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceDiscovery" }),
        __metadata("design:type", shared.ServiceDiscovery)
    ], CreateVirtualNodeRequestBodySpec.prototype, "serviceDiscovery", void 0);
    return CreateVirtualNodeRequestBodySpec;
}(SpeakeasyBase));
export { CreateVirtualNodeRequestBodySpec };
var CreateVirtualNodeRequestBody = /** @class */ (function (_super) {
    __extends(CreateVirtualNodeRequestBody, _super);
    function CreateVirtualNodeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spec" }),
        __metadata("design:type", CreateVirtualNodeRequestBodySpec)
    ], CreateVirtualNodeRequestBody.prototype, "spec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.TagRef }),
        __metadata("design:type", Array)
    ], CreateVirtualNodeRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualNodeName" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeRequestBody.prototype, "virtualNodeName", void 0);
    return CreateVirtualNodeRequestBody;
}(SpeakeasyBase));
export { CreateVirtualNodeRequestBody };
var CreateVirtualNodeRequest = /** @class */ (function (_super) {
    __extends(CreateVirtualNodeRequest, _super);
    function CreateVirtualNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVirtualNodePathParams)
    ], CreateVirtualNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVirtualNodeQueryParams)
    ], CreateVirtualNodeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVirtualNodeHeaders)
    ], CreateVirtualNodeRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateVirtualNodeRequestBody)
    ], CreateVirtualNodeRequest.prototype, "request", void 0);
    return CreateVirtualNodeRequest;
}(SpeakeasyBase));
export { CreateVirtualNodeRequest };
var CreateVirtualNodeResponse = /** @class */ (function (_super) {
    __extends(CreateVirtualNodeResponse, _super);
    function CreateVirtualNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateVirtualNodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateVirtualNodeOutput)
    ], CreateVirtualNodeResponse.prototype, "createVirtualNodeOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateVirtualNodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "tooManyRequestsException", void 0);
    return CreateVirtualNodeResponse;
}(SpeakeasyBase));
export { CreateVirtualNodeResponse };
