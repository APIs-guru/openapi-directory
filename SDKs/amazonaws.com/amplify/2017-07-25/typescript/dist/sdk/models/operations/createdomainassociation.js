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
var CreateDomainAssociationPathParams = /** @class */ (function (_super) {
    __extends(CreateDomainAssociationPathParams, _super);
    function CreateDomainAssociationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], CreateDomainAssociationPathParams.prototype, "appId", void 0);
    return CreateDomainAssociationPathParams;
}(SpeakeasyBase));
export { CreateDomainAssociationPathParams };
var CreateDomainAssociationHeaders = /** @class */ (function (_super) {
    __extends(CreateDomainAssociationHeaders, _super);
    function CreateDomainAssociationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDomainAssociationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDomainAssociationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDomainAssociationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDomainAssociationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDomainAssociationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDomainAssociationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDomainAssociationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateDomainAssociationHeaders;
}(SpeakeasyBase));
export { CreateDomainAssociationHeaders };
var CreateDomainAssociationRequestBody = /** @class */ (function (_super) {
    __extends(CreateDomainAssociationRequestBody, _super);
    function CreateDomainAssociationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoSubDomainCreationPatterns" }),
        __metadata("design:type", Array)
    ], CreateDomainAssociationRequestBody.prototype, "autoSubDomainCreationPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoSubDomainIAMRole" }),
        __metadata("design:type", String)
    ], CreateDomainAssociationRequestBody.prototype, "autoSubDomainIamRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainName" }),
        __metadata("design:type", String)
    ], CreateDomainAssociationRequestBody.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAutoSubDomain" }),
        __metadata("design:type", Boolean)
    ], CreateDomainAssociationRequestBody.prototype, "enableAutoSubDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subDomainSettings", elemType: shared.SubDomainSetting }),
        __metadata("design:type", Array)
    ], CreateDomainAssociationRequestBody.prototype, "subDomainSettings", void 0);
    return CreateDomainAssociationRequestBody;
}(SpeakeasyBase));
export { CreateDomainAssociationRequestBody };
var CreateDomainAssociationRequest = /** @class */ (function (_super) {
    __extends(CreateDomainAssociationRequest, _super);
    function CreateDomainAssociationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomainAssociationPathParams)
    ], CreateDomainAssociationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomainAssociationHeaders)
    ], CreateDomainAssociationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDomainAssociationRequestBody)
    ], CreateDomainAssociationRequest.prototype, "request", void 0);
    return CreateDomainAssociationRequest;
}(SpeakeasyBase));
export { CreateDomainAssociationRequest };
var CreateDomainAssociationResponse = /** @class */ (function (_super) {
    __extends(CreateDomainAssociationResponse, _super);
    function CreateDomainAssociationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainAssociationResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDomainAssociationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateDomainAssociationResult)
    ], CreateDomainAssociationResponse.prototype, "createDomainAssociationResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainAssociationResponse.prototype, "dependentServiceFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainAssociationResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainAssociationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainAssociationResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDomainAssociationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateDomainAssociationResponse.prototype, "unauthorizedException", void 0);
    return CreateDomainAssociationResponse;
}(SpeakeasyBase));
export { CreateDomainAssociationResponse };
