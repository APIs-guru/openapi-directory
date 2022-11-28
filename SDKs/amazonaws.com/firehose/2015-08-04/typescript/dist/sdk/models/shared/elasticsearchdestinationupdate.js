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
import { ElasticsearchBufferingHints } from "./elasticsearchbufferinghints";
import { CloudWatchLoggingOptions } from "./cloudwatchloggingoptions";
import { ElasticsearchIndexRotationPeriodEnum } from "./elasticsearchindexrotationperiodenum";
import { ProcessingConfiguration } from "./processingconfiguration";
import { ElasticsearchRetryOptions } from "./elasticsearchretryoptions";
import { S3DestinationUpdate } from "./s3destinationupdate";
// ElasticsearchDestinationUpdate
/**
 * Describes an update for a destination in Amazon ES.
**/
var ElasticsearchDestinationUpdate = /** @class */ (function (_super) {
    __extends(ElasticsearchDestinationUpdate, _super);
    function ElasticsearchDestinationUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BufferingHints" }),
        __metadata("design:type", ElasticsearchBufferingHints)
    ], ElasticsearchDestinationUpdate.prototype, "bufferingHints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions" }),
        __metadata("design:type", CloudWatchLoggingOptions)
    ], ElasticsearchDestinationUpdate.prototype, "cloudWatchLoggingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClusterEndpoint" }),
        __metadata("design:type", String)
    ], ElasticsearchDestinationUpdate.prototype, "clusterEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainARN" }),
        __metadata("design:type", String)
    ], ElasticsearchDestinationUpdate.prototype, "domainArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexName" }),
        __metadata("design:type", String)
    ], ElasticsearchDestinationUpdate.prototype, "indexName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexRotationPeriod" }),
        __metadata("design:type", String)
    ], ElasticsearchDestinationUpdate.prototype, "indexRotationPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessingConfiguration" }),
        __metadata("design:type", ProcessingConfiguration)
    ], ElasticsearchDestinationUpdate.prototype, "processingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetryOptions" }),
        __metadata("design:type", ElasticsearchRetryOptions)
    ], ElasticsearchDestinationUpdate.prototype, "retryOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleARN" }),
        __metadata("design:type", String)
    ], ElasticsearchDestinationUpdate.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Update" }),
        __metadata("design:type", S3DestinationUpdate)
    ], ElasticsearchDestinationUpdate.prototype, "s3Update", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TypeName" }),
        __metadata("design:type", String)
    ], ElasticsearchDestinationUpdate.prototype, "typeName", void 0);
    return ElasticsearchDestinationUpdate;
}(SpeakeasyBase));
export { ElasticsearchDestinationUpdate };
