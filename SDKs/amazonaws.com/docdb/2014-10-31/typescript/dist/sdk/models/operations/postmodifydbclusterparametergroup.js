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
export var PostModifyDbClusterParameterGroupActionEnum;
(function (PostModifyDbClusterParameterGroupActionEnum) {
    PostModifyDbClusterParameterGroupActionEnum["ModifyDbClusterParameterGroup"] = "ModifyDBClusterParameterGroup";
})(PostModifyDbClusterParameterGroupActionEnum || (PostModifyDbClusterParameterGroupActionEnum = {}));
export var PostModifyDbClusterParameterGroupVersionEnum;
(function (PostModifyDbClusterParameterGroupVersionEnum) {
    PostModifyDbClusterParameterGroupVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostModifyDbClusterParameterGroupVersionEnum || (PostModifyDbClusterParameterGroupVersionEnum = {}));
var PostModifyDbClusterParameterGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyDbClusterParameterGroupQueryParams, _super);
    function PostModifyDbClusterParameterGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterParameterGroupQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterParameterGroupQueryParams.prototype, "version", void 0);
    return PostModifyDbClusterParameterGroupQueryParams;
}(SpeakeasyBase));
export { PostModifyDbClusterParameterGroupQueryParams };
var PostModifyDbClusterParameterGroupHeaders = /** @class */ (function (_super) {
    __extends(PostModifyDbClusterParameterGroupHeaders, _super);
    function PostModifyDbClusterParameterGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterParameterGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterParameterGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterParameterGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterParameterGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterParameterGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterParameterGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterParameterGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyDbClusterParameterGroupHeaders;
}(SpeakeasyBase));
export { PostModifyDbClusterParameterGroupHeaders };
var PostModifyDbClusterParameterGroupRequest = /** @class */ (function (_super) {
    __extends(PostModifyDbClusterParameterGroupRequest, _super);
    function PostModifyDbClusterParameterGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyDbClusterParameterGroupQueryParams)
    ], PostModifyDbClusterParameterGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyDbClusterParameterGroupHeaders)
    ], PostModifyDbClusterParameterGroupRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyDbClusterParameterGroupRequest.prototype, "request", void 0);
    return PostModifyDbClusterParameterGroupRequest;
}(SpeakeasyBase));
export { PostModifyDbClusterParameterGroupRequest };
var PostModifyDbClusterParameterGroupResponse = /** @class */ (function (_super) {
    __extends(PostModifyDbClusterParameterGroupResponse, _super);
    function PostModifyDbClusterParameterGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyDbClusterParameterGroupResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostModifyDbClusterParameterGroupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostModifyDbClusterParameterGroupResponse.prototype, "statusCode", void 0);
    return PostModifyDbClusterParameterGroupResponse;
}(SpeakeasyBase));
export { PostModifyDbClusterParameterGroupResponse };
