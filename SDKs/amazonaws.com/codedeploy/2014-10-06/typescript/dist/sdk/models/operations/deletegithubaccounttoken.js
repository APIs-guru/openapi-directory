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
export var DeleteGitHubAccountTokenXAmzTargetEnum;
(function (DeleteGitHubAccountTokenXAmzTargetEnum) {
    DeleteGitHubAccountTokenXAmzTargetEnum["CodeDeploy20141006DeleteGitHubAccountToken"] = "CodeDeploy_20141006.DeleteGitHubAccountToken";
})(DeleteGitHubAccountTokenXAmzTargetEnum || (DeleteGitHubAccountTokenXAmzTargetEnum = {}));
var DeleteGitHubAccountTokenHeaders = /** @class */ (function (_super) {
    __extends(DeleteGitHubAccountTokenHeaders, _super);
    function DeleteGitHubAccountTokenHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzTarget", void 0);
    return DeleteGitHubAccountTokenHeaders;
}(SpeakeasyBase));
export { DeleteGitHubAccountTokenHeaders };
var DeleteGitHubAccountTokenRequest = /** @class */ (function (_super) {
    __extends(DeleteGitHubAccountTokenRequest, _super);
    function DeleteGitHubAccountTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGitHubAccountTokenHeaders)
    ], DeleteGitHubAccountTokenRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteGitHubAccountTokenInput)
    ], DeleteGitHubAccountTokenRequest.prototype, "request", void 0);
    return DeleteGitHubAccountTokenRequest;
}(SpeakeasyBase));
export { DeleteGitHubAccountTokenRequest };
var DeleteGitHubAccountTokenResponse = /** @class */ (function (_super) {
    __extends(DeleteGitHubAccountTokenResponse, _super);
    function DeleteGitHubAccountTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteGitHubAccountTokenOutput)
    ], DeleteGitHubAccountTokenResponse.prototype, "deleteGitHubAccountTokenOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteGitHubAccountTokenResponse.prototype, "gitHubAccountTokenDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteGitHubAccountTokenResponse.prototype, "gitHubAccountTokenNameRequiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteGitHubAccountTokenResponse.prototype, "invalidGitHubAccountTokenNameException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteGitHubAccountTokenResponse.prototype, "operationNotSupportedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteGitHubAccountTokenResponse.prototype, "resourceValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteGitHubAccountTokenResponse.prototype, "statusCode", void 0);
    return DeleteGitHubAccountTokenResponse;
}(SpeakeasyBase));
export { DeleteGitHubAccountTokenResponse };
