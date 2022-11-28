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
import { DmsTransferSettings } from "./dmstransfersettings";
import { DocDbSettings } from "./docdbsettings";
import { DynamoDbSettings } from "./dynamodbsettings";
import { ElasticsearchSettings } from "./elasticsearchsettings";
import { ReplicationEndpointTypeValueEnum } from "./replicationendpointtypevalueenum";
import { IbmDb2Settings } from "./ibmdb2settings";
import { KafkaSettings } from "./kafkasettings";
import { KinesisSettings } from "./kinesissettings";
import { MicrosoftSqlServerSettings } from "./microsoftsqlserversettings";
import { MongoDbSettings } from "./mongodbsettings";
import { MySqlSettings } from "./mysqlsettings";
import { NeptuneSettings } from "./neptunesettings";
import { OracleSettings } from "./oraclesettings";
import { PostgreSqlSettings } from "./postgresqlsettings";
import { RedisSettings } from "./redissettings";
import { RedshiftSettings } from "./redshiftsettings";
import { S3Settings } from "./s3settings";
import { DmsSslModeValueEnum } from "./dmssslmodevalueenum";
import { SybaseSettings } from "./sybasesettings";
import { Tag } from "./tag";
// CreateEndpointMessage
/**
 * <p/>
**/
var CreateEndpointMessage = /** @class */ (function (_super) {
    __extends(CreateEndpointMessage, _super);
    function CreateEndpointMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateArn" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "certificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "databaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DmsTransferSettings" }),
        __metadata("design:type", DmsTransferSettings)
    ], CreateEndpointMessage.prototype, "dmsTransferSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocDbSettings" }),
        __metadata("design:type", DocDbSettings)
    ], CreateEndpointMessage.prototype, "docDbSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DynamoDbSettings" }),
        __metadata("design:type", DynamoDbSettings)
    ], CreateEndpointMessage.prototype, "dynamoDbSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ElasticsearchSettings" }),
        __metadata("design:type", ElasticsearchSettings)
    ], CreateEndpointMessage.prototype, "elasticsearchSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointIdentifier" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "endpointIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointType" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "endpointType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EngineName" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "engineName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalTableDefinition" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "externalTableDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtraConnectionAttributes" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "extraConnectionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IBMDb2Settings" }),
        __metadata("design:type", IbmDb2Settings)
    ], CreateEndpointMessage.prototype, "ibmDb2Settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KafkaSettings" }),
        __metadata("design:type", KafkaSettings)
    ], CreateEndpointMessage.prototype, "kafkaSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KinesisSettings" }),
        __metadata("design:type", KinesisSettings)
    ], CreateEndpointMessage.prototype, "kinesisSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MicrosoftSQLServerSettings" }),
        __metadata("design:type", MicrosoftSqlServerSettings)
    ], CreateEndpointMessage.prototype, "microsoftSqlServerSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MongoDbSettings" }),
        __metadata("design:type", MongoDbSettings)
    ], CreateEndpointMessage.prototype, "mongoDbSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MySQLSettings" }),
        __metadata("design:type", MySqlSettings)
    ], CreateEndpointMessage.prototype, "mySqlSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NeptuneSettings" }),
        __metadata("design:type", NeptuneSettings)
    ], CreateEndpointMessage.prototype, "neptuneSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OracleSettings" }),
        __metadata("design:type", OracleSettings)
    ], CreateEndpointMessage.prototype, "oracleSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], CreateEndpointMessage.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostgreSQLSettings" }),
        __metadata("design:type", PostgreSqlSettings)
    ], CreateEndpointMessage.prototype, "postgreSqlSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RedisSettings" }),
        __metadata("design:type", RedisSettings)
    ], CreateEndpointMessage.prototype, "redisSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RedshiftSettings" }),
        __metadata("design:type", RedshiftSettings)
    ], CreateEndpointMessage.prototype, "redshiftSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceIdentifier" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "resourceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Settings" }),
        __metadata("design:type", S3Settings)
    ], CreateEndpointMessage.prototype, "s3Settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "serverName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceAccessRoleArn" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "serviceAccessRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SslMode" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "sslMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SybaseSettings" }),
        __metadata("design:type", SybaseSettings)
    ], CreateEndpointMessage.prototype, "sybaseSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateEndpointMessage.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], CreateEndpointMessage.prototype, "username", void 0);
    return CreateEndpointMessage;
}(SpeakeasyBase));
export { CreateEndpointMessage };
