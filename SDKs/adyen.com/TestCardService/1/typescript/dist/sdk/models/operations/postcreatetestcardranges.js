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
import * as shared from "../shared";
var PostCreateTestCardRangesSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostCreateTestCardRangesSecurityOption1, _super);
    function PostCreateTestCardRangesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostCreateTestCardRangesSecurityOption1.prototype, "basicAuth", void 0);
    return PostCreateTestCardRangesSecurityOption1;
}(SpeakeasyBase));
export { PostCreateTestCardRangesSecurityOption1 };
var PostCreateTestCardRangesSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostCreateTestCardRangesSecurityOption2, _super);
    function PostCreateTestCardRangesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostCreateTestCardRangesSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostCreateTestCardRangesSecurityOption2;
}(SpeakeasyBase));
export { PostCreateTestCardRangesSecurityOption2 };
var PostCreateTestCardRangesSecurity = /** @class */ (function (_super) {
    __extends(PostCreateTestCardRangesSecurity, _super);
    function PostCreateTestCardRangesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCreateTestCardRangesSecurityOption1)
    ], PostCreateTestCardRangesSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCreateTestCardRangesSecurityOption2)
    ], PostCreateTestCardRangesSecurity.prototype, "option2", void 0);
    return PostCreateTestCardRangesSecurity;
}(SpeakeasyBase));
export { PostCreateTestCardRangesSecurity };
var PostCreateTestCardRangesRequest = /** @class */ (function (_super) {
    __extends(PostCreateTestCardRangesRequest, _super);
    function PostCreateTestCardRangesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostCreateTestCardRangesRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateTestCardRangesSecurity)
    ], PostCreateTestCardRangesRequest.prototype, "security", void 0);
    return PostCreateTestCardRangesRequest;
}(SpeakeasyBase));
export { PostCreateTestCardRangesRequest };
var PostCreateTestCardRangesResponse = /** @class */ (function (_super) {
    __extends(PostCreateTestCardRangesResponse, _super);
    function PostCreateTestCardRangesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateTestCardRangesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostCreateTestCardRangesResponse.prototype, "createTestCardRangesResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostCreateTestCardRangesResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateTestCardRangesResponse.prototype, "statusCode", void 0);
    return PostCreateTestCardRangesResponse;
}(SpeakeasyBase));
export { PostCreateTestCardRangesResponse };
