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
export var RestoreFromSnapshotXAmzTargetEnum;
(function (RestoreFromSnapshotXAmzTargetEnum) {
    RestoreFromSnapshotXAmzTargetEnum["DirectoryService20150416RestoreFromSnapshot"] = "DirectoryService_20150416.RestoreFromSnapshot";
})(RestoreFromSnapshotXAmzTargetEnum || (RestoreFromSnapshotXAmzTargetEnum = {}));
var RestoreFromSnapshotHeaders = /** @class */ (function (_super) {
    __extends(RestoreFromSnapshotHeaders, _super);
    function RestoreFromSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RestoreFromSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RestoreFromSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RestoreFromSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RestoreFromSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RestoreFromSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RestoreFromSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RestoreFromSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], RestoreFromSnapshotHeaders.prototype, "xAmzTarget", void 0);
    return RestoreFromSnapshotHeaders;
}(SpeakeasyBase));
export { RestoreFromSnapshotHeaders };
var RestoreFromSnapshotRequest = /** @class */ (function (_super) {
    __extends(RestoreFromSnapshotRequest, _super);
    function RestoreFromSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RestoreFromSnapshotHeaders)
    ], RestoreFromSnapshotRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RestoreFromSnapshotRequest)
    ], RestoreFromSnapshotRequest.prototype, "request", void 0);
    return RestoreFromSnapshotRequest;
}(SpeakeasyBase));
export { RestoreFromSnapshotRequest };
var RestoreFromSnapshotResponse = /** @class */ (function (_super) {
    __extends(RestoreFromSnapshotResponse, _super);
    function RestoreFromSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RestoreFromSnapshotResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RestoreFromSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RestoreFromSnapshotResponse.prototype, "entityDoesNotExistException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RestoreFromSnapshotResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], RestoreFromSnapshotResponse.prototype, "restoreFromSnapshotResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RestoreFromSnapshotResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RestoreFromSnapshotResponse.prototype, "statusCode", void 0);
    return RestoreFromSnapshotResponse;
}(SpeakeasyBase));
export { RestoreFromSnapshotResponse };
