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
import { CreateRemoteAccessSessionConfiguration } from "./createremoteaccesssessionconfiguration";
import { InteractionModeEnum } from "./interactionmodeenum";
// CreateRemoteAccessSessionRequest
/**
 * Creates and submits a request to start a remote access session.
**/
var CreateRemoteAccessSessionRequest = /** @class */ (function (_super) {
    __extends(CreateRemoteAccessSessionRequest, _super);
    function CreateRemoteAccessSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], CreateRemoteAccessSessionRequest.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configuration" }),
        __metadata("design:type", CreateRemoteAccessSessionConfiguration)
    ], CreateRemoteAccessSessionRequest.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceArn" }),
        __metadata("design:type", String)
    ], CreateRemoteAccessSessionRequest.prototype, "deviceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceArn" }),
        __metadata("design:type", String)
    ], CreateRemoteAccessSessionRequest.prototype, "instanceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactionMode" }),
        __metadata("design:type", String)
    ], CreateRemoteAccessSessionRequest.prototype, "interactionMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateRemoteAccessSessionRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectArn" }),
        __metadata("design:type", String)
    ], CreateRemoteAccessSessionRequest.prototype, "projectArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteDebugEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateRemoteAccessSessionRequest.prototype, "remoteDebugEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteRecordAppArn" }),
        __metadata("design:type", String)
    ], CreateRemoteAccessSessionRequest.prototype, "remoteRecordAppArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteRecordEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateRemoteAccessSessionRequest.prototype, "remoteRecordEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipAppResign" }),
        __metadata("design:type", Boolean)
    ], CreateRemoteAccessSessionRequest.prototype, "skipAppResign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sshPublicKey" }),
        __metadata("design:type", String)
    ], CreateRemoteAccessSessionRequest.prototype, "sshPublicKey", void 0);
    return CreateRemoteAccessSessionRequest;
}(SpeakeasyBase));
export { CreateRemoteAccessSessionRequest };
