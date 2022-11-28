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
import { CredentialProviderTypeEnum } from "./credentialprovidertypeenum";
// RegistryCredential
/**
 * <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with Secrets Manager Sample for CodeBuild</a>. </p>
**/
var RegistryCredential = /** @class */ (function (_super) {
    __extends(RegistryCredential, _super);
    function RegistryCredential() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credential" }),
        __metadata("design:type", String)
    ], RegistryCredential.prototype, "credential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentialProvider" }),
        __metadata("design:type", String)
    ], RegistryCredential.prototype, "credentialProvider", void 0);
    return RegistryCredential;
}(SpeakeasyBase));
export { RegistryCredential };
