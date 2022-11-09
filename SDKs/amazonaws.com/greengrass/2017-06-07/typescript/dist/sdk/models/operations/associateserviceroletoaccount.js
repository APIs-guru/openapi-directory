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
var AssociateServiceRoleToAccountHeaders = /** @class */ (function (_super) {
    __extends(AssociateServiceRoleToAccountHeaders, _super);
    function AssociateServiceRoleToAccountHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AssociateServiceRoleToAccountHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AssociateServiceRoleToAccountHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AssociateServiceRoleToAccountHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AssociateServiceRoleToAccountHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AssociateServiceRoleToAccountHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AssociateServiceRoleToAccountHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AssociateServiceRoleToAccountHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AssociateServiceRoleToAccountHeaders;
}(SpeakeasyBase));
export { AssociateServiceRoleToAccountHeaders };
var AssociateServiceRoleToAccountRequestBody = /** @class */ (function (_super) {
    __extends(AssociateServiceRoleToAccountRequestBody, _super);
    function AssociateServiceRoleToAccountRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], AssociateServiceRoleToAccountRequestBody.prototype, "roleArn", void 0);
    return AssociateServiceRoleToAccountRequestBody;
}(SpeakeasyBase));
export { AssociateServiceRoleToAccountRequestBody };
var AssociateServiceRoleToAccountRequest = /** @class */ (function (_super) {
    __extends(AssociateServiceRoleToAccountRequest, _super);
    function AssociateServiceRoleToAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AssociateServiceRoleToAccountHeaders)
    ], AssociateServiceRoleToAccountRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssociateServiceRoleToAccountRequestBody)
    ], AssociateServiceRoleToAccountRequest.prototype, "request", void 0);
    return AssociateServiceRoleToAccountRequest;
}(SpeakeasyBase));
export { AssociateServiceRoleToAccountRequest };
var AssociateServiceRoleToAccountResponse = /** @class */ (function (_super) {
    __extends(AssociateServiceRoleToAccountResponse, _super);
    function AssociateServiceRoleToAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AssociateServiceRoleToAccountResponse)
    ], AssociateServiceRoleToAccountResponse.prototype, "associateServiceRoleToAccountResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateServiceRoleToAccountResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AssociateServiceRoleToAccountResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateServiceRoleToAccountResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AssociateServiceRoleToAccountResponse.prototype, "statusCode", void 0);
    return AssociateServiceRoleToAccountResponse;
}(SpeakeasyBase));
export { AssociateServiceRoleToAccountResponse };
