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
export var DeleteReplicationTaskXAmzTargetEnum;
(function (DeleteReplicationTaskXAmzTargetEnum) {
    DeleteReplicationTaskXAmzTargetEnum["AmazonDmSv20160101DeleteReplicationTask"] = "AmazonDMSv20160101.DeleteReplicationTask";
})(DeleteReplicationTaskXAmzTargetEnum || (DeleteReplicationTaskXAmzTargetEnum = {}));
var DeleteReplicationTaskHeaders = /** @class */ (function (_super) {
    __extends(DeleteReplicationTaskHeaders, _super);
    function DeleteReplicationTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteReplicationTaskHeaders.prototype, "xAmzTarget", void 0);
    return DeleteReplicationTaskHeaders;
}(SpeakeasyBase));
export { DeleteReplicationTaskHeaders };
var DeleteReplicationTaskRequest = /** @class */ (function (_super) {
    __extends(DeleteReplicationTaskRequest, _super);
    function DeleteReplicationTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteReplicationTaskHeaders)
    ], DeleteReplicationTaskRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteReplicationTaskMessage)
    ], DeleteReplicationTaskRequest.prototype, "request", void 0);
    return DeleteReplicationTaskRequest;
}(SpeakeasyBase));
export { DeleteReplicationTaskRequest };
var DeleteReplicationTaskResponse = /** @class */ (function (_super) {
    __extends(DeleteReplicationTaskResponse, _super);
    function DeleteReplicationTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteReplicationTaskResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeleteReplicationTaskResponse)
    ], DeleteReplicationTaskResponse.prototype, "deleteReplicationTaskResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteReplicationTaskResponse.prototype, "invalidResourceStateFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteReplicationTaskResponse.prototype, "resourceNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteReplicationTaskResponse.prototype, "statusCode", void 0);
    return DeleteReplicationTaskResponse;
}(SpeakeasyBase));
export { DeleteReplicationTaskResponse };
