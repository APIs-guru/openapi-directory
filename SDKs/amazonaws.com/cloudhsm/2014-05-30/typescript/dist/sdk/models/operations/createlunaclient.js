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
export var CreateLunaClientXAmzTargetEnum;
(function (CreateLunaClientXAmzTargetEnum) {
    CreateLunaClientXAmzTargetEnum["CloudHsmFrontendServiceCreateLunaClient"] = "CloudHsmFrontendService.CreateLunaClient";
})(CreateLunaClientXAmzTargetEnum || (CreateLunaClientXAmzTargetEnum = {}));
var CreateLunaClientHeaders = /** @class */ (function (_super) {
    __extends(CreateLunaClientHeaders, _super);
    function CreateLunaClientHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateLunaClientHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateLunaClientHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateLunaClientHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateLunaClientHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateLunaClientHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateLunaClientHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateLunaClientHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateLunaClientHeaders.prototype, "xAmzTarget", void 0);
    return CreateLunaClientHeaders;
}(SpeakeasyBase));
export { CreateLunaClientHeaders };
var CreateLunaClientRequest = /** @class */ (function (_super) {
    __extends(CreateLunaClientRequest, _super);
    function CreateLunaClientRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateLunaClientHeaders)
    ], CreateLunaClientRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateLunaClientRequest)
    ], CreateLunaClientRequest.prototype, "request", void 0);
    return CreateLunaClientRequest;
}(SpeakeasyBase));
export { CreateLunaClientRequest };
var CreateLunaClientResponse = /** @class */ (function (_super) {
    __extends(CreateLunaClientResponse, _super);
    function CreateLunaClientResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateLunaClientResponse.prototype, "cloudHsmInternalException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateLunaClientResponse.prototype, "cloudHsmServiceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateLunaClientResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateLunaClientResponse)
    ], CreateLunaClientResponse.prototype, "createLunaClientResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateLunaClientResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateLunaClientResponse.prototype, "statusCode", void 0);
    return CreateLunaClientResponse;
}(SpeakeasyBase));
export { CreateLunaClientResponse };
