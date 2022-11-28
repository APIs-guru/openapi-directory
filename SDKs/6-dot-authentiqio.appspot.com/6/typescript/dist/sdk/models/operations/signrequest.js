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
var SignRequestQueryParams = /** @class */ (function (_super) {
    __extends(SignRequestQueryParams, _super);
    function SignRequestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=test" }),
        __metadata("design:type", Number)
    ], SignRequestQueryParams.prototype, "test", void 0);
    return SignRequestQueryParams;
}(SpeakeasyBase));
export { SignRequestQueryParams };
var SignRequest201ApplicationJson = /** @class */ (function (_super) {
    __extends(SignRequest201ApplicationJson, _super);
    function SignRequest201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=job" }),
        __metadata("design:type", String)
    ], SignRequest201ApplicationJson.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SignRequest201ApplicationJson.prototype, "status", void 0);
    return SignRequest201ApplicationJson;
}(SpeakeasyBase));
export { SignRequest201ApplicationJson };
var SignRequestRequest = /** @class */ (function (_super) {
    __extends(SignRequestRequest, _super);
    function SignRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SignRequestQueryParams)
    ], SignRequestRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/jwt" }),
        __metadata("design:type", Uint8Array)
    ], SignRequestRequest.prototype, "request", void 0);
    return SignRequestRequest;
}(SpeakeasyBase));
export { SignRequestRequest };
var SignRequestResponse = /** @class */ (function (_super) {
    __extends(SignRequestResponse, _super);
    function SignRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SignRequestResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SignRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SignRequestResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SignRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SignRequest201ApplicationJson)
    ], SignRequestResponse.prototype, "signRequest201ApplicationJsonObject", void 0);
    return SignRequestResponse;
}(SpeakeasyBase));
export { SignRequestResponse };
