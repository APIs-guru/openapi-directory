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
import { EfaInfo } from "./efainfo";
import { EnaSupportEnum } from "./enasupportenum";
import { NetworkCardInfo } from "./networkcardinfo";
// NetworkInfo
/**
 * Describes the networking features of the instance type.
**/
var NetworkInfo = /** @class */ (function (_super) {
    __extends(NetworkInfo, _super);
    function NetworkInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkInfo.prototype, "defaultNetworkCardIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EfaInfo)
    ], NetworkInfo.prototype, "efaInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], NetworkInfo.prototype, "efaSupported", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkInfo.prototype, "enaSupport", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], NetworkInfo.prototype, "encryptionInTransitSupported", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkInfo.prototype, "ipv4AddressesPerInterface", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkInfo.prototype, "ipv6AddressesPerInterface", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], NetworkInfo.prototype, "ipv6Supported", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkInfo.prototype, "maximumNetworkCards", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkInfo.prototype, "maximumNetworkInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: NetworkCardInfo }),
        __metadata("design:type", Array)
    ], NetworkInfo.prototype, "networkCards", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkInfo.prototype, "networkPerformance", void 0);
    return NetworkInfo;
}(SpeakeasyBase));
export { NetworkInfo };
