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
export var UpdateNumberOfDomainControllersXAmzTargetEnum;
(function (UpdateNumberOfDomainControllersXAmzTargetEnum) {
    UpdateNumberOfDomainControllersXAmzTargetEnum["DirectoryService20150416UpdateNumberOfDomainControllers"] = "DirectoryService_20150416.UpdateNumberOfDomainControllers";
})(UpdateNumberOfDomainControllersXAmzTargetEnum || (UpdateNumberOfDomainControllersXAmzTargetEnum = {}));
var UpdateNumberOfDomainControllersHeaders = /** @class */ (function (_super) {
    __extends(UpdateNumberOfDomainControllersHeaders, _super);
    function UpdateNumberOfDomainControllersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateNumberOfDomainControllersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateNumberOfDomainControllersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateNumberOfDomainControllersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateNumberOfDomainControllersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateNumberOfDomainControllersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateNumberOfDomainControllersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateNumberOfDomainControllersHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateNumberOfDomainControllersHeaders.prototype, "xAmzTarget", void 0);
    return UpdateNumberOfDomainControllersHeaders;
}(SpeakeasyBase));
export { UpdateNumberOfDomainControllersHeaders };
var UpdateNumberOfDomainControllersRequest = /** @class */ (function (_super) {
    __extends(UpdateNumberOfDomainControllersRequest, _super);
    function UpdateNumberOfDomainControllersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNumberOfDomainControllersHeaders)
    ], UpdateNumberOfDomainControllersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateNumberOfDomainControllersRequest)
    ], UpdateNumberOfDomainControllersRequest.prototype, "request", void 0);
    return UpdateNumberOfDomainControllersRequest;
}(SpeakeasyBase));
export { UpdateNumberOfDomainControllersRequest };
var UpdateNumberOfDomainControllersResponse = /** @class */ (function (_super) {
    __extends(UpdateNumberOfDomainControllersResponse, _super);
    function UpdateNumberOfDomainControllersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateNumberOfDomainControllersResponse.prototype, "clientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNumberOfDomainControllersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateNumberOfDomainControllersResponse.prototype, "directoryUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateNumberOfDomainControllersResponse.prototype, "domainControllerLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateNumberOfDomainControllersResponse.prototype, "entityDoesNotExistException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateNumberOfDomainControllersResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateNumberOfDomainControllersResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNumberOfDomainControllersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateNumberOfDomainControllersResponse.prototype, "unsupportedOperationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNumberOfDomainControllersResponse.prototype, "updateNumberOfDomainControllersResult", void 0);
    return UpdateNumberOfDomainControllersResponse;
}(SpeakeasyBase));
export { UpdateNumberOfDomainControllersResponse };
