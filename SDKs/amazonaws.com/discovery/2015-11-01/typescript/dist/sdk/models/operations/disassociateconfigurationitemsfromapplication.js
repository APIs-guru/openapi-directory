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
export var DisassociateConfigurationItemsFromApplicationXAmzTargetEnum;
(function (DisassociateConfigurationItemsFromApplicationXAmzTargetEnum) {
    DisassociateConfigurationItemsFromApplicationXAmzTargetEnum["AwsPoseidonServiceV20151101DisassociateConfigurationItemsFromApplication"] = "AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication";
})(DisassociateConfigurationItemsFromApplicationXAmzTargetEnum || (DisassociateConfigurationItemsFromApplicationXAmzTargetEnum = {}));
var DisassociateConfigurationItemsFromApplicationHeaders = /** @class */ (function (_super) {
    __extends(DisassociateConfigurationItemsFromApplicationHeaders, _super);
    function DisassociateConfigurationItemsFromApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateConfigurationItemsFromApplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateConfigurationItemsFromApplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateConfigurationItemsFromApplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateConfigurationItemsFromApplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateConfigurationItemsFromApplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateConfigurationItemsFromApplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateConfigurationItemsFromApplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DisassociateConfigurationItemsFromApplicationHeaders.prototype, "xAmzTarget", void 0);
    return DisassociateConfigurationItemsFromApplicationHeaders;
}(SpeakeasyBase));
export { DisassociateConfigurationItemsFromApplicationHeaders };
var DisassociateConfigurationItemsFromApplicationRequest = /** @class */ (function (_super) {
    __extends(DisassociateConfigurationItemsFromApplicationRequest, _super);
    function DisassociateConfigurationItemsFromApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisassociateConfigurationItemsFromApplicationHeaders)
    ], DisassociateConfigurationItemsFromApplicationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DisassociateConfigurationItemsFromApplicationRequest)
    ], DisassociateConfigurationItemsFromApplicationRequest.prototype, "request", void 0);
    return DisassociateConfigurationItemsFromApplicationRequest;
}(SpeakeasyBase));
export { DisassociateConfigurationItemsFromApplicationRequest };
var DisassociateConfigurationItemsFromApplicationResponse = /** @class */ (function (_super) {
    __extends(DisassociateConfigurationItemsFromApplicationResponse, _super);
    function DisassociateConfigurationItemsFromApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateConfigurationItemsFromApplicationResponse.prototype, "authorizationErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisassociateConfigurationItemsFromApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DisassociateConfigurationItemsFromApplicationResponse.prototype, "disassociateConfigurationItemsFromApplicationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateConfigurationItemsFromApplicationResponse.prototype, "homeRegionNotSetException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateConfigurationItemsFromApplicationResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateConfigurationItemsFromApplicationResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DisassociateConfigurationItemsFromApplicationResponse.prototype, "serverInternalErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisassociateConfigurationItemsFromApplicationResponse.prototype, "statusCode", void 0);
    return DisassociateConfigurationItemsFromApplicationResponse;
}(SpeakeasyBase));
export { DisassociateConfigurationItemsFromApplicationResponse };
