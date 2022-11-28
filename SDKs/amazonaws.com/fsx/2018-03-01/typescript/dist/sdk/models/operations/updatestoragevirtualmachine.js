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
export var UpdateStorageVirtualMachineXAmzTargetEnum;
(function (UpdateStorageVirtualMachineXAmzTargetEnum) {
    UpdateStorageVirtualMachineXAmzTargetEnum["AwsSimbaApiServiceV20180301UpdateStorageVirtualMachine"] = "AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine";
})(UpdateStorageVirtualMachineXAmzTargetEnum || (UpdateStorageVirtualMachineXAmzTargetEnum = {}));
var UpdateStorageVirtualMachineHeaders = /** @class */ (function (_super) {
    __extends(UpdateStorageVirtualMachineHeaders, _super);
    function UpdateStorageVirtualMachineHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateStorageVirtualMachineHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateStorageVirtualMachineHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateStorageVirtualMachineHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateStorageVirtualMachineHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateStorageVirtualMachineHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateStorageVirtualMachineHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateStorageVirtualMachineHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], UpdateStorageVirtualMachineHeaders.prototype, "xAmzTarget", void 0);
    return UpdateStorageVirtualMachineHeaders;
}(SpeakeasyBase));
export { UpdateStorageVirtualMachineHeaders };
var UpdateStorageVirtualMachineRequest = /** @class */ (function (_super) {
    __extends(UpdateStorageVirtualMachineRequest, _super);
    function UpdateStorageVirtualMachineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateStorageVirtualMachineHeaders)
    ], UpdateStorageVirtualMachineRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateStorageVirtualMachineRequest)
    ], UpdateStorageVirtualMachineRequest.prototype, "request", void 0);
    return UpdateStorageVirtualMachineRequest;
}(SpeakeasyBase));
export { UpdateStorageVirtualMachineRequest };
var UpdateStorageVirtualMachineResponse = /** @class */ (function (_super) {
    __extends(UpdateStorageVirtualMachineResponse, _super);
    function UpdateStorageVirtualMachineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStorageVirtualMachineResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateStorageVirtualMachineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStorageVirtualMachineResponse.prototype, "incompatibleParameterError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStorageVirtualMachineResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateStorageVirtualMachineResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStorageVirtualMachineResponse.prototype, "storageVirtualMachineNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStorageVirtualMachineResponse.prototype, "unsupportedOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateStorageVirtualMachineResponse)
    ], UpdateStorageVirtualMachineResponse.prototype, "updateStorageVirtualMachineResponse", void 0);
    return UpdateStorageVirtualMachineResponse;
}(SpeakeasyBase));
export { UpdateStorageVirtualMachineResponse };
