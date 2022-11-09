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
var CreateDataflowEndpointGroupHeaders = /** @class */ (function (_super) {
    __extends(CreateDataflowEndpointGroupHeaders, _super);
    function CreateDataflowEndpointGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDataflowEndpointGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDataflowEndpointGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDataflowEndpointGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDataflowEndpointGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDataflowEndpointGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDataflowEndpointGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDataflowEndpointGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDataflowEndpointGroupHeaders;
}(SpeakeasyBase));
export { CreateDataflowEndpointGroupHeaders };
var CreateDataflowEndpointGroupRequestBody = /** @class */ (function (_super) {
    __extends(CreateDataflowEndpointGroupRequestBody, _super);
    function CreateDataflowEndpointGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=endpointDetails", elemType: shared.EndpointDetails }),
        __metadata("design:type", Array)
    ], CreateDataflowEndpointGroupRequestBody.prototype, "endpointDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateDataflowEndpointGroupRequestBody.prototype, "tags", void 0);
    return CreateDataflowEndpointGroupRequestBody;
}(SpeakeasyBase));
export { CreateDataflowEndpointGroupRequestBody };
var CreateDataflowEndpointGroupRequest = /** @class */ (function (_super) {
    __extends(CreateDataflowEndpointGroupRequest, _super);
    function CreateDataflowEndpointGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDataflowEndpointGroupHeaders)
    ], CreateDataflowEndpointGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDataflowEndpointGroupRequestBody)
    ], CreateDataflowEndpointGroupRequest.prototype, "request", void 0);
    return CreateDataflowEndpointGroupRequest;
}(SpeakeasyBase));
export { CreateDataflowEndpointGroupRequest };
var CreateDataflowEndpointGroupResponse = /** @class */ (function (_super) {
    __extends(CreateDataflowEndpointGroupResponse, _super);
    function CreateDataflowEndpointGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDataflowEndpointGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DataflowEndpointGroupIdResponse)
    ], CreateDataflowEndpointGroupResponse.prototype, "dataflowEndpointGroupIdResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDataflowEndpointGroupResponse.prototype, "dependencyException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDataflowEndpointGroupResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateDataflowEndpointGroupResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateDataflowEndpointGroupResponse.prototype, "statusCode", void 0);
    return CreateDataflowEndpointGroupResponse;
}(SpeakeasyBase));
export { CreateDataflowEndpointGroupResponse };
