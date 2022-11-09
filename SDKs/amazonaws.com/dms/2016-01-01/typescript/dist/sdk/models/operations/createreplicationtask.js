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
export var CreateReplicationTaskXAmzTargetEnum;
(function (CreateReplicationTaskXAmzTargetEnum) {
    CreateReplicationTaskXAmzTargetEnum["AmazonDmSv20160101CreateReplicationTask"] = "AmazonDMSv20160101.CreateReplicationTask";
})(CreateReplicationTaskXAmzTargetEnum || (CreateReplicationTaskXAmzTargetEnum = {}));
var CreateReplicationTaskHeaders = /** @class */ (function (_super) {
    __extends(CreateReplicationTaskHeaders, _super);
    function CreateReplicationTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], CreateReplicationTaskHeaders.prototype, "xAmzTarget", void 0);
    return CreateReplicationTaskHeaders;
}(SpeakeasyBase));
export { CreateReplicationTaskHeaders };
var CreateReplicationTaskRequest = /** @class */ (function (_super) {
    __extends(CreateReplicationTaskRequest, _super);
    function CreateReplicationTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateReplicationTaskHeaders)
    ], CreateReplicationTaskRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateReplicationTaskMessage)
    ], CreateReplicationTaskRequest.prototype, "request", void 0);
    return CreateReplicationTaskRequest;
}(SpeakeasyBase));
export { CreateReplicationTaskRequest };
var CreateReplicationTaskResponse = /** @class */ (function (_super) {
    __extends(CreateReplicationTaskResponse, _super);
    function CreateReplicationTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateReplicationTaskResponse.prototype, "accessDeniedFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateReplicationTaskResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CreateReplicationTaskResponse)
    ], CreateReplicationTaskResponse.prototype, "createReplicationTaskResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateReplicationTaskResponse.prototype, "invalidResourceStateFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateReplicationTaskResponse.prototype, "kmsKeyNotAccessibleFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateReplicationTaskResponse.prototype, "resourceAlreadyExistsFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateReplicationTaskResponse.prototype, "resourceNotFoundFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateReplicationTaskResponse.prototype, "resourceQuotaExceededFault", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateReplicationTaskResponse.prototype, "statusCode", void 0);
    return CreateReplicationTaskResponse;
}(SpeakeasyBase));
export { CreateReplicationTaskResponse };
