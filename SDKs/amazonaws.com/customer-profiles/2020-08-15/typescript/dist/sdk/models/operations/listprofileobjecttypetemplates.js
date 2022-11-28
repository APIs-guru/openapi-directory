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
var ListProfileObjectTypeTemplatesQueryParams = /** @class */ (function (_super) {
    __extends(ListProfileObjectTypeTemplatesQueryParams, _super);
    function ListProfileObjectTypeTemplatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], ListProfileObjectTypeTemplatesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next-token" }),
        __metadata("design:type", String)
    ], ListProfileObjectTypeTemplatesQueryParams.prototype, "nextToken", void 0);
    return ListProfileObjectTypeTemplatesQueryParams;
}(SpeakeasyBase));
export { ListProfileObjectTypeTemplatesQueryParams };
var ListProfileObjectTypeTemplatesHeaders = /** @class */ (function (_super) {
    __extends(ListProfileObjectTypeTemplatesHeaders, _super);
    function ListProfileObjectTypeTemplatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListProfileObjectTypeTemplatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListProfileObjectTypeTemplatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListProfileObjectTypeTemplatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListProfileObjectTypeTemplatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListProfileObjectTypeTemplatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListProfileObjectTypeTemplatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListProfileObjectTypeTemplatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListProfileObjectTypeTemplatesHeaders;
}(SpeakeasyBase));
export { ListProfileObjectTypeTemplatesHeaders };
var ListProfileObjectTypeTemplatesRequest = /** @class */ (function (_super) {
    __extends(ListProfileObjectTypeTemplatesRequest, _super);
    function ListProfileObjectTypeTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListProfileObjectTypeTemplatesQueryParams)
    ], ListProfileObjectTypeTemplatesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListProfileObjectTypeTemplatesHeaders)
    ], ListProfileObjectTypeTemplatesRequest.prototype, "headers", void 0);
    return ListProfileObjectTypeTemplatesRequest;
}(SpeakeasyBase));
export { ListProfileObjectTypeTemplatesRequest };
var ListProfileObjectTypeTemplatesResponse = /** @class */ (function (_super) {
    __extends(ListProfileObjectTypeTemplatesResponse, _super);
    function ListProfileObjectTypeTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileObjectTypeTemplatesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileObjectTypeTemplatesResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListProfileObjectTypeTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileObjectTypeTemplatesResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListProfileObjectTypeTemplatesResponse)
    ], ListProfileObjectTypeTemplatesResponse.prototype, "listProfileObjectTypeTemplatesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileObjectTypeTemplatesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListProfileObjectTypeTemplatesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProfileObjectTypeTemplatesResponse.prototype, "throttlingException", void 0);
    return ListProfileObjectTypeTemplatesResponse;
}(SpeakeasyBase));
export { ListProfileObjectTypeTemplatesResponse };
