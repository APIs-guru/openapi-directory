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
import { ElasticsearchDestinationDescription } from "./elasticsearchdestinationdescription";
import { ExtendedS3DestinationDescription } from "./extendeds3destinationdescription";
import { HttpEndpointDestinationDescription } from "./httpendpointdestinationdescription";
import { RedshiftDestinationDescription } from "./redshiftdestinationdescription";
import { S3DestinationDescription } from "./s3destinationdescription";
import { SplunkDestinationDescription } from "./splunkdestinationdescription";
// DestinationDescription
/**
 * Describes the destination for a delivery stream.
**/
var DestinationDescription = /** @class */ (function (_super) {
    __extends(DestinationDescription, _super);
    function DestinationDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationId" }),
        __metadata("design:type", String)
    ], DestinationDescription.prototype, "destinationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ElasticsearchDestinationDescription" }),
        __metadata("design:type", ElasticsearchDestinationDescription)
    ], DestinationDescription.prototype, "elasticsearchDestinationDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedS3DestinationDescription" }),
        __metadata("design:type", ExtendedS3DestinationDescription)
    ], DestinationDescription.prototype, "extendedS3DestinationDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HttpEndpointDestinationDescription" }),
        __metadata("design:type", HttpEndpointDestinationDescription)
    ], DestinationDescription.prototype, "httpEndpointDestinationDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RedshiftDestinationDescription" }),
        __metadata("design:type", RedshiftDestinationDescription)
    ], DestinationDescription.prototype, "redshiftDestinationDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3DestinationDescription" }),
        __metadata("design:type", S3DestinationDescription)
    ], DestinationDescription.prototype, "s3DestinationDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SplunkDestinationDescription" }),
        __metadata("design:type", SplunkDestinationDescription)
    ], DestinationDescription.prototype, "splunkDestinationDescription", void 0);
    return DestinationDescription;
}(SpeakeasyBase));
export { DestinationDescription };
