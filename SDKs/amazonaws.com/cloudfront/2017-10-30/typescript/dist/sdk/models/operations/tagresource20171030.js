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
export var TagResource20171030OperationEnum;
(function (TagResource20171030OperationEnum) {
    TagResource20171030OperationEnum["Tag"] = "Tag";
})(TagResource20171030OperationEnum || (TagResource20171030OperationEnum = {}));
var TagResource20171030QueryParams = /** @class */ (function (_super) {
    __extends(TagResource20171030QueryParams, _super);
    function TagResource20171030QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Operation" }),
        __metadata("design:type", String)
    ], TagResource20171030QueryParams.prototype, "operation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Resource" }),
        __metadata("design:type", String)
    ], TagResource20171030QueryParams.prototype, "resource", void 0);
    return TagResource20171030QueryParams;
}(SpeakeasyBase));
export { TagResource20171030QueryParams };
var TagResource20171030Headers = /** @class */ (function (_super) {
    __extends(TagResource20171030Headers, _super);
    function TagResource20171030Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], TagResource20171030Headers.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], TagResource20171030Headers.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], TagResource20171030Headers.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], TagResource20171030Headers.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], TagResource20171030Headers.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], TagResource20171030Headers.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], TagResource20171030Headers.prototype, "xAmzSignedHeaders", void 0);
    return TagResource20171030Headers;
}(SpeakeasyBase));
export { TagResource20171030Headers };
var TagResource20171030Request = /** @class */ (function (_super) {
    __extends(TagResource20171030Request, _super);
    function TagResource20171030Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TagResource20171030QueryParams)
    ], TagResource20171030Request.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TagResource20171030Headers)
    ], TagResource20171030Request.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], TagResource20171030Request.prototype, "request", void 0);
    return TagResource20171030Request;
}(SpeakeasyBase));
export { TagResource20171030Request };
var TagResource20171030Response = /** @class */ (function (_super) {
    __extends(TagResource20171030Response, _super);
    function TagResource20171030Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], TagResource20171030Response.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TagResource20171030Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TagResource20171030Response.prototype, "statusCode", void 0);
    return TagResource20171030Response;
}(SpeakeasyBase));
export { TagResource20171030Response };
