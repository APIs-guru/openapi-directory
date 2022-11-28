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
import { ServerProcess } from "./serverprocess";
// RuntimeConfiguration
/**
 * <p>A collection of server process configurations that describe the set of processes to run on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. GameLift launches the configured processes, manages their life cycle, and replaces them as needed. Each instance checks regularly for an updated runtime configuration. </p> <p>A GameLift instance is limited to 50 processes running concurrently. To calculate the total number of processes in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each <a>ServerProcess</a>. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple Processes on a Fleet</a>.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeRuntimeConfiguration</a> | <a>UpdateRuntimeConfiguration</a> </p>
**/
var RuntimeConfiguration = /** @class */ (function (_super) {
    __extends(RuntimeConfiguration, _super);
    function RuntimeConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GameSessionActivationTimeoutSeconds" }),
        __metadata("design:type", Number)
    ], RuntimeConfiguration.prototype, "gameSessionActivationTimeoutSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxConcurrentGameSessionActivations" }),
        __metadata("design:type", Number)
    ], RuntimeConfiguration.prototype, "maxConcurrentGameSessionActivations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerProcesses", elemType: ServerProcess }),
        __metadata("design:type", Array)
    ], RuntimeConfiguration.prototype, "serverProcesses", void 0);
    return RuntimeConfiguration;
}(SpeakeasyBase));
export { RuntimeConfiguration };
