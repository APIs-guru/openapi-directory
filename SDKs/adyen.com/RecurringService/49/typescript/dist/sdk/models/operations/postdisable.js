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
var PostDisableSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostDisableSecurityOption1, _super);
    function PostDisableSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostDisableSecurityOption1.prototype, "basicAuth", void 0);
    return PostDisableSecurityOption1;
}(SpeakeasyBase));
export { PostDisableSecurityOption1 };
var PostDisableSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostDisableSecurityOption2, _super);
    function PostDisableSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostDisableSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostDisableSecurityOption2;
}(SpeakeasyBase));
export { PostDisableSecurityOption2 };
var PostDisableSecurity = /** @class */ (function (_super) {
    __extends(PostDisableSecurity, _super);
    function PostDisableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostDisableSecurityOption1)
    ], PostDisableSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostDisableSecurityOption2)
    ], PostDisableSecurity.prototype, "option2", void 0);
    return PostDisableSecurity;
}(SpeakeasyBase));
export { PostDisableSecurity };
var PostDisableRequest = /** @class */ (function (_super) {
    __extends(PostDisableRequest, _super);
    function PostDisableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostDisableRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDisableSecurity)
    ], PostDisableRequest.prototype, "security", void 0);
    return PostDisableRequest;
}(SpeakeasyBase));
export { PostDisableRequest };
var PostDisableResponse = /** @class */ (function (_super) {
    __extends(PostDisableResponse, _super);
    function PostDisableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDisableResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostDisableResponse.prototype, "disableResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostDisableResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDisableResponse.prototype, "statusCode", void 0);
    return PostDisableResponse;
}(SpeakeasyBase));
export { PostDisableResponse };
