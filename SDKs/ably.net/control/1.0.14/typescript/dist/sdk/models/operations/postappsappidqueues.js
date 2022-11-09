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
var PostAppsAppIdQueuesPathParams = /** @class */ (function (_super) {
    __extends(PostAppsAppIdQueuesPathParams, _super);
    function PostAppsAppIdQueuesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], PostAppsAppIdQueuesPathParams.prototype, "appId", void 0);
    return PostAppsAppIdQueuesPathParams;
}(SpeakeasyBase));
export { PostAppsAppIdQueuesPathParams };
var PostAppsAppIdQueuesSecurity = /** @class */ (function (_super) {
    __extends(PostAppsAppIdQueuesSecurity, _super);
    function PostAppsAppIdQueuesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PostAppsAppIdQueuesSecurity.prototype, "bearerAuth", void 0);
    return PostAppsAppIdQueuesSecurity;
}(SpeakeasyBase));
export { PostAppsAppIdQueuesSecurity };
var PostAppsAppIdQueuesRequest = /** @class */ (function (_super) {
    __extends(PostAppsAppIdQueuesRequest, _super);
    function PostAppsAppIdQueuesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostAppsAppIdQueuesPathParams)
    ], PostAppsAppIdQueuesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Queue)
    ], PostAppsAppIdQueuesRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostAppsAppIdQueuesSecurity)
    ], PostAppsAppIdQueuesRequest.prototype, "security", void 0);
    return PostAppsAppIdQueuesRequest;
}(SpeakeasyBase));
export { PostAppsAppIdQueuesRequest };
var PostAppsAppIdQueuesResponse = /** @class */ (function (_super) {
    __extends(PostAppsAppIdQueuesResponse, _super);
    function PostAppsAppIdQueuesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostAppsAppIdQueuesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostAppsAppIdQueuesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], PostAppsAppIdQueuesResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.QueueResponse)
    ], PostAppsAppIdQueuesResponse.prototype, "queueResponse", void 0);
    return PostAppsAppIdQueuesResponse;
}(SpeakeasyBase));
export { PostAppsAppIdQueuesResponse };
