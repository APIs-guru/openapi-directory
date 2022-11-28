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
export var DescribeRulesPackagesXAmzTargetEnum;
(function (DescribeRulesPackagesXAmzTargetEnum) {
    DescribeRulesPackagesXAmzTargetEnum["InspectorServiceDescribeRulesPackages"] = "InspectorService.DescribeRulesPackages";
})(DescribeRulesPackagesXAmzTargetEnum || (DescribeRulesPackagesXAmzTargetEnum = {}));
var DescribeRulesPackagesHeaders = /** @class */ (function (_super) {
    __extends(DescribeRulesPackagesHeaders, _super);
    function DescribeRulesPackagesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeRulesPackagesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeRulesPackagesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeRulesPackagesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeRulesPackagesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeRulesPackagesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeRulesPackagesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeRulesPackagesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeRulesPackagesHeaders.prototype, "xAmzTarget", void 0);
    return DescribeRulesPackagesHeaders;
}(SpeakeasyBase));
export { DescribeRulesPackagesHeaders };
var DescribeRulesPackagesRequest = /** @class */ (function (_super) {
    __extends(DescribeRulesPackagesRequest, _super);
    function DescribeRulesPackagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DescribeRulesPackagesHeaders)
    ], DescribeRulesPackagesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeRulesPackagesRequest)
    ], DescribeRulesPackagesRequest.prototype, "request", void 0);
    return DescribeRulesPackagesRequest;
}(SpeakeasyBase));
export { DescribeRulesPackagesRequest };
var DescribeRulesPackagesResponse = /** @class */ (function (_super) {
    __extends(DescribeRulesPackagesResponse, _super);
    function DescribeRulesPackagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DescribeRulesPackagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DescribeRulesPackagesResponse)
    ], DescribeRulesPackagesResponse.prototype, "describeRulesPackagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeRulesPackagesResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DescribeRulesPackagesResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DescribeRulesPackagesResponse.prototype, "statusCode", void 0);
    return DescribeRulesPackagesResponse;
}(SpeakeasyBase));
export { DescribeRulesPackagesResponse };
