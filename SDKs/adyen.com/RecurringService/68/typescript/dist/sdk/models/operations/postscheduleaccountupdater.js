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
var PostScheduleAccountUpdaterSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostScheduleAccountUpdaterSecurityOption1, _super);
    function PostScheduleAccountUpdaterSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostScheduleAccountUpdaterSecurityOption1.prototype, "basicAuth", void 0);
    return PostScheduleAccountUpdaterSecurityOption1;
}(SpeakeasyBase));
export { PostScheduleAccountUpdaterSecurityOption1 };
var PostScheduleAccountUpdaterSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostScheduleAccountUpdaterSecurityOption2, _super);
    function PostScheduleAccountUpdaterSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostScheduleAccountUpdaterSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostScheduleAccountUpdaterSecurityOption2;
}(SpeakeasyBase));
export { PostScheduleAccountUpdaterSecurityOption2 };
var PostScheduleAccountUpdaterSecurity = /** @class */ (function (_super) {
    __extends(PostScheduleAccountUpdaterSecurity, _super);
    function PostScheduleAccountUpdaterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostScheduleAccountUpdaterSecurityOption1)
    ], PostScheduleAccountUpdaterSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostScheduleAccountUpdaterSecurityOption2)
    ], PostScheduleAccountUpdaterSecurity.prototype, "option2", void 0);
    return PostScheduleAccountUpdaterSecurity;
}(SpeakeasyBase));
export { PostScheduleAccountUpdaterSecurity };
var PostScheduleAccountUpdaterRequest = /** @class */ (function (_super) {
    __extends(PostScheduleAccountUpdaterRequest, _super);
    function PostScheduleAccountUpdaterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostScheduleAccountUpdaterRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostScheduleAccountUpdaterSecurity)
    ], PostScheduleAccountUpdaterRequest.prototype, "security", void 0);
    return PostScheduleAccountUpdaterRequest;
}(SpeakeasyBase));
export { PostScheduleAccountUpdaterRequest };
var PostScheduleAccountUpdaterResponse = /** @class */ (function (_super) {
    __extends(PostScheduleAccountUpdaterResponse, _super);
    function PostScheduleAccountUpdaterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostScheduleAccountUpdaterResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostScheduleAccountUpdaterResponse.prototype, "scheduleAccountUpdaterResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostScheduleAccountUpdaterResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostScheduleAccountUpdaterResponse.prototype, "statusCode", void 0);
    return PostScheduleAccountUpdaterResponse;
}(SpeakeasyBase));
export { PostScheduleAccountUpdaterResponse };
