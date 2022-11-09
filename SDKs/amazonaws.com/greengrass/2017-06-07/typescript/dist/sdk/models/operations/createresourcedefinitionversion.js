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
var CreateResourceDefinitionVersionPathParams = /** @class */ (function (_super) {
    __extends(CreateResourceDefinitionVersionPathParams, _super);
    function CreateResourceDefinitionVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceDefinitionId" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionVersionPathParams.prototype, "resourceDefinitionId", void 0);
    return CreateResourceDefinitionVersionPathParams;
}(SpeakeasyBase));
export { CreateResourceDefinitionVersionPathParams };
var CreateResourceDefinitionVersionHeaders = /** @class */ (function (_super) {
    __extends(CreateResourceDefinitionVersionHeaders, _super);
    function CreateResourceDefinitionVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateResourceDefinitionVersionHeaders.prototype, "xAmznClientToken", void 0);
    return CreateResourceDefinitionVersionHeaders;
}(SpeakeasyBase));
export { CreateResourceDefinitionVersionHeaders };
var CreateResourceDefinitionVersionRequestBody = /** @class */ (function (_super) {
    __extends(CreateResourceDefinitionVersionRequestBody, _super);
    function CreateResourceDefinitionVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Resources", elemType: shared.Resource }),
        __metadata("design:type", Array)
    ], CreateResourceDefinitionVersionRequestBody.prototype, "resources", void 0);
    return CreateResourceDefinitionVersionRequestBody;
}(SpeakeasyBase));
export { CreateResourceDefinitionVersionRequestBody };
var CreateResourceDefinitionVersionRequest = /** @class */ (function (_super) {
    __extends(CreateResourceDefinitionVersionRequest, _super);
    function CreateResourceDefinitionVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateResourceDefinitionVersionPathParams)
    ], CreateResourceDefinitionVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateResourceDefinitionVersionHeaders)
    ], CreateResourceDefinitionVersionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateResourceDefinitionVersionRequestBody)
    ], CreateResourceDefinitionVersionRequest.prototype, "request", void 0);
    return CreateResourceDefinitionVersionRequest;
}(SpeakeasyBase));
export { CreateResourceDefinitionVersionRequest };
var CreateResourceDefinitionVersionResponse = /** @class */ (function (_super) {
    __extends(CreateResourceDefinitionVersionResponse, _super);
    function CreateResourceDefinitionVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateResourceDefinitionVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateResourceDefinitionVersionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateResourceDefinitionVersionResponse)
    ], CreateResourceDefinitionVersionResponse.prototype, "createResourceDefinitionVersionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateResourceDefinitionVersionResponse.prototype, "statusCode", void 0);
    return CreateResourceDefinitionVersionResponse;
}(SpeakeasyBase));
export { CreateResourceDefinitionVersionResponse };
