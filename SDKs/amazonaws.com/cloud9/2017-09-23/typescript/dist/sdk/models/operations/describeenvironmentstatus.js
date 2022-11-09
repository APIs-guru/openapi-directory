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
export var DescribeEnvironmentStatusXAmzTargetEnum;
(function (DescribeEnvironmentStatusXAmzTargetEnum) {
    DescribeEnvironmentStatusXAmzTargetEnum["AwsCloud9WorkspaceManagementServiceDescribeEnvironmentStatus"] = "AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus";
})(DescribeEnvironmentStatusXAmzTargetEnum || (DescribeEnvironmentStatusXAmzTargetEnum = {}));
var DescribeEnvironmentStatusHeaders = /** @class */ (function (_super) {
    __extends(DescribeEnvironmentStatusHeaders, _super);
    function DescribeEnvironmentStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentStatusHeaders.prototype, "xAmzTarget", void 0);
    return DescribeEnvironmentStatusHeaders;
}(SpeakeasyBase));
export { DescribeEnvironmentStatusHeaders };
var DescribeEnvironmentStatusRequest = /** @class */ (function (_super) {
    __extends(DescribeEnvironmentStatusRequest, _super);
    function DescribeEnvironmentStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeEnvironmentStatusHeaders)
    ], DescribeEnvironmentStatusRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeEnvironmentStatusRequest)
    ], DescribeEnvironmentStatusRequest.prototype, "request", void 0);
    return DescribeEnvironmentStatusRequest;
}(SpeakeasyBase));
export { DescribeEnvironmentStatusRequest };
var DescribeEnvironmentStatusResponse = /** @class */ (function (_super) {
    __extends(DescribeEnvironmentStatusResponse, _super);
    function DescribeEnvironmentStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentStatusResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentStatusResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeEnvironmentStatusResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeEnvironmentStatusResult)
    ], DescribeEnvironmentStatusResponse.prototype, "describeEnvironmentStatusResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentStatusResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentStatusResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentStatusResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentStatusResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeEnvironmentStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentStatusResponse.prototype, "tooManyRequestsException", void 0);
    return DescribeEnvironmentStatusResponse;
}(SpeakeasyBase));
export { DescribeEnvironmentStatusResponse };
