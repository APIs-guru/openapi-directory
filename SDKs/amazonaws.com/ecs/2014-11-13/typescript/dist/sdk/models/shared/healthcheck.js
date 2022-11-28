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
// HealthCheck
/**
 * <p>An object representing a container health check. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image (such as those specified in a parent image or from the image's Dockerfile).</p> <p>You can view the health status of both individual containers and a task with the DescribeTasks API operation or when viewing the task details in the console.</p> <p>The following describes the possible <code>healthStatus</code> values for a container:</p> <ul> <li> <p> <code>HEALTHY</code>-The container health check has passed successfully.</p> </li> <li> <p> <code>UNHEALTHY</code>-The container health check has failed.</p> </li> <li> <p> <code>UNKNOWN</code>-The container health check is being evaluated or there is no container health check defined.</p> </li> </ul> <p>The following describes the possible <code>healthStatus</code> values for a task. The container health check status of nonessential containers do not have an effect on the health status of a task.</p> <ul> <li> <p> <code>HEALTHY</code>-All essential containers within the task have passed their health checks.</p> </li> <li> <p> <code>UNHEALTHY</code>-One or more essential containers have failed their health check.</p> </li> <li> <p> <code>UNKNOWN</code>-The essential containers within the task are still having their health checks evaluated or there are no container health checks defined.</p> </li> </ul> <p>If a task is run manually, and not as part of a service, the task will continue its lifecycle regardless of its health status. For tasks that are part of a service, if the task reports as unhealthy then the task will be stopped and the service scheduler will replace it.</p> <p>The following are notes about container health check support:</p> <ul> <li> <p>Container health checks require version 1.17.0 or greater of the Amazon ECS container agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a>.</p> </li> <li> <p>Container health checks are supported for Fargate tasks if you are using platform version 1.1.0 or greater. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform Versions</a>.</p> </li> <li> <p>Container health checks are not supported for tasks that are part of a service that is configured to use a Classic Load Balancer.</p> </li> </ul>
**/
var HealthCheck = /** @class */ (function (_super) {
    __extends(HealthCheck, _super);
    function HealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", Array)
    ], HealthCheck.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interval" }),
        __metadata("design:type", Number)
    ], HealthCheck.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retries" }),
        __metadata("design:type", Number)
    ], HealthCheck.prototype, "retries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startPeriod" }),
        __metadata("design:type", Number)
    ], HealthCheck.prototype, "startPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], HealthCheck.prototype, "timeout", void 0);
    return HealthCheck;
}(SpeakeasyBase));
export { HealthCheck };
