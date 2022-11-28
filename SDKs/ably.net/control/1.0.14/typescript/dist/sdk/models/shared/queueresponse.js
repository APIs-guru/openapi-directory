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
var QueueResponseAmqp = /** @class */ (function (_super) {
    __extends(QueueResponseAmqp, _super);
    function QueueResponseAmqp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queueName" }),
        __metadata("design:type", String)
    ], QueueResponseAmqp.prototype, "queueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], QueueResponseAmqp.prototype, "uri", void 0);
    return QueueResponseAmqp;
}(SpeakeasyBase));
export { QueueResponseAmqp };
// QueueResponseMessages
/**
 * Details of messages in the queue.
**/
var QueueResponseMessages = /** @class */ (function (_super) {
    __extends(QueueResponseMessages, _super);
    function QueueResponseMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ready" }),
        __metadata("design:type", Number)
    ], QueueResponseMessages.prototype, "ready", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], QueueResponseMessages.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unacknowledged" }),
        __metadata("design:type", Number)
    ], QueueResponseMessages.prototype, "unacknowledged", void 0);
    return QueueResponseMessages;
}(SpeakeasyBase));
export { QueueResponseMessages };
var QueueResponseStats = /** @class */ (function (_super) {
    __extends(QueueResponseStats, _super);
    function QueueResponseStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acknowledgementRate" }),
        __metadata("design:type", Number)
    ], QueueResponseStats.prototype, "acknowledgementRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryRate" }),
        __metadata("design:type", Number)
    ], QueueResponseStats.prototype, "deliveryRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishRate" }),
        __metadata("design:type", Number)
    ], QueueResponseStats.prototype, "publishRate", void 0);
    return QueueResponseStats;
}(SpeakeasyBase));
export { QueueResponseStats };
var QueueResponseStomp = /** @class */ (function (_super) {
    __extends(QueueResponseStomp, _super);
    function QueueResponseStomp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], QueueResponseStomp.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], QueueResponseStomp.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], QueueResponseStomp.prototype, "uri", void 0);
    return QueueResponseStomp;
}(SpeakeasyBase));
export { QueueResponseStomp };
var QueueResponse = /** @class */ (function (_super) {
    __extends(QueueResponse, _super);
    function QueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amqp" }),
        __metadata("design:type", QueueResponseAmqp)
    ], QueueResponse.prototype, "amqp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], QueueResponse.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deadletter" }),
        __metadata("design:type", Boolean)
    ], QueueResponse.prototype, "deadletter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deadletterId" }),
        __metadata("design:type", String)
    ], QueueResponse.prototype, "deadletterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueueResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxLength" }),
        __metadata("design:type", Number)
    ], QueueResponse.prototype, "maxLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages" }),
        __metadata("design:type", QueueResponseMessages)
    ], QueueResponse.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], QueueResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], QueueResponse.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], QueueResponse.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats" }),
        __metadata("design:type", QueueResponseStats)
    ], QueueResponse.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stomp" }),
        __metadata("design:type", QueueResponseStomp)
    ], QueueResponse.prototype, "stomp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", Number)
    ], QueueResponse.prototype, "ttl", void 0);
    return QueueResponse;
}(SpeakeasyBase));
export { QueueResponse };
