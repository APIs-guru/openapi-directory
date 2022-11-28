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
import { VirtualNodeConnectionPool } from "./virtualnodeconnectionpool";
import { HealthCheckPolicy } from "./healthcheckpolicy";
import { OutlierDetection } from "./outlierdetection";
import { PortMapping } from "./portmapping";
import { ListenerTimeout } from "./listenertimeout";
import { ListenerTls } from "./listenertls";
// Listener
/**
 * An object that represents a listener for a virtual node.
**/
var Listener = /** @class */ (function (_super) {
    __extends(Listener, _super);
    function Listener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionPool" }),
        __metadata("design:type", VirtualNodeConnectionPool)
    ], Listener.prototype, "connectionPool", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthCheck" }),
        __metadata("design:type", HealthCheckPolicy)
    ], Listener.prototype, "healthCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlierDetection" }),
        __metadata("design:type", OutlierDetection)
    ], Listener.prototype, "outlierDetection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portMapping" }),
        __metadata("design:type", PortMapping)
    ], Listener.prototype, "portMapping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", ListenerTimeout)
    ], Listener.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tls" }),
        __metadata("design:type", ListenerTls)
    ], Listener.prototype, "tls", void 0);
    return Listener;
}(SpeakeasyBase));
export { Listener };
