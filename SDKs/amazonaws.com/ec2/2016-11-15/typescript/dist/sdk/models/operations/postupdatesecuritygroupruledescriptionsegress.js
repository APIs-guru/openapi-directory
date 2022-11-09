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
export var PostUpdateSecurityGroupRuleDescriptionsEgressActionEnum;
(function (PostUpdateSecurityGroupRuleDescriptionsEgressActionEnum) {
    PostUpdateSecurityGroupRuleDescriptionsEgressActionEnum["UpdateSecurityGroupRuleDescriptionsEgress"] = "UpdateSecurityGroupRuleDescriptionsEgress";
})(PostUpdateSecurityGroupRuleDescriptionsEgressActionEnum || (PostUpdateSecurityGroupRuleDescriptionsEgressActionEnum = {}));
export var PostUpdateSecurityGroupRuleDescriptionsEgressVersionEnum;
(function (PostUpdateSecurityGroupRuleDescriptionsEgressVersionEnum) {
    PostUpdateSecurityGroupRuleDescriptionsEgressVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostUpdateSecurityGroupRuleDescriptionsEgressVersionEnum || (PostUpdateSecurityGroupRuleDescriptionsEgressVersionEnum = {}));
var PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams, _super);
    function PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams.prototype, "version", void 0);
    return PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams;
}(SpeakeasyBase));
export { PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams };
var PostUpdateSecurityGroupRuleDescriptionsEgressHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateSecurityGroupRuleDescriptionsEgressHeaders, _super);
    function PostUpdateSecurityGroupRuleDescriptionsEgressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateSecurityGroupRuleDescriptionsEgressHeaders;
}(SpeakeasyBase));
export { PostUpdateSecurityGroupRuleDescriptionsEgressHeaders };
var PostUpdateSecurityGroupRuleDescriptionsEgressRequest = /** @class */ (function (_super) {
    __extends(PostUpdateSecurityGroupRuleDescriptionsEgressRequest, _super);
    function PostUpdateSecurityGroupRuleDescriptionsEgressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateSecurityGroupRuleDescriptionsEgressHeaders)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressRequest.prototype, "request", void 0);
    return PostUpdateSecurityGroupRuleDescriptionsEgressRequest;
}(SpeakeasyBase));
export { PostUpdateSecurityGroupRuleDescriptionsEgressRequest };
var PostUpdateSecurityGroupRuleDescriptionsEgressResponse = /** @class */ (function (_super) {
    __extends(PostUpdateSecurityGroupRuleDescriptionsEgressResponse, _super);
    function PostUpdateSecurityGroupRuleDescriptionsEgressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUpdateSecurityGroupRuleDescriptionsEgressResponse.prototype, "statusCode", void 0);
    return PostUpdateSecurityGroupRuleDescriptionsEgressResponse;
}(SpeakeasyBase));
export { PostUpdateSecurityGroupRuleDescriptionsEgressResponse };
