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
export var PostDescribeTrunkInterfaceAssociationsActionEnum;
(function (PostDescribeTrunkInterfaceAssociationsActionEnum) {
    PostDescribeTrunkInterfaceAssociationsActionEnum["DescribeTrunkInterfaceAssociations"] = "DescribeTrunkInterfaceAssociations";
})(PostDescribeTrunkInterfaceAssociationsActionEnum || (PostDescribeTrunkInterfaceAssociationsActionEnum = {}));
export var PostDescribeTrunkInterfaceAssociationsVersionEnum;
(function (PostDescribeTrunkInterfaceAssociationsVersionEnum) {
    PostDescribeTrunkInterfaceAssociationsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeTrunkInterfaceAssociationsVersionEnum || (PostDescribeTrunkInterfaceAssociationsVersionEnum = {}));
var PostDescribeTrunkInterfaceAssociationsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeTrunkInterfaceAssociationsQueryParams, _super);
    function PostDescribeTrunkInterfaceAssociationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeTrunkInterfaceAssociationsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeTrunkInterfaceAssociationsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeTrunkInterfaceAssociationsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeTrunkInterfaceAssociationsQueryParams.prototype, "version", void 0);
    return PostDescribeTrunkInterfaceAssociationsQueryParams;
}(SpeakeasyBase));
export { PostDescribeTrunkInterfaceAssociationsQueryParams };
var PostDescribeTrunkInterfaceAssociationsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeTrunkInterfaceAssociationsHeaders, _super);
    function PostDescribeTrunkInterfaceAssociationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeTrunkInterfaceAssociationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeTrunkInterfaceAssociationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeTrunkInterfaceAssociationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeTrunkInterfaceAssociationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeTrunkInterfaceAssociationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeTrunkInterfaceAssociationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeTrunkInterfaceAssociationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeTrunkInterfaceAssociationsHeaders;
}(SpeakeasyBase));
export { PostDescribeTrunkInterfaceAssociationsHeaders };
var PostDescribeTrunkInterfaceAssociationsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeTrunkInterfaceAssociationsRequest, _super);
    function PostDescribeTrunkInterfaceAssociationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeTrunkInterfaceAssociationsQueryParams)
    ], PostDescribeTrunkInterfaceAssociationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeTrunkInterfaceAssociationsHeaders)
    ], PostDescribeTrunkInterfaceAssociationsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeTrunkInterfaceAssociationsRequest.prototype, "request", void 0);
    return PostDescribeTrunkInterfaceAssociationsRequest;
}(SpeakeasyBase));
export { PostDescribeTrunkInterfaceAssociationsRequest };
var PostDescribeTrunkInterfaceAssociationsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeTrunkInterfaceAssociationsResponse, _super);
    function PostDescribeTrunkInterfaceAssociationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeTrunkInterfaceAssociationsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeTrunkInterfaceAssociationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeTrunkInterfaceAssociationsResponse.prototype, "statusCode", void 0);
    return PostDescribeTrunkInterfaceAssociationsResponse;
}(SpeakeasyBase));
export { PostDescribeTrunkInterfaceAssociationsResponse };
