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
import { ClearTimerAction } from "./cleartimeraction";
import { DynamoDbAction } from "./dynamodbaction";
import { DynamoDBv2Action } from "./dynamodbv2action";
import { FirehoseAction } from "./firehoseaction";
import { IotEventsAction } from "./ioteventsaction";
import { IotSiteWiseAction } from "./iotsitewiseaction";
import { IotTopicPublishAction } from "./iottopicpublishaction";
import { LambdaAction } from "./lambdaaction";
import { ResetTimerAction } from "./resettimeraction";
import { SetTimerAction } from "./settimeraction";
import { SetVariableAction } from "./setvariableaction";
import { SnsTopicPublishAction } from "./snstopicpublishaction";
import { SqsAction } from "./sqsaction";
// Action
/**
 * An action to be performed when the <code>condition</code> is TRUE.
**/
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clearTimer" }),
        __metadata("design:type", ClearTimerAction)
    ], Action.prototype, "clearTimer", void 0);
    __decorate([
        Metadata({ data: "json, name=dynamoDB" }),
        __metadata("design:type", DynamoDbAction)
    ], Action.prototype, "dynamoDb", void 0);
    __decorate([
        Metadata({ data: "json, name=dynamoDBv2" }),
        __metadata("design:type", DynamoDBv2Action)
    ], Action.prototype, "dynamoDBv2", void 0);
    __decorate([
        Metadata({ data: "json, name=firehose" }),
        __metadata("design:type", FirehoseAction)
    ], Action.prototype, "firehose", void 0);
    __decorate([
        Metadata({ data: "json, name=iotEvents" }),
        __metadata("design:type", IotEventsAction)
    ], Action.prototype, "iotEvents", void 0);
    __decorate([
        Metadata({ data: "json, name=iotSiteWise" }),
        __metadata("design:type", IotSiteWiseAction)
    ], Action.prototype, "iotSiteWise", void 0);
    __decorate([
        Metadata({ data: "json, name=iotTopicPublish" }),
        __metadata("design:type", IotTopicPublishAction)
    ], Action.prototype, "iotTopicPublish", void 0);
    __decorate([
        Metadata({ data: "json, name=lambda" }),
        __metadata("design:type", LambdaAction)
    ], Action.prototype, "lambda", void 0);
    __decorate([
        Metadata({ data: "json, name=resetTimer" }),
        __metadata("design:type", ResetTimerAction)
    ], Action.prototype, "resetTimer", void 0);
    __decorate([
        Metadata({ data: "json, name=setTimer" }),
        __metadata("design:type", SetTimerAction)
    ], Action.prototype, "setTimer", void 0);
    __decorate([
        Metadata({ data: "json, name=setVariable" }),
        __metadata("design:type", SetVariableAction)
    ], Action.prototype, "setVariable", void 0);
    __decorate([
        Metadata({ data: "json, name=sns" }),
        __metadata("design:type", SnsTopicPublishAction)
    ], Action.prototype, "sns", void 0);
    __decorate([
        Metadata({ data: "json, name=sqs" }),
        __metadata("design:type", SqsAction)
    ], Action.prototype, "sqs", void 0);
    return Action;
}(SpeakeasyBase));
export { Action };
