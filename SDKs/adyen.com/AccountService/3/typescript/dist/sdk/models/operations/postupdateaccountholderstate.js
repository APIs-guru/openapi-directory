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
var PostUpdateAccountHolderStateSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostUpdateAccountHolderStateSecurityOption1, _super);
    function PostUpdateAccountHolderStateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], PostUpdateAccountHolderStateSecurityOption1.prototype, "basicAuth", void 0);
    return PostUpdateAccountHolderStateSecurityOption1;
}(SpeakeasyBase));
export { PostUpdateAccountHolderStateSecurityOption1 };
var PostUpdateAccountHolderStateSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostUpdateAccountHolderStateSecurityOption2, _super);
    function PostUpdateAccountHolderStateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], PostUpdateAccountHolderStateSecurityOption2.prototype, "apiKeyAuth", void 0);
    return PostUpdateAccountHolderStateSecurityOption2;
}(SpeakeasyBase));
export { PostUpdateAccountHolderStateSecurityOption2 };
var PostUpdateAccountHolderStateSecurity = /** @class */ (function (_super) {
    __extends(PostUpdateAccountHolderStateSecurity, _super);
    function PostUpdateAccountHolderStateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUpdateAccountHolderStateSecurityOption1)
    ], PostUpdateAccountHolderStateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUpdateAccountHolderStateSecurityOption2)
    ], PostUpdateAccountHolderStateSecurity.prototype, "option2", void 0);
    return PostUpdateAccountHolderStateSecurity;
}(SpeakeasyBase));
export { PostUpdateAccountHolderStateSecurity };
var PostUpdateAccountHolderStateRequest = /** @class */ (function (_super) {
    __extends(PostUpdateAccountHolderStateRequest, _super);
    function PostUpdateAccountHolderStateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostUpdateAccountHolderStateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateAccountHolderStateSecurity)
    ], PostUpdateAccountHolderStateRequest.prototype, "security", void 0);
    return PostUpdateAccountHolderStateRequest;
}(SpeakeasyBase));
export { PostUpdateAccountHolderStateRequest };
var PostUpdateAccountHolderStateResponse = /** @class */ (function (_super) {
    __extends(PostUpdateAccountHolderStateResponse, _super);
    function PostUpdateAccountHolderStateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUpdateAccountHolderStateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostUpdateAccountHolderStateResponse.prototype, "getAccountHolderStatusResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PostUpdateAccountHolderStateResponse.prototype, "serviceError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUpdateAccountHolderStateResponse.prototype, "statusCode", void 0);
    return PostUpdateAccountHolderStateResponse;
}(SpeakeasyBase));
export { PostUpdateAccountHolderStateResponse };
