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
// DeploymentCircuitBreaker
/**
 * <note> <p>The deployment circuit breaker can only be used for services using the rolling update (<code>ECS</code>) deployment type that are not behind a Classic Load Balancer.</p> </note> <p>The <b>deployment circuit breaker</b> determines whether a service deployment will fail if the service can't reach a steady state. If enabled, a service deployment will transition to a failed state and stop launching new tasks. You can also enable Amazon ECS to roll back your service to the last completed deployment after a failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling update</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
**/
var DeploymentCircuitBreaker = /** @class */ (function (_super) {
    __extends(DeploymentCircuitBreaker, _super);
    function DeploymentCircuitBreaker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enable" }),
        __metadata("design:type", Boolean)
    ], DeploymentCircuitBreaker.prototype, "enable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollback" }),
        __metadata("design:type", Boolean)
    ], DeploymentCircuitBreaker.prototype, "rollback", void 0);
    return DeploymentCircuitBreaker;
}(SpeakeasyBase));
export { DeploymentCircuitBreaker };
