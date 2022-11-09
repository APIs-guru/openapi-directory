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
// ModifyEndpointMessage
/**
 * <p/>
**/
var ModifyEndpointMessage = /** @class */ (function (_super) {
    __extends(ModifyEndpointMessage, _super);
    function ModifyEndpointMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CertificateArn" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "certificateArn", void 0);
    __decorate([
        Metadata({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "databaseName", void 0);
    __decorate([
        Metadata({ data: "json, name=DmsTransferSettings" }),
        __metadata("design:type", DmsTransferSettings)
    ], ModifyEndpointMessage.prototype, "dmsTransferSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=DocDbSettings" }),
        __metadata("design:type", DocDbSettings)
    ], ModifyEndpointMessage.prototype, "docDbSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=DynamoDbSettings" }),
        __metadata("design:type", DynamoDbSettings)
    ], ModifyEndpointMessage.prototype, "dynamoDbSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=ElasticsearchSettings" }),
        __metadata("design:type", ElasticsearchSettings)
    ], ModifyEndpointMessage.prototype, "elasticsearchSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=EndpointArn" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "endpointArn", void 0);
    __decorate([
        Metadata({ data: "json, name=EndpointIdentifier" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "endpointIdentifier", void 0);
    __decorate([
        Metadata({ data: "json, name=EndpointType" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "endpointType", void 0);
    __decorate([
        Metadata({ data: "json, name=EngineName" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "engineName", void 0);
    __decorate([
        Metadata({ data: "json, name=ExactSettings" }),
        __metadata("design:type", Boolean)
    ], ModifyEndpointMessage.prototype, "exactSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=ExternalTableDefinition" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "externalTableDefinition", void 0);
    __decorate([
        Metadata({ data: "json, name=ExtraConnectionAttributes" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "extraConnectionAttributes", void 0);
    __decorate([
        Metadata({ data: "json, name=IBMDb2Settings" }),
        __metadata("design:type", IbmDb2Settings)
    ], ModifyEndpointMessage.prototype, "ibmDb2Settings", void 0);
    __decorate([
        Metadata({ data: "json, name=KafkaSettings" }),
        __metadata("design:type", KafkaSettings)
    ], ModifyEndpointMessage.prototype, "kafkaSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=KinesisSettings" }),
        __metadata("design:type", KinesisSettings)
    ], ModifyEndpointMessage.prototype, "kinesisSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=MicrosoftSQLServerSettings" }),
        __metadata("design:type", MicrosoftSqlServerSettings)
    ], ModifyEndpointMessage.prototype, "microsoftSqlServerSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=MongoDbSettings" }),
        __metadata("design:type", MongoDbSettings)
    ], ModifyEndpointMessage.prototype, "mongoDbSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=MySQLSettings" }),
        __metadata("design:type", MySqlSettings)
    ], ModifyEndpointMessage.prototype, "mySqlSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=NeptuneSettings" }),
        __metadata("design:type", NeptuneSettings)
    ], ModifyEndpointMessage.prototype, "neptuneSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=OracleSettings" }),
        __metadata("design:type", OracleSettings)
    ], ModifyEndpointMessage.prototype, "oracleSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "password", void 0);
    __decorate([
        Metadata({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], ModifyEndpointMessage.prototype, "port", void 0);
    __decorate([
        Metadata({ data: "json, name=PostgreSQLSettings" }),
        __metadata("design:type", PostgreSqlSettings)
    ], ModifyEndpointMessage.prototype, "postgreSqlSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=RedisSettings" }),
        __metadata("design:type", RedisSettings)
    ], ModifyEndpointMessage.prototype, "redisSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=RedshiftSettings" }),
        __metadata("design:type", RedshiftSettings)
    ], ModifyEndpointMessage.prototype, "redshiftSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=S3Settings" }),
        __metadata("design:type", S3Settings)
    ], ModifyEndpointMessage.prototype, "s3Settings", void 0);
    __decorate([
        Metadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "serverName", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceAccessRoleArn" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "serviceAccessRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=SslMode" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "sslMode", void 0);
    __decorate([
        Metadata({ data: "json, name=SybaseSettings" }),
        __metadata("design:type", SybaseSettings)
    ], ModifyEndpointMessage.prototype, "sybaseSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "username", void 0);
    return ModifyEndpointMessage;
}(SpeakeasyBase));
export { ModifyEndpointMessage };
