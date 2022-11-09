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
import * as shared from "../shared";
var GetAppsAppIdQueuesPathParams = /** @class */ (function (_super) {
    __extends(GetAppsAppIdQueuesPathParams, _super);
    function GetAppsAppIdQueuesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], GetAppsAppIdQueuesPathParams.prototype, "appId", void 0);
    return GetAppsAppIdQueuesPathParams;
}(SpeakeasyBase));
export { GetAppsAppIdQueuesPathParams };
var GetAppsAppIdQueuesSecurity = /** @class */ (function (_super) {
    __extends(GetAppsAppIdQueuesSecurity, _super);
    function GetAppsAppIdQueuesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAppsAppIdQueuesSecurity.prototype, "bearerAuth", void 0);
    return GetAppsAppIdQueuesSecurity;
}(SpeakeasyBase));
export { GetAppsAppIdQueuesSecurity };
var GetAppsAppIdQueuesRequest = /** @class */ (function (_super) {
    __extends(GetAppsAppIdQueuesRequest, _super);
    function GetAppsAppIdQueuesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAppsAppIdQueuesPathParams)
    ], GetAppsAppIdQueuesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAppsAppIdQueuesSecurity)
    ], GetAppsAppIdQueuesRequest.prototype, "security", void 0);
    return GetAppsAppIdQueuesRequest;
}(SpeakeasyBase));
export { GetAppsAppIdQueuesRequest };
var GetAppsAppIdQueuesResponse = /** @class */ (function (_super) {
    __extends(GetAppsAppIdQueuesResponse, _super);
    function GetAppsAppIdQueuesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAppsAppIdQueuesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAppsAppIdQueuesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], GetAppsAppIdQueuesResponse.prototype, "error", void 0);
    __decorate([
        Metadata({ elemType: shared.QueueResponse }),
        __metadata("design:type", Array)
    ], GetAppsAppIdQueuesResponse.prototype, "queueResponses", void 0);
    return GetAppsAppIdQueuesResponse;
}(SpeakeasyBase));
export { GetAppsAppIdQueuesResponse };
