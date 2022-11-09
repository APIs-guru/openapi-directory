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
import { MessageFormatValueEnum } from "./messageformatvalueenum";
import { KafkaSecurityProtocolEnum } from "./kafkasecurityprotocolenum";
// KafkaSettings
/**
 * Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
**/
var KafkaSettings = /** @class */ (function (_super) {
    __extends(KafkaSettings, _super);
    function KafkaSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Broker" }),
        __metadata("design:type", String)
    ], KafkaSettings.prototype, "broker", void 0);
    __decorate([
        Metadata({ data: "json, name=IncludeControlDetails" }),
        __metadata("design:type", Boolean)
    ], KafkaSettings.prototype, "includeControlDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=IncludeNullAndEmpty" }),
        __metadata("design:type", Boolean)
    ], KafkaSettings.prototype, "includeNullAndEmpty", void 0);
    __decorate([
        Metadata({ data: "json, name=IncludePartitionValue" }),
        __metadata("design:type", Boolean)
    ], KafkaSettings.prototype, "includePartitionValue", void 0);
    __decorate([
        Metadata({ data: "json, name=IncludeTableAlterOperations" }),
        __metadata("design:type", Boolean)
    ], KafkaSettings.prototype, "includeTableAlterOperations", void 0);
    __decorate([
        Metadata({ data: "json, name=IncludeTransactionDetails" }),
        __metadata("design:type", Boolean)
    ], KafkaSettings.prototype, "includeTransactionDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=MessageFormat" }),
        __metadata("design:type", String)
    ], KafkaSettings.prototype, "messageFormat", void 0);
    __decorate([
        Metadata({ data: "json, name=MessageMaxBytes" }),
        __metadata("design:type", Number)
    ], KafkaSettings.prototype, "messageMaxBytes", void 0);
    __decorate([
        Metadata({ data: "json, name=NoHexPrefix" }),
        __metadata("design:type", Boolean)
    ], KafkaSettings.prototype, "noHexPrefix", void 0);
    __decorate([
        Metadata({ data: "json, name=PartitionIncludeSchemaTable" }),
        __metadata("design:type", Boolean)
    ], KafkaSettings.prototype, "partitionIncludeSchemaTable", void 0);
    __decorate([
        Metadata({ data: "json, name=SaslPassword" }),
        __metadata("design:type", String)
    ], KafkaSettings.prototype, "saslPassword", void 0);
    __decorate([
        Metadata({ data: "json, name=SaslUsername" }),
        __metadata("design:type", String)
    ], KafkaSettings.prototype, "saslUsername", void 0);
    __decorate([
        Metadata({ data: "json, name=SecurityProtocol" }),
        __metadata("design:type", String)
    ], KafkaSettings.prototype, "securityProtocol", void 0);
    __decorate([
        Metadata({ data: "json, name=SslCaCertificateArn" }),
        __metadata("design:type", String)
    ], KafkaSettings.prototype, "sslCaCertificateArn", void 0);
    __decorate([
        Metadata({ data: "json, name=SslClientCertificateArn" }),
        __metadata("design:type", String)
    ], KafkaSettings.prototype, "sslClientCertificateArn", void 0);
    __decorate([
        Metadata({ data: "json, name=SslClientKeyArn" }),
        __metadata("design:type", String)
    ], KafkaSettings.prototype, "sslClientKeyArn", void 0);
    __decorate([
        Metadata({ data: "json, name=SslClientKeyPassword" }),
        __metadata("design:type", String)
    ], KafkaSettings.prototype, "sslClientKeyPassword", void 0);
    __decorate([
        Metadata({ data: "json, name=Topic" }),
        __metadata("design:type", String)
    ], KafkaSettings.prototype, "topic", void 0);
    return KafkaSettings;
}(SpeakeasyBase));
export { KafkaSettings };
