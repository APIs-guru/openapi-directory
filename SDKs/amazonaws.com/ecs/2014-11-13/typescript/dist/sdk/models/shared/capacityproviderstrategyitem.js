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
// CapacityProviderStrategyItem
/**
 * <p>The details of a capacity provider strategy. A capacity provider strategy can be set when using the <a>RunTask</a> or <a>CreateCluster</a> APIs or as the default capacity provider strategy for a cluster with the <a>CreateCluster</a> API.</p> <p>Only capacity providers that are already associated with a cluster and have an <code>ACTIVE</code> or <code>UPDATING</code> status can be used in a capacity provider strategy. The <a>PutClusterCapacityProviders</a> API is used to associate a capacity provider with a cluster.</p> <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New Auto Scaling group capacity providers can be created with the <a>CreateCapacityProvider</a> API operation.</p> <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or <code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used in a capacity provider strategy.</p> <p>A capacity provider strategy may contain a maximum of 6 capacity providers.</p>
**/
var CapacityProviderStrategyItem = /** @class */ (function (_super) {
    __extends(CapacityProviderStrategyItem, _super);
    function CapacityProviderStrategyItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base" }),
        __metadata("design:type", Number)
    ], CapacityProviderStrategyItem.prototype, "base", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacityProvider" }),
        __metadata("design:type", String)
    ], CapacityProviderStrategyItem.prototype, "capacityProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], CapacityProviderStrategyItem.prototype, "weight", void 0);
    return CapacityProviderStrategyItem;
}(SpeakeasyBase));
export { CapacityProviderStrategyItem };
