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
var UpdateDomainAssociationPathParams = /** @class */ (function (_super) {
    __extends(UpdateDomainAssociationPathParams, _super);
    function UpdateDomainAssociationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], UpdateDomainAssociationPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], UpdateDomainAssociationPathParams.prototype, "domainName", void 0);
    return UpdateDomainAssociationPathParams;
}(SpeakeasyBase));
export { UpdateDomainAssociationPathParams };
var UpdateDomainAssociationHeaders = /** @class */ (function (_super) {
    __extends(UpdateDomainAssociationHeaders, _super);
    function UpdateDomainAssociationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDomainAssociationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDomainAssociationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDomainAssociationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDomainAssociationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDomainAssociationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDomainAssociationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDomainAssociationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDomainAssociationHeaders;
}(SpeakeasyBase));
export { UpdateDomainAssociationHeaders };
var UpdateDomainAssociationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDomainAssociationRequestBody, _super);
    function UpdateDomainAssociationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoSubDomainCreationPatterns" }),
        __metadata("design:type", Array)
    ], UpdateDomainAssociationRequestBody.prototype, "autoSubDomainCreationPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoSubDomainIAMRole" }),
        __metadata("design:type", String)
    ], UpdateDomainAssociationRequestBody.prototype, "autoSubDomainIamRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAutoSubDomain" }),
        __metadata("design:type", Boolean)
    ], UpdateDomainAssociationRequestBody.prototype, "enableAutoSubDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subDomainSettings", elemType: shared.SubDomainSetting }),
        __metadata("design:type", Array)
    ], UpdateDomainAssociationRequestBody.prototype, "subDomainSettings", void 0);
    return UpdateDomainAssociationRequestBody;
}(SpeakeasyBase));
export { UpdateDomainAssociationRequestBody };
var UpdateDomainAssociationRequest = /** @class */ (function (_super) {
    __extends(UpdateDomainAssociationRequest, _super);
    function UpdateDomainAssociationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainAssociationPathParams)
    ], UpdateDomainAssociationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainAssociationHeaders)
    ], UpdateDomainAssociationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDomainAssociationRequestBody)
    ], UpdateDomainAssociationRequest.prototype, "request", void 0);
    return UpdateDomainAssociationRequest;
}(SpeakeasyBase));
export { UpdateDomainAssociationRequest };
var UpdateDomainAssociationResponse = /** @class */ (function (_super) {
    __extends(UpdateDomainAssociationResponse, _super);
    function UpdateDomainAssociationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainAssociationResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDomainAssociationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainAssociationResponse.prototype, "dependentServiceFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainAssociationResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainAssociationResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDomainAssociationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateDomainAssociationResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateDomainAssociationResult)
    ], UpdateDomainAssociationResponse.prototype, "updateDomainAssociationResult", void 0);
    return UpdateDomainAssociationResponse;
}(SpeakeasyBase));
export { UpdateDomainAssociationResponse };
