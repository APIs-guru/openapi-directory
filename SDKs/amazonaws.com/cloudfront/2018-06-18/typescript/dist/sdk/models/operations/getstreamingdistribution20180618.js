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
var GetStreamingDistribution20180618PathParams = /** @class */ (function (_super) {
    __extends(GetStreamingDistribution20180618PathParams, _super);
    function GetStreamingDistribution20180618PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Id" }),
        __metadata("design:type", String)
    ], GetStreamingDistribution20180618PathParams.prototype, "id", void 0);
    return GetStreamingDistribution20180618PathParams;
}(SpeakeasyBase));
export { GetStreamingDistribution20180618PathParams };
var GetStreamingDistribution20180618Headers = /** @class */ (function (_super) {
    __extends(GetStreamingDistribution20180618Headers, _super);
    function GetStreamingDistribution20180618Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetStreamingDistribution20180618Headers.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetStreamingDistribution20180618Headers.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetStreamingDistribution20180618Headers.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetStreamingDistribution20180618Headers.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetStreamingDistribution20180618Headers.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetStreamingDistribution20180618Headers.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetStreamingDistribution20180618Headers.prototype, "xAmzSignedHeaders", void 0);
    return GetStreamingDistribution20180618Headers;
}(SpeakeasyBase));
export { GetStreamingDistribution20180618Headers };
var GetStreamingDistribution20180618Request = /** @class */ (function (_super) {
    __extends(GetStreamingDistribution20180618Request, _super);
    function GetStreamingDistribution20180618Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStreamingDistribution20180618PathParams)
    ], GetStreamingDistribution20180618Request.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStreamingDistribution20180618Headers)
    ], GetStreamingDistribution20180618Request.prototype, "headers", void 0);
    return GetStreamingDistribution20180618Request;
}(SpeakeasyBase));
export { GetStreamingDistribution20180618Request };
var GetStreamingDistribution20180618Response = /** @class */ (function (_super) {
    __extends(GetStreamingDistribution20180618Response, _super);
    function GetStreamingDistribution20180618Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetStreamingDistribution20180618Response.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStreamingDistribution20180618Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStreamingDistribution20180618Response.prototype, "statusCode", void 0);
    return GetStreamingDistribution20180618Response;
}(SpeakeasyBase));
export { GetStreamingDistribution20180618Response };
