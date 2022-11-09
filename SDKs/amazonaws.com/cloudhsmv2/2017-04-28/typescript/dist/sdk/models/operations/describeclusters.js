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
var DescribeClustersQueryParams = /** @class */ (function (_super) {
    __extends(DescribeClustersQueryParams, _super);
    function DescribeClustersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], DescribeClustersQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeClustersQueryParams.prototype, "nextToken", void 0);
    return DescribeClustersQueryParams;
}(SpeakeasyBase));
export { DescribeClustersQueryParams };
export var DescribeClustersXAmzTargetEnum;
(function (DescribeClustersXAmzTargetEnum) {
    DescribeClustersXAmzTargetEnum["BaldrApiServiceDescribeClusters"] = "BaldrApiService.DescribeClusters";
})(DescribeClustersXAmzTargetEnum || (DescribeClustersXAmzTargetEnum = {}));
var DescribeClustersHeaders = /** @class */ (function (_super) {
    __extends(DescribeClustersHeaders, _super);
    function DescribeClustersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeClustersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeClustersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeClustersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeClustersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeClustersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeClustersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeClustersHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeClustersHeaders.prototype, "xAmzTarget", void 0);
    return DescribeClustersHeaders;
}(SpeakeasyBase));
export { DescribeClustersHeaders };
var DescribeClustersRequest = /** @class */ (function (_super) {
    __extends(DescribeClustersRequest, _super);
    function DescribeClustersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeClustersQueryParams)
    ], DescribeClustersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeClustersHeaders)
    ], DescribeClustersRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeClustersRequest)
    ], DescribeClustersRequest.prototype, "request", void 0);
    return DescribeClustersRequest;
}(SpeakeasyBase));
export { DescribeClustersRequest };
var DescribeClustersResponse = /** @class */ (function (_super) {
    __extends(DescribeClustersResponse, _super);
    function DescribeClustersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeClustersResponse.prototype, "cloudHsmAccessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeClustersResponse.prototype, "cloudHsmInternalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeClustersResponse.prototype, "cloudHsmInvalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeClustersResponse.prototype, "cloudHsmServiceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeClustersResponse.prototype, "cloudHsmTagException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeClustersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeClustersResponse)
    ], DescribeClustersResponse.prototype, "describeClustersResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeClustersResponse.prototype, "statusCode", void 0);
    return DescribeClustersResponse;
}(SpeakeasyBase));
export { DescribeClustersResponse };
