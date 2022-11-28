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
export var PostModifyReplicationGroupShardConfigurationActionEnum;
(function (PostModifyReplicationGroupShardConfigurationActionEnum) {
    PostModifyReplicationGroupShardConfigurationActionEnum["ModifyReplicationGroupShardConfiguration"] = "ModifyReplicationGroupShardConfiguration";
})(PostModifyReplicationGroupShardConfigurationActionEnum || (PostModifyReplicationGroupShardConfigurationActionEnum = {}));
export var PostModifyReplicationGroupShardConfigurationVersionEnum;
(function (PostModifyReplicationGroupShardConfigurationVersionEnum) {
    PostModifyReplicationGroupShardConfigurationVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostModifyReplicationGroupShardConfigurationVersionEnum || (PostModifyReplicationGroupShardConfigurationVersionEnum = {}));
var PostModifyReplicationGroupShardConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyReplicationGroupShardConfigurationQueryParams, _super);
    function PostModifyReplicationGroupShardConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupShardConfigurationQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupShardConfigurationQueryParams.prototype, "version", void 0);
    return PostModifyReplicationGroupShardConfigurationQueryParams;
}(SpeakeasyBase));
export { PostModifyReplicationGroupShardConfigurationQueryParams };
var PostModifyReplicationGroupShardConfigurationHeaders = /** @class */ (function (_super) {
    __extends(PostModifyReplicationGroupShardConfigurationHeaders, _super);
    function PostModifyReplicationGroupShardConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupShardConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupShardConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupShardConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupShardConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupShardConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupShardConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupShardConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyReplicationGroupShardConfigurationHeaders;
}(SpeakeasyBase));
export { PostModifyReplicationGroupShardConfigurationHeaders };
var PostModifyReplicationGroupShardConfigurationRequest = /** @class */ (function (_super) {
    __extends(PostModifyReplicationGroupShardConfigurationRequest, _super);
    function PostModifyReplicationGroupShardConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyReplicationGroupShardConfigurationQueryParams)
    ], PostModifyReplicationGroupShardConfigurationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyReplicationGroupShardConfigurationHeaders)
    ], PostModifyReplicationGroupShardConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyReplicationGroupShardConfigurationRequest.prototype, "request", void 0);
    return PostModifyReplicationGroupShardConfigurationRequest;
}(SpeakeasyBase));
export { PostModifyReplicationGroupShardConfigurationRequest };
var PostModifyReplicationGroupShardConfigurationResponse = /** @class */ (function (_super) {
    __extends(PostModifyReplicationGroupShardConfigurationResponse, _super);
    function PostModifyReplicationGroupShardConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyReplicationGroupShardConfigurationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupShardConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostModifyReplicationGroupShardConfigurationResponse.prototype, "statusCode", void 0);
    return PostModifyReplicationGroupShardConfigurationResponse;
}(SpeakeasyBase));
export { PostModifyReplicationGroupShardConfigurationResponse };
