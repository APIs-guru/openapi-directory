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
export var GetRepositoryPolicyXAmzTargetEnum;
(function (GetRepositoryPolicyXAmzTargetEnum) {
    GetRepositoryPolicyXAmzTargetEnum["SpencerFrontendServiceGetRepositoryPolicy"] = "SpencerFrontendService.GetRepositoryPolicy";
})(GetRepositoryPolicyXAmzTargetEnum || (GetRepositoryPolicyXAmzTargetEnum = {}));
var GetRepositoryPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetRepositoryPolicyHeaders, _super);
    function GetRepositoryPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRepositoryPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRepositoryPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRepositoryPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRepositoryPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRepositoryPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRepositoryPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRepositoryPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetRepositoryPolicyHeaders.prototype, "xAmzTarget", void 0);
    return GetRepositoryPolicyHeaders;
}(SpeakeasyBase));
export { GetRepositoryPolicyHeaders };
var GetRepositoryPolicyRequest = /** @class */ (function (_super) {
    __extends(GetRepositoryPolicyRequest, _super);
    function GetRepositoryPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRepositoryPolicyHeaders)
    ], GetRepositoryPolicyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetRepositoryPolicyRequest)
    ], GetRepositoryPolicyRequest.prototype, "request", void 0);
    return GetRepositoryPolicyRequest;
}(SpeakeasyBase));
export { GetRepositoryPolicyRequest };
var GetRepositoryPolicyResponse = /** @class */ (function (_super) {
    __extends(GetRepositoryPolicyResponse, _super);
    function GetRepositoryPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRepositoryPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetRepositoryPolicyResponse)
    ], GetRepositoryPolicyResponse.prototype, "getRepositoryPolicyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetRepositoryPolicyResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetRepositoryPolicyResponse.prototype, "repositoryNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetRepositoryPolicyResponse.prototype, "repositoryPolicyNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetRepositoryPolicyResponse.prototype, "serverException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRepositoryPolicyResponse.prototype, "statusCode", void 0);
    return GetRepositoryPolicyResponse;
}(SpeakeasyBase));
export { GetRepositoryPolicyResponse };
