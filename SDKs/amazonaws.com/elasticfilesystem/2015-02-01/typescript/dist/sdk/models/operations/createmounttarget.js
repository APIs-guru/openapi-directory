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
var CreateMountTargetHeaders = /** @class */ (function (_super) {
    __extends(CreateMountTargetHeaders, _super);
    function CreateMountTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateMountTargetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateMountTargetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateMountTargetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateMountTargetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateMountTargetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateMountTargetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateMountTargetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateMountTargetHeaders;
}(SpeakeasyBase));
export { CreateMountTargetHeaders };
var CreateMountTargetRequestBody = /** @class */ (function (_super) {
    __extends(CreateMountTargetRequestBody, _super);
    function CreateMountTargetRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemId" }),
        __metadata("design:type", String)
    ], CreateMountTargetRequestBody.prototype, "fileSystemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpAddress" }),
        __metadata("design:type", String)
    ], CreateMountTargetRequestBody.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroups" }),
        __metadata("design:type", Array)
    ], CreateMountTargetRequestBody.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetId" }),
        __metadata("design:type", String)
    ], CreateMountTargetRequestBody.prototype, "subnetId", void 0);
    return CreateMountTargetRequestBody;
}(SpeakeasyBase));
export { CreateMountTargetRequestBody };
var CreateMountTargetRequest = /** @class */ (function (_super) {
    __extends(CreateMountTargetRequest, _super);
    function CreateMountTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMountTargetHeaders)
    ], CreateMountTargetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateMountTargetRequestBody)
    ], CreateMountTargetRequest.prototype, "request", void 0);
    return CreateMountTargetRequest;
}(SpeakeasyBase));
export { CreateMountTargetRequest };
var CreateMountTargetResponse = /** @class */ (function (_super) {
    __extends(CreateMountTargetResponse, _super);
    function CreateMountTargetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMountTargetResponse.prototype, "availabilityZonesMismatch", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMountTargetResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateMountTargetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMountTargetResponse.prototype, "fileSystemNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMountTargetResponse.prototype, "incorrectFileSystemLifeCycleState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMountTargetResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMountTargetResponse.prototype, "ipAddressInUse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMountTargetResponse.prototype, "mountTargetConflict", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MountTargetDescription)
    ], CreateMountTargetResponse.prototype, "mountTargetDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMountTargetResponse.prototype, "networkInterfaceLimitExceeded", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMountTargetResponse.prototype, "noFreeAddressesInSubnet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMountTargetResponse.prototype, "securityGroupLimitExceeded", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMountTargetResponse.prototype, "securityGroupNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateMountTargetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMountTargetResponse.prototype, "subnetNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateMountTargetResponse.prototype, "unsupportedAvailabilityZone", void 0);
    return CreateMountTargetResponse;
}(SpeakeasyBase));
export { CreateMountTargetResponse };
