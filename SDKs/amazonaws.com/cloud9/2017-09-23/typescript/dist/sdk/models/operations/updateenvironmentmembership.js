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
export var UpdateEnvironmentMembershipXAmzTargetEnum;
(function (UpdateEnvironmentMembershipXAmzTargetEnum) {
    UpdateEnvironmentMembershipXAmzTargetEnum["AwsCloud9WorkspaceManagementServiceUpdateEnvironmentMembership"] = "AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership";
})(UpdateEnvironmentMembershipXAmzTargetEnum || (UpdateEnvironmentMembershipXAmzTargetEnum = {}));
var UpdateEnvironmentMembershipHeaders = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentMembershipHeaders, _super);
    function UpdateEnvironmentMembershipHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentMembershipHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentMembershipHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentMembershipHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentMembershipHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentMembershipHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentMembershipHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentMembershipHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentMembershipHeaders.prototype, "xAmzTarget", void 0);
    return UpdateEnvironmentMembershipHeaders;
}(SpeakeasyBase));
export { UpdateEnvironmentMembershipHeaders };
var UpdateEnvironmentMembershipRequest = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentMembershipRequest, _super);
    function UpdateEnvironmentMembershipRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateEnvironmentMembershipHeaders)
    ], UpdateEnvironmentMembershipRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateEnvironmentMembershipRequest)
    ], UpdateEnvironmentMembershipRequest.prototype, "request", void 0);
    return UpdateEnvironmentMembershipRequest;
}(SpeakeasyBase));
export { UpdateEnvironmentMembershipRequest };
var UpdateEnvironmentMembershipResponse = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentMembershipResponse, _super);
    function UpdateEnvironmentMembershipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentMembershipResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentMembershipResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateEnvironmentMembershipResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentMembershipResponse.prototype, "forbiddenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentMembershipResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentMembershipResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentMembershipResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateEnvironmentMembershipResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateEnvironmentMembershipResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateEnvironmentMembershipResult)
    ], UpdateEnvironmentMembershipResponse.prototype, "updateEnvironmentMembershipResult", void 0);
    return UpdateEnvironmentMembershipResponse;
}(SpeakeasyBase));
export { UpdateEnvironmentMembershipResponse };
