import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://elasticloadbalancing.{region}.amazonaws.com", "https://elasticloadbalancing.{region}.amazonaws.com", "http://elasticloadbalancing.amazonaws.com", "https://elasticloadbalancing.amazonaws.com", "http://elasticloadbalancing.{region}.amazonaws.com.cn", "https://elasticloadbalancing.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getDeleteListener - <p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>
    **/
    getDeleteListener(req: operations.GetDeleteListenerRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteListenerResponse>;
    /**
     * getDeleteLoadBalancer - <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>
    **/
    getDeleteLoadBalancer(req: operations.GetDeleteLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteLoadBalancerResponse>;
    /**
     * getDeleteRule - <p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>
    **/
    getDeleteRule(req: operations.GetDeleteRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteRuleResponse>;
    /**
     * getDeleteTargetGroup - <p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>
    **/
    getDeleteTargetGroup(req: operations.GetDeleteTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteTargetGroupResponse>;
    /**
     * getDescribeAccountLimits - <p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>
    **/
    getDescribeAccountLimits(req: operations.GetDescribeAccountLimitsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeAccountLimitsResponse>;
    /**
     * getDescribeListenerCertificates - <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>
    **/
    getDescribeListenerCertificates(req: operations.GetDescribeListenerCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeListenerCertificatesResponse>;
    /**
     * getDescribeListeners - Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.
    **/
    getDescribeListeners(req: operations.GetDescribeListenersRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeListenersResponse>;
    /**
     * getDescribeLoadBalancerAttributes - <p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
    **/
    getDescribeLoadBalancerAttributes(req: operations.GetDescribeLoadBalancerAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeLoadBalancerAttributesResponse>;
    /**
     * getDescribeLoadBalancers - Describes the specified load balancers or all of your load balancers.
    **/
    getDescribeLoadBalancers(req: operations.GetDescribeLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeLoadBalancersResponse>;
    /**
     * getDescribeRules - Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
    **/
    getDescribeRules(req: operations.GetDescribeRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeRulesResponse>;
    /**
     * getDescribeSslPolicies - <p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
    **/
    getDescribeSslPolicies(req: operations.GetDescribeSslPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeSslPoliciesResponse>;
    /**
     * getDescribeTags - Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
    **/
    getDescribeTags(req: operations.GetDescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeTagsResponse>;
    /**
     * getDescribeTargetGroupAttributes - <p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
    **/
    getDescribeTargetGroupAttributes(req: operations.GetDescribeTargetGroupAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeTargetGroupAttributesResponse>;
    /**
     * getDescribeTargetGroups - Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.
    **/
    getDescribeTargetGroups(req: operations.GetDescribeTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeTargetGroupsResponse>;
    /**
     * getModifyTargetGroup - Modifies the health checks used when evaluating the health state of the targets in the specified target group.
    **/
    getModifyTargetGroup(req: operations.GetModifyTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyTargetGroupResponse>;
    /**
     * getRemoveTags - Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
    **/
    getRemoveTags(req: operations.GetRemoveTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveTagsResponse>;
    /**
     * getSetIpAddressType - Sets the type of IP addresses used by the subnets of the specified Application Load Balancer or Network Load Balancer.
    **/
    getSetIpAddressType(req: operations.GetSetIpAddressTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetSetIpAddressTypeResponse>;
    /**
     * getSetSecurityGroups - <p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>
    **/
    getSetSecurityGroups(req: operations.GetSetSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetSecurityGroupsResponse>;
    /**
     * postAddListenerCertificates - <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener.</p> <p>If the certificate in already in the certificate list, the call is successful but the certificate is not added again.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS listeners</a> in the <i>Network Load Balancers Guide</i>.</p>
    **/
    postAddListenerCertificates(req: operations.PostAddListenerCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.PostAddListenerCertificatesResponse>;
    /**
     * postAddTags - <p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, and rules.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p>
    **/
    postAddTags(req: operations.PostAddTagsRequest, config?: AxiosRequestConfig): Promise<operations.PostAddTagsResponse>;
    /**
     * postCreateListener - <p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p>
    **/
    postCreateListener(req: operations.PostCreateListenerRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateListenerResponse>;
    /**
     * postCreateLoadBalancer - <p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p>
    **/
    postCreateLoadBalancer(req: operations.PostCreateLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateLoadBalancerResponse>;
    /**
     * postCreateRule - <p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>
    **/
    postCreateRule(req: operations.PostCreateRuleRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateRuleResponse>;
    /**
     * postCreateTargetGroup - <p>Creates a target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target groups for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p>
    **/
    postCreateTargetGroup(req: operations.PostCreateTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateTargetGroupResponse>;
    /**
     * postDeleteListener - <p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>
    **/
    postDeleteListener(req: operations.PostDeleteListenerRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteListenerResponse>;
    /**
     * postDeleteLoadBalancer - <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>
    **/
    postDeleteLoadBalancer(req: operations.PostDeleteLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteLoadBalancerResponse>;
    /**
     * postDeleteRule - <p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>
    **/
    postDeleteRule(req: operations.PostDeleteRuleRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteRuleResponse>;
    /**
     * postDeleteTargetGroup - <p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>
    **/
    postDeleteTargetGroup(req: operations.PostDeleteTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteTargetGroupResponse>;
    /**
     * postDeregisterTargets - Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.
    **/
    postDeregisterTargets(req: operations.PostDeregisterTargetsRequest, config?: AxiosRequestConfig): Promise<operations.PostDeregisterTargetsResponse>;
    /**
     * postDescribeAccountLimits - <p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>
    **/
    postDescribeAccountLimits(req: operations.PostDescribeAccountLimitsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeAccountLimitsResponse>;
    /**
     * postDescribeListenerCertificates - <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>
    **/
    postDescribeListenerCertificates(req: operations.PostDescribeListenerCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeListenerCertificatesResponse>;
    /**
     * postDescribeListeners - Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.
    **/
    postDescribeListeners(req: operations.PostDescribeListenersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeListenersResponse>;
    /**
     * postDescribeLoadBalancerAttributes - <p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
    **/
    postDescribeLoadBalancerAttributes(req: operations.PostDescribeLoadBalancerAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeLoadBalancerAttributesResponse>;
    /**
     * postDescribeLoadBalancers - Describes the specified load balancers or all of your load balancers.
    **/
    postDescribeLoadBalancers(req: operations.PostDescribeLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeLoadBalancersResponse>;
    /**
     * postDescribeRules - Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
    **/
    postDescribeRules(req: operations.PostDescribeRulesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeRulesResponse>;
    /**
     * postDescribeSslPolicies - <p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
    **/
    postDescribeSslPolicies(req: operations.PostDescribeSslPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeSslPoliciesResponse>;
    /**
     * postDescribeTags - Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
    **/
    postDescribeTags(req: operations.PostDescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeTagsResponse>;
    /**
     * postDescribeTargetGroupAttributes - <p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
    **/
    postDescribeTargetGroupAttributes(req: operations.PostDescribeTargetGroupAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeTargetGroupAttributesResponse>;
    /**
     * postDescribeTargetGroups - Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.
    **/
    postDescribeTargetGroups(req: operations.PostDescribeTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeTargetGroupsResponse>;
    /**
     * postDescribeTargetHealth - Describes the health of the specified targets or all of your targets.
    **/
    postDescribeTargetHealth(req: operations.PostDescribeTargetHealthRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeTargetHealthResponse>;
    /**
     * postModifyListener - <p>Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged.</p> <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>
    **/
    postModifyListener(req: operations.PostModifyListenerRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyListenerResponse>;
    /**
     * postModifyLoadBalancerAttributes - <p>Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>
    **/
    postModifyLoadBalancerAttributes(req: operations.PostModifyLoadBalancerAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyLoadBalancerAttributesResponse>;
    /**
     * postModifyRule - <p>Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>
    **/
    postModifyRule(req: operations.PostModifyRuleRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyRuleResponse>;
    /**
     * postModifyTargetGroup - Modifies the health checks used when evaluating the health state of the targets in the specified target group.
    **/
    postModifyTargetGroup(req: operations.PostModifyTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyTargetGroupResponse>;
    /**
     * postModifyTargetGroupAttributes - Modifies the specified attributes of the specified target group.
    **/
    postModifyTargetGroupAttributes(req: operations.PostModifyTargetGroupAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyTargetGroupAttributesResponse>;
    /**
     * postRegisterTargets - <p>Registers the specified targets with the specified target group.</p> <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p>
    **/
    postRegisterTargets(req: operations.PostRegisterTargetsRequest, config?: AxiosRequestConfig): Promise<operations.PostRegisterTargetsResponse>;
    /**
     * postRemoveListenerCertificates - Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.
    **/
    postRemoveListenerCertificates(req: operations.PostRemoveListenerCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveListenerCertificatesResponse>;
    /**
     * postRemoveTags - Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
    **/
    postRemoveTags(req: operations.PostRemoveTagsRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveTagsResponse>;
    /**
     * postSetIpAddressType - Sets the type of IP addresses used by the subnets of the specified Application Load Balancer or Network Load Balancer.
    **/
    postSetIpAddressType(req: operations.PostSetIpAddressTypeRequest, config?: AxiosRequestConfig): Promise<operations.PostSetIpAddressTypeResponse>;
    /**
     * postSetRulePriorities - <p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>
    **/
    postSetRulePriorities(req: operations.PostSetRulePrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetRulePrioritiesResponse>;
    /**
     * postSetSecurityGroups - <p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>
    **/
    postSetSecurityGroups(req: operations.PostSetSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetSecurityGroupsResponse>;
    /**
     * postSetSubnets - <p>Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer or Network Load Balancer. The specified subnets replace the previously enabled subnets.</p> <p>When you specify subnets for a Network Load Balancer, you must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.</p>
    **/
    postSetSubnets(req: operations.PostSetSubnetsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetSubnetsResponse>;
}
export {};
