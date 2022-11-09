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
export var DisassociateCustomDomainXAmzTargetEnum;
(function (DisassociateCustomDomainXAmzTargetEnum) {
    DisassociateCustomDomainXAmzTargetEnum["AppRunnerDisassociateCustomDomain"] = "AppRunner.DisassociateCustomDomain";
})(DisassociateCustomDomainXAmzTargetEnum || (DisassociateCustomDomainXAmzTargetEnum = {}));
var DisassociateCustomDomainHeaders = /** @class */ (function (_super) {
    __extends(DisassociateCustomDomainHeaders, _super);
    function DisassociateCustomDomainHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateCustomDomainHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateCustomDomainHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateCustomDomainHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateCustomDomainHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateCustomDomainHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateCustomDomainHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateCustomDomainHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DisassociateCustomDomainHeaders.prototype, "xAmzTarget", void 0);
    return DisassociateCustomDomainHeaders;
}(SpeakeasyBase));
export { DisassociateCustomDomainHeaders };
var DisassociateCustomDomainRequest = /** @class */ (function (_super) {
    __extends(DisassociateCustomDomainRequest, _super);
    function DisassociateCustomDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DisassociateCustomDomainHeaders)
    ], DisassociateCustomDomainRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DisassociateCustomDomainRequest)
    ], DisassociateCustomDomainRequest.prototype, "request", void 0);
    return DisassociateCustomDomainRequest;
}(SpeakeasyBase));
export { DisassociateCustomDomainRequest };
var DisassociateCustomDomainResponse = /** @class */ (function (_super) {
    __extends(DisassociateCustomDomainResponse, _super);
    function DisassociateCustomDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DisassociateCustomDomainResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DisassociateCustomDomainResponse)
    ], DisassociateCustomDomainResponse.prototype, "disassociateCustomDomainResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateCustomDomainResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateCustomDomainResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateCustomDomainResponse.prototype, "invalidStateException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateCustomDomainResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DisassociateCustomDomainResponse.prototype, "statusCode", void 0);
    return DisassociateCustomDomainResponse;
}(SpeakeasyBase));
export { DisassociateCustomDomainResponse };
