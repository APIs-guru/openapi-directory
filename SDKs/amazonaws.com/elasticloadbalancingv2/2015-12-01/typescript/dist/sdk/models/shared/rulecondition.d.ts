import { SpeakeasyBase } from "../../../internal/utils";
import { HostHeaderConditionConfig } from "./hostheaderconditionconfig";
import { HttpHeaderConditionConfig } from "./httpheaderconditionconfig";
import { HttpRequestMethodConditionConfig } from "./httprequestmethodconditionconfig";
import { PathPatternConditionConfig } from "./pathpatternconditionconfig";
import { QueryStringConditionConfig } from "./querystringconditionconfig";
import { SourceIpConditionConfig } from "./sourceipconditionconfig";
/**
 * <p>Information about a condition for a rule.</p> <p>Each rule can optionally include up to one of each of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>. Each rule can also optionally include one or more of each of the following conditions: <code>http-header</code> and <code>query-string</code>.</p>
**/
export declare class RuleCondition extends SpeakeasyBase {
    field?: string;
    hostHeaderConfig?: HostHeaderConditionConfig;
    httpHeaderConfig?: HttpHeaderConditionConfig;
    httpRequestMethodConfig?: HttpRequestMethodConditionConfig;
    pathPatternConfig?: PathPatternConditionConfig;
    queryStringConfig?: QueryStringConditionConfig;
    sourceIpConfig?: SourceIpConditionConfig;
    values?: string[];
}
