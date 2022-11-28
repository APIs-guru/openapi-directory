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
import { CloudwatchAlarmAction } from "./cloudwatchalarmaction";
import { CloudwatchLogsAction } from "./cloudwatchlogsaction";
import { CloudwatchMetricAction } from "./cloudwatchmetricaction";
import { DynamoDbAction } from "./dynamodbaction";
import { DynamoDBv2Action } from "./dynamodbv2action";
import { ElasticsearchAction } from "./elasticsearchaction";
import { FirehoseAction } from "./firehoseaction";
import { HttpAction } from "./httpaction";
import { IotAnalyticsAction } from "./iotanalyticsaction";
import { IotEventsAction } from "./ioteventsaction";
import { IotSiteWiseAction } from "./iotsitewiseaction";
import { KafkaAction } from "./kafkaaction";
import { KinesisAction } from "./kinesisaction";
import { LambdaAction } from "./lambdaaction";
import { OpenSearchAction } from "./opensearchaction";
import { RepublishAction } from "./republishaction";
import { S3Action } from "./s3action";
import { SalesforceAction } from "./salesforceaction";
import { SnsAction } from "./snsaction";
import { SqsAction } from "./sqsaction";
import { StepFunctionsAction } from "./stepfunctionsaction";
import { TimestreamAction } from "./timestreamaction";
// Action
/**
 * Describes the actions associated with a rule.
**/
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudwatchAlarm" }),
        __metadata("design:type", CloudwatchAlarmAction)
    ], Action.prototype, "cloudwatchAlarm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudwatchLogs" }),
        __metadata("design:type", CloudwatchLogsAction)
    ], Action.prototype, "cloudwatchLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudwatchMetric" }),
        __metadata("design:type", CloudwatchMetricAction)
    ], Action.prototype, "cloudwatchMetric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamoDB" }),
        __metadata("design:type", DynamoDbAction)
    ], Action.prototype, "dynamoDb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamoDBv2" }),
        __metadata("design:type", DynamoDBv2Action)
    ], Action.prototype, "dynamoDBv2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elasticsearch" }),
        __metadata("design:type", ElasticsearchAction)
    ], Action.prototype, "elasticsearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firehose" }),
        __metadata("design:type", FirehoseAction)
    ], Action.prototype, "firehose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http" }),
        __metadata("design:type", HttpAction)
    ], Action.prototype, "http", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iotAnalytics" }),
        __metadata("design:type", IotAnalyticsAction)
    ], Action.prototype, "iotAnalytics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iotEvents" }),
        __metadata("design:type", IotEventsAction)
    ], Action.prototype, "iotEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iotSiteWise" }),
        __metadata("design:type", IotSiteWiseAction)
    ], Action.prototype, "iotSiteWise", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kafka" }),
        __metadata("design:type", KafkaAction)
    ], Action.prototype, "kafka", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kinesis" }),
        __metadata("design:type", KinesisAction)
    ], Action.prototype, "kinesis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambda" }),
        __metadata("design:type", LambdaAction)
    ], Action.prototype, "lambda", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openSearch" }),
        __metadata("design:type", OpenSearchAction)
    ], Action.prototype, "openSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=republish" }),
        __metadata("design:type", RepublishAction)
    ], Action.prototype, "republish", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3" }),
        __metadata("design:type", S3Action)
    ], Action.prototype, "s3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salesforce" }),
        __metadata("design:type", SalesforceAction)
    ], Action.prototype, "salesforce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sns" }),
        __metadata("design:type", SnsAction)
    ], Action.prototype, "sns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sqs" }),
        __metadata("design:type", SqsAction)
    ], Action.prototype, "sqs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stepFunctions" }),
        __metadata("design:type", StepFunctionsAction)
    ], Action.prototype, "stepFunctions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestream" }),
        __metadata("design:type", TimestreamAction)
    ], Action.prototype, "timestream", void 0);
    return Action;
}(SpeakeasyBase));
export { Action };
