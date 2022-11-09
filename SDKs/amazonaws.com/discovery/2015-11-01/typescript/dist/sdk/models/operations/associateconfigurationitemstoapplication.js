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
export var AssociateConfigurationItemsToApplicationXAmzTargetEnum;
(function (AssociateConfigurationItemsToApplicationXAmzTargetEnum) {
    AssociateConfigurationItemsToApplicationXAmzTargetEnum["AwsPoseidonServiceV20151101AssociateConfigurationItemsToApplication"] = "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication";
})(AssociateConfigurationItemsToApplicationXAmzTargetEnum || (AssociateConfigurationItemsToApplicationXAmzTargetEnum = {}));
var AssociateConfigurationItemsToApplicationHeaders = /** @class */ (function (_super) {
    __extends(AssociateConfigurationItemsToApplicationHeaders, _super);
    function AssociateConfigurationItemsToApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AssociateConfigurationItemsToApplicationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AssociateConfigurationItemsToApplicationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AssociateConfigurationItemsToApplicationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AssociateConfigurationItemsToApplicationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AssociateConfigurationItemsToApplicationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AssociateConfigurationItemsToApplicationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AssociateConfigurationItemsToApplicationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], AssociateConfigurationItemsToApplicationHeaders.prototype, "xAmzTarget", void 0);
    return AssociateConfigurationItemsToApplicationHeaders;
}(SpeakeasyBase));
export { AssociateConfigurationItemsToApplicationHeaders };
var AssociateConfigurationItemsToApplicationRequest = /** @class */ (function (_super) {
    __extends(AssociateConfigurationItemsToApplicationRequest, _super);
    function AssociateConfigurationItemsToApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AssociateConfigurationItemsToApplicationHeaders)
    ], AssociateConfigurationItemsToApplicationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AssociateConfigurationItemsToApplicationRequest)
    ], AssociateConfigurationItemsToApplicationRequest.prototype, "request", void 0);
    return AssociateConfigurationItemsToApplicationRequest;
}(SpeakeasyBase));
export { AssociateConfigurationItemsToApplicationRequest };
var AssociateConfigurationItemsToApplicationResponse = /** @class */ (function (_super) {
    __extends(AssociateConfigurationItemsToApplicationResponse, _super);
    function AssociateConfigurationItemsToApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], AssociateConfigurationItemsToApplicationResponse.prototype, "associateConfigurationItemsToApplicationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateConfigurationItemsToApplicationResponse.prototype, "authorizationErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AssociateConfigurationItemsToApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateConfigurationItemsToApplicationResponse.prototype, "homeRegionNotSetException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateConfigurationItemsToApplicationResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateConfigurationItemsToApplicationResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], AssociateConfigurationItemsToApplicationResponse.prototype, "serverInternalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AssociateConfigurationItemsToApplicationResponse.prototype, "statusCode", void 0);
    return AssociateConfigurationItemsToApplicationResponse;
}(SpeakeasyBase));
export { AssociateConfigurationItemsToApplicationResponse };
