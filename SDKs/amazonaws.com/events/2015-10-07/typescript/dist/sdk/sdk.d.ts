import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://events.{region}.amazonaws.com", "https://events.{region}.amazonaws.com", "http://events.{region}.amazonaws.com.cn", "https://events.{region}.amazonaws.com.cn"];
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
     * activateEventSource - Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.
    **/
    activateEventSource(req: operations.ActivateEventSourceRequest, config?: AxiosRequestConfig): Promise<operations.ActivateEventSourceResponse>;
    /**
     * cancelReplay - Cancels the specified replay.
    **/
    cancelReplay(req: operations.CancelReplayRequest, config?: AxiosRequestConfig): Promise<operations.CancelReplayResponse>;
    /**
     * createApiDestination - Creates an API destination, which is an HTTP invocation endpoint configured as a target for events.
    **/
    createApiDestination(req: operations.CreateApiDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiDestinationResponse>;
    /**
     * createArchive - Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.
    **/
    createArchive(req: operations.CreateArchiveRequest, config?: AxiosRequestConfig): Promise<operations.CreateArchiveResponse>;
    /**
     * createConnection - Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint.
    **/
    createConnection(req: operations.CreateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectionResponse>;
    /**
     * createEventBus - Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.
    **/
    createEventBus(req: operations.CreateEventBusRequest, config?: AxiosRequestConfig): Promise<operations.CreateEventBusResponse>;
    /**
     * createPartnerEventSource - <p>Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types. </p> <p>A partner event source creates events based on resources within the SaaS partner's service or application.</p> <p>An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets.</p> <p>Partner event source names follow this format:</p> <p> <code> <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i> </code> </p> <p> <i>partner_name</i> is determined during partner registration and identifies the partner to Amazon Web Services customers. <i>event_namespace</i> is determined by the partner and is a way for the partner to categorize their events. <i>event_name</i> is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The combination of <i>event_namespace</i> and <i>event_name</i> should help Amazon Web Services customers decide whether to create an event bus to receive these events.</p>
    **/
    createPartnerEventSource(req: operations.CreatePartnerEventSourceRequest, config?: AxiosRequestConfig): Promise<operations.CreatePartnerEventSourceResponse>;
    /**
     * deactivateEventSource - <p>You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted. </p> <p>When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted.</p> <p>To activate a deactivated partner event source, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html">ActivateEventSource</a>.</p>
    **/
    deactivateEventSource(req: operations.DeactivateEventSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeactivateEventSourceResponse>;
    /**
     * deauthorizeConnection - Removes all authorization parameters from the connection. This lets you remove the secret from the connection so you can reuse it without having to create a new connection.
    **/
    deauthorizeConnection(req: operations.DeauthorizeConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeauthorizeConnectionResponse>;
    /**
     * deleteApiDestination - Deletes the specified API destination.
    **/
    deleteApiDestination(req: operations.DeleteApiDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiDestinationResponse>;
    /**
     * deleteArchive - Deletes the specified archive.
    **/
    deleteArchive(req: operations.DeleteArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteArchiveResponse>;
    /**
     * deleteConnection - Deletes a connection.
    **/
    deleteConnection(req: operations.DeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    /**
     * deleteEventBus - Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.
    **/
    deleteEventBus(req: operations.DeleteEventBusRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEventBusResponse>;
    /**
     * deletePartnerEventSource - <p>This operation is used by SaaS partners to delete a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>When you delete an event source, the status of the corresponding partner event bus in the Amazon Web Services customer account becomes DELETED.</p> <p/>
    **/
    deletePartnerEventSource(req: operations.DeletePartnerEventSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeletePartnerEventSourceResponse>;
    /**
     * deleteRule - <p>Deletes the specified rule.</p> <p>Before you can delete the rule, you must remove all targets, using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html">RemoveTargets</a>.</p> <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.</p> <p>If you call delete rule multiple times for the same rule, all calls will succeed. When you call delete rule for a non-existent custom eventbus, <code>ResourceNotFoundException</code> is returned.</p> <p>Managed rules are rules created and managed by another Amazon Web Services service on your behalf. These rules are created by those other Amazon Web Services services to support functionality in those services. You can delete these rules using the <code>Force</code> option, but you should do so only if you are sure the other service is not still using that rule.</p>
    **/
    deleteRule(req: operations.DeleteRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRuleResponse>;
    /**
     * describeApiDestination - Retrieves details about an API destination.
    **/
    describeApiDestination(req: operations.DescribeApiDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeApiDestinationResponse>;
    /**
     * describeArchive - Retrieves details about an archive.
    **/
    describeArchive(req: operations.DescribeArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DescribeArchiveResponse>;
    /**
     * describeConnection - Retrieves details about a connection.
    **/
    describeConnection(req: operations.DescribeConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectionResponse>;
    /**
     * describeEventBus - <p>Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.</p> <p> To enable your account to receive events from other accounts on its default event bus, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p>For more information about partner event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>
    **/
    describeEventBus(req: operations.DescribeEventBusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEventBusResponse>;
    /**
     * describeEventSource - This operation lists details about a partner event source that is shared with your account.
    **/
    describeEventSource(req: operations.DescribeEventSourceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEventSourceResponse>;
    /**
     * describePartnerEventSource - An SaaS partner can use this operation to list details about a partner event source that they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html">DescribeEventSource</a> to see details about a partner event source that is shared with them.
    **/
    describePartnerEventSource(req: operations.DescribePartnerEventSourceRequest, config?: AxiosRequestConfig): Promise<operations.DescribePartnerEventSourceResponse>;
    /**
     * describeReplay - Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the progress of a running replay. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.
    **/
    describeReplay(req: operations.DescribeReplayRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReplayResponse>;
    /**
     * describeRule - <p>Describes the specified rule.</p> <p>DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
    **/
    describeRule(req: operations.DescribeRuleRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRuleResponse>;
    /**
     * disableRule - <p>Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.</p> <p>When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.</p>
    **/
    disableRule(req: operations.DisableRuleRequest, config?: AxiosRequestConfig): Promise<operations.DisableRuleResponse>;
    /**
     * enableRule - <p>Enables the specified rule. If the rule does not exist, the operation fails.</p> <p>When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.</p>
    **/
    enableRule(req: operations.EnableRuleRequest, config?: AxiosRequestConfig): Promise<operations.EnableRuleResponse>;
    /**
     * listApiDestinations - Retrieves a list of API destination in the account in the current Region.
    **/
    listApiDestinations(req: operations.ListApiDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApiDestinationsResponse>;
    /**
     * listArchives - Lists your archives. You can either list all the archives or you can provide a prefix to match to the archive names. Filter parameters are exclusive.
    **/
    listArchives(req: operations.ListArchivesRequest, config?: AxiosRequestConfig): Promise<operations.ListArchivesResponse>;
    /**
     * listConnections - Retrieves a list of connections from the account.
    **/
    listConnections(req: operations.ListConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectionsResponse>;
    /**
     * listEventBuses - Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.
    **/
    listEventBuses(req: operations.ListEventBusesRequest, config?: AxiosRequestConfig): Promise<operations.ListEventBusesResponse>;
    /**
     * listEventSources - You can use this to see all the partner event sources that have been shared with your Amazon Web Services account. For more information about partner event sources, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.
    **/
    listEventSources(req: operations.ListEventSourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListEventSourcesResponse>;
    /**
     * listPartnerEventSourceAccounts - An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular partner event source name is associated with. This operation is not used by Amazon Web Services customers.
    **/
    listPartnerEventSourceAccounts(req: operations.ListPartnerEventSourceAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListPartnerEventSourceAccountsResponse>;
    /**
     * listPartnerEventSources - An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by Amazon Web Services customers.
    **/
    listPartnerEventSources(req: operations.ListPartnerEventSourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListPartnerEventSourcesResponse>;
    /**
     * listReplays - Lists your replays. You can either list all the replays or you can provide a prefix to match to the replay names. Filter parameters are exclusive.
    **/
    listReplays(req: operations.ListReplaysRequest, config?: AxiosRequestConfig): Promise<operations.ListReplaysResponse>;
    /**
     * listRuleNamesByTarget - Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account.
    **/
    listRuleNamesByTarget(req: operations.ListRuleNamesByTargetRequest, config?: AxiosRequestConfig): Promise<operations.ListRuleNamesByTargetResponse>;
    /**
     * listRules - <p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names.</p> <p>ListRules does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
    **/
    listRules(req: operations.ListRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListRulesResponse>;
    /**
     * listTagsForResource - Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listTargetsByRule - Lists the targets assigned to the specified rule.
    **/
    listTargetsByRule(req: operations.ListTargetsByRuleRequest, config?: AxiosRequestConfig): Promise<operations.ListTargetsByRuleResponse>;
    /**
     * putEvents - Sends custom events to Amazon EventBridge so that they can be matched to rules.
    **/
    putEvents(req: operations.PutEventsRequest, config?: AxiosRequestConfig): Promise<operations.PutEventsResponse>;
    /**
     * putPartnerEvents - This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation.
    **/
    putPartnerEvents(req: operations.PutPartnerEventsRequest, config?: AxiosRequestConfig): Promise<operations.PutPartnerEventsResponse>;
    /**
     * putPermission - <p>Running <code>PutPermission</code> permits the specified Amazon Web Services account or Amazon Web Services organization to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account. </p> <p>For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target.</p> <p>To enable multiple Amazon Web Services accounts to put events to your event bus, run <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are members of the same Amazon Web Services organization, you can run <code>PutPermission</code> once specifying <code>Principal</code> as "*" and specifying the Amazon Web Services organization ID in <code>Condition</code>, to grant permissions to all accounts in that organization.</p> <p>If you grant permissions using an organization, then accounts in that organization must specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>The permission policy on the event bus cannot exceed 10 KB in size.</p>
    **/
    putPermission(req: operations.PutPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PutPermissionResponse>;
    /**
     * putRule - <p>Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html">DisableRule</a>.</p> <p>A single rule watches for events from a single event bus. Events generated by Amazon Web Services services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p> <p>If you are updating an existing rule, the rule is replaced with what you specify in this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values for those arguments are not kept. Instead, they are replaced with null values.</p> <p>When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.</p> <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.</p> <p>When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the <code>PutRule</code> operation and assign tags, you must have both the <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p> <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code> operation are ignored. To update the tags of an existing rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p> <p>In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.</p> <p>To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change. </p> <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with Budgets</a>.</p>
    **/
    putRule(req: operations.PutRuleRequest, config?: AxiosRequestConfig): Promise<operations.PutRuleResponse>;
    /**
     * putTargets - <p>Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.</p> <p>Targets are the resources that are invoked when a rule is triggered.</p> <p>You can configure the following as targets for Events:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html">API destination</a> </p> </li> <li> <p>Amazon API Gateway REST API endpoints</p> </li> <li> <p>API Gateway</p> </li> <li> <p>Batch job queue</p> </li> <li> <p>CloudWatch Logs group</p> </li> <li> <p>CodeBuild project</p> </li> <li> <p>CodePipeline</p> </li> <li> <p>Amazon EC2 <code>CreateSnapshot</code> API call</p> </li> <li> <p>Amazon EC2 <code>RebootInstances</code> API call</p> </li> <li> <p>Amazon EC2 <code>StopInstances</code> API call</p> </li> <li> <p>Amazon EC2 <code>TerminateInstances</code> API call</p> </li> <li> <p>Amazon ECS tasks</p> </li> <li> <p>Event bus in a different Amazon Web Services account or Region.</p> <p>You can use an event bus in the US East (N. Virginia) us-east-1, US West (Oregon) us-west-2, or Europe (Ireland) eu-west-1 Regions as a target for a rule.</p> </li> <li> <p>Firehose delivery stream (Kinesis Data Firehose)</p> </li> <li> <p>Inspector assessment template (Amazon Inspector)</p> </li> <li> <p>Kinesis stream (Kinesis Data Stream)</p> </li> <li> <p>Lambda function</p> </li> <li> <p>Redshift clusters (Data API statement execution)</p> </li> <li> <p>Amazon SNS topic</p> </li> <li> <p>Amazon SQS queues (includes FIFO queues</p> </li> <li> <p>SSM Automation</p> </li> <li> <p>SSM OpsItem</p> </li> <li> <p>SSM Run Command</p> </li> <li> <p>Step Functions state machines</p> </li> </ul> <p>Creating rules with built-in targets is supported only in the Management Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API call</code>. </p> <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p> <p>To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions. For Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams, Step Functions state machines and API Gateway REST APIs, EventBridge relies on IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>If another Amazon Web Services account is in the same region and has granted you permission (using <code>PutPermission</code>), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the <code>Arn</code> value when you run <code>PutTargets</code>. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see <a href="http://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge Pricing</a>.</p> <note> <p> <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not available with <code>PutTarget</code> if the target is an event bus of a different Amazon Web Services account.</p> </note> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>For more information about enabling cross-account events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p> <b>Input</b>, <b>InputPath</b>, and <b>InputTransformer</b> are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:</p> <ul> <li> <p>If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).</p> </li> <li> <p>If <b>Input</b> is specified in the form of valid JSON, then the matched event is overridden with this constant.</p> </li> <li> <p>If <b>InputPath</b> is specified in the form of JSONPath (for example, <code>$.detail</code>), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).</p> </li> <li> <p>If <b>InputTransformer</b> is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.</p> </li> </ul> <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p> <p>When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
    **/
    putTargets(req: operations.PutTargetsRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsResponse>;
    /**
     * removePermission - Revokes the permission of another Amazon Web Services account to be able to put events to the specified event bus. Specify the account to revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>. You can find the <code>StatementId</code> by using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html">DescribeEventBus</a>.
    **/
    removePermission(req: operations.RemovePermissionRequest, config?: AxiosRequestConfig): Promise<operations.RemovePermissionResponse>;
    /**
     * removeTargets - <p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p> <p>When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
    **/
    removeTargets(req: operations.RemoveTargetsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveTargetsResponse>;
    /**
     * startReplay - Starts the specified replay. Events are not necessarily replayed in the exact same order that they were added to the archive. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.
    **/
    startReplay(req: operations.StartReplayRequest, config?: AxiosRequestConfig): Promise<operations.StartReplayResponse>;
    /**
     * tagResource - <p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * testEventPattern - <p>Tests whether the specified event pattern matches the provided event.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p>
    **/
    testEventPattern(req: operations.TestEventPatternRequest, config?: AxiosRequestConfig): Promise<operations.TestEventPatternResponse>;
    /**
     * untagResource - Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge (CloudWatch Events), rules and event buses can be tagged.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateApiDestination - Updates an API destination.
    **/
    updateApiDestination(req: operations.UpdateApiDestinationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiDestinationResponse>;
    /**
     * updateArchive - Updates the specified archive.
    **/
    updateArchive(req: operations.UpdateArchiveRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArchiveResponse>;
    /**
     * updateConnection - Updates settings for a connection.
    **/
    updateConnection(req: operations.UpdateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectionResponse>;
}
export {};
