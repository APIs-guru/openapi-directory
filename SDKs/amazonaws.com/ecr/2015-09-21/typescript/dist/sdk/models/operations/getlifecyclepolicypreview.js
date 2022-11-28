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
var GetLifecyclePolicyPreviewQueryParams = /** @class */ (function (_super) {
    __extends(GetLifecyclePolicyPreviewQueryParams, _super);
    function GetLifecyclePolicyPreviewQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], GetLifecyclePolicyPreviewQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], GetLifecyclePolicyPreviewQueryParams.prototype, "nextToken", void 0);
    return GetLifecyclePolicyPreviewQueryParams;
}(SpeakeasyBase));
export { GetLifecyclePolicyPreviewQueryParams };
export var GetLifecyclePolicyPreviewXAmzTargetEnum;
(function (GetLifecyclePolicyPreviewXAmzTargetEnum) {
    GetLifecyclePolicyPreviewXAmzTargetEnum["AmazonEc2ContainerRegistryV20150921GetLifecyclePolicyPreview"] = "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview";
})(GetLifecyclePolicyPreviewXAmzTargetEnum || (GetLifecyclePolicyPreviewXAmzTargetEnum = {}));
var GetLifecyclePolicyPreviewHeaders = /** @class */ (function (_super) {
    __extends(GetLifecyclePolicyPreviewHeaders, _super);
    function GetLifecyclePolicyPreviewHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetLifecyclePolicyPreviewHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetLifecyclePolicyPreviewHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetLifecyclePolicyPreviewHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetLifecyclePolicyPreviewHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetLifecyclePolicyPreviewHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetLifecyclePolicyPreviewHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetLifecyclePolicyPreviewHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetLifecyclePolicyPreviewHeaders.prototype, "xAmzTarget", void 0);
    return GetLifecyclePolicyPreviewHeaders;
}(SpeakeasyBase));
export { GetLifecyclePolicyPreviewHeaders };
var GetLifecyclePolicyPreviewRequest = /** @class */ (function (_super) {
    __extends(GetLifecyclePolicyPreviewRequest, _super);
    function GetLifecyclePolicyPreviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLifecyclePolicyPreviewQueryParams)
    ], GetLifecyclePolicyPreviewRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLifecyclePolicyPreviewHeaders)
    ], GetLifecyclePolicyPreviewRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetLifecyclePolicyPreviewRequest)
    ], GetLifecyclePolicyPreviewRequest.prototype, "request", void 0);
    return GetLifecyclePolicyPreviewRequest;
}(SpeakeasyBase));
export { GetLifecyclePolicyPreviewRequest };
var GetLifecyclePolicyPreviewResponse = /** @class */ (function (_super) {
    __extends(GetLifecyclePolicyPreviewResponse, _super);
    function GetLifecyclePolicyPreviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLifecyclePolicyPreviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetLifecyclePolicyPreviewResponse)
    ], GetLifecyclePolicyPreviewResponse.prototype, "getLifecyclePolicyPreviewResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLifecyclePolicyPreviewResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLifecyclePolicyPreviewResponse.prototype, "lifecyclePolicyPreviewNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLifecyclePolicyPreviewResponse.prototype, "repositoryNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLifecyclePolicyPreviewResponse.prototype, "serverException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLifecyclePolicyPreviewResponse.prototype, "statusCode", void 0);
    return GetLifecyclePolicyPreviewResponse;
}(SpeakeasyBase));
export { GetLifecyclePolicyPreviewResponse };
