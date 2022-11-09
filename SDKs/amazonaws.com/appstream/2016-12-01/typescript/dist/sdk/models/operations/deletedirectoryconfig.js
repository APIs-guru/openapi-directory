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
export var DeleteDirectoryConfigXAmzTargetEnum;
(function (DeleteDirectoryConfigXAmzTargetEnum) {
    DeleteDirectoryConfigXAmzTargetEnum["PhotonAdminProxyServiceDeleteDirectoryConfig"] = "PhotonAdminProxyService.DeleteDirectoryConfig";
})(DeleteDirectoryConfigXAmzTargetEnum || (DeleteDirectoryConfigXAmzTargetEnum = {}));
var DeleteDirectoryConfigHeaders = /** @class */ (function (_super) {
    __extends(DeleteDirectoryConfigHeaders, _super);
    function DeleteDirectoryConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteDirectoryConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteDirectoryConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteDirectoryConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteDirectoryConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteDirectoryConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteDirectoryConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteDirectoryConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteDirectoryConfigHeaders.prototype, "xAmzTarget", void 0);
    return DeleteDirectoryConfigHeaders;
}(SpeakeasyBase));
export { DeleteDirectoryConfigHeaders };
var DeleteDirectoryConfigRequest = /** @class */ (function (_super) {
    __extends(DeleteDirectoryConfigRequest, _super);
    function DeleteDirectoryConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteDirectoryConfigHeaders)
    ], DeleteDirectoryConfigRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteDirectoryConfigRequest)
    ], DeleteDirectoryConfigRequest.prototype, "request", void 0);
    return DeleteDirectoryConfigRequest;
}(SpeakeasyBase));
export { DeleteDirectoryConfigRequest };
var DeleteDirectoryConfigResponse = /** @class */ (function (_super) {
    __extends(DeleteDirectoryConfigResponse, _super);
    function DeleteDirectoryConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteDirectoryConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DeleteDirectoryConfigResponse.prototype, "deleteDirectoryConfigResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDirectoryConfigResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDirectoryConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteDirectoryConfigResponse.prototype, "statusCode", void 0);
    return DeleteDirectoryConfigResponse;
}(SpeakeasyBase));
export { DeleteDirectoryConfigResponse };
