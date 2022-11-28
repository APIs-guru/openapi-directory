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
var CreateLoggerDefinitionVersionPathParams = /** @class */ (function (_super) {
    __extends(CreateLoggerDefinitionVersionPathParams, _super);
    function CreateLoggerDefinitionVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LoggerDefinitionId" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionVersionPathParams.prototype, "loggerDefinitionId", void 0);
    return CreateLoggerDefinitionVersionPathParams;
}(SpeakeasyBase));
export { CreateLoggerDefinitionVersionPathParams };
var CreateLoggerDefinitionVersionHeaders = /** @class */ (function (_super) {
    __extends(CreateLoggerDefinitionVersionHeaders, _super);
    function CreateLoggerDefinitionVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionVersionHeaders.prototype, "xAmznClientToken", void 0);
    return CreateLoggerDefinitionVersionHeaders;
}(SpeakeasyBase));
export { CreateLoggerDefinitionVersionHeaders };
var CreateLoggerDefinitionVersionRequestBody = /** @class */ (function (_super) {
    __extends(CreateLoggerDefinitionVersionRequestBody, _super);
    function CreateLoggerDefinitionVersionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Loggers", elemType: shared.Logger }),
        __metadata("design:type", Array)
    ], CreateLoggerDefinitionVersionRequestBody.prototype, "loggers", void 0);
    return CreateLoggerDefinitionVersionRequestBody;
}(SpeakeasyBase));
export { CreateLoggerDefinitionVersionRequestBody };
var CreateLoggerDefinitionVersionRequest = /** @class */ (function (_super) {
    __extends(CreateLoggerDefinitionVersionRequest, _super);
    function CreateLoggerDefinitionVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateLoggerDefinitionVersionPathParams)
    ], CreateLoggerDefinitionVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateLoggerDefinitionVersionHeaders)
    ], CreateLoggerDefinitionVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateLoggerDefinitionVersionRequestBody)
    ], CreateLoggerDefinitionVersionRequest.prototype, "request", void 0);
    return CreateLoggerDefinitionVersionRequest;
}(SpeakeasyBase));
export { CreateLoggerDefinitionVersionRequest };
var CreateLoggerDefinitionVersionResponse = /** @class */ (function (_super) {
    __extends(CreateLoggerDefinitionVersionResponse, _super);
    function CreateLoggerDefinitionVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLoggerDefinitionVersionResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateLoggerDefinitionVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateLoggerDefinitionVersionResponse)
    ], CreateLoggerDefinitionVersionResponse.prototype, "createLoggerDefinitionVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateLoggerDefinitionVersionResponse.prototype, "statusCode", void 0);
    return CreateLoggerDefinitionVersionResponse;
}(SpeakeasyBase));
export { CreateLoggerDefinitionVersionResponse };
