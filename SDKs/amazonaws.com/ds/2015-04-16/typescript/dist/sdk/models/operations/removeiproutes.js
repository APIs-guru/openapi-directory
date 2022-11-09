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
export var RemoveIpRoutesXAmzTargetEnum;
(function (RemoveIpRoutesXAmzTargetEnum) {
    RemoveIpRoutesXAmzTargetEnum["DirectoryService20150416RemoveIpRoutes"] = "DirectoryService_20150416.RemoveIpRoutes";
})(RemoveIpRoutesXAmzTargetEnum || (RemoveIpRoutesXAmzTargetEnum = {}));
var RemoveIpRoutesHeaders = /** @class */ (function (_super) {
    __extends(RemoveIpRoutesHeaders, _super);
    function RemoveIpRoutesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RemoveIpRoutesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RemoveIpRoutesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RemoveIpRoutesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RemoveIpRoutesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RemoveIpRoutesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RemoveIpRoutesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RemoveIpRoutesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], RemoveIpRoutesHeaders.prototype, "xAmzTarget", void 0);
    return RemoveIpRoutesHeaders;
}(SpeakeasyBase));
export { RemoveIpRoutesHeaders };
var RemoveIpRoutesRequest = /** @class */ (function (_super) {
    __extends(RemoveIpRoutesRequest, _super);
    function RemoveIpRoutesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RemoveIpRoutesHeaders)
    ], RemoveIpRoutesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemoveIpRoutesRequest)
    ], RemoveIpRoutesRequest.prototype, "request", void 0);
    return RemoveIpRoutesRequest;
}(SpeakeasyBase));
export { RemoveIpRoutesRequest };
var RemoveIpRoutesResponse = /** @class */ (function (_super) {
    __extends(RemoveIpRoutesResponse, _super);
    function RemoveIpRoutesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RemoveIpRoutesResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RemoveIpRoutesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RemoveIpRoutesResponse.prototype, "directoryUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RemoveIpRoutesResponse.prototype, "entityDoesNotExistException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RemoveIpRoutesResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], RemoveIpRoutesResponse.prototype, "removeIpRoutesResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RemoveIpRoutesResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RemoveIpRoutesResponse.prototype, "statusCode", void 0);
    return RemoveIpRoutesResponse;
}(SpeakeasyBase));
export { RemoveIpRoutesResponse };
