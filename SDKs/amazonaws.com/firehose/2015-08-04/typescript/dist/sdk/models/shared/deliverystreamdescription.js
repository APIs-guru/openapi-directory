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
import { DeliveryStreamEncryptionConfiguration } from "./deliverystreamencryptionconfiguration";
import { DeliveryStreamStatusEnum } from "./deliverystreamstatusenum";
import { DeliveryStreamTypeEnum } from "./deliverystreamtypeenum";
import { DestinationDescription } from "./destinationdescription";
import { FailureDescription } from "./failuredescription";
import { SourceDescription } from "./sourcedescription";
// DeliveryStreamDescription
/**
 * Contains information about a delivery stream.
**/
var DeliveryStreamDescription = /** @class */ (function (_super) {
    __extends(DeliveryStreamDescription, _super);
    function DeliveryStreamDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateTimestamp" }),
        __metadata("design:type", Date)
    ], DeliveryStreamDescription.prototype, "createTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryStreamARN" }),
        __metadata("design:type", String)
    ], DeliveryStreamDescription.prototype, "deliveryStreamArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryStreamEncryptionConfiguration" }),
        __metadata("design:type", DeliveryStreamEncryptionConfiguration)
    ], DeliveryStreamDescription.prototype, "deliveryStreamEncryptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryStreamName" }),
        __metadata("design:type", String)
    ], DeliveryStreamDescription.prototype, "deliveryStreamName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryStreamStatus" }),
        __metadata("design:type", String)
    ], DeliveryStreamDescription.prototype, "deliveryStreamStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryStreamType" }),
        __metadata("design:type", String)
    ], DeliveryStreamDescription.prototype, "deliveryStreamType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Destinations", elemType: DestinationDescription }),
        __metadata("design:type", Array)
    ], DeliveryStreamDescription.prototype, "destinations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureDescription" }),
        __metadata("design:type", FailureDescription)
    ], DeliveryStreamDescription.prototype, "failureDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasMoreDestinations" }),
        __metadata("design:type", Boolean)
    ], DeliveryStreamDescription.prototype, "hasMoreDestinations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateTimestamp" }),
        __metadata("design:type", Date)
    ], DeliveryStreamDescription.prototype, "lastUpdateTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Source" }),
        __metadata("design:type", SourceDescription)
    ], DeliveryStreamDescription.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VersionId" }),
        __metadata("design:type", String)
    ], DeliveryStreamDescription.prototype, "versionId", void 0);
    return DeliveryStreamDescription;
}(SpeakeasyBase));
export { DeliveryStreamDescription };
