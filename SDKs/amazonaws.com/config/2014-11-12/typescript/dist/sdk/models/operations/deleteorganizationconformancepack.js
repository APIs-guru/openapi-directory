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
export var DeleteOrganizationConformancePackXAmzTargetEnum;
(function (DeleteOrganizationConformancePackXAmzTargetEnum) {
    DeleteOrganizationConformancePackXAmzTargetEnum["StarlingDoveServiceDeleteOrganizationConformancePack"] = "StarlingDoveService.DeleteOrganizationConformancePack";
})(DeleteOrganizationConformancePackXAmzTargetEnum || (DeleteOrganizationConformancePackXAmzTargetEnum = {}));
var DeleteOrganizationConformancePackHeaders = /** @class */ (function (_super) {
    __extends(DeleteOrganizationConformancePackHeaders, _super);
    function DeleteOrganizationConformancePackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteOrganizationConformancePackHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteOrganizationConformancePackHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteOrganizationConformancePackHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteOrganizationConformancePackHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteOrganizationConformancePackHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteOrganizationConformancePackHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteOrganizationConformancePackHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteOrganizationConformancePackHeaders.prototype, "xAmzTarget", void 0);
    return DeleteOrganizationConformancePackHeaders;
}(SpeakeasyBase));
export { DeleteOrganizationConformancePackHeaders };
var DeleteOrganizationConformancePackRequest = /** @class */ (function (_super) {
    __extends(DeleteOrganizationConformancePackRequest, _super);
    function DeleteOrganizationConformancePackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteOrganizationConformancePackHeaders)
    ], DeleteOrganizationConformancePackRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteOrganizationConformancePackRequest)
    ], DeleteOrganizationConformancePackRequest.prototype, "request", void 0);
    return DeleteOrganizationConformancePackRequest;
}(SpeakeasyBase));
export { DeleteOrganizationConformancePackRequest };
var DeleteOrganizationConformancePackResponse = /** @class */ (function (_super) {
    __extends(DeleteOrganizationConformancePackResponse, _super);
    function DeleteOrganizationConformancePackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteOrganizationConformancePackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteOrganizationConformancePackResponse.prototype, "noSuchOrganizationConformancePackException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteOrganizationConformancePackResponse.prototype, "organizationAccessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteOrganizationConformancePackResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteOrganizationConformancePackResponse.prototype, "statusCode", void 0);
    return DeleteOrganizationConformancePackResponse;
}(SpeakeasyBase));
export { DeleteOrganizationConformancePackResponse };
