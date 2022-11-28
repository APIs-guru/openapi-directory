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
var ListCloudFrontOriginAccessIdentities20180618QueryParams = /** @class */ (function (_super) {
    __extends(ListCloudFrontOriginAccessIdentities20180618QueryParams, _super);
    function ListCloudFrontOriginAccessIdentities20180618QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], ListCloudFrontOriginAccessIdentities20180618QueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], ListCloudFrontOriginAccessIdentities20180618QueryParams.prototype, "maxItems", void 0);
    return ListCloudFrontOriginAccessIdentities20180618QueryParams;
}(SpeakeasyBase));
export { ListCloudFrontOriginAccessIdentities20180618QueryParams };
var ListCloudFrontOriginAccessIdentities20180618Headers = /** @class */ (function (_super) {
    __extends(ListCloudFrontOriginAccessIdentities20180618Headers, _super);
    function ListCloudFrontOriginAccessIdentities20180618Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListCloudFrontOriginAccessIdentities20180618Headers.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListCloudFrontOriginAccessIdentities20180618Headers.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListCloudFrontOriginAccessIdentities20180618Headers.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListCloudFrontOriginAccessIdentities20180618Headers.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListCloudFrontOriginAccessIdentities20180618Headers.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListCloudFrontOriginAccessIdentities20180618Headers.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListCloudFrontOriginAccessIdentities20180618Headers.prototype, "xAmzSignedHeaders", void 0);
    return ListCloudFrontOriginAccessIdentities20180618Headers;
}(SpeakeasyBase));
export { ListCloudFrontOriginAccessIdentities20180618Headers };
var ListCloudFrontOriginAccessIdentities20180618Request = /** @class */ (function (_super) {
    __extends(ListCloudFrontOriginAccessIdentities20180618Request, _super);
    function ListCloudFrontOriginAccessIdentities20180618Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCloudFrontOriginAccessIdentities20180618QueryParams)
    ], ListCloudFrontOriginAccessIdentities20180618Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCloudFrontOriginAccessIdentities20180618Headers)
    ], ListCloudFrontOriginAccessIdentities20180618Request.prototype, "headers", void 0);
    return ListCloudFrontOriginAccessIdentities20180618Request;
}(SpeakeasyBase));
export { ListCloudFrontOriginAccessIdentities20180618Request };
var ListCloudFrontOriginAccessIdentities20180618Response = /** @class */ (function (_super) {
    __extends(ListCloudFrontOriginAccessIdentities20180618Response, _super);
    function ListCloudFrontOriginAccessIdentities20180618Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ListCloudFrontOriginAccessIdentities20180618Response.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListCloudFrontOriginAccessIdentities20180618Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListCloudFrontOriginAccessIdentities20180618Response.prototype, "statusCode", void 0);
    return ListCloudFrontOriginAccessIdentities20180618Response;
}(SpeakeasyBase));
export { ListCloudFrontOriginAccessIdentities20180618Response };
