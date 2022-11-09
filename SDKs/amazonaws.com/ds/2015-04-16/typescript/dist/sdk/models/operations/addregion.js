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
export var AddRegionXAmzTargetEnum;
(function (AddRegionXAmzTargetEnum) {
    AddRegionXAmzTargetEnum["DirectoryService20150416AddRegion"] = "DirectoryService_20150416.AddRegion";
})(AddRegionXAmzTargetEnum || (AddRegionXAmzTargetEnum = {}));
var AddRegionHeaders = /** @class */ (function (_super) {
    __extends(AddRegionHeaders, _super);
    function AddRegionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AddRegionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AddRegionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AddRegionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AddRegionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AddRegionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AddRegionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AddRegionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], AddRegionHeaders.prototype, "xAmzTarget", void 0);
    return AddRegionHeaders;
}(SpeakeasyBase));
export { AddRegionHeaders };
var AddRegionRequest = /** @class */ (function (_super) {
    __extends(AddRegionRequest, _super);
    function AddRegionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AddRegionHeaders)
    ], AddRegionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddRegionRequest)
    ], AddRegionRequest.prototype, "request", void 0);
    return AddRegionRequest;
}(SpeakeasyBase));
export { AddRegionRequest };
var AddRegionResponse = /** @class */ (function (_super) {
    __extends(AddRegionResponse, _super);
    function AddRegionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddRegionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], AddRegionResponse.prototype, "addRegionResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddRegionResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AddRegionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddRegionResponse.prototype, "directoryAlreadyInRegionException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddRegionResponse.prototype, "directoryDoesNotExistException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddRegionResponse.prototype, "directoryUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddRegionResponse.prototype, "entityDoesNotExistException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddRegionResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddRegionResponse.prototype, "regionLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddRegionResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AddRegionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AddRegionResponse.prototype, "unsupportedOperationException", void 0);
    return AddRegionResponse;
}(SpeakeasyBase));
export { AddRegionResponse };
