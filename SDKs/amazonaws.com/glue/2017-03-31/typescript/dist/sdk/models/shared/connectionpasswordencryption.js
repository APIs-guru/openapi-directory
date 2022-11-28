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
// ConnectionPasswordEncryption
/**
 * <p>The data structure used by the Data Catalog to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p> <p>When a <code>CreationConnection</code> request arrives containing a password, the Data Catalog first encrypts the password using your KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.</p> <p>This encryption requires that you set KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.</p>
**/
var ConnectionPasswordEncryption = /** @class */ (function (_super) {
    __extends(ConnectionPasswordEncryption, _super);
    function ConnectionPasswordEncryption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsKmsKeyId" }),
        __metadata("design:type", String)
    ], ConnectionPasswordEncryption.prototype, "awsKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReturnConnectionPasswordEncrypted" }),
        __metadata("design:type", Boolean)
    ], ConnectionPasswordEncryption.prototype, "returnConnectionPasswordEncrypted", void 0);
    return ConnectionPasswordEncryption;
}(SpeakeasyBase));
export { ConnectionPasswordEncryption };
