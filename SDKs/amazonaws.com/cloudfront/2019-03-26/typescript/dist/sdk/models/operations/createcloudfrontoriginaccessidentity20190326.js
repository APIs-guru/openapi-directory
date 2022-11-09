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
var CreateCloudFrontOriginAccessIdentity20190326Headers = /** @class */ (function (_super) {
    __extends(CreateCloudFrontOriginAccessIdentity20190326Headers, _super);
    function CreateCloudFrontOriginAccessIdentity20190326Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateCloudFrontOriginAccessIdentity20190326Headers.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateCloudFrontOriginAccessIdentity20190326Headers.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateCloudFrontOriginAccessIdentity20190326Headers.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateCloudFrontOriginAccessIdentity20190326Headers.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateCloudFrontOriginAccessIdentity20190326Headers.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateCloudFrontOriginAccessIdentity20190326Headers.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateCloudFrontOriginAccessIdentity20190326Headers.prototype, "xAmzSignedHeaders", void 0);
    return CreateCloudFrontOriginAccessIdentity20190326Headers;
}(SpeakeasyBase));
export { CreateCloudFrontOriginAccessIdentity20190326Headers };
var CreateCloudFrontOriginAccessIdentity20190326Request = /** @class */ (function (_super) {
    __extends(CreateCloudFrontOriginAccessIdentity20190326Request, _super);
    function CreateCloudFrontOriginAccessIdentity20190326Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateCloudFrontOriginAccessIdentity20190326Headers)
    ], CreateCloudFrontOriginAccessIdentity20190326Request.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], CreateCloudFrontOriginAccessIdentity20190326Request.prototype, "request", void 0);
    return CreateCloudFrontOriginAccessIdentity20190326Request;
}(SpeakeasyBase));
export { CreateCloudFrontOriginAccessIdentity20190326Request };
var CreateCloudFrontOriginAccessIdentity20190326Response = /** @class */ (function (_super) {
    __extends(CreateCloudFrontOriginAccessIdentity20190326Response, _super);
    function CreateCloudFrontOriginAccessIdentity20190326Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], CreateCloudFrontOriginAccessIdentity20190326Response.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCloudFrontOriginAccessIdentity20190326Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateCloudFrontOriginAccessIdentity20190326Response.prototype, "statusCode", void 0);
    return CreateCloudFrontOriginAccessIdentity20190326Response;
}(SpeakeasyBase));
export { CreateCloudFrontOriginAccessIdentity20190326Response };
