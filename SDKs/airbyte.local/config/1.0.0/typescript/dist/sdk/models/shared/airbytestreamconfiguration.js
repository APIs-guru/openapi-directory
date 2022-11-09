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
import { DestinationSyncModeEnum } from "./destinationsyncmodeenum";
import { SyncModeEnum } from "./syncmodeenum";
// AirbyteStreamConfiguration
/**
 * the mutable part of the stream to configure the destination
**/
var AirbyteStreamConfiguration = /** @class */ (function (_super) {
    __extends(AirbyteStreamConfiguration, _super);
    function AirbyteStreamConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aliasName" }),
        __metadata("design:type", String)
    ], AirbyteStreamConfiguration.prototype, "aliasName", void 0);
    __decorate([
        Metadata({ data: "json, name=cursorField" }),
        __metadata("design:type", Array)
    ], AirbyteStreamConfiguration.prototype, "cursorField", void 0);
    __decorate([
        Metadata({ data: "json, name=destinationSyncMode" }),
        __metadata("design:type", String)
    ], AirbyteStreamConfiguration.prototype, "destinationSyncMode", void 0);
    __decorate([
        Metadata({ data: "json, name=primaryKey" }),
        __metadata("design:type", Array)
    ], AirbyteStreamConfiguration.prototype, "primaryKey", void 0);
    __decorate([
        Metadata({ data: "json, name=selected" }),
        __metadata("design:type", Boolean)
    ], AirbyteStreamConfiguration.prototype, "selected", void 0);
    __decorate([
        Metadata({ data: "json, name=syncMode" }),
        __metadata("design:type", String)
    ], AirbyteStreamConfiguration.prototype, "syncMode", void 0);
    return AirbyteStreamConfiguration;
}(SpeakeasyBase));
export { AirbyteStreamConfiguration };
