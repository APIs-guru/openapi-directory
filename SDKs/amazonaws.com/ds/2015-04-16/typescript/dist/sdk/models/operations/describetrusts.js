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
export var DescribeTrustsXAmzTargetEnum;
(function (DescribeTrustsXAmzTargetEnum) {
    DescribeTrustsXAmzTargetEnum["DirectoryService20150416DescribeTrusts"] = "DirectoryService_20150416.DescribeTrusts";
})(DescribeTrustsXAmzTargetEnum || (DescribeTrustsXAmzTargetEnum = {}));
var DescribeTrustsHeaders = /** @class */ (function (_super) {
    __extends(DescribeTrustsHeaders, _super);
    function DescribeTrustsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeTrustsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeTrustsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeTrustsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeTrustsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeTrustsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeTrustsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeTrustsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeTrustsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeTrustsHeaders;
}(SpeakeasyBase));
export { DescribeTrustsHeaders };
var DescribeTrustsRequest = /** @class */ (function (_super) {
    __extends(DescribeTrustsRequest, _super);
    function DescribeTrustsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeTrustsHeaders)
    ], DescribeTrustsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeTrustsRequest)
    ], DescribeTrustsRequest.prototype, "request", void 0);
    return DescribeTrustsRequest;
}(SpeakeasyBase));
export { DescribeTrustsRequest };
var DescribeTrustsResponse = /** @class */ (function (_super) {
    __extends(DescribeTrustsResponse, _super);
    function DescribeTrustsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeTrustsResponse.prototype, "clientException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeTrustsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeTrustsResult)
    ], DescribeTrustsResponse.prototype, "describeTrustsResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeTrustsResponse.prototype, "entityDoesNotExistException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeTrustsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeTrustsResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeTrustsResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeTrustsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeTrustsResponse.prototype, "unsupportedOperationException", void 0);
    return DescribeTrustsResponse;
}(SpeakeasyBase));
export { DescribeTrustsResponse };
