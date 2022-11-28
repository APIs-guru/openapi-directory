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
var SignDeletePathParams = /** @class */ (function (_super) {
    __extends(SignDeletePathParams, _super);
    function SignDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job" }),
        __metadata("design:type", String)
    ], SignDeletePathParams.prototype, "job", void 0);
    return SignDeletePathParams;
}(SpeakeasyBase));
export { SignDeletePathParams };
var SignDelete200ApplicationJson = /** @class */ (function (_super) {
    __extends(SignDelete200ApplicationJson, _super);
    function SignDelete200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SignDelete200ApplicationJson.prototype, "status", void 0);
    return SignDelete200ApplicationJson;
}(SpeakeasyBase));
export { SignDelete200ApplicationJson };
var SignDeleteRequest = /** @class */ (function (_super) {
    __extends(SignDeleteRequest, _super);
    function SignDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SignDeletePathParams)
    ], SignDeleteRequest.prototype, "pathParams", void 0);
    return SignDeleteRequest;
}(SpeakeasyBase));
export { SignDeleteRequest };
var SignDeleteResponse = /** @class */ (function (_super) {
    __extends(SignDeleteResponse, _super);
    function SignDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], SignDeleteResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SignDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SignDeleteResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SignDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SignDelete200ApplicationJson)
    ], SignDeleteResponse.prototype, "signDelete200ApplicationJsonObject", void 0);
    return SignDeleteResponse;
}(SpeakeasyBase));
export { SignDeleteResponse };
