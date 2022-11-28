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
var CreateAccessPointHeaders = /** @class */ (function (_super) {
    __extends(CreateAccessPointHeaders, _super);
    function CreateAccessPointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateAccessPointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateAccessPointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateAccessPointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateAccessPointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateAccessPointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateAccessPointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateAccessPointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateAccessPointHeaders;
}(SpeakeasyBase));
export { CreateAccessPointHeaders };
// CreateAccessPointRequestBodyPosixUser
/**
 * The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
**/
var CreateAccessPointRequestBodyPosixUser = /** @class */ (function (_super) {
    __extends(CreateAccessPointRequestBodyPosixUser, _super);
    function CreateAccessPointRequestBodyPosixUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Gid" }),
        __metadata("design:type", Number)
    ], CreateAccessPointRequestBodyPosixUser.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryGids" }),
        __metadata("design:type", Array)
    ], CreateAccessPointRequestBodyPosixUser.prototype, "secondaryGids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Uid" }),
        __metadata("design:type", Number)
    ], CreateAccessPointRequestBodyPosixUser.prototype, "uid", void 0);
    return CreateAccessPointRequestBodyPosixUser;
}(SpeakeasyBase));
export { CreateAccessPointRequestBodyPosixUser };
// CreateAccessPointRequestBodyRootDirectory
/**
 * Specifies the directory on the Amazon EFS file system that the access point provides access to. The access point exposes the specified file system path as the root directory of your file system to applications using the access point. NFS clients using the access point can only access data in the access point's <code>RootDirectory</code> and it's subdirectories.
**/
var CreateAccessPointRequestBodyRootDirectory = /** @class */ (function (_super) {
    __extends(CreateAccessPointRequestBodyRootDirectory, _super);
    function CreateAccessPointRequestBodyRootDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationInfo" }),
        __metadata("design:type", shared.CreationInfo)
    ], CreateAccessPointRequestBodyRootDirectory.prototype, "creationInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Path" }),
        __metadata("design:type", String)
    ], CreateAccessPointRequestBodyRootDirectory.prototype, "path", void 0);
    return CreateAccessPointRequestBodyRootDirectory;
}(SpeakeasyBase));
export { CreateAccessPointRequestBodyRootDirectory };
var CreateAccessPointRequestBody = /** @class */ (function (_super) {
    __extends(CreateAccessPointRequestBody, _super);
    function CreateAccessPointRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientToken" }),
        __metadata("design:type", String)
    ], CreateAccessPointRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FileSystemId" }),
        __metadata("design:type", String)
    ], CreateAccessPointRequestBody.prototype, "fileSystemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PosixUser" }),
        __metadata("design:type", CreateAccessPointRequestBodyPosixUser)
    ], CreateAccessPointRequestBody.prototype, "posixUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RootDirectory" }),
        __metadata("design:type", CreateAccessPointRequestBodyRootDirectory)
    ], CreateAccessPointRequestBody.prototype, "rootDirectory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateAccessPointRequestBody.prototype, "tags", void 0);
    return CreateAccessPointRequestBody;
}(SpeakeasyBase));
export { CreateAccessPointRequestBody };
var CreateAccessPointRequest = /** @class */ (function (_super) {
    __extends(CreateAccessPointRequest, _super);
    function CreateAccessPointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAccessPointHeaders)
    ], CreateAccessPointRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAccessPointRequestBody)
    ], CreateAccessPointRequest.prototype, "request", void 0);
    return CreateAccessPointRequest;
}(SpeakeasyBase));
export { CreateAccessPointRequest };
var CreateAccessPointResponse = /** @class */ (function (_super) {
    __extends(CreateAccessPointResponse, _super);
    function CreateAccessPointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAccessPointResponse.prototype, "accessPointAlreadyExists", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccessPointDescription)
    ], CreateAccessPointResponse.prototype, "accessPointDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAccessPointResponse.prototype, "accessPointLimitExceeded", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAccessPointResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAccessPointResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAccessPointResponse.prototype, "fileSystemNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAccessPointResponse.prototype, "incorrectFileSystemLifeCycleState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateAccessPointResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAccessPointResponse.prototype, "statusCode", void 0);
    return CreateAccessPointResponse;
}(SpeakeasyBase));
export { CreateAccessPointResponse };
