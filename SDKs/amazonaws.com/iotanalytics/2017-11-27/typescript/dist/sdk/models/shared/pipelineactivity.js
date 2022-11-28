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
import { AddAttributesActivity } from "./addattributesactivity";
import { ChannelActivity } from "./channelactivity";
import { DatastoreActivity } from "./datastoreactivity";
import { DeviceRegistryEnrichActivity } from "./deviceregistryenrichactivity";
import { DeviceShadowEnrichActivity } from "./deviceshadowenrichactivity";
import { FilterActivity } from "./filteractivity";
import { LambdaActivity } from "./lambdaactivity";
import { MathActivity } from "./mathactivity";
import { RemoveAttributesActivity } from "./removeattributesactivity";
import { SelectAttributesActivity } from "./selectattributesactivity";
// PipelineActivity
/**
 * An activity that performs a transformation on a message.
**/
var PipelineActivity = /** @class */ (function (_super) {
    __extends(PipelineActivity, _super);
    function PipelineActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addAttributes" }),
        __metadata("design:type", AddAttributesActivity)
    ], PipelineActivity.prototype, "addAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", ChannelActivity)
    ], PipelineActivity.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datastore" }),
        __metadata("design:type", DatastoreActivity)
    ], PipelineActivity.prototype, "datastore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceRegistryEnrich" }),
        __metadata("design:type", DeviceRegistryEnrichActivity)
    ], PipelineActivity.prototype, "deviceRegistryEnrich", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceShadowEnrich" }),
        __metadata("design:type", DeviceShadowEnrichActivity)
    ], PipelineActivity.prototype, "deviceShadowEnrich", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", FilterActivity)
    ], PipelineActivity.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambda" }),
        __metadata("design:type", LambdaActivity)
    ], PipelineActivity.prototype, "lambda", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=math" }),
        __metadata("design:type", MathActivity)
    ], PipelineActivity.prototype, "math", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=removeAttributes" }),
        __metadata("design:type", RemoveAttributesActivity)
    ], PipelineActivity.prototype, "removeAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectAttributes" }),
        __metadata("design:type", SelectAttributesActivity)
    ], PipelineActivity.prototype, "selectAttributes", void 0);
    return PipelineActivity;
}(SpeakeasyBase));
export { PipelineActivity };
