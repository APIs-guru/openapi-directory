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
export var ListTagsForCertificateXAmzTargetEnum;
(function (ListTagsForCertificateXAmzTargetEnum) {
    ListTagsForCertificateXAmzTargetEnum["CertificateManagerListTagsForCertificate"] = "CertificateManager.ListTagsForCertificate";
})(ListTagsForCertificateXAmzTargetEnum || (ListTagsForCertificateXAmzTargetEnum = {}));
var ListTagsForCertificateHeaders = /** @class */ (function (_super) {
    __extends(ListTagsForCertificateHeaders, _super);
    function ListTagsForCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTagsForCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTagsForCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTagsForCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTagsForCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTagsForCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTagsForCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTagsForCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListTagsForCertificateHeaders.prototype, "xAmzTarget", void 0);
    return ListTagsForCertificateHeaders;
}(SpeakeasyBase));
export { ListTagsForCertificateHeaders };
var ListTagsForCertificateRequest = /** @class */ (function (_super) {
    __extends(ListTagsForCertificateRequest, _super);
    function ListTagsForCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListTagsForCertificateHeaders)
    ], ListTagsForCertificateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListTagsForCertificateRequest)
    ], ListTagsForCertificateRequest.prototype, "request", void 0);
    return ListTagsForCertificateRequest;
}(SpeakeasyBase));
export { ListTagsForCertificateRequest };
var ListTagsForCertificateResponse = /** @class */ (function (_super) {
    __extends(ListTagsForCertificateResponse, _super);
    function ListTagsForCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListTagsForCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTagsForCertificateResponse.prototype, "invalidArnException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTagsForCertificateResponse)
    ], ListTagsForCertificateResponse.prototype, "listTagsForCertificateResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListTagsForCertificateResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListTagsForCertificateResponse.prototype, "statusCode", void 0);
    return ListTagsForCertificateResponse;
}(SpeakeasyBase));
export { ListTagsForCertificateResponse };
