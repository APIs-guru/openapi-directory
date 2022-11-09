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
var ListDocumentClassifiersQueryParams = /** @class */ (function (_super) {
    __extends(ListDocumentClassifiersQueryParams, _super);
    function ListDocumentClassifiersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListDocumentClassifiersQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListDocumentClassifiersQueryParams.prototype, "nextToken", void 0);
    return ListDocumentClassifiersQueryParams;
}(SpeakeasyBase));
export { ListDocumentClassifiersQueryParams };
export var ListDocumentClassifiersXAmzTargetEnum;
(function (ListDocumentClassifiersXAmzTargetEnum) {
    ListDocumentClassifiersXAmzTargetEnum["Comprehend20171127ListDocumentClassifiers"] = "Comprehend_20171127.ListDocumentClassifiers";
})(ListDocumentClassifiersXAmzTargetEnum || (ListDocumentClassifiersXAmzTargetEnum = {}));
var ListDocumentClassifiersHeaders = /** @class */ (function (_super) {
    __extends(ListDocumentClassifiersHeaders, _super);
    function ListDocumentClassifiersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDocumentClassifiersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDocumentClassifiersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDocumentClassifiersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDocumentClassifiersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDocumentClassifiersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDocumentClassifiersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDocumentClassifiersHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListDocumentClassifiersHeaders.prototype, "xAmzTarget", void 0);
    return ListDocumentClassifiersHeaders;
}(SpeakeasyBase));
export { ListDocumentClassifiersHeaders };
var ListDocumentClassifiersRequest = /** @class */ (function (_super) {
    __extends(ListDocumentClassifiersRequest, _super);
    function ListDocumentClassifiersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListDocumentClassifiersQueryParams)
    ], ListDocumentClassifiersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDocumentClassifiersHeaders)
    ], ListDocumentClassifiersRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListDocumentClassifiersRequest)
    ], ListDocumentClassifiersRequest.prototype, "request", void 0);
    return ListDocumentClassifiersRequest;
}(SpeakeasyBase));
export { ListDocumentClassifiersRequest };
var ListDocumentClassifiersResponse = /** @class */ (function (_super) {
    __extends(ListDocumentClassifiersResponse, _super);
    function ListDocumentClassifiersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDocumentClassifiersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDocumentClassifiersResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDocumentClassifiersResponse.prototype, "invalidFilterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDocumentClassifiersResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListDocumentClassifiersResponse)
    ], ListDocumentClassifiersResponse.prototype, "listDocumentClassifiersResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDocumentClassifiersResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListDocumentClassifiersResponse.prototype, "tooManyRequestsException", void 0);
    return ListDocumentClassifiersResponse;
}(SpeakeasyBase));
export { ListDocumentClassifiersResponse };
