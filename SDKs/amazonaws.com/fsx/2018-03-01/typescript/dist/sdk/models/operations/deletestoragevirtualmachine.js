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
export var DeleteStorageVirtualMachineXAmzTargetEnum;
(function (DeleteStorageVirtualMachineXAmzTargetEnum) {
    DeleteStorageVirtualMachineXAmzTargetEnum["AwsSimbaApiServiceV20180301DeleteStorageVirtualMachine"] = "AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine";
})(DeleteStorageVirtualMachineXAmzTargetEnum || (DeleteStorageVirtualMachineXAmzTargetEnum = {}));
var DeleteStorageVirtualMachineHeaders = /** @class */ (function (_super) {
    __extends(DeleteStorageVirtualMachineHeaders, _super);
    function DeleteStorageVirtualMachineHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteStorageVirtualMachineHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteStorageVirtualMachineHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteStorageVirtualMachineHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteStorageVirtualMachineHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteStorageVirtualMachineHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteStorageVirtualMachineHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteStorageVirtualMachineHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteStorageVirtualMachineHeaders.prototype, "xAmzTarget", void 0);
    return DeleteStorageVirtualMachineHeaders;
}(SpeakeasyBase));
export { DeleteStorageVirtualMachineHeaders };
var DeleteStorageVirtualMachineRequest = /** @class */ (function (_super) {
    __extends(DeleteStorageVirtualMachineRequest, _super);
    function DeleteStorageVirtualMachineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteStorageVirtualMachineHeaders)
    ], DeleteStorageVirtualMachineRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteStorageVirtualMachineRequest)
    ], DeleteStorageVirtualMachineRequest.prototype, "request", void 0);
    return DeleteStorageVirtualMachineRequest;
}(SpeakeasyBase));
export { DeleteStorageVirtualMachineRequest };
var DeleteStorageVirtualMachineResponse = /** @class */ (function (_super) {
    __extends(DeleteStorageVirtualMachineResponse, _super);
    function DeleteStorageVirtualMachineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteStorageVirtualMachineResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteStorageVirtualMachineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteStorageVirtualMachineResponse)
    ], DeleteStorageVirtualMachineResponse.prototype, "deleteStorageVirtualMachineResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteStorageVirtualMachineResponse.prototype, "incompatibleParameterError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteStorageVirtualMachineResponse.prototype, "internalServerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteStorageVirtualMachineResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteStorageVirtualMachineResponse.prototype, "storageVirtualMachineNotFound", void 0);
    return DeleteStorageVirtualMachineResponse;
}(SpeakeasyBase));
export { DeleteStorageVirtualMachineResponse };
