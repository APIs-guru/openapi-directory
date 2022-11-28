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
var DescribeCodeCoveragesQueryParams = /** @class */ (function (_super) {
    __extends(DescribeCodeCoveragesQueryParams, _super);
    function DescribeCodeCoveragesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], DescribeCodeCoveragesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeCodeCoveragesQueryParams.prototype, "nextToken", void 0);
    return DescribeCodeCoveragesQueryParams;
}(SpeakeasyBase));
export { DescribeCodeCoveragesQueryParams };
export var DescribeCodeCoveragesXAmzTargetEnum;
(function (DescribeCodeCoveragesXAmzTargetEnum) {
    DescribeCodeCoveragesXAmzTargetEnum["CodeBuild20161006DescribeCodeCoverages"] = "CodeBuild_20161006.DescribeCodeCoverages";
})(DescribeCodeCoveragesXAmzTargetEnum || (DescribeCodeCoveragesXAmzTargetEnum = {}));
var DescribeCodeCoveragesHeaders = /** @class */ (function (_super) {
    __extends(DescribeCodeCoveragesHeaders, _super);
    function DescribeCodeCoveragesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeCodeCoveragesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeCodeCoveragesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeCodeCoveragesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeCodeCoveragesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeCodeCoveragesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeCodeCoveragesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeCodeCoveragesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeCodeCoveragesHeaders.prototype, "xAmzTarget", void 0);
    return DescribeCodeCoveragesHeaders;
}(SpeakeasyBase));
export { DescribeCodeCoveragesHeaders };
var DescribeCodeCoveragesRequest = /** @class */ (function (_super) {
    __extends(DescribeCodeCoveragesRequest, _super);
    function DescribeCodeCoveragesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeCodeCoveragesQueryParams)
    ], DescribeCodeCoveragesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeCodeCoveragesHeaders)
    ], DescribeCodeCoveragesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeCodeCoveragesInput)
    ], DescribeCodeCoveragesRequest.prototype, "request", void 0);
    return DescribeCodeCoveragesRequest;
}(SpeakeasyBase));
export { DescribeCodeCoveragesRequest };
var DescribeCodeCoveragesResponse = /** @class */ (function (_super) {
    __extends(DescribeCodeCoveragesResponse, _super);
    function DescribeCodeCoveragesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeCodeCoveragesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeCodeCoveragesOutput)
    ], DescribeCodeCoveragesResponse.prototype, "describeCodeCoveragesOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeCodeCoveragesResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeCodeCoveragesResponse.prototype, "statusCode", void 0);
    return DescribeCodeCoveragesResponse;
}(SpeakeasyBase));
export { DescribeCodeCoveragesResponse };
