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
import { HostHeaderConditionConfig } from "./hostheaderconditionconfig";
import { HttpHeaderConditionConfig } from "./httpheaderconditionconfig";
import { HttpRequestMethodConditionConfig } from "./httprequestmethodconditionconfig";
import { PathPatternConditionConfig } from "./pathpatternconditionconfig";
import { QueryStringConditionConfig } from "./querystringconditionconfig";
import { SourceIpConditionConfig } from "./sourceipconditionconfig";
// RuleCondition
/**
 * <p>Information about a condition for a rule.</p> <p>Each rule can optionally include up to one of each of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>. Each rule can also optionally include one or more of each of the following conditions: <code>http-header</code> and <code>query-string</code>.</p>
**/
var RuleCondition = /** @class */ (function (_super) {
    __extends(RuleCondition, _super);
    function RuleCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RuleCondition.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HostHeaderConditionConfig)
    ], RuleCondition.prototype, "hostHeaderConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HttpHeaderConditionConfig)
    ], RuleCondition.prototype, "httpHeaderConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HttpRequestMethodConditionConfig)
    ], RuleCondition.prototype, "httpRequestMethodConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PathPatternConditionConfig)
    ], RuleCondition.prototype, "pathPatternConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QueryStringConditionConfig)
    ], RuleCondition.prototype, "queryStringConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourceIpConditionConfig)
    ], RuleCondition.prototype, "sourceIpConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], RuleCondition.prototype, "values", void 0);
    return RuleCondition;
}(SpeakeasyBase));
export { RuleCondition };
