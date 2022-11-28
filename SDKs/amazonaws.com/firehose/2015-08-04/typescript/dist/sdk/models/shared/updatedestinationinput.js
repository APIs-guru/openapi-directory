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
import { ElasticsearchDestinationUpdate } from "./elasticsearchdestinationupdate";
import { ExtendedS3DestinationUpdate } from "./extendeds3destinationupdate";
import { HttpEndpointDestinationUpdate } from "./httpendpointdestinationupdate";
import { RedshiftDestinationUpdate } from "./redshiftdestinationupdate";
import { S3DestinationUpdate } from "./s3destinationupdate";
import { SplunkDestinationUpdate } from "./splunkdestinationupdate";
var UpdateDestinationInput = /** @class */ (function (_super) {
    __extends(UpdateDestinationInput, _super);
    function UpdateDestinationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrentDeliveryStreamVersionId" }),
        __metadata("design:type", String)
    ], UpdateDestinationInput.prototype, "currentDeliveryStreamVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryStreamName" }),
        __metadata("design:type", String)
    ], UpdateDestinationInput.prototype, "deliveryStreamName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationId" }),
        __metadata("design:type", String)
    ], UpdateDestinationInput.prototype, "destinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ElasticsearchDestinationUpdate" }),
        __metadata("design:type", ElasticsearchDestinationUpdate)
    ], UpdateDestinationInput.prototype, "elasticsearchDestinationUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedS3DestinationUpdate" }),
        __metadata("design:type", ExtendedS3DestinationUpdate)
    ], UpdateDestinationInput.prototype, "extendedS3DestinationUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HttpEndpointDestinationUpdate" }),
        __metadata("design:type", HttpEndpointDestinationUpdate)
    ], UpdateDestinationInput.prototype, "httpEndpointDestinationUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RedshiftDestinationUpdate" }),
        __metadata("design:type", RedshiftDestinationUpdate)
    ], UpdateDestinationInput.prototype, "redshiftDestinationUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3DestinationUpdate" }),
        __metadata("design:type", S3DestinationUpdate)
    ], UpdateDestinationInput.prototype, "s3DestinationUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SplunkDestinationUpdate" }),
        __metadata("design:type", SplunkDestinationUpdate)
    ], UpdateDestinationInput.prototype, "splunkDestinationUpdate", void 0);
    return UpdateDestinationInput;
}(SpeakeasyBase));
export { UpdateDestinationInput };
