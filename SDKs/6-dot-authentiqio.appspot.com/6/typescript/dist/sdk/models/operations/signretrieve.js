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
var SignRetrievePathParams = /** @class */ (function (_super) {
    __extends(SignRetrievePathParams, _super);
    function SignRetrievePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job" }),
        __metadata("design:type", String)
    ], SignRetrievePathParams.prototype, "job", void 0);
    return SignRetrievePathParams;
}(SpeakeasyBase));
export { SignRetrievePathParams };
var SignRetrieveJwt = /** @class */ (function (_super) {
    __extends(SignRetrieveJwt, _super);
    function SignRetrieveJwt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exp" }),
        __metadata("design:type", Number)
    ], SignRetrieveJwt.prototype, "exp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], SignRetrieveJwt.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub" }),
        __metadata("design:type", String)
    ], SignRetrieveJwt.prototype, "sub", void 0);
    return SignRetrieveJwt;
}(SpeakeasyBase));
export { SignRetrieveJwt };
var SignRetrieveRequest = /** @class */ (function (_super) {
    __extends(SignRetrieveRequest, _super);
    function SignRetrieveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SignRetrievePathParams)
    ], SignRetrieveRequest.prototype, "pathParams", void 0);
    return SignRetrieveRequest;
}(SpeakeasyBase));
export { SignRetrieveRequest };
var SignRetrieveResponse = /** @class */ (function (_super) {
    __extends(SignRetrieveResponse, _super);
    function SignRetrieveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SignRetrieveResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SignRetrieveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SignRetrieveResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SignRetrieveJwt)
    ], SignRetrieveResponse.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SignRetrieveResponse.prototype, "statusCode", void 0);
    return SignRetrieveResponse;
}(SpeakeasyBase));
export { SignRetrieveResponse };
