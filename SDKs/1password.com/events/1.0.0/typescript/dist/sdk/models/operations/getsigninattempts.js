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
var GetSignInAttemptsSecurity = /** @class */ (function (_super) {
    __extends(GetSignInAttemptsSecurity, _super);
    function GetSignInAttemptsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwtsa)
    ], GetSignInAttemptsSecurity.prototype, "jwtsa", void 0);
    return GetSignInAttemptsSecurity;
}(SpeakeasyBase));
export { GetSignInAttemptsSecurity };
var GetSignInAttemptsRequest = /** @class */ (function (_super) {
    __extends(GetSignInAttemptsRequest, _super);
    function GetSignInAttemptsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], GetSignInAttemptsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSignInAttemptsSecurity)
    ], GetSignInAttemptsRequest.prototype, "security", void 0);
    return GetSignInAttemptsRequest;
}(SpeakeasyBase));
export { GetSignInAttemptsRequest };
var GetSignInAttemptsResponse = /** @class */ (function (_super) {
    __extends(GetSignInAttemptsResponse, _super);
    function GetSignInAttemptsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSignInAttemptsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], GetSignInAttemptsResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSignInAttemptsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSignInAttemptsResponse.prototype, "getSignInAttempts200ApplicationJsonAny", void 0);
    return GetSignInAttemptsResponse;
}(SpeakeasyBase));
export { GetSignInAttemptsResponse };
