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
import { DynamoDbAction } from "./dynamodbaction";
import { DynamoDBv2Action } from "./dynamodbv2action";
import { FirehoseAction } from "./firehoseaction";
import { IotEventsAction } from "./ioteventsaction";
import { IotSiteWiseAction } from "./iotsitewiseaction";
import { IotTopicPublishAction } from "./iottopicpublishaction";
import { LambdaAction } from "./lambdaaction";
import { SnsTopicPublishAction } from "./snstopicpublishaction";
import { SqsAction } from "./sqsaction";
// AlarmAction
/**
 * Specifies one of the following actions to receive notifications when the alarm state changes.
**/
var AlarmAction = /** @class */ (function (_super) {
    __extends(AlarmAction, _super);
    function AlarmAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamoDB" }),
        __metadata("design:type", DynamoDbAction)
    ], AlarmAction.prototype, "dynamoDb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamoDBv2" }),
        __metadata("design:type", DynamoDBv2Action)
    ], AlarmAction.prototype, "dynamoDBv2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firehose" }),
        __metadata("design:type", FirehoseAction)
    ], AlarmAction.prototype, "firehose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iotEvents" }),
        __metadata("design:type", IotEventsAction)
    ], AlarmAction.prototype, "iotEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iotSiteWise" }),
        __metadata("design:type", IotSiteWiseAction)
    ], AlarmAction.prototype, "iotSiteWise", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iotTopicPublish" }),
        __metadata("design:type", IotTopicPublishAction)
    ], AlarmAction.prototype, "iotTopicPublish", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lambda" }),
        __metadata("design:type", LambdaAction)
    ], AlarmAction.prototype, "lambda", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sns" }),
        __metadata("design:type", SnsTopicPublishAction)
    ], AlarmAction.prototype, "sns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sqs" }),
        __metadata("design:type", SqsAction)
    ], AlarmAction.prototype, "sqs", void 0);
    return AlarmAction;
}(SpeakeasyBase));
export { AlarmAction };
