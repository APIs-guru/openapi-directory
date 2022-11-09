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
export var PostModifyVpcPeeringConnectionOptionsActionEnum;
(function (PostModifyVpcPeeringConnectionOptionsActionEnum) {
    PostModifyVpcPeeringConnectionOptionsActionEnum["ModifyVpcPeeringConnectionOptions"] = "ModifyVpcPeeringConnectionOptions";
})(PostModifyVpcPeeringConnectionOptionsActionEnum || (PostModifyVpcPeeringConnectionOptionsActionEnum = {}));
export var PostModifyVpcPeeringConnectionOptionsVersionEnum;
(function (PostModifyVpcPeeringConnectionOptionsVersionEnum) {
    PostModifyVpcPeeringConnectionOptionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifyVpcPeeringConnectionOptionsVersionEnum || (PostModifyVpcPeeringConnectionOptionsVersionEnum = {}));
var PostModifyVpcPeeringConnectionOptionsQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyVpcPeeringConnectionOptionsQueryParams, _super);
    function PostModifyVpcPeeringConnectionOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyVpcPeeringConnectionOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyVpcPeeringConnectionOptionsQueryParams.prototype, "version", void 0);
    return PostModifyVpcPeeringConnectionOptionsQueryParams;
}(SpeakeasyBase));
export { PostModifyVpcPeeringConnectionOptionsQueryParams };
var PostModifyVpcPeeringConnectionOptionsHeaders = /** @class */ (function (_super) {
    __extends(PostModifyVpcPeeringConnectionOptionsHeaders, _super);
    function PostModifyVpcPeeringConnectionOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyVpcPeeringConnectionOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyVpcPeeringConnectionOptionsHeaders;
}(SpeakeasyBase));
export { PostModifyVpcPeeringConnectionOptionsHeaders };
var PostModifyVpcPeeringConnectionOptionsRequest = /** @class */ (function (_super) {
    __extends(PostModifyVpcPeeringConnectionOptionsRequest, _super);
    function PostModifyVpcPeeringConnectionOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyVpcPeeringConnectionOptionsQueryParams)
    ], PostModifyVpcPeeringConnectionOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostModifyVpcPeeringConnectionOptionsHeaders)
    ], PostModifyVpcPeeringConnectionOptionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyVpcPeeringConnectionOptionsRequest.prototype, "request", void 0);
    return PostModifyVpcPeeringConnectionOptionsRequest;
}(SpeakeasyBase));
export { PostModifyVpcPeeringConnectionOptionsRequest };
var PostModifyVpcPeeringConnectionOptionsResponse = /** @class */ (function (_super) {
    __extends(PostModifyVpcPeeringConnectionOptionsResponse, _super);
    function PostModifyVpcPeeringConnectionOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyVpcPeeringConnectionOptionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostModifyVpcPeeringConnectionOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostModifyVpcPeeringConnectionOptionsResponse.prototype, "statusCode", void 0);
    return PostModifyVpcPeeringConnectionOptionsResponse;
}(SpeakeasyBase));
export { PostModifyVpcPeeringConnectionOptionsResponse };
