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
export var CreateLogSubscriptionXAmzTargetEnum;
(function (CreateLogSubscriptionXAmzTargetEnum) {
    CreateLogSubscriptionXAmzTargetEnum["DirectoryService20150416CreateLogSubscription"] = "DirectoryService_20150416.CreateLogSubscription";
})(CreateLogSubscriptionXAmzTargetEnum || (CreateLogSubscriptionXAmzTargetEnum = {}));
var CreateLogSubscriptionHeaders = /** @class */ (function (_super) {
    __extends(CreateLogSubscriptionHeaders, _super);
    function CreateLogSubscriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateLogSubscriptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateLogSubscriptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateLogSubscriptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateLogSubscriptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateLogSubscriptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateLogSubscriptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateLogSubscriptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateLogSubscriptionHeaders.prototype, "xAmzTarget", void 0);
    return CreateLogSubscriptionHeaders;
}(SpeakeasyBase));
export { CreateLogSubscriptionHeaders };
var CreateLogSubscriptionRequest = /** @class */ (function (_super) {
    __extends(CreateLogSubscriptionRequest, _super);
    function CreateLogSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateLogSubscriptionHeaders)
    ], CreateLogSubscriptionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateLogSubscriptionRequest)
    ], CreateLogSubscriptionRequest.prototype, "request", void 0);
    return CreateLogSubscriptionRequest;
}(SpeakeasyBase));
export { CreateLogSubscriptionRequest };
var CreateLogSubscriptionResponse = /** @class */ (function (_super) {
    __extends(CreateLogSubscriptionResponse, _super);
    function CreateLogSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateLogSubscriptionResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateLogSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], CreateLogSubscriptionResponse.prototype, "createLogSubscriptionResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateLogSubscriptionResponse.prototype, "entityAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateLogSubscriptionResponse.prototype, "entityDoesNotExistException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateLogSubscriptionResponse.prototype, "insufficientPermissionsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateLogSubscriptionResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateLogSubscriptionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateLogSubscriptionResponse.prototype, "unsupportedOperationException", void 0);
    return CreateLogSubscriptionResponse;
}(SpeakeasyBase));
export { CreateLogSubscriptionResponse };
