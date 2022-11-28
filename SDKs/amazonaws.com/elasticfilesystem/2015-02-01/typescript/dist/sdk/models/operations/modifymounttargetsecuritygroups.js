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
var ModifyMountTargetSecurityGroupsPathParams = /** @class */ (function (_super) {
    __extends(ModifyMountTargetSecurityGroupsPathParams, _super);
    function ModifyMountTargetSecurityGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MountTargetId" }),
        __metadata("design:type", String)
    ], ModifyMountTargetSecurityGroupsPathParams.prototype, "mountTargetId", void 0);
    return ModifyMountTargetSecurityGroupsPathParams;
}(SpeakeasyBase));
export { ModifyMountTargetSecurityGroupsPathParams };
var ModifyMountTargetSecurityGroupsHeaders = /** @class */ (function (_super) {
    __extends(ModifyMountTargetSecurityGroupsHeaders, _super);
    function ModifyMountTargetSecurityGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ModifyMountTargetSecurityGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ModifyMountTargetSecurityGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ModifyMountTargetSecurityGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ModifyMountTargetSecurityGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ModifyMountTargetSecurityGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ModifyMountTargetSecurityGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ModifyMountTargetSecurityGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ModifyMountTargetSecurityGroupsHeaders;
}(SpeakeasyBase));
export { ModifyMountTargetSecurityGroupsHeaders };
var ModifyMountTargetSecurityGroupsRequestBody = /** @class */ (function (_super) {
    __extends(ModifyMountTargetSecurityGroupsRequestBody, _super);
    function ModifyMountTargetSecurityGroupsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroups" }),
        __metadata("design:type", Array)
    ], ModifyMountTargetSecurityGroupsRequestBody.prototype, "securityGroups", void 0);
    return ModifyMountTargetSecurityGroupsRequestBody;
}(SpeakeasyBase));
export { ModifyMountTargetSecurityGroupsRequestBody };
var ModifyMountTargetSecurityGroupsRequest = /** @class */ (function (_super) {
    __extends(ModifyMountTargetSecurityGroupsRequest, _super);
    function ModifyMountTargetSecurityGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifyMountTargetSecurityGroupsPathParams)
    ], ModifyMountTargetSecurityGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifyMountTargetSecurityGroupsHeaders)
    ], ModifyMountTargetSecurityGroupsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ModifyMountTargetSecurityGroupsRequestBody)
    ], ModifyMountTargetSecurityGroupsRequest.prototype, "request", void 0);
    return ModifyMountTargetSecurityGroupsRequest;
}(SpeakeasyBase));
export { ModifyMountTargetSecurityGroupsRequest };
var ModifyMountTargetSecurityGroupsResponse = /** @class */ (function (_super) {
    __extends(ModifyMountTargetSecurityGroupsResponse, _super);
    function ModifyMountTargetSecurityGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyMountTargetSecurityGroupsResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifyMountTargetSecurityGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyMountTargetSecurityGroupsResponse.prototype, "incorrectMountTargetState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyMountTargetSecurityGroupsResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyMountTargetSecurityGroupsResponse.prototype, "mountTargetNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyMountTargetSecurityGroupsResponse.prototype, "securityGroupLimitExceeded", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ModifyMountTargetSecurityGroupsResponse.prototype, "securityGroupNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModifyMountTargetSecurityGroupsResponse.prototype, "statusCode", void 0);
    return ModifyMountTargetSecurityGroupsResponse;
}(SpeakeasyBase));
export { ModifyMountTargetSecurityGroupsResponse };
