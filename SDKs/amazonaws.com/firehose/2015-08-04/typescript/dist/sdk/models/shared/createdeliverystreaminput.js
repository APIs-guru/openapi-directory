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
import { DeliveryStreamEncryptionConfigurationInput } from "./deliverystreamencryptionconfigurationinput";
import { DeliveryStreamTypeEnum } from "./deliverystreamtypeenum";
import { ElasticsearchDestinationConfiguration } from "./elasticsearchdestinationconfiguration";
import { ExtendedS3DestinationConfiguration } from "./extendeds3destinationconfiguration";
import { HttpEndpointDestinationConfiguration } from "./httpendpointdestinationconfiguration";
import { KinesisStreamSourceConfiguration } from "./kinesisstreamsourceconfiguration";
import { RedshiftDestinationConfiguration } from "./redshiftdestinationconfiguration";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
import { SplunkDestinationConfiguration } from "./splunkdestinationconfiguration";
import { Tag } from "./tag";
var CreateDeliveryStreamInput = /** @class */ (function (_super) {
    __extends(CreateDeliveryStreamInput, _super);
    function CreateDeliveryStreamInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryStreamEncryptionConfigurationInput" }),
        __metadata("design:type", DeliveryStreamEncryptionConfigurationInput)
    ], CreateDeliveryStreamInput.prototype, "deliveryStreamEncryptionConfigurationInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryStreamName" }),
        __metadata("design:type", String)
    ], CreateDeliveryStreamInput.prototype, "deliveryStreamName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryStreamType" }),
        __metadata("design:type", String)
    ], CreateDeliveryStreamInput.prototype, "deliveryStreamType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ElasticsearchDestinationConfiguration" }),
        __metadata("design:type", ElasticsearchDestinationConfiguration)
    ], CreateDeliveryStreamInput.prototype, "elasticsearchDestinationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedS3DestinationConfiguration" }),
        __metadata("design:type", ExtendedS3DestinationConfiguration)
    ], CreateDeliveryStreamInput.prototype, "extendedS3DestinationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HttpEndpointDestinationConfiguration" }),
        __metadata("design:type", HttpEndpointDestinationConfiguration)
    ], CreateDeliveryStreamInput.prototype, "httpEndpointDestinationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KinesisStreamSourceConfiguration" }),
        __metadata("design:type", KinesisStreamSourceConfiguration)
    ], CreateDeliveryStreamInput.prototype, "kinesisStreamSourceConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RedshiftDestinationConfiguration" }),
        __metadata("design:type", RedshiftDestinationConfiguration)
    ], CreateDeliveryStreamInput.prototype, "redshiftDestinationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3DestinationConfiguration" }),
        __metadata("design:type", S3DestinationConfiguration)
    ], CreateDeliveryStreamInput.prototype, "s3DestinationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SplunkDestinationConfiguration" }),
        __metadata("design:type", SplunkDestinationConfiguration)
    ], CreateDeliveryStreamInput.prototype, "splunkDestinationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateDeliveryStreamInput.prototype, "tags", void 0);
    return CreateDeliveryStreamInput;
}(SpeakeasyBase));
export { CreateDeliveryStreamInput };
