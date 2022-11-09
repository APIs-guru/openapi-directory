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
var GetOperationRequest = /** @class */ (function (_super) {
    __extends(GetOperationRequest, _super);
    function GetOperationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OperationIdRequestBody)
    ], GetOperationRequest.prototype, "request", void 0);
    return GetOperationRequest;
}(SpeakeasyBase));
export { GetOperationRequest };
var GetOperationResponse = /** @class */ (function (_super) {
    __extends(GetOperationResponse, _super);
    function GetOperationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetOperationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.InvalidInputExceptionInfo)
    ], GetOperationResponse.prototype, "invalidInputExceptionInfo", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundKnownExceptionInfo)
    ], GetOperationResponse.prototype, "notFoundKnownExceptionInfo", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.OperationRead)
    ], GetOperationResponse.prototype, "operationRead", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetOperationResponse.prototype, "statusCode", void 0);
    return GetOperationResponse;
}(SpeakeasyBase));
export { GetOperationResponse };
