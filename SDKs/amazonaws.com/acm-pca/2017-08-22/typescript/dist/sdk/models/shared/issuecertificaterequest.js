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
import { ApiPassthrough } from "./apipassthrough";
import { SigningAlgorithmEnum } from "./signingalgorithmenum";
import { Validity } from "./validity";
var IssueCertificateRequest = /** @class */ (function (_super) {
    __extends(IssueCertificateRequest, _super);
    function IssueCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApiPassthrough" }),
        __metadata("design:type", ApiPassthrough)
    ], IssueCertificateRequest.prototype, "apiPassthrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" }),
        __metadata("design:type", String)
    ], IssueCertificateRequest.prototype, "certificateAuthorityArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Csr" }),
        __metadata("design:type", String)
    ], IssueCertificateRequest.prototype, "csr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdempotencyToken" }),
        __metadata("design:type", String)
    ], IssueCertificateRequest.prototype, "idempotencyToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SigningAlgorithm" }),
        __metadata("design:type", String)
    ], IssueCertificateRequest.prototype, "signingAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateArn" }),
        __metadata("design:type", String)
    ], IssueCertificateRequest.prototype, "templateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Validity" }),
        __metadata("design:type", Validity)
    ], IssueCertificateRequest.prototype, "validity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidityNotBefore" }),
        __metadata("design:type", Validity)
    ], IssueCertificateRequest.prototype, "validityNotBefore", void 0);
    return IssueCertificateRequest;
}(SpeakeasyBase));
export { IssueCertificateRequest };
