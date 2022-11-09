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
export var PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum;
(function (PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum) {
    PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum["DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations"] = "DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations";
})(PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum || (PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsActionEnum = {}));
export var PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum;
(function (PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum) {
    PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum || (PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsVersionEnum = {}));
var PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams, _super);
    function PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams.prototype, "version", void 0);
    return PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams;
}(SpeakeasyBase));
export { PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams };
var PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders, _super);
    function PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders;
}(SpeakeasyBase));
export { PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders };
var PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest, _super);
    function PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest.prototype, "request", void 0);
    return PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest;
}(SpeakeasyBase));
export { PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest };
var PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResponse, _super);
    function PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResponse.prototype, "statusCode", void 0);
    return PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResponse;
}(SpeakeasyBase));
export { PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResponse };
