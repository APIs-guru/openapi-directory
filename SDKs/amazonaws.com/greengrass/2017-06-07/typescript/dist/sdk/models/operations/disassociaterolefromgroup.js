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
var DisassociateRoleFromGroupPathParams = /** @class */ (function (_super) {
    __extends(DisassociateRoleFromGroupPathParams, _super);
    function DisassociateRoleFromGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=GroupId" }),
        __metadata("design:type", String)
    ], DisassociateRoleFromGroupPathParams.prototype, "groupId", void 0);
    return DisassociateRoleFromGroupPathParams;
}(SpeakeasyBase));
export { DisassociateRoleFromGroupPathParams };
var DisassociateRoleFromGroupHeaders = /** @class */ (function (_super) {
    __extends(DisassociateRoleFromGroupHeaders, _super);
    function DisassociateRoleFromGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateRoleFromGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateRoleFromGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateRoleFromGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateRoleFromGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateRoleFromGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateRoleFromGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateRoleFromGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DisassociateRoleFromGroupHeaders;
}(SpeakeasyBase));
export { DisassociateRoleFromGroupHeaders };
var DisassociateRoleFromGroupRequest = /** @class */ (function (_super) {
    __extends(DisassociateRoleFromGroupRequest, _super);
    function DisassociateRoleFromGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DisassociateRoleFromGroupPathParams)
    ], DisassociateRoleFromGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DisassociateRoleFromGroupHeaders)
    ], DisassociateRoleFromGroupRequest.prototype, "headers", void 0);
    return DisassociateRoleFromGroupRequest;
}(SpeakeasyBase));
export { DisassociateRoleFromGroupRequest };
var DisassociateRoleFromGroupResponse = /** @class */ (function (_super) {
    __extends(DisassociateRoleFromGroupResponse, _super);
    function DisassociateRoleFromGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateRoleFromGroupResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DisassociateRoleFromGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DisassociateRoleFromGroupResponse)
    ], DisassociateRoleFromGroupResponse.prototype, "disassociateRoleFromGroupResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateRoleFromGroupResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DisassociateRoleFromGroupResponse.prototype, "statusCode", void 0);
    return DisassociateRoleFromGroupResponse;
}(SpeakeasyBase));
export { DisassociateRoleFromGroupResponse };
