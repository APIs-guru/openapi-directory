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
var BulkPublishPathParams = /** @class */ (function (_super) {
    __extends(BulkPublishPathParams, _super);
    function BulkPublishPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" }),
        __metadata("design:type", String)
    ], BulkPublishPathParams.prototype, "identityPoolId", void 0);
    return BulkPublishPathParams;
}(SpeakeasyBase));
export { BulkPublishPathParams };
var BulkPublishHeaders = /** @class */ (function (_super) {
    __extends(BulkPublishHeaders, _super);
    function BulkPublishHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BulkPublishHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BulkPublishHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BulkPublishHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BulkPublishHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BulkPublishHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BulkPublishHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BulkPublishHeaders.prototype, "xAmzSignedHeaders", void 0);
    return BulkPublishHeaders;
}(SpeakeasyBase));
export { BulkPublishHeaders };
var BulkPublishRequest = /** @class */ (function (_super) {
    __extends(BulkPublishRequest, _super);
    function BulkPublishRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BulkPublishPathParams)
    ], BulkPublishRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BulkPublishHeaders)
    ], BulkPublishRequest.prototype, "headers", void 0);
    return BulkPublishRequest;
}(SpeakeasyBase));
export { BulkPublishRequest };
var BulkPublishResponse = /** @class */ (function (_super) {
    __extends(BulkPublishResponse, _super);
    function BulkPublishResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BulkPublishResponse.prototype, "alreadyStreamedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BulkPublishResponse)
    ], BulkPublishResponse.prototype, "bulkPublishResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BulkPublishResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BulkPublishResponse.prototype, "duplicateRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BulkPublishResponse.prototype, "internalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BulkPublishResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BulkPublishResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], BulkPublishResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BulkPublishResponse.prototype, "statusCode", void 0);
    return BulkPublishResponse;
}(SpeakeasyBase));
export { BulkPublishResponse };
