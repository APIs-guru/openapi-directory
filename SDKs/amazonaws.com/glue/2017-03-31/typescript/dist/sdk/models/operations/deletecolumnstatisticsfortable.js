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
export var DeleteColumnStatisticsForTableXAmzTargetEnum;
(function (DeleteColumnStatisticsForTableXAmzTargetEnum) {
    DeleteColumnStatisticsForTableXAmzTargetEnum["AwsGlueDeleteColumnStatisticsForTable"] = "AWSGlue.DeleteColumnStatisticsForTable";
})(DeleteColumnStatisticsForTableXAmzTargetEnum || (DeleteColumnStatisticsForTableXAmzTargetEnum = {}));
var DeleteColumnStatisticsForTableHeaders = /** @class */ (function (_super) {
    __extends(DeleteColumnStatisticsForTableHeaders, _super);
    function DeleteColumnStatisticsForTableHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForTableHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForTableHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForTableHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForTableHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForTableHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForTableHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForTableHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForTableHeaders.prototype, "xAmzTarget", void 0);
    return DeleteColumnStatisticsForTableHeaders;
}(SpeakeasyBase));
export { DeleteColumnStatisticsForTableHeaders };
var DeleteColumnStatisticsForTableRequest = /** @class */ (function (_super) {
    __extends(DeleteColumnStatisticsForTableRequest, _super);
    function DeleteColumnStatisticsForTableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteColumnStatisticsForTableHeaders)
    ], DeleteColumnStatisticsForTableRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteColumnStatisticsForTableRequest)
    ], DeleteColumnStatisticsForTableRequest.prototype, "request", void 0);
    return DeleteColumnStatisticsForTableRequest;
}(SpeakeasyBase));
export { DeleteColumnStatisticsForTableRequest };
var DeleteColumnStatisticsForTableResponse = /** @class */ (function (_super) {
    __extends(DeleteColumnStatisticsForTableResponse, _super);
    function DeleteColumnStatisticsForTableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteColumnStatisticsForTableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteColumnStatisticsForTableResponse.prototype, "deleteColumnStatisticsForTableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteColumnStatisticsForTableResponse.prototype, "entityNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteColumnStatisticsForTableResponse.prototype, "glueEncryptionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteColumnStatisticsForTableResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteColumnStatisticsForTableResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteColumnStatisticsForTableResponse.prototype, "operationTimeoutException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteColumnStatisticsForTableResponse.prototype, "statusCode", void 0);
    return DeleteColumnStatisticsForTableResponse;
}(SpeakeasyBase));
export { DeleteColumnStatisticsForTableResponse };
