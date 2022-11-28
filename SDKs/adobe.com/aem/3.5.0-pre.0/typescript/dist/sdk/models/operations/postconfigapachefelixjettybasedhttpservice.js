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
var PostConfigApacheFelixJettyBasedHttpServiceQueryParams = /** @class */ (function (_super) {
    __extends(PostConfigApacheFelixJettyBasedHttpServiceQueryParams, _super);
    function PostConfigApacheFelixJettyBasedHttpServiceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.clientcertificate" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsClientcertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.clientcertificate@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsClientcertificateAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.enable" }),
        __metadata("design:type", Boolean)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsEnable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.enable@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsEnableAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsKeystore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.key" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsKeystoreKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.key.password" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsKeystoreKeyPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.key.password@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsKeystoreKeyPasswordAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.key@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsKeystoreKeyAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.password" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsKeystorePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.password@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsKeystorePasswordAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsKeystoreAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.nio" }),
        __metadata("design:type", Boolean)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsNio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.nio@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsNioAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.truststore" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsTruststore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.truststore.password" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsTruststorePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.truststore.password@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsTruststorePasswordAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.truststore@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgApacheFelixHttpsTruststoreAtTypeHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.osgi.service.http.port.secure" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgOsgiServiceHttpPortSecure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.osgi.service.http.port.secure@TypeHint" }),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceQueryParams.prototype, "orgOsgiServiceHttpPortSecureAtTypeHint", void 0);
    return PostConfigApacheFelixJettyBasedHttpServiceQueryParams;
}(SpeakeasyBase));
export { PostConfigApacheFelixJettyBasedHttpServiceQueryParams };
var PostConfigApacheFelixJettyBasedHttpServiceRequest = /** @class */ (function (_super) {
    __extends(PostConfigApacheFelixJettyBasedHttpServiceRequest, _super);
    function PostConfigApacheFelixJettyBasedHttpServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostConfigApacheFelixJettyBasedHttpServiceQueryParams)
    ], PostConfigApacheFelixJettyBasedHttpServiceRequest.prototype, "queryParams", void 0);
    return PostConfigApacheFelixJettyBasedHttpServiceRequest;
}(SpeakeasyBase));
export { PostConfigApacheFelixJettyBasedHttpServiceRequest };
var PostConfigApacheFelixJettyBasedHttpServiceResponse = /** @class */ (function (_super) {
    __extends(PostConfigApacheFelixJettyBasedHttpServiceResponse, _super);
    function PostConfigApacheFelixJettyBasedHttpServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostConfigApacheFelixJettyBasedHttpServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostConfigApacheFelixJettyBasedHttpServiceResponse.prototype, "statusCode", void 0);
    return PostConfigApacheFelixJettyBasedHttpServiceResponse;
}(SpeakeasyBase));
export { PostConfigApacheFelixJettyBasedHttpServiceResponse };
