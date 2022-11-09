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
export var RejectSharedDirectoryXAmzTargetEnum;
(function (RejectSharedDirectoryXAmzTargetEnum) {
    RejectSharedDirectoryXAmzTargetEnum["DirectoryService20150416RejectSharedDirectory"] = "DirectoryService_20150416.RejectSharedDirectory";
})(RejectSharedDirectoryXAmzTargetEnum || (RejectSharedDirectoryXAmzTargetEnum = {}));
var RejectSharedDirectoryHeaders = /** @class */ (function (_super) {
    __extends(RejectSharedDirectoryHeaders, _super);
    function RejectSharedDirectoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RejectSharedDirectoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RejectSharedDirectoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RejectSharedDirectoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RejectSharedDirectoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RejectSharedDirectoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RejectSharedDirectoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RejectSharedDirectoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], RejectSharedDirectoryHeaders.prototype, "xAmzTarget", void 0);
    return RejectSharedDirectoryHeaders;
}(SpeakeasyBase));
export { RejectSharedDirectoryHeaders };
var RejectSharedDirectoryRequest = /** @class */ (function (_super) {
    __extends(RejectSharedDirectoryRequest, _super);
    function RejectSharedDirectoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RejectSharedDirectoryHeaders)
    ], RejectSharedDirectoryRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RejectSharedDirectoryRequest)
    ], RejectSharedDirectoryRequest.prototype, "request", void 0);
    return RejectSharedDirectoryRequest;
}(SpeakeasyBase));
export { RejectSharedDirectoryRequest };
var RejectSharedDirectoryResponse = /** @class */ (function (_super) {
    __extends(RejectSharedDirectoryResponse, _super);
    function RejectSharedDirectoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectSharedDirectoryResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RejectSharedDirectoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectSharedDirectoryResponse.prototype, "directoryAlreadySharedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectSharedDirectoryResponse.prototype, "entityDoesNotExistException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectSharedDirectoryResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RejectSharedDirectoryResult)
    ], RejectSharedDirectoryResponse.prototype, "rejectSharedDirectoryResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RejectSharedDirectoryResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RejectSharedDirectoryResponse.prototype, "statusCode", void 0);
    return RejectSharedDirectoryResponse;
}(SpeakeasyBase));
export { RejectSharedDirectoryResponse };
