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
export var DeleteRepositoryPolicyXAmzTargetEnum;
(function (DeleteRepositoryPolicyXAmzTargetEnum) {
    DeleteRepositoryPolicyXAmzTargetEnum["AmazonEc2ContainerRegistryV20150921DeleteRepositoryPolicy"] = "AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy";
})(DeleteRepositoryPolicyXAmzTargetEnum || (DeleteRepositoryPolicyXAmzTargetEnum = {}));
var DeleteRepositoryPolicyHeaders = /** @class */ (function (_super) {
    __extends(DeleteRepositoryPolicyHeaders, _super);
    function DeleteRepositoryPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteRepositoryPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteRepositoryPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteRepositoryPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteRepositoryPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteRepositoryPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteRepositoryPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteRepositoryPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteRepositoryPolicyHeaders.prototype, "xAmzTarget", void 0);
    return DeleteRepositoryPolicyHeaders;
}(SpeakeasyBase));
export { DeleteRepositoryPolicyHeaders };
var DeleteRepositoryPolicyRequest = /** @class */ (function (_super) {
    __extends(DeleteRepositoryPolicyRequest, _super);
    function DeleteRepositoryPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteRepositoryPolicyHeaders)
    ], DeleteRepositoryPolicyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteRepositoryPolicyRequest)
    ], DeleteRepositoryPolicyRequest.prototype, "request", void 0);
    return DeleteRepositoryPolicyRequest;
}(SpeakeasyBase));
export { DeleteRepositoryPolicyRequest };
var DeleteRepositoryPolicyResponse = /** @class */ (function (_super) {
    __extends(DeleteRepositoryPolicyResponse, _super);
    function DeleteRepositoryPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteRepositoryPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteRepositoryPolicyResponse)
    ], DeleteRepositoryPolicyResponse.prototype, "deleteRepositoryPolicyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteRepositoryPolicyResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteRepositoryPolicyResponse.prototype, "repositoryNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteRepositoryPolicyResponse.prototype, "repositoryPolicyNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteRepositoryPolicyResponse.prototype, "serverException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteRepositoryPolicyResponse.prototype, "statusCode", void 0);
    return DeleteRepositoryPolicyResponse;
}(SpeakeasyBase));
export { DeleteRepositoryPolicyResponse };
