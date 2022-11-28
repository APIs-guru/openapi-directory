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
var CreateGroupVersionPathParams = /** @class */ (function (_super) {
    __extends(CreateGroupVersionPathParams, _super);
    function CreateGroupVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=GroupId" }),
        __metadata("design:type", String)
    ], CreateGroupVersionPathParams.prototype, "groupId", void 0);
    return CreateGroupVersionPathParams;
}(SpeakeasyBase));
export { CreateGroupVersionPathParams };
var CreateGroupVersionHeaders = /** @class */ (function (_super) {
    __extends(CreateGroupVersionHeaders, _super);
    function CreateGroupVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateGroupVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateGroupVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateGroupVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateGroupVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateGroupVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateGroupVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateGroupVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateGroupVersionHeaders.prototype, "xAmznClientToken", void 0);
    return CreateGroupVersionHeaders;
}(SpeakeasyBase));
export { CreateGroupVersionHeaders };
var CreateGroupVersionRequestBody = /** @class */ (function (_super) {
    __extends(CreateGroupVersionRequestBody, _super);
    function CreateGroupVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConnectorDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupVersionRequestBody.prototype, "connectorDefinitionVersionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CoreDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupVersionRequestBody.prototype, "coreDefinitionVersionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupVersionRequestBody.prototype, "deviceDefinitionVersionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FunctionDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupVersionRequestBody.prototype, "functionDefinitionVersionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoggerDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupVersionRequestBody.prototype, "loggerDefinitionVersionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupVersionRequestBody.prototype, "resourceDefinitionVersionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubscriptionDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupVersionRequestBody.prototype, "subscriptionDefinitionVersionArn", void 0);
    return CreateGroupVersionRequestBody;
}(SpeakeasyBase));
export { CreateGroupVersionRequestBody };
var CreateGroupVersionRequest = /** @class */ (function (_super) {
    __extends(CreateGroupVersionRequest, _super);
    function CreateGroupVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupVersionPathParams)
    ], CreateGroupVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroupVersionHeaders)
    ], CreateGroupVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateGroupVersionRequestBody)
    ], CreateGroupVersionRequest.prototype, "request", void 0);
    return CreateGroupVersionRequest;
}(SpeakeasyBase));
export { CreateGroupVersionRequest };
var CreateGroupVersionResponse = /** @class */ (function (_super) {
    __extends(CreateGroupVersionResponse, _super);
    function CreateGroupVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateGroupVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateGroupVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateGroupVersionResponse)
    ], CreateGroupVersionResponse.prototype, "createGroupVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateGroupVersionResponse.prototype, "statusCode", void 0);
    return CreateGroupVersionResponse;
}(SpeakeasyBase));
export { CreateGroupVersionResponse };
