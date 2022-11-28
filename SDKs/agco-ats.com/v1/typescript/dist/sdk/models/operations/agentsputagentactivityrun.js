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
import * as shared from "../shared";
var AgentsPutAgentActivityRunPathParams = /** @class */ (function (_super) {
    __extends(AgentsPutAgentActivityRunPathParams, _super);
    function AgentsPutAgentActivityRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentID" }),
        __metadata("design:type", Number)
    ], AgentsPutAgentActivityRunPathParams.prototype, "agentId", void 0);
    return AgentsPutAgentActivityRunPathParams;
}(SpeakeasyBase));
export { AgentsPutAgentActivityRunPathParams };
var AgentsPutAgentActivityRunRequestsInput = /** @class */ (function (_super) {
    __extends(AgentsPutAgentActivityRunRequestsInput, _super);
    function AgentsPutAgentActivityRunRequestsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], AgentsPutAgentActivityRunRequestsInput.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BuildSystemSharedDtoActivityRunInput)
    ], AgentsPutAgentActivityRunRequestsInput.prototype, "buildSystemSharedDtoActivityRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.BuildSystemSharedDtoActivityRunInput)
    ], AgentsPutAgentActivityRunRequestsInput.prototype, "buildSystemSharedDtoActivityRun1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.BuildSystemSharedDtoActivityRunInput)
    ], AgentsPutAgentActivityRunRequestsInput.prototype, "buildSystemSharedDtoActivityRun2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], AgentsPutAgentActivityRunRequestsInput.prototype, "textXml", void 0);
    return AgentsPutAgentActivityRunRequestsInput;
}(SpeakeasyBase));
export { AgentsPutAgentActivityRunRequestsInput };
var AgentsPutAgentActivityRunRequest = /** @class */ (function (_super) {
    __extends(AgentsPutAgentActivityRunRequest, _super);
    function AgentsPutAgentActivityRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AgentsPutAgentActivityRunPathParams)
    ], AgentsPutAgentActivityRunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AgentsPutAgentActivityRunRequestsInput)
    ], AgentsPutAgentActivityRunRequest.prototype, "request", void 0);
    return AgentsPutAgentActivityRunRequest;
}(SpeakeasyBase));
export { AgentsPutAgentActivityRunRequest };
var AgentsPutAgentActivityRunResponse = /** @class */ (function (_super) {
    __extends(AgentsPutAgentActivityRunResponse, _super);
    function AgentsPutAgentActivityRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AgentsPutAgentActivityRunResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AgentsPutAgentActivityRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AgentsPutAgentActivityRunResponse.prototype, "statusCode", void 0);
    return AgentsPutAgentActivityRunResponse;
}(SpeakeasyBase));
export { AgentsPutAgentActivityRunResponse };
