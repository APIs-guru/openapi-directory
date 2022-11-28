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
import { IkeVersionsListValue } from "./ikeversionslistvalue";
import { Phase1DhGroupNumbersListValue } from "./phase1dhgroupnumberslistvalue";
import { Phase1EncryptionAlgorithmsListValue } from "./phase1encryptionalgorithmslistvalue";
import { Phase1IntegrityAlgorithmsListValue } from "./phase1integrityalgorithmslistvalue";
import { Phase2DhGroupNumbersListValue } from "./phase2dhgroupnumberslistvalue";
import { Phase2EncryptionAlgorithmsListValue } from "./phase2encryptionalgorithmslistvalue";
import { Phase2IntegrityAlgorithmsListValue } from "./phase2integrityalgorithmslistvalue";
// TunnelOption
/**
 * The VPN tunnel options.
**/
var TunnelOption = /** @class */ (function (_super) {
    __extends(TunnelOption, _super);
    function TunnelOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TunnelOption.prototype, "dpdTimeoutAction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TunnelOption.prototype, "dpdTimeoutSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: IkeVersionsListValue }),
        __metadata("design:type", Array)
    ], TunnelOption.prototype, "ikeVersions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TunnelOption.prototype, "outsideIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Phase1DhGroupNumbersListValue }),
        __metadata("design:type", Array)
    ], TunnelOption.prototype, "phase1DhGroupNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Phase1EncryptionAlgorithmsListValue }),
        __metadata("design:type", Array)
    ], TunnelOption.prototype, "phase1EncryptionAlgorithms", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Phase1IntegrityAlgorithmsListValue }),
        __metadata("design:type", Array)
    ], TunnelOption.prototype, "phase1IntegrityAlgorithms", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TunnelOption.prototype, "phase1LifetimeSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Phase2DhGroupNumbersListValue }),
        __metadata("design:type", Array)
    ], TunnelOption.prototype, "phase2DhGroupNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Phase2EncryptionAlgorithmsListValue }),
        __metadata("design:type", Array)
    ], TunnelOption.prototype, "phase2EncryptionAlgorithms", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: Phase2IntegrityAlgorithmsListValue }),
        __metadata("design:type", Array)
    ], TunnelOption.prototype, "phase2IntegrityAlgorithms", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TunnelOption.prototype, "phase2LifetimeSeconds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TunnelOption.prototype, "preSharedKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TunnelOption.prototype, "rekeyFuzzPercentage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TunnelOption.prototype, "rekeyMarginTimeSeconds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TunnelOption.prototype, "replayWindowSize", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TunnelOption.prototype, "startupAction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TunnelOption.prototype, "tunnelInsideCidr", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TunnelOption.prototype, "tunnelInsideIpv6Cidr", void 0);
    return TunnelOption;
}(SpeakeasyBase));
export { TunnelOption };
