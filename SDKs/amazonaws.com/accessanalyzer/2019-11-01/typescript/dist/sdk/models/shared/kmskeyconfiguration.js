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
import { KmsGrantConfiguration } from "./kmsgrantconfiguration";
// KmsKeyConfiguration
/**
 * <p>Proposed access control configuration for a KMS key. You can propose a configuration for a new KMS key or an existing KMS key that you own by specifying the key policy and KMS grant configuration. If the configuration is for an existing key and you do not specify the key policy, the access preview uses the existing policy for the key. If the access preview is for a new resource and you do not specify the key policy, then the access preview uses the default key policy. The proposed key policy cannot be an empty string. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default key policy</a>. For more information about key policy limits, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/resource-limits.html">Resource quotas</a>.</p> <p/>
**/
var KmsKeyConfiguration = /** @class */ (function (_super) {
    __extends(KmsKeyConfiguration, _super);
    function KmsKeyConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grants", elemType: KmsGrantConfiguration }),
        __metadata("design:type", Array)
    ], KmsKeyConfiguration.prototype, "grants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyPolicies" }),
        __metadata("design:type", Map)
    ], KmsKeyConfiguration.prototype, "keyPolicies", void 0);
    return KmsKeyConfiguration;
}(SpeakeasyBase));
export { KmsKeyConfiguration };
