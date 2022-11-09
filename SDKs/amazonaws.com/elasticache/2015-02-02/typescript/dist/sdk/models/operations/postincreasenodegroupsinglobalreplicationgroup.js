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
export var PostIncreaseNodeGroupsInGlobalReplicationGroupActionEnum;
(function (PostIncreaseNodeGroupsInGlobalReplicationGroupActionEnum) {
    PostIncreaseNodeGroupsInGlobalReplicationGroupActionEnum["IncreaseNodeGroupsInGlobalReplicationGroup"] = "IncreaseNodeGroupsInGlobalReplicationGroup";
})(PostIncreaseNodeGroupsInGlobalReplicationGroupActionEnum || (PostIncreaseNodeGroupsInGlobalReplicationGroupActionEnum = {}));
export var PostIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum;
(function (PostIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum) {
    PostIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum || (PostIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum = {}));
var PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams, _super);
    function PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams.prototype, "version", void 0);
    return PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams;
}(SpeakeasyBase));
export { PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams };
var PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders = /** @class */ (function (_super) {
    __extends(PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders, _super);
    function PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders;
}(SpeakeasyBase));
export { PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders };
var PostIncreaseNodeGroupsInGlobalReplicationGroupRequest = /** @class */ (function (_super) {
    __extends(PostIncreaseNodeGroupsInGlobalReplicationGroupRequest, _super);
    function PostIncreaseNodeGroupsInGlobalReplicationGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupRequest.prototype, "request", void 0);
    return PostIncreaseNodeGroupsInGlobalReplicationGroupRequest;
}(SpeakeasyBase));
export { PostIncreaseNodeGroupsInGlobalReplicationGroupRequest };
var PostIncreaseNodeGroupsInGlobalReplicationGroupResponse = /** @class */ (function (_super) {
    __extends(PostIncreaseNodeGroupsInGlobalReplicationGroupResponse, _super);
    function PostIncreaseNodeGroupsInGlobalReplicationGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostIncreaseNodeGroupsInGlobalReplicationGroupResponse.prototype, "statusCode", void 0);
    return PostIncreaseNodeGroupsInGlobalReplicationGroupResponse;
}(SpeakeasyBase));
export { PostIncreaseNodeGroupsInGlobalReplicationGroupResponse };
