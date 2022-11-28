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
import { AntennaDownlinkConfig } from "./antennadownlinkconfig";
import { AntennaDownlinkDemodDecodeConfig } from "./antennadownlinkdemoddecodeconfig";
import { AntennaUplinkConfig } from "./antennauplinkconfig";
import { DataflowEndpointConfig } from "./dataflowendpointconfig";
import { S3RecordingConfig } from "./s3recordingconfig";
import { TrackingConfig } from "./trackingconfig";
import { UplinkEchoConfig } from "./uplinkechoconfig";
// ConfigTypeData
/**
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
**/
var ConfigTypeData = /** @class */ (function (_super) {
    __extends(ConfigTypeData, _super);
    function ConfigTypeData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaDownlinkConfig" }),
        __metadata("design:type", AntennaDownlinkConfig)
    ], ConfigTypeData.prototype, "antennaDownlinkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaDownlinkDemodDecodeConfig" }),
        __metadata("design:type", AntennaDownlinkDemodDecodeConfig)
    ], ConfigTypeData.prototype, "antennaDownlinkDemodDecodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=antennaUplinkConfig" }),
        __metadata("design:type", AntennaUplinkConfig)
    ], ConfigTypeData.prototype, "antennaUplinkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataflowEndpointConfig" }),
        __metadata("design:type", DataflowEndpointConfig)
    ], ConfigTypeData.prototype, "dataflowEndpointConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3RecordingConfig" }),
        __metadata("design:type", S3RecordingConfig)
    ], ConfigTypeData.prototype, "s3RecordingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingConfig" }),
        __metadata("design:type", TrackingConfig)
    ], ConfigTypeData.prototype, "trackingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uplinkEchoConfig" }),
        __metadata("design:type", UplinkEchoConfig)
    ], ConfigTypeData.prototype, "uplinkEchoConfig", void 0);
    return ConfigTypeData;
}(SpeakeasyBase));
export { ConfigTypeData };
