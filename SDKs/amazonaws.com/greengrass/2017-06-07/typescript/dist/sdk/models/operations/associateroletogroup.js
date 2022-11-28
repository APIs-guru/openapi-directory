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
var AssociateRoleToGroupPathParams = /** @class */ (function (_super) {
    __extends(AssociateRoleToGroupPathParams, _super);
    function AssociateRoleToGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=GroupId" }),
        __metadata("design:type", String)
    ], AssociateRoleToGroupPathParams.prototype, "groupId", void 0);
    return AssociateRoleToGroupPathParams;
}(SpeakeasyBase));
export { AssociateRoleToGroupPathParams };
var AssociateRoleToGroupHeaders = /** @class */ (function (_super) {
    __extends(AssociateRoleToGroupHeaders, _super);
    function AssociateRoleToGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AssociateRoleToGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AssociateRoleToGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AssociateRoleToGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AssociateRoleToGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AssociateRoleToGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AssociateRoleToGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AssociateRoleToGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AssociateRoleToGroupHeaders;
}(SpeakeasyBase));
export { AssociateRoleToGroupHeaders };
var AssociateRoleToGroupRequestBody = /** @class */ (function (_super) {
    __extends(AssociateRoleToGroupRequestBody, _super);
    function AssociateRoleToGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], AssociateRoleToGroupRequestBody.prototype, "roleArn", void 0);
    return AssociateRoleToGroupRequestBody;
}(SpeakeasyBase));
export { AssociateRoleToGroupRequestBody };
var AssociateRoleToGroupRequest = /** @class */ (function (_super) {
    __extends(AssociateRoleToGroupRequest, _super);
    function AssociateRoleToGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssociateRoleToGroupPathParams)
    ], AssociateRoleToGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssociateRoleToGroupHeaders)
    ], AssociateRoleToGroupRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssociateRoleToGroupRequestBody)
    ], AssociateRoleToGroupRequest.prototype, "request", void 0);
    return AssociateRoleToGroupRequest;
}(SpeakeasyBase));
export { AssociateRoleToGroupRequest };
var AssociateRoleToGroupResponse = /** @class */ (function (_super) {
    __extends(AssociateRoleToGroupResponse, _super);
    function AssociateRoleToGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssociateRoleToGroupResponse)
    ], AssociateRoleToGroupResponse.prototype, "associateRoleToGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateRoleToGroupResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AssociateRoleToGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateRoleToGroupResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AssociateRoleToGroupResponse.prototype, "statusCode", void 0);
    return AssociateRoleToGroupResponse;
}(SpeakeasyBase));
export { AssociateRoleToGroupResponse };
