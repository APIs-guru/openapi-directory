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
export var GetBlockPublicAccessConfigurationXAmzTargetEnum;
(function (GetBlockPublicAccessConfigurationXAmzTargetEnum) {
    GetBlockPublicAccessConfigurationXAmzTargetEnum["ElasticMapReduceGetBlockPublicAccessConfiguration"] = "ElasticMapReduce.GetBlockPublicAccessConfiguration";
})(GetBlockPublicAccessConfigurationXAmzTargetEnum || (GetBlockPublicAccessConfigurationXAmzTargetEnum = {}));
var GetBlockPublicAccessConfigurationHeaders = /** @class */ (function (_super) {
    __extends(GetBlockPublicAccessConfigurationHeaders, _super);
    function GetBlockPublicAccessConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetBlockPublicAccessConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetBlockPublicAccessConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetBlockPublicAccessConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetBlockPublicAccessConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetBlockPublicAccessConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetBlockPublicAccessConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetBlockPublicAccessConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetBlockPublicAccessConfigurationHeaders.prototype, "xAmzTarget", void 0);
    return GetBlockPublicAccessConfigurationHeaders;
}(SpeakeasyBase));
export { GetBlockPublicAccessConfigurationHeaders };
var GetBlockPublicAccessConfigurationRequest = /** @class */ (function (_super) {
    __extends(GetBlockPublicAccessConfigurationRequest, _super);
    function GetBlockPublicAccessConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBlockPublicAccessConfigurationHeaders)
    ], GetBlockPublicAccessConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], GetBlockPublicAccessConfigurationRequest.prototype, "request", void 0);
    return GetBlockPublicAccessConfigurationRequest;
}(SpeakeasyBase));
export { GetBlockPublicAccessConfigurationRequest };
var GetBlockPublicAccessConfigurationResponse = /** @class */ (function (_super) {
    __extends(GetBlockPublicAccessConfigurationResponse, _super);
    function GetBlockPublicAccessConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBlockPublicAccessConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetBlockPublicAccessConfigurationOutput)
    ], GetBlockPublicAccessConfigurationResponse.prototype, "getBlockPublicAccessConfigurationOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBlockPublicAccessConfigurationResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetBlockPublicAccessConfigurationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBlockPublicAccessConfigurationResponse.prototype, "statusCode", void 0);
    return GetBlockPublicAccessConfigurationResponse;
}(SpeakeasyBase));
export { GetBlockPublicAccessConfigurationResponse };
