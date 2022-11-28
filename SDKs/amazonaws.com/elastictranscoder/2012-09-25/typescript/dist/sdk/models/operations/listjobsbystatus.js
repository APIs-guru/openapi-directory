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
var ListJobsByStatusPathParams = /** @class */ (function (_super) {
    __extends(ListJobsByStatusPathParams, _super);
    function ListJobsByStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Status" }),
        __metadata("design:type", String)
    ], ListJobsByStatusPathParams.prototype, "status", void 0);
    return ListJobsByStatusPathParams;
}(SpeakeasyBase));
export { ListJobsByStatusPathParams };
var ListJobsByStatusQueryParams = /** @class */ (function (_super) {
    __extends(ListJobsByStatusQueryParams, _super);
    function ListJobsByStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ascending" }),
        __metadata("design:type", String)
    ], ListJobsByStatusQueryParams.prototype, "ascending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageToken" }),
        __metadata("design:type", String)
    ], ListJobsByStatusQueryParams.prototype, "pageToken", void 0);
    return ListJobsByStatusQueryParams;
}(SpeakeasyBase));
export { ListJobsByStatusQueryParams };
var ListJobsByStatusHeaders = /** @class */ (function (_super) {
    __extends(ListJobsByStatusHeaders, _super);
    function ListJobsByStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListJobsByStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListJobsByStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListJobsByStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListJobsByStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListJobsByStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListJobsByStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListJobsByStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListJobsByStatusHeaders;
}(SpeakeasyBase));
export { ListJobsByStatusHeaders };
var ListJobsByStatusRequest = /** @class */ (function (_super) {
    __extends(ListJobsByStatusRequest, _super);
    function ListJobsByStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListJobsByStatusPathParams)
    ], ListJobsByStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListJobsByStatusQueryParams)
    ], ListJobsByStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListJobsByStatusHeaders)
    ], ListJobsByStatusRequest.prototype, "headers", void 0);
    return ListJobsByStatusRequest;
}(SpeakeasyBase));
export { ListJobsByStatusRequest };
var ListJobsByStatusResponse = /** @class */ (function (_super) {
    __extends(ListJobsByStatusResponse, _super);
    function ListJobsByStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobsByStatusResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListJobsByStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobsByStatusResponse.prototype, "incompatibleVersionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobsByStatusResponse.prototype, "internalServiceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListJobsByStatusResponse)
    ], ListJobsByStatusResponse.prototype, "listJobsByStatusResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobsByStatusResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListJobsByStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListJobsByStatusResponse.prototype, "validationException", void 0);
    return ListJobsByStatusResponse;
}(SpeakeasyBase));
export { ListJobsByStatusResponse };
