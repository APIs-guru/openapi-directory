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
export var DeleteDirectoryXAmzTargetEnum;
(function (DeleteDirectoryXAmzTargetEnum) {
    DeleteDirectoryXAmzTargetEnum["DirectoryService20150416DeleteDirectory"] = "DirectoryService_20150416.DeleteDirectory";
})(DeleteDirectoryXAmzTargetEnum || (DeleteDirectoryXAmzTargetEnum = {}));
var DeleteDirectoryHeaders = /** @class */ (function (_super) {
    __extends(DeleteDirectoryHeaders, _super);
    function DeleteDirectoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteDirectoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteDirectoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteDirectoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteDirectoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteDirectoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteDirectoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteDirectoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteDirectoryHeaders.prototype, "xAmzTarget", void 0);
    return DeleteDirectoryHeaders;
}(SpeakeasyBase));
export { DeleteDirectoryHeaders };
var DeleteDirectoryRequest = /** @class */ (function (_super) {
    __extends(DeleteDirectoryRequest, _super);
    function DeleteDirectoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteDirectoryHeaders)
    ], DeleteDirectoryRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteDirectoryRequest)
    ], DeleteDirectoryRequest.prototype, "request", void 0);
    return DeleteDirectoryRequest;
}(SpeakeasyBase));
export { DeleteDirectoryRequest };
var DeleteDirectoryResponse = /** @class */ (function (_super) {
    __extends(DeleteDirectoryResponse, _super);
    function DeleteDirectoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDirectoryResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteDirectoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteDirectoryResult)
    ], DeleteDirectoryResponse.prototype, "deleteDirectoryResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDirectoryResponse.prototype, "entityDoesNotExistException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteDirectoryResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteDirectoryResponse.prototype, "statusCode", void 0);
    return DeleteDirectoryResponse;
}(SpeakeasyBase));
export { DeleteDirectoryResponse };
