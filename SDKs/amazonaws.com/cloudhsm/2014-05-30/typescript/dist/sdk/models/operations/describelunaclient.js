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
export var DescribeLunaClientXAmzTargetEnum;
(function (DescribeLunaClientXAmzTargetEnum) {
    DescribeLunaClientXAmzTargetEnum["CloudHsmFrontendServiceDescribeLunaClient"] = "CloudHsmFrontendService.DescribeLunaClient";
})(DescribeLunaClientXAmzTargetEnum || (DescribeLunaClientXAmzTargetEnum = {}));
var DescribeLunaClientHeaders = /** @class */ (function (_super) {
    __extends(DescribeLunaClientHeaders, _super);
    function DescribeLunaClientHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeLunaClientHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeLunaClientHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeLunaClientHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeLunaClientHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeLunaClientHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeLunaClientHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeLunaClientHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeLunaClientHeaders.prototype, "xAmzTarget", void 0);
    return DescribeLunaClientHeaders;
}(SpeakeasyBase));
export { DescribeLunaClientHeaders };
var DescribeLunaClientRequest = /** @class */ (function (_super) {
    __extends(DescribeLunaClientRequest, _super);
    function DescribeLunaClientRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeLunaClientHeaders)
    ], DescribeLunaClientRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeLunaClientRequest)
    ], DescribeLunaClientRequest.prototype, "request", void 0);
    return DescribeLunaClientRequest;
}(SpeakeasyBase));
export { DescribeLunaClientRequest };
var DescribeLunaClientResponse = /** @class */ (function (_super) {
    __extends(DescribeLunaClientResponse, _super);
    function DescribeLunaClientResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeLunaClientResponse.prototype, "cloudHsmInternalException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeLunaClientResponse.prototype, "cloudHsmServiceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeLunaClientResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeLunaClientResponse)
    ], DescribeLunaClientResponse.prototype, "describeLunaClientResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeLunaClientResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeLunaClientResponse.prototype, "statusCode", void 0);
    return DescribeLunaClientResponse;
}(SpeakeasyBase));
export { DescribeLunaClientResponse };
