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
import { BuildSystemSharedDtoAgentStatus } from "./buildsystemshareddtoagentstatus";
import { BuildSystemSharedDtoStepConfiguration } from "./buildsystemshareddtostepconfiguration";
// BuildSystemSharedDtoAgent
/**
 * A DTO for an IAgent
**/
var BuildSystemSharedDtoAgent = /** @class */ (function (_super) {
    __extends(BuildSystemSharedDtoAgent, _super);
    function BuildSystemSharedDtoAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgentID" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoAgent.prototype, "agentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeepAliveInterval" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoAgent.prototype, "keepAliveInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MachineName" }),
        __metadata("design:type", String)
    ], BuildSystemSharedDtoAgent.prototype, "machineName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", BuildSystemSharedDtoAgentStatus)
    ], BuildSystemSharedDtoAgent.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StepConfigurations", elemType: BuildSystemSharedDtoStepConfiguration }),
        __metadata("design:type", Array)
    ], BuildSystemSharedDtoAgent.prototype, "stepConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserID" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoAgent.prototype, "userId", void 0);
    return BuildSystemSharedDtoAgent;
}(SpeakeasyBase));
export { BuildSystemSharedDtoAgent };
// BuildSystemSharedDtoAgentInput
/**
 * A DTO for an IAgent
**/
var BuildSystemSharedDtoAgentInput = /** @class */ (function (_super) {
    __extends(BuildSystemSharedDtoAgentInput, _super);
    function BuildSystemSharedDtoAgentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgentID, form, name=AgentID;" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoAgentInput.prototype, "agentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeepAliveInterval, form, name=KeepAliveInterval;" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoAgentInput.prototype, "keepAliveInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MachineName, form, name=MachineName;" }),
        __metadata("design:type", String)
    ], BuildSystemSharedDtoAgentInput.prototype, "machineName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status, form, name=Status;" }),
        __metadata("design:type", BuildSystemSharedDtoAgentStatus)
    ], BuildSystemSharedDtoAgentInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserID, form, name=UserID;" }),
        __metadata("design:type", Number)
    ], BuildSystemSharedDtoAgentInput.prototype, "userId", void 0);
    return BuildSystemSharedDtoAgentInput;
}(SpeakeasyBase));
export { BuildSystemSharedDtoAgentInput };
