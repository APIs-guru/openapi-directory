import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://config.{region}.amazonaws.com", "https://config.{region}.amazonaws.com", "http://config.{region}.amazonaws.com.cn", "https://config.{region}.amazonaws.com.cn"];
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
     * batchGetAggregateResourceConfig - <p>Returns the current configuration items for resources that are present in your Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return tags and relationships.</p> </li> </ul> </note>
    **/
    batchGetAggregateResourceConfig(req: operations.BatchGetAggregateResourceConfigRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetAggregateResourceConfigResponse>;
    /**
     * batchGetResourceConfig - <p>Returns the <code>BaseConfigurationItem</code> for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</p> </li> </ul> </note>
    **/
    batchGetResourceConfig(req: operations.BatchGetResourceConfigRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetResourceConfigResponse>;
    /**
     * deleteAggregationAuthorization - Deletes the authorization granted to the specified configuration aggregator account in a specified region.
    **/
    deleteAggregationAuthorization(req: operations.DeleteAggregationAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAggregationAuthorizationResponse>;
    /**
     * deleteConfigRule - <p>Deletes the specified Config rule and all of its evaluation results.</p> <p>Config sets the state of a rule to <code>DELETING</code> until the deletion is complete. You cannot update a rule while it is in this state. If you make a <code>PutConfigRule</code> or <code>DeleteConfigRule</code> request for the rule, you will receive a <code>ResourceInUseException</code>.</p> <p>You can check the state of a rule by using the <code>DescribeConfigRules</code> request.</p>
    **/
    deleteConfigRule(req: operations.DeleteConfigRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigRuleResponse>;
    /**
     * deleteConfigurationAggregator - Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.
    **/
    deleteConfigurationAggregator(req: operations.DeleteConfigurationAggregatorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigurationAggregatorResponse>;
    /**
     * deleteConfigurationRecorder - <p>Deletes the configuration recorder.</p> <p>After the configuration recorder is deleted, Config will not record resource configuration changes until you create a new configuration recorder.</p> <p>This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the <code>GetResourceConfigHistory</code> action, but you will not be able to access this information in the Config console until you create a new configuration recorder.</p>
    **/
    deleteConfigurationRecorder(req: operations.DeleteConfigurationRecorderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigurationRecorderResponse>;
    /**
     * deleteConformancePack - <p>Deletes the specified conformance pack and all the Config rules, remediation actions, and all evaluation results within that conformance pack.</p> <p>Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete. You cannot update a conformance pack while it is in this state.</p>
    **/
    deleteConformancePack(req: operations.DeleteConformancePackRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConformancePackResponse>;
    /**
     * deleteDeliveryChannel - <p>Deletes the delivery channel.</p> <p>Before you can delete the delivery channel, you must stop the configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>
    **/
    deleteDeliveryChannel(req: operations.DeleteDeliveryChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeliveryChannelResponse>;
    /**
     * deleteEvaluationResults - Deletes the evaluation results for the specified Config rule. You can specify one Config rule per request. After you delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating your Amazon Web Services resources against the rule.
    **/
    deleteEvaluationResults(req: operations.DeleteEvaluationResultsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEvaluationResultsResponse>;
    /**
     * deleteOrganizationConfigRule - <p>Deletes the specified organization config rule and all of its evaluation results from all member accounts in that organization. </p> <p>Only a master account and a delegated administrator account can delete an organization config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state.</p>
    **/
    deleteOrganizationConfigRule(req: operations.DeleteOrganizationConfigRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationConfigRuleResponse>;
    /**
     * deleteOrganizationConformancePack - <p>Deletes the specified organization conformance pack and all of the config rules and remediation actions from all member accounts in that organization. </p> <p> Only a master account or a delegated administrator account can delete an organization conformance pack. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. </p>
    **/
    deleteOrganizationConformancePack(req: operations.DeleteOrganizationConformancePackRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationConformancePackResponse>;
    /**
     * deletePendingAggregationRequest - Deletes pending authorization requests for a specified aggregator account in a specified region.
    **/
    deletePendingAggregationRequest(req: operations.DeletePendingAggregationRequestRequest, config?: AxiosRequestConfig): Promise<operations.DeletePendingAggregationRequestResponse>;
    /**
     * deleteRemediationConfiguration - Deletes the remediation configuration.
    **/
    deleteRemediationConfiguration(req: operations.DeleteRemediationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRemediationConfigurationResponse>;
    /**
     * deleteRemediationExceptions - <p>Deletes one or more remediation exceptions mentioned in the resource keys.</p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note>
    **/
    deleteRemediationExceptions(req: operations.DeleteRemediationExceptionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRemediationExceptionsResponse>;
    /**
     * deleteResourceConfig - Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your Config History.
    **/
    deleteResourceConfig(req: operations.DeleteResourceConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourceConfigResponse>;
    /**
     * deleteRetentionConfiguration - Deletes the retention configuration.
    **/
    deleteRetentionConfiguration(req: operations.DeleteRetentionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRetentionConfigurationResponse>;
    /**
     * deleteStoredQuery - Deletes the stored query for a single Amazon Web Services account and a single Amazon Web Services Region.
    **/
    deleteStoredQuery(req: operations.DeleteStoredQueryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStoredQueryResponse>;
    /**
     * deliverConfigSnapshot - <p>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, Config sends the following notifications using an Amazon SNS topic that you have specified.</p> <ul> <li> <p>Notification of the start of the delivery.</p> </li> <li> <p>Notification of the completion of the delivery, if the delivery was successfully completed.</p> </li> <li> <p>Notification of delivery failure, if the delivery failed.</p> </li> </ul>
    **/
    deliverConfigSnapshot(req: operations.DeliverConfigSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DeliverConfigSnapshotResponse>;
    /**
     * describeAggregateComplianceByConfigRules - <p>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results. </p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
    **/
    describeAggregateComplianceByConfigRules(req: operations.DescribeAggregateComplianceByConfigRulesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAggregateComplianceByConfigRulesResponse>;
    /**
     * describeAggregateComplianceByConformancePacks - <p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant Config rules within each conformance pack. Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
    **/
    describeAggregateComplianceByConformancePacks(req: operations.DescribeAggregateComplianceByConformancePacksRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAggregateComplianceByConformancePacksResponse>;
    /**
     * describeAggregationAuthorizations - Returns a list of authorizations granted to various aggregator accounts and regions.
    **/
    describeAggregationAuthorizations(req: operations.DescribeAggregationAuthorizationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAggregationAuthorizationsResponse>;
    /**
     * describeComplianceByConfigRule - <p>Indicates whether the specified Config rules are compliant. If a rule is noncompliant, this action returns the number of Amazon Web Services resources that do not comply with the rule.</p> <p>A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.</p> <p>If Config has no current evaluation results for the rule, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
    **/
    describeComplianceByConfigRule(req: operations.DescribeComplianceByConfigRuleRequest, config?: AxiosRequestConfig): Promise<operations.DescribeComplianceByConfigRuleResponse>;
    /**
     * describeComplianceByResource - <p>Indicates whether the specified Amazon Web Services resources are compliant. If a resource is noncompliant, this action returns the number of Config rules that the resource does not comply with.</p> <p>A resource is compliant if it complies with all the Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules.</p> <p>If Config has no current evaluation results for the resource, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions about the rules that evaluate the resource:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role that you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
    **/
    describeComplianceByResource(req: operations.DescribeComplianceByResourceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeComplianceByResourceResponse>;
    /**
     * describeConfigRuleEvaluationStatus - Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke the rule, and the related error for the last failure.
    **/
    describeConfigRuleEvaluationStatus(req: operations.DescribeConfigRuleEvaluationStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConfigRuleEvaluationStatusResponse>;
    /**
     * describeConfigRules - Returns details about your Config rules.
    **/
    describeConfigRules(req: operations.DescribeConfigRulesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConfigRulesResponse>;
    /**
     * describeConfigurationAggregatorSourcesStatus - Returns status information for sources within an aggregator. The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message.
    **/
    describeConfigurationAggregatorSourcesStatus(req: operations.DescribeConfigurationAggregatorSourcesStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConfigurationAggregatorSourcesStatusResponse>;
    /**
     * describeConfigurationAggregators - Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account.
    **/
    describeConfigurationAggregators(req: operations.DescribeConfigurationAggregatorsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConfigurationAggregatorsResponse>;
    /**
     * describeConfigurationRecorderStatus - <p>Returns the current status of the specified configuration recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>
    **/
    describeConfigurationRecorderStatus(req: operations.DescribeConfigurationRecorderStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConfigurationRecorderStatusResponse>;
    /**
     * describeConfigurationRecorders - <p>Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>
    **/
    describeConfigurationRecorders(req: operations.DescribeConfigurationRecordersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConfigurationRecordersResponse>;
    /**
     * describeConformancePackCompliance - <p>Returns compliance details for each rule in that conformance pack.</p> <note> <p>You must provide exact rule names.</p> </note>
    **/
    describeConformancePackCompliance(req: operations.DescribeConformancePackComplianceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConformancePackComplianceResponse>;
    /**
     * describeConformancePackStatus - <p>Provides one or more conformance packs deployment status.</p> <note> <p>If there are no conformance packs then you will see an empty result.</p> </note>
    **/
    describeConformancePackStatus(req: operations.DescribeConformancePackStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConformancePackStatusResponse>;
    /**
     * describeConformancePacks - Returns a list of one or more conformance packs.
    **/
    describeConformancePacks(req: operations.DescribeConformancePacksRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConformancePacksResponse>;
    /**
     * describeDeliveryChannelStatus - <p>Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>
    **/
    describeDeliveryChannelStatus(req: operations.DescribeDeliveryChannelStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeliveryChannelStatusResponse>;
    /**
     * describeDeliveryChannels - <p>Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>
    **/
    describeDeliveryChannels(req: operations.DescribeDeliveryChannelsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeliveryChannelsResponse>;
    /**
     * describeOrganizationConfigRuleStatuses - <p>Provides organization config rule deployment status for an organization.</p> <note> <p>The status is not considered successful until organization config rule is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization config rule names. It is only applicable, when you request all the organization config rules.</p> </note>
    **/
    describeOrganizationConfigRuleStatuses(req: operations.DescribeOrganizationConfigRuleStatusesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationConfigRuleStatusesResponse>;
    /**
     * describeOrganizationConfigRules - <p>Returns a list of organization config rules. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization config rule names. It is only applicable, when you request all the organization config rules.</p> </note>
    **/
    describeOrganizationConfigRules(req: operations.DescribeOrganizationConfigRulesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationConfigRulesResponse>;
    /**
     * describeOrganizationConformancePackStatuses - <p>Provides organization conformance pack deployment status for an organization. </p> <note> <p>The status is not considered successful until organization conformance pack is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance pack names. They are only applicable, when you request all the organization conformance packs.</p> </note>
    **/
    describeOrganizationConformancePackStatuses(req: operations.DescribeOrganizationConformancePackStatusesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationConformancePackStatusesResponse>;
    /**
     * describeOrganizationConformancePacks - <p>Returns a list of organization conformance packs. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs. </p> </note>
    **/
    describeOrganizationConformancePacks(req: operations.DescribeOrganizationConformancePacksRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationConformancePacksResponse>;
    /**
     * describePendingAggregationRequests - Returns a list of all pending aggregation requests.
    **/
    describePendingAggregationRequests(req: operations.DescribePendingAggregationRequestsRequest, config?: AxiosRequestConfig): Promise<operations.DescribePendingAggregationRequestsResponse>;
    /**
     * describeRemediationConfigurations - Returns the details of one or more remediation configurations.
    **/
    describeRemediationConfigurations(req: operations.DescribeRemediationConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRemediationConfigurationsResponse>;
    /**
     * describeRemediationExceptions - <p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response. </p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p> </note>
    **/
    describeRemediationExceptions(req: operations.DescribeRemediationExceptionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRemediationExceptionsResponse>;
    /**
     * describeRemediationExecutionStatus - Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.
    **/
    describeRemediationExecutionStatus(req: operations.DescribeRemediationExecutionStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRemediationExecutionStatusResponse>;
    /**
     * describeRetentionConfigurations - <p>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.</p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>
    **/
    describeRetentionConfigurations(req: operations.DescribeRetentionConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRetentionConfigurationsResponse>;
    /**
     * getAggregateComplianceDetailsByConfigRule - <p>Returns the evaluation results for the specified Config rule for a specific resource in a rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. </p> <note> <p>The results can return an empty result page. But if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
    **/
    getAggregateComplianceDetailsByConfigRule(req: operations.GetAggregateComplianceDetailsByConfigRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetAggregateComplianceDetailsByConfigRuleResponse>;
    /**
     * getAggregateConfigRuleComplianceSummary - <p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>
    **/
    getAggregateConfigRuleComplianceSummary(req: operations.GetAggregateConfigRuleComplianceSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetAggregateConfigRuleComplianceSummaryResponse>;
    /**
     * getAggregateConformancePackComplianceSummary - <p>Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>
    **/
    getAggregateConformancePackComplianceSummary(req: operations.GetAggregateConformancePackComplianceSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetAggregateConformancePackComplianceSummaryResponse>;
    /**
     * getAggregateDiscoveredResourceCounts - <p>Returns the resource counts across accounts and regions that are present in your Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p> <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>
    **/
    getAggregateDiscoveredResourceCounts(req: operations.GetAggregateDiscoveredResourceCountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAggregateDiscoveredResourceCountsResponse>;
    /**
     * getAggregateResourceConfig - Returns configuration item that is aggregated for your specific resource in a specific source account and region.
    **/
    getAggregateResourceConfig(req: operations.GetAggregateResourceConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetAggregateResourceConfigResponse>;
    /**
     * getComplianceDetailsByConfigRule - Returns the evaluation results for the specified Config rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.
    **/
    getComplianceDetailsByConfigRule(req: operations.GetComplianceDetailsByConfigRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetComplianceDetailsByConfigRuleResponse>;
    /**
     * getComplianceDetailsByResource - Returns the evaluation results for the specified Amazon Web Services resource. The results indicate which Config rules were used to evaluate the resource, when each rule was last used, and whether the resource complies with each rule.
    **/
    getComplianceDetailsByResource(req: operations.GetComplianceDetailsByResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetComplianceDetailsByResourceResponse>;
    /**
     * getComplianceSummaryByConfigRule - Returns the number of Config rules that are compliant and noncompliant, up to a maximum of 25 for each.
    **/
    getComplianceSummaryByConfigRule(req: operations.GetComplianceSummaryByConfigRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetComplianceSummaryByConfigRuleResponse>;
    /**
     * getComplianceSummaryByResourceType - Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.
    **/
    getComplianceSummaryByResourceType(req: operations.GetComplianceSummaryByResourceTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetComplianceSummaryByResourceTypeResponse>;
    /**
     * getConformancePackComplianceDetails - Returns compliance details of a conformance pack for all Amazon Web Services resources that are monitered by conformance pack.
    **/
    getConformancePackComplianceDetails(req: operations.GetConformancePackComplianceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetConformancePackComplianceDetailsResponse>;
    /**
     * getConformancePackComplianceSummary - Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.
    **/
    getConformancePackComplianceSummary(req: operations.GetConformancePackComplianceSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetConformancePackComplianceSummaryResponse>;
    /**
     * getDiscoveredResourceCounts - <p>Returns the resource types, the number of each resource type, and the total number of resources that Config is recording in this region for your Amazon Web Services account. </p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify that you want all resource types. </p> </li> <li> <p>Config returns the following:</p> <ul> <li> <p>The resource types (EC2 instances, IAM users, and S3 buckets).</p> </li> <li> <p>The number of each resource type (25, 20, and 15).</p> </li> <li> <p>The total number of all resources (60).</p> </li> </ul> </li> </ol> <p>The response is paginated. By default, Config lists 100 <a>ResourceCount</a> objects on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might not immediately receive resource counts in the following situations:</p> <ul> <li> <p>You are a new Config customer.</p> </li> <li> <p>You just enabled resource recording.</p> </li> </ul> <p>It might take a few minutes for Config to record and count your resources. Wait a few minutes and then retry the <a>GetDiscoveredResourceCounts</a> action. </p> </note>
    **/
    getDiscoveredResourceCounts(req: operations.GetDiscoveredResourceCountsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveredResourceCountsResponse>;
    /**
     * getOrganizationConfigRuleDetailedStatus - Returns detailed status for each member account within an organization for a given organization config rule.
    **/
    getOrganizationConfigRuleDetailedStatus(req: operations.GetOrganizationConfigRuleDetailedStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigRuleDetailedStatusResponse>;
    /**
     * getOrganizationConformancePackDetailedStatus - Returns detailed status for each member account within an organization for a given organization conformance pack.
    **/
    getOrganizationConformancePackDetailedStatus(req: operations.GetOrganizationConformancePackDetailedStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConformancePackDetailedStatusResponse>;
    /**
     * getResourceConfigHistory - <p>Returns a list of <code>ConfigurationItems</code> for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your <code>ConfigurationItems</code> between a minimum of 30 days and a maximum of 7 years (2557 days), Config returns the <code>ConfigurationItems</code> for the specified retention period. </p> <p>The response is paginated. By default, Config returns a limit of 10 configuration items per page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified <code>limit</code>. In such cases, you can make another call, using the <code>nextToken</code>.</p> </note>
    **/
    getResourceConfigHistory(req: operations.GetResourceConfigHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceConfigHistoryResponse>;
    /**
     * getStoredQuery - Returns the details of a specific stored query.
    **/
    getStoredQuery(req: operations.GetStoredQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetStoredQueryResponse>;
    /**
     * listAggregateDiscoveredResources - <p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p> <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>
    **/
    listAggregateDiscoveredResources(req: operations.ListAggregateDiscoveredResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListAggregateDiscoveredResourcesResponse>;
    /**
     * listDiscoveredResources - <p>Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that Config has discovered, including those that Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.</p> <note> <p>You can specify either resource IDs or a resource name, but not both, in the same request.</p> </note> <p>The response is paginated. By default, Config lists 100 resource identifiers on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p>
    **/
    listDiscoveredResources(req: operations.ListDiscoveredResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListDiscoveredResourcesResponse>;
    /**
     * listStoredQueries - Lists the stored queries for a single Amazon Web Services account and a single Amazon Web Services Region. The default is 100.
    **/
    listStoredQueries(req: operations.ListStoredQueriesRequest, config?: AxiosRequestConfig): Promise<operations.ListStoredQueriesResponse>;
    /**
     * listTagsForResource - List the tags for Config resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putAggregationAuthorization - Authorizes the aggregator account and region to collect data from the source account and region.
    **/
    putAggregationAuthorization(req: operations.PutAggregationAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.PutAggregationAuthorizationResponse>;
    /**
     * putConfigRule - <p>Adds or updates an Config rule for evaluating whether your Amazon Web Services resources comply with your desired configurations.</p> <p>You can use this action for custom Config rules and Config managed rules. A custom Config rule is a rule that you develop and maintain. An Config managed rule is a customizable, predefined rule that Config provides.</p> <p>If you are adding a new custom Config rule, you must first create the Lambda function that the rule invokes to evaluate your resources. When you use the <code>PutConfigRule</code> action to add the rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. Specify the ARN for the <code>SourceIdentifier</code> key. This key is part of the <code>Source</code> object, which is part of the <code>ConfigRule</code> object. </p> <p>If you are adding an Config managed rule, specify the rule's identifier for the <code>SourceIdentifier</code> key. To reference Config managed rule identifiers, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">About Config managed rules</a>.</p> <p>For any new rule that you add, specify the <code>ConfigRuleName</code> in the <code>ConfigRule</code> object. Do not specify the <code>ConfigRuleArn</code> or the <code>ConfigRuleId</code>. These values are generated by Config for new rules.</p> <p>If you are updating a rule that you added previously, you can specify the rule by <code>ConfigRuleName</code>, <code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the <code>ConfigRule</code> data type that you use in this request.</p> <p>The maximum number of rules that Config supports is 150.</p> <p>For information about requesting a rule limit increase, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config">Config Limits</a> in the <i>Amazon Web Services General Reference Guide</i>.</p> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Amazon Web Services resource Configurations with Config</a> in the <i>Config Developer Guide</i>.</p>
    **/
    putConfigRule(req: operations.PutConfigRuleRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigRuleResponse>;
    /**
     * putConfigurationAggregator - <p>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.</p> <p> <code>accountIds</code> that are passed will be replaced with existing accounts. If you want to add additional accounts into the aggregator, call <code>DescribeAggregator</code> to get the previous accounts and then append new ones.</p> <note> <p>Config should be enabled in source accounts and regions you want to aggregate.</p> <p>If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization. If the caller is a management account, Config calls <code>EnableAwsServiceAccess</code> API to enable integration between Config and Organizations. If the caller is a registered delegated administrator, Config calls <code>ListDelegatedAdministrators</code> API to verify whether the caller is a valid delegated administrator.</p> <p>To register a delegated administrator, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli">Register a Delegated Administrator</a> in the Config developer guide. </p> </note>
    **/
    putConfigurationAggregator(req: operations.PutConfigurationAggregatorRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationAggregatorResponse>;
    /**
     * putConfigurationRecorder - <p>Creates a new configuration recorder to record the selected resource configurations.</p> <p>You can use this action to change the role <code>roleARN</code> or the <code>recordingGroup</code> of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> <p>If <code>ConfigurationRecorder</code> does not have the <b>recordingGroup</b> parameter specified, the default is to record all supported resource types.</p> </note>
    **/
    putConfigurationRecorder(req: operations.PutConfigurationRecorderRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationRecorderResponse>;
    /**
     * putConformancePack - <p>Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across Amazon Web Services Organization.</p> <p>This API creates a service linked role <code>AWSServiceRoleForConfigConforms</code> in your account. The service linked role is created only when the role does not exist in your account. </p> <note> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> </note>
    **/
    putConformancePack(req: operations.PutConformancePackRequest, config?: AxiosRequestConfig): Promise<operations.PutConformancePackResponse>;
    /**
     * putDeliveryChannel - <p>Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.</p> <p>Before you can create a delivery channel, you must create a configuration recorder.</p> <p>You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.</p> <note> <p>You can have only one delivery channel per region in your account.</p> </note>
    **/
    putDeliveryChannel(req: operations.PutDeliveryChannelRequest, config?: AxiosRequestConfig): Promise<operations.PutDeliveryChannelResponse>;
    /**
     * putEvaluations - Used by an Lambda function to deliver evaluation results to Config. This action is required in every Lambda function that is invoked by an Config rule.
    **/
    putEvaluations(req: operations.PutEvaluationsRequest, config?: AxiosRequestConfig): Promise<operations.PutEvaluationsResponse>;
    /**
     * putExternalEvaluation - Add or updates the evaluations for process checks. This API checks if the rule is a process check when the name of the Config rule is provided.
    **/
    putExternalEvaluation(req: operations.PutExternalEvaluationRequest, config?: AxiosRequestConfig): Promise<operations.PutExternalEvaluationResponse>;
    /**
     * putOrganizationConfigRule - <p>Adds or updates organization config rule for your entire organization evaluating whether your Amazon Web Services resources comply with your desired configurations.</p> <p> Only a master account and a delegated administrator can create or update an organization config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. </p> <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the master or delegated administrator account of your organization. The service linked role is created only when the role does not exist in the caller account. Config verifies the existence of role with <code>GetRole</code> action.</p> <p>To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p> <p>You can use this action to create both custom Config rules and Config managed rules. If you are adding a new custom Config rule, you must first create Lambda function in the master account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed-account that can be assumed by the Lambda function. When you use the <code>PutOrganizationConfigRule</code> action to add the rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. If you are adding an Config managed rule, specify the rule's identifier for the <code>RuleIdentifier</code> key.</p> <p>The maximum number of organization config rules that Config supports is 150 and 3 delegated administrator per organization. </p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>Specify either <code>OrganizationCustomRuleMetadata</code> or <code>OrganizationManagedRuleMetadata</code>.</p> </note>
    **/
    putOrganizationConfigRule(req: operations.PutOrganizationConfigRuleRequest, config?: AxiosRequestConfig): Promise<operations.PutOrganizationConfigRuleResponse>;
    /**
     * putOrganizationConformancePack - <p>Deploys conformance packs across member accounts in an Amazon Web Services Organization.</p> <p>Only a master account and a delegated administrator can call this API. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code> through the <code>EnableAWSServiceAccess</code> action and creates a service linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the master or delegated administrator account of your organization. The service linked role is created only when the role does not exist in the caller account. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegate-admin</code> for <code>config-multiaccountsetup.amazonaws.com</code>.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> <p>Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated. You cannot update a conformance pack while it is in this state.</p> <p>You can create 50 conformance packs with 25 Config rules in each pack and 3 delegated administrator per organization. </p> </note>
    **/
    putOrganizationConformancePack(req: operations.PutOrganizationConformancePackRequest, config?: AxiosRequestConfig): Promise<operations.PutOrganizationConformancePackResponse>;
    /**
     * putRemediationConfigurations - <p>Adds or updates the remediation configuration with a specific Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the Config rule. The Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. </p> <note> <p>If you make backward incompatible changes to the SSM document, you must call this again to ensure the remediations can run.</p> <p>This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules, the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.</p> </note>
    **/
    putRemediationConfigurations(req: operations.PutRemediationConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.PutRemediationConfigurationsResponse>;
    /**
     * putRemediationExceptions - <p>A remediation exception is when a specific resource is no longer considered for auto-remediation. This API adds a new exception or updates an existing exception for a specific resource with a specific Config rule. </p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note>
    **/
    putRemediationExceptions(req: operations.PutRemediationExceptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRemediationExceptionsResponse>;
    /**
     * putResourceConfig - <p>Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing Config APIs. </p> <note> <p>The custom resource type must be registered with CloudFormation. This API accepts the configuration item registered with CloudFormation.</p> <p>When you call this API, Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource. </p> <p>Write-only schema properites are not recorded as part of the published configuration item.</p> </note>
    **/
    putResourceConfig(req: operations.PutResourceConfigRequest, config?: AxiosRequestConfig): Promise<operations.PutResourceConfigResponse>;
    /**
     * putRetentionConfiguration - <p>Creates and updates the retention configuration with details about retention period (number of days) that Config stores your historical information. The API creates the <code>RetentionConfiguration</code> object and names the object as <b>default</b>. When you have a <code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the default object. </p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>
    **/
    putRetentionConfiguration(req: operations.PutRetentionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutRetentionConfigurationResponse>;
    /**
     * putStoredQuery - Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single Amazon Web Services account and a single Amazon Web Services Region. You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region.
    **/
    putStoredQuery(req: operations.PutStoredQueryRequest, config?: AxiosRequestConfig): Promise<operations.PutStoredQueryResponse>;
    /**
     * selectAggregateResourceConfig - <p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the Config Developer Guide.</p> <note> <p>If you run an aggregation query (i.e., using <code>GROUP BY</code> or using aggregate functions such as <code>COUNT</code>; e.g., <code>SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 500.</p> <p>If you run a non-aggregation query (i.e., not using <code>GROUP BY</code> or aggregate function; e.g., <code>SELECT * WHERE resourceType = 'AWS::IAM::Role'</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 25.</p> </note>
    **/
    selectAggregateResourceConfig(req: operations.SelectAggregateResourceConfigRequest, config?: AxiosRequestConfig): Promise<operations.SelectAggregateResourceConfigResponse>;
    /**
     * selectResourceConfig - <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the Config Developer Guide.</p>
    **/
    selectResourceConfig(req: operations.SelectResourceConfigRequest, config?: AxiosRequestConfig): Promise<operations.SelectResourceConfigResponse>;
    /**
     * startConfigRulesEvaluation - <p>Runs an on-demand evaluation for the specified Config rules against the last known configuration state of the resources. Use <code>StartConfigRulesEvaluation</code> when you want to test that a rule you updated is working as expected. <code>StartConfigRulesEvaluation</code> does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. </p> <p>You can specify up to 25 Config rules per request. </p> <p>An existing <code>StartConfigRulesEvaluation</code> call for the specified rules must complete before you can call the API again. If you chose to have Config stream to an Amazon SNS topic, you will receive a <code>ConfigRuleEvaluationStarted</code> notification when the evaluation starts.</p> <note> <p>You don't need to call the <code>StartConfigRulesEvaluation</code> API to run an evaluation for a new rule. When you create a rule, Config evaluates your resources against the rule automatically. </p> </note> <p>The <code>StartConfigRulesEvaluation</code> API is useful if you want to run on-demand evaluations, such as the following example:</p> <ol> <li> <p>You have a custom rule that evaluates your IAM resources every 24 hours.</p> </li> <li> <p>You update your Lambda function to add additional conditions to your rule.</p> </li> <li> <p>Instead of waiting for the next periodic evaluation, you call the <code>StartConfigRulesEvaluation</code> API.</p> </li> <li> <p>Config invokes your Lambda function and evaluates your IAM resources.</p> </li> <li> <p>Your custom rule will still run periodic evaluations every 24 hours.</p> </li> </ol>
    **/
    startConfigRulesEvaluation(req: operations.StartConfigRulesEvaluationRequest, config?: AxiosRequestConfig): Promise<operations.StartConfigRulesEvaluationResponse>;
    /**
     * startConfigurationRecorder - <p>Starts recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.</p> <p>You must have created at least one delivery channel to successfully start the configuration recorder.</p>
    **/
    startConfigurationRecorder(req: operations.StartConfigurationRecorderRequest, config?: AxiosRequestConfig): Promise<operations.StartConfigurationRecorderResponse>;
    /**
     * startRemediationExecution - <p>Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p> <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>
    **/
    startRemediationExecution(req: operations.StartRemediationExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StartRemediationExecutionResponse>;
    /**
     * stopConfigurationRecorder - Stops recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.
    **/
    stopConfigurationRecorder(req: operations.StopConfigurationRecorderRequest, config?: AxiosRequestConfig): Promise<operations.StopConfigurationRecorderResponse>;
    /**
     * tagResource - Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Deletes specified tags from a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};
