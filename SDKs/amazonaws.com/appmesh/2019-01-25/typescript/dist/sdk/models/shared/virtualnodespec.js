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
import { BackendDefaults } from "./backenddefaults";
import { Backend } from "./backend";
import { Listener } from "./listener";
import { Logging } from "./logging";
import { ServiceDiscovery } from "./servicediscovery";
// VirtualNodeSpec
/**
 * An object that represents the specification of a virtual node.
**/
var VirtualNodeSpec = /** @class */ (function (_super) {
    __extends(VirtualNodeSpec, _super);
    function VirtualNodeSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backendDefaults" }),
        __metadata("design:type", BackendDefaults)
    ], VirtualNodeSpec.prototype, "backendDefaults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backends", elemType: Backend }),
        __metadata("design:type", Array)
    ], VirtualNodeSpec.prototype, "backends", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listeners", elemType: Listener }),
        __metadata("design:type", Array)
    ], VirtualNodeSpec.prototype, "listeners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logging" }),
        __metadata("design:type", Logging)
    ], VirtualNodeSpec.prototype, "logging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceDiscovery" }),
        __metadata("design:type", ServiceDiscovery)
    ], VirtualNodeSpec.prototype, "serviceDiscovery", void 0);
    return VirtualNodeSpec;
}(SpeakeasyBase));
export { VirtualNodeSpec };
