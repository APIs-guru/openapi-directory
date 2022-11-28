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
import { AddressFamilyEnum } from "./addressfamilyenum";
import { RouteFilterPrefix } from "./routefilterprefix";
import { Tag } from "./tag";
// NewPublicVirtualInterface
/**
 * Information about a public virtual interface.
**/
var NewPublicVirtualInterface = /** @class */ (function (_super) {
    __extends(NewPublicVirtualInterface, _super);
    function NewPublicVirtualInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressFamily" }),
        __metadata("design:type", String)
    ], NewPublicVirtualInterface.prototype, "addressFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amazonAddress" }),
        __metadata("design:type", String)
    ], NewPublicVirtualInterface.prototype, "amazonAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asn" }),
        __metadata("design:type", Number)
    ], NewPublicVirtualInterface.prototype, "asn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authKey" }),
        __metadata("design:type", String)
    ], NewPublicVirtualInterface.prototype, "authKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerAddress" }),
        __metadata("design:type", String)
    ], NewPublicVirtualInterface.prototype, "customerAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeFilterPrefixes", elemType: RouteFilterPrefix }),
        __metadata("design:type", Array)
    ], NewPublicVirtualInterface.prototype, "routeFilterPrefixes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], NewPublicVirtualInterface.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualInterfaceName" }),
        __metadata("design:type", String)
    ], NewPublicVirtualInterface.prototype, "virtualInterfaceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], NewPublicVirtualInterface.prototype, "vlan", void 0);
    return NewPublicVirtualInterface;
}(SpeakeasyBase));
export { NewPublicVirtualInterface };
