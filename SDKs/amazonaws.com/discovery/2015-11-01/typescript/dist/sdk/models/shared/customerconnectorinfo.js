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
// CustomerConnectorInfo
/**
 * Inventory data for installed discovery connectors.
**/
var CustomerConnectorInfo = /** @class */ (function (_super) {
    __extends(CustomerConnectorInfo, _super);
    function CustomerConnectorInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=activeConnectors" }),
        __metadata("design:type", Number)
    ], CustomerConnectorInfo.prototype, "activeConnectors", void 0);
    __decorate([
        Metadata({ data: "json, name=blackListedConnectors" }),
        __metadata("design:type", Number)
    ], CustomerConnectorInfo.prototype, "blackListedConnectors", void 0);
    __decorate([
        Metadata({ data: "json, name=healthyConnectors" }),
        __metadata("design:type", Number)
    ], CustomerConnectorInfo.prototype, "healthyConnectors", void 0);
    __decorate([
        Metadata({ data: "json, name=shutdownConnectors" }),
        __metadata("design:type", Number)
    ], CustomerConnectorInfo.prototype, "shutdownConnectors", void 0);
    __decorate([
        Metadata({ data: "json, name=totalConnectors" }),
        __metadata("design:type", Number)
    ], CustomerConnectorInfo.prototype, "totalConnectors", void 0);
    __decorate([
        Metadata({ data: "json, name=unhealthyConnectors" }),
        __metadata("design:type", Number)
    ], CustomerConnectorInfo.prototype, "unhealthyConnectors", void 0);
    __decorate([
        Metadata({ data: "json, name=unknownConnectors" }),
        __metadata("design:type", Number)
    ], CustomerConnectorInfo.prototype, "unknownConnectors", void 0);
    return CustomerConnectorInfo;
}(SpeakeasyBase));
export { CustomerConnectorInfo };
