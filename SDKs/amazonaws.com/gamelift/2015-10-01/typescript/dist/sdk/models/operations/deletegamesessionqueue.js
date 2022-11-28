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
export var DeleteGameSessionQueueXAmzTargetEnum;
(function (DeleteGameSessionQueueXAmzTargetEnum) {
    DeleteGameSessionQueueXAmzTargetEnum["GameLiftDeleteGameSessionQueue"] = "GameLift.DeleteGameSessionQueue";
})(DeleteGameSessionQueueXAmzTargetEnum || (DeleteGameSessionQueueXAmzTargetEnum = {}));
var DeleteGameSessionQueueHeaders = /** @class */ (function (_super) {
    __extends(DeleteGameSessionQueueHeaders, _super);
    function DeleteGameSessionQueueHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteGameSessionQueueHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteGameSessionQueueHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteGameSessionQueueHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteGameSessionQueueHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteGameSessionQueueHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteGameSessionQueueHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteGameSessionQueueHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteGameSessionQueueHeaders.prototype, "xAmzTarget", void 0);
    return DeleteGameSessionQueueHeaders;
}(SpeakeasyBase));
export { DeleteGameSessionQueueHeaders };
var DeleteGameSessionQueueRequest = /** @class */ (function (_super) {
    __extends(DeleteGameSessionQueueRequest, _super);
    function DeleteGameSessionQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGameSessionQueueHeaders)
    ], DeleteGameSessionQueueRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteGameSessionQueueInput)
    ], DeleteGameSessionQueueRequest.prototype, "request", void 0);
    return DeleteGameSessionQueueRequest;
}(SpeakeasyBase));
export { DeleteGameSessionQueueRequest };
var DeleteGameSessionQueueResponse = /** @class */ (function (_super) {
    __extends(DeleteGameSessionQueueResponse, _super);
    function DeleteGameSessionQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteGameSessionQueueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteGameSessionQueueResponse.prototype, "deleteGameSessionQueueOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteGameSessionQueueResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteGameSessionQueueResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteGameSessionQueueResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteGameSessionQueueResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteGameSessionQueueResponse.prototype, "taggingFailedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteGameSessionQueueResponse.prototype, "unauthorizedException", void 0);
    return DeleteGameSessionQueueResponse;
}(SpeakeasyBase));
export { DeleteGameSessionQueueResponse };
