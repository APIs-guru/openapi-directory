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
var AddTagsToVaultPathParams = /** @class */ (function (_super) {
    __extends(AddTagsToVaultPathParams, _super);
    function AddTagsToVaultPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AddTagsToVaultPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultName" }),
        __metadata("design:type", String)
    ], AddTagsToVaultPathParams.prototype, "vaultName", void 0);
    return AddTagsToVaultPathParams;
}(SpeakeasyBase));
export { AddTagsToVaultPathParams };
export var AddTagsToVaultOperationEnum;
(function (AddTagsToVaultOperationEnum) {
    AddTagsToVaultOperationEnum["Add"] = "add";
})(AddTagsToVaultOperationEnum || (AddTagsToVaultOperationEnum = {}));
var AddTagsToVaultQueryParams = /** @class */ (function (_super) {
    __extends(AddTagsToVaultQueryParams, _super);
    function AddTagsToVaultQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=operation" }),
        __metadata("design:type", String)
    ], AddTagsToVaultQueryParams.prototype, "operation", void 0);
    return AddTagsToVaultQueryParams;
}(SpeakeasyBase));
export { AddTagsToVaultQueryParams };
var AddTagsToVaultHeaders = /** @class */ (function (_super) {
    __extends(AddTagsToVaultHeaders, _super);
    function AddTagsToVaultHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AddTagsToVaultHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AddTagsToVaultHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AddTagsToVaultHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AddTagsToVaultHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AddTagsToVaultHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AddTagsToVaultHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AddTagsToVaultHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AddTagsToVaultHeaders;
}(SpeakeasyBase));
export { AddTagsToVaultHeaders };
var AddTagsToVaultRequestBody = /** @class */ (function (_super) {
    __extends(AddTagsToVaultRequestBody, _super);
    function AddTagsToVaultRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], AddTagsToVaultRequestBody.prototype, "tags", void 0);
    return AddTagsToVaultRequestBody;
}(SpeakeasyBase));
export { AddTagsToVaultRequestBody };
var AddTagsToVaultRequest = /** @class */ (function (_super) {
    __extends(AddTagsToVaultRequest, _super);
    function AddTagsToVaultRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddTagsToVaultPathParams)
    ], AddTagsToVaultRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddTagsToVaultQueryParams)
    ], AddTagsToVaultRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddTagsToVaultHeaders)
    ], AddTagsToVaultRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddTagsToVaultRequestBody)
    ], AddTagsToVaultRequest.prototype, "request", void 0);
    return AddTagsToVaultRequest;
}(SpeakeasyBase));
export { AddTagsToVaultRequest };
var AddTagsToVaultResponse = /** @class */ (function (_super) {
    __extends(AddTagsToVaultResponse, _super);
    function AddTagsToVaultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddTagsToVaultResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddTagsToVaultResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddTagsToVaultResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddTagsToVaultResponse.prototype, "missingParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddTagsToVaultResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddTagsToVaultResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddTagsToVaultResponse.prototype, "statusCode", void 0);
    return AddTagsToVaultResponse;
}(SpeakeasyBase));
export { AddTagsToVaultResponse };
