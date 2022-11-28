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
var PostTruststorePkcs12RequestBodyTruststoreP12 = /** @class */ (function (_super) {
    __extends(PostTruststorePkcs12RequestBodyTruststoreP12, _super);
    function PostTruststorePkcs12RequestBodyTruststoreP12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostTruststorePkcs12RequestBodyTruststoreP12.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=truststore.p12" }),
        __metadata("design:type", String)
    ], PostTruststorePkcs12RequestBodyTruststoreP12.prototype, "truststoreP12", void 0);
    return PostTruststorePkcs12RequestBodyTruststoreP12;
}(SpeakeasyBase));
export { PostTruststorePkcs12RequestBodyTruststoreP12 };
var PostTruststorePkcs12RequestBody = /** @class */ (function (_super) {
    __extends(PostTruststorePkcs12RequestBody, _super);
    function PostTruststorePkcs12RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostTruststorePkcs12RequestBodyTruststoreP12)
    ], PostTruststorePkcs12RequestBody.prototype, "truststoreP12", void 0);
    return PostTruststorePkcs12RequestBody;
}(SpeakeasyBase));
export { PostTruststorePkcs12RequestBody };
var PostTruststorePkcs12Request = /** @class */ (function (_super) {
    __extends(PostTruststorePkcs12Request, _super);
    function PostTruststorePkcs12Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostTruststorePkcs12RequestBody)
    ], PostTruststorePkcs12Request.prototype, "request", void 0);
    return PostTruststorePkcs12Request;
}(SpeakeasyBase));
export { PostTruststorePkcs12Request };
var PostTruststorePkcs12Response = /** @class */ (function (_super) {
    __extends(PostTruststorePkcs12Response, _super);
    function PostTruststorePkcs12Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTruststorePkcs12Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTruststorePkcs12Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTruststorePkcs12Response.prototype, "postTruststorePkcs12DefaultTextPlainString", void 0);
    return PostTruststorePkcs12Response;
}(SpeakeasyBase));
export { PostTruststorePkcs12Response };
