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
var DescribeMountTargetSecurityGroupsPathParams = /** @class */ (function (_super) {
    __extends(DescribeMountTargetSecurityGroupsPathParams, _super);
    function DescribeMountTargetSecurityGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MountTargetId" }),
        __metadata("design:type", String)
    ], DescribeMountTargetSecurityGroupsPathParams.prototype, "mountTargetId", void 0);
    return DescribeMountTargetSecurityGroupsPathParams;
}(SpeakeasyBase));
export { DescribeMountTargetSecurityGroupsPathParams };
var DescribeMountTargetSecurityGroupsHeaders = /** @class */ (function (_super) {
    __extends(DescribeMountTargetSecurityGroupsHeaders, _super);
    function DescribeMountTargetSecurityGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeMountTargetSecurityGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeMountTargetSecurityGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeMountTargetSecurityGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeMountTargetSecurityGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeMountTargetSecurityGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeMountTargetSecurityGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeMountTargetSecurityGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeMountTargetSecurityGroupsHeaders;
}(SpeakeasyBase));
export { DescribeMountTargetSecurityGroupsHeaders };
var DescribeMountTargetSecurityGroupsRequest = /** @class */ (function (_super) {
    __extends(DescribeMountTargetSecurityGroupsRequest, _super);
    function DescribeMountTargetSecurityGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeMountTargetSecurityGroupsPathParams)
    ], DescribeMountTargetSecurityGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeMountTargetSecurityGroupsHeaders)
    ], DescribeMountTargetSecurityGroupsRequest.prototype, "headers", void 0);
    return DescribeMountTargetSecurityGroupsRequest;
}(SpeakeasyBase));
export { DescribeMountTargetSecurityGroupsRequest };
var DescribeMountTargetSecurityGroupsResponse = /** @class */ (function (_super) {
    __extends(DescribeMountTargetSecurityGroupsResponse, _super);
    function DescribeMountTargetSecurityGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMountTargetSecurityGroupsResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeMountTargetSecurityGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeMountTargetSecurityGroupsResponse)
    ], DescribeMountTargetSecurityGroupsResponse.prototype, "describeMountTargetSecurityGroupsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMountTargetSecurityGroupsResponse.prototype, "incorrectMountTargetState", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMountTargetSecurityGroupsResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeMountTargetSecurityGroupsResponse.prototype, "mountTargetNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeMountTargetSecurityGroupsResponse.prototype, "statusCode", void 0);
    return DescribeMountTargetSecurityGroupsResponse;
}(SpeakeasyBase));
export { DescribeMountTargetSecurityGroupsResponse };
