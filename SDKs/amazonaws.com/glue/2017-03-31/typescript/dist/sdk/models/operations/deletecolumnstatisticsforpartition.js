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
export var DeleteColumnStatisticsForPartitionXAmzTargetEnum;
(function (DeleteColumnStatisticsForPartitionXAmzTargetEnum) {
    DeleteColumnStatisticsForPartitionXAmzTargetEnum["AwsGlueDeleteColumnStatisticsForPartition"] = "AWSGlue.DeleteColumnStatisticsForPartition";
})(DeleteColumnStatisticsForPartitionXAmzTargetEnum || (DeleteColumnStatisticsForPartitionXAmzTargetEnum = {}));
var DeleteColumnStatisticsForPartitionHeaders = /** @class */ (function (_super) {
    __extends(DeleteColumnStatisticsForPartitionHeaders, _super);
    function DeleteColumnStatisticsForPartitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForPartitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForPartitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForPartitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForPartitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForPartitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForPartitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForPartitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForPartitionHeaders.prototype, "xAmzTarget", void 0);
    return DeleteColumnStatisticsForPartitionHeaders;
}(SpeakeasyBase));
export { DeleteColumnStatisticsForPartitionHeaders };
var DeleteColumnStatisticsForPartitionRequest = /** @class */ (function (_super) {
    __extends(DeleteColumnStatisticsForPartitionRequest, _super);
    function DeleteColumnStatisticsForPartitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteColumnStatisticsForPartitionHeaders)
    ], DeleteColumnStatisticsForPartitionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteColumnStatisticsForPartitionRequest)
    ], DeleteColumnStatisticsForPartitionRequest.prototype, "request", void 0);
    return DeleteColumnStatisticsForPartitionRequest;
}(SpeakeasyBase));
export { DeleteColumnStatisticsForPartitionRequest };
var DeleteColumnStatisticsForPartitionResponse = /** @class */ (function (_super) {
    __extends(DeleteColumnStatisticsForPartitionResponse, _super);
    function DeleteColumnStatisticsForPartitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForPartitionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteColumnStatisticsForPartitionResponse.prototype, "deleteColumnStatisticsForPartitionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteColumnStatisticsForPartitionResponse.prototype, "entityNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteColumnStatisticsForPartitionResponse.prototype, "glueEncryptionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteColumnStatisticsForPartitionResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteColumnStatisticsForPartitionResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteColumnStatisticsForPartitionResponse.prototype, "operationTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteColumnStatisticsForPartitionResponse.prototype, "statusCode", void 0);
    return DeleteColumnStatisticsForPartitionResponse;
}(SpeakeasyBase));
export { DeleteColumnStatisticsForPartitionResponse };
