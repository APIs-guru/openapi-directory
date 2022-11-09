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
export var DescribeMigrationTaskXAmzTargetEnum;
(function (DescribeMigrationTaskXAmzTargetEnum) {
    DescribeMigrationTaskXAmzTargetEnum["AwsMigrationHubDescribeMigrationTask"] = "AWSMigrationHub.DescribeMigrationTask";
})(DescribeMigrationTaskXAmzTargetEnum || (DescribeMigrationTaskXAmzTargetEnum = {}));
var DescribeMigrationTaskHeaders = /** @class */ (function (_super) {
    __extends(DescribeMigrationTaskHeaders, _super);
    function DescribeMigrationTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeMigrationTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeMigrationTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeMigrationTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeMigrationTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeMigrationTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeMigrationTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeMigrationTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeMigrationTaskHeaders.prototype, "xAmzTarget", void 0);
    return DescribeMigrationTaskHeaders;
}(SpeakeasyBase));
export { DescribeMigrationTaskHeaders };
var DescribeMigrationTaskRequest = /** @class */ (function (_super) {
    __extends(DescribeMigrationTaskRequest, _super);
    function DescribeMigrationTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeMigrationTaskHeaders)
    ], DescribeMigrationTaskRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeMigrationTaskRequest)
    ], DescribeMigrationTaskRequest.prototype, "request", void 0);
    return DescribeMigrationTaskRequest;
}(SpeakeasyBase));
export { DescribeMigrationTaskRequest };
var DescribeMigrationTaskResponse = /** @class */ (function (_super) {
    __extends(DescribeMigrationTaskResponse, _super);
    function DescribeMigrationTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeMigrationTaskResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeMigrationTaskResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeMigrationTaskResult)
    ], DescribeMigrationTaskResponse.prototype, "describeMigrationTaskResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeMigrationTaskResponse.prototype, "homeRegionNotSetException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeMigrationTaskResponse.prototype, "internalServerError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeMigrationTaskResponse.prototype, "invalidInputException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeMigrationTaskResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeMigrationTaskResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeMigrationTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeMigrationTaskResponse.prototype, "throttlingException", void 0);
    return DescribeMigrationTaskResponse;
}(SpeakeasyBase));
export { DescribeMigrationTaskResponse };
