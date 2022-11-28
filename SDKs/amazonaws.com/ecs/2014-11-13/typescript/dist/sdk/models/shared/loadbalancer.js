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
// LoadBalancer
/**
 * <p>The load balancer configuration to use with a service or task set.</p> <p>For specific notes and restrictions regarding the use of load balancers with services and task sets, see the CreateService and CreateTaskSet actions.</p>
**/
var LoadBalancer = /** @class */ (function (_super) {
    __extends(LoadBalancer, _super);
    function LoadBalancer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerName" }),
        __metadata("design:type", String)
    ], LoadBalancer.prototype, "containerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerPort" }),
        __metadata("design:type", Number)
    ], LoadBalancer.prototype, "containerPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loadBalancerName" }),
        __metadata("design:type", String)
    ], LoadBalancer.prototype, "loadBalancerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetGroupArn" }),
        __metadata("design:type", String)
    ], LoadBalancer.prototype, "targetGroupArn", void 0);
    return LoadBalancer;
}(SpeakeasyBase));
export { LoadBalancer };
