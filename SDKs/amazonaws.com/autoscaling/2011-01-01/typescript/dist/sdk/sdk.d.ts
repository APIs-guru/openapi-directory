import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://autoscaling.{region}.amazonaws.com", "https://autoscaling.{region}.amazonaws.com", "http://autoscaling.amazonaws.com", "https://autoscaling.amazonaws.com", "http://autoscaling.{region}.amazonaws.com.cn", "https://autoscaling.{region}.amazonaws.com.cn"];
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
     * getAttachInstances - <p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 instances to your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getAttachInstances(req: operations.GetAttachInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachInstancesResponse>;
    /**
     * getAttachLoadBalancerTargetGroups - <p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>This operation is used with the following load balancer types: </p> <ul> <li> <p> Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. </p> </li> <li> <p> Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. </p> </li> <li> <p> Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
    **/
    getAttachLoadBalancerTargetGroups(req: operations.GetAttachLoadBalancerTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachLoadBalancerTargetGroupsResponse>;
    /**
     * getAttachLoadBalancers - <note> <p>To attach an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer, use the <a>AttachLoadBalancerTargetGroups</a> API operation instead.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach the load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
    **/
    getAttachLoadBalancers(req: operations.GetAttachLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachLoadBalancersResponse>;
    /**
     * getBatchDeleteScheduledAction - Deletes one or more scheduled actions for the specified Auto Scaling group.
    **/
    getBatchDeleteScheduledAction(req: operations.GetBatchDeleteScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchDeleteScheduledActionResponse>;
    /**
     * getCancelInstanceRefresh - <p>Cancels an instance refresh operation in progress. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started. </p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p>
    **/
    getCancelInstanceRefresh(req: operations.GetCancelInstanceRefreshRequest, config?: AxiosRequestConfig): Promise<operations.GetCancelInstanceRefreshResponse>;
    /**
     * getCompleteLifecycleAction - <p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, complete the lifecycle action.</b> </p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getCompleteLifecycleAction(req: operations.GetCompleteLifecycleActionRequest, config?: AxiosRequestConfig): Promise<operations.GetCompleteLifecycleActionResponse>;
    /**
     * getDeleteAutoScalingGroup - <p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed.</p> <p>If the group has policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p>
    **/
    getDeleteAutoScalingGroup(req: operations.GetDeleteAutoScalingGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteAutoScalingGroupResponse>;
    /**
     * getDeleteLaunchConfiguration - <p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>
    **/
    getDeleteLaunchConfiguration(req: operations.GetDeleteLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteLaunchConfigurationResponse>;
    /**
     * getDeleteLifecycleHook - <p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>
    **/
    getDeleteLifecycleHook(req: operations.GetDeleteLifecycleHookRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteLifecycleHookResponse>;
    /**
     * getDeleteNotificationConfiguration - Deletes the specified notification.
    **/
    getDeleteNotificationConfiguration(req: operations.GetDeleteNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteNotificationConfigurationResponse>;
    /**
     * getDeletePolicy - <p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a scaling policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getDeletePolicy(req: operations.GetDeletePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetDeletePolicyResponse>;
    /**
     * getDeleteScheduledAction - Deletes the specified scheduled action.
    **/
    getDeleteScheduledAction(req: operations.GetDeleteScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteScheduledActionResponse>;
    /**
     * getDeleteWarmPool - <p>Deletes the warm pool for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getDeleteWarmPool(req: operations.GetDeleteWarmPoolRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteWarmPoolResponse>;
    /**
     * getDescribeAccountLimits - <p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling service quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getDescribeAccountLimits(req: operations.GetDescribeAccountLimitsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeAccountLimitsResponse>;
    /**
     * getDescribeAdjustmentTypes - <p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>
    **/
    getDescribeAdjustmentTypes(req: operations.GetDescribeAdjustmentTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeAdjustmentTypesResponse>;
    /**
     * getDescribeAutoScalingGroups - <p>Gets information about the Auto Scaling groups in the account and Region.</p> <p>This operation returns information about instances in Auto Scaling groups. To retrieve information about the instances in a warm pool, you must call the <a>DescribeWarmPool</a> API. </p>
    **/
    getDescribeAutoScalingGroups(req: operations.GetDescribeAutoScalingGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeAutoScalingGroupsResponse>;
    /**
     * getDescribeAutoScalingInstances - Gets information about the Auto Scaling instances in the account and Region.
    **/
    getDescribeAutoScalingInstances(req: operations.GetDescribeAutoScalingInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeAutoScalingInstancesResponse>;
    /**
     * getDescribeAutoScalingNotificationTypes - Describes the notification types that are supported by Amazon EC2 Auto Scaling.
    **/
    getDescribeAutoScalingNotificationTypes(req: operations.GetDescribeAutoScalingNotificationTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeAutoScalingNotificationTypesResponse>;
    /**
     * getDescribeInstanceRefreshes - <p>Gets information about the instance refreshes for the specified Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>To help you determine the status of an instance refresh, this operation returns information about the instance refreshes you previously initiated, including their status, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete.</p> <p>The following are the possible statuses: </p> <ul> <li> <p> <code>Pending</code> - The request was created, but the operation has not started.</p> </li> <li> <p> <code>InProgress</code> - The operation is in progress.</p> </li> <li> <p> <code>Successful</code> - The operation completed successfully.</p> </li> <li> <p> <code>Failed</code> - The operation failed to complete. You can troubleshoot using the status reason and the scaling activities. </p> </li> <li> <p> <code>Cancelling</code> - An ongoing operation is being cancelled. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started. </p> </li> <li> <p> <code>Cancelled</code> - The operation is cancelled. </p> </li> </ul>
    **/
    getDescribeInstanceRefreshes(req: operations.GetDescribeInstanceRefreshesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeInstanceRefreshesResponse>;
    /**
     * getDescribeLaunchConfigurations - Gets information about the launch configurations in the account and Region.
    **/
    getDescribeLaunchConfigurations(req: operations.GetDescribeLaunchConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeLaunchConfigurationsResponse>;
    /**
     * getDescribeLifecycleHookTypes - <p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>
    **/
    getDescribeLifecycleHookTypes(req: operations.GetDescribeLifecycleHookTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeLifecycleHookTypesResponse>;
    /**
     * getDescribeLifecycleHooks - Gets information about the lifecycle hooks for the specified Auto Scaling group.
    **/
    getDescribeLifecycleHooks(req: operations.GetDescribeLifecycleHooksRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeLifecycleHooksResponse>;
    /**
     * getDescribeLoadBalancerTargetGroups - <p>Gets information about the load balancer target groups for the specified Auto Scaling group.</p> <p>To determine the availability of registered instances, use the <code>State</code> element in the response. When you attach a target group to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the <code>InService</code> state. </p> <p>Target groups also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your target group state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
    **/
    getDescribeLoadBalancerTargetGroups(req: operations.GetDescribeLoadBalancerTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeLoadBalancerTargetGroupsResponse>;
    /**
     * getDescribeLoadBalancers - <p>Gets information about the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p> <p>To determine the availability of registered instances, use the <code>State</code> element in the response. When you attach a load balancer to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the <code>InService</code> state. </p> <p>Load balancers also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your load balancer state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
    **/
    getDescribeLoadBalancers(req: operations.GetDescribeLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeLoadBalancersResponse>;
    /**
     * getDescribeMetricCollectionTypes - <p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p> <p>The <code>GroupStandbyInstances</code> metric is not returned by default. You must explicitly request this metric when calling the <a>EnableMetricsCollection</a> API.</p>
    **/
    getDescribeMetricCollectionTypes(req: operations.GetDescribeMetricCollectionTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeMetricCollectionTypesResponse>;
    /**
     * getDescribeNotificationConfigurations - Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.
    **/
    getDescribeNotificationConfigurations(req: operations.GetDescribeNotificationConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeNotificationConfigurationsResponse>;
    /**
     * getDescribePolicies - Gets information about the scaling policies in the account and Region.
    **/
    getDescribePolicies(req: operations.GetDescribePoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribePoliciesResponse>;
    /**
     * getDescribeScalingActivities - <p>Gets information about the scaling activities in the account and Region.</p> <p>When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verifying a scaling activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the response is <code>Successful</code>. If an attempt to launch instances failed, the <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and the <code>StatusMessage</code> element in the response indicates the cause of the failure. For help interpreting the <code>StatusMessage</code>, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
    **/
    getDescribeScalingActivities(req: operations.GetDescribeScalingActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeScalingActivitiesResponse>;
    /**
     * getDescribeScalingProcessTypes - Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.
    **/
    getDescribeScalingProcessTypes(req: operations.GetDescribeScalingProcessTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeScalingProcessTypesResponse>;
    /**
     * getDescribeScheduledActions - <p>Gets information about the scheduled actions that haven't run or that have not reached their end time.</p> <p>To describe the scaling activities for scheduled actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>
    **/
    getDescribeScheduledActions(req: operations.GetDescribeScheduledActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeScheduledActionsResponse>;
    /**
     * getDescribeTerminationPolicyTypes - <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling which Auto Scaling instances terminate during scale in</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getDescribeTerminationPolicyTypes(req: operations.GetDescribeTerminationPolicyTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeTerminationPolicyTypesResponse>;
    /**
     * getDescribeWarmPool - <p>Gets information about a warm pool and its instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getDescribeWarmPool(req: operations.GetDescribeWarmPoolRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeWarmPoolResponse>;
    /**
     * getDetachInstances - <p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getDetachInstances(req: operations.GetDetachInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetDetachInstancesResponse>;
    /**
     * getDetachLoadBalancerTargetGroups - Detaches one or more target groups from the specified Auto Scaling group.
    **/
    getDetachLoadBalancerTargetGroups(req: operations.GetDetachLoadBalancerTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetDetachLoadBalancerTargetGroupsResponse>;
    /**
     * getDetachLoadBalancers - <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>
    **/
    getDetachLoadBalancers(req: operations.GetDetachLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.GetDetachLoadBalancersResponse>;
    /**
     * getDisableMetricsCollection - Disables group metrics for the specified Auto Scaling group.
    **/
    getDisableMetricsCollection(req: operations.GetDisableMetricsCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetDisableMetricsCollectionResponse>;
    /**
     * getEnableMetricsCollection - Enables group metrics for the specified Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-monitoring.html">Monitoring CloudWatch metrics for your Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
    **/
    getEnableMetricsCollection(req: operations.GetEnableMetricsCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetEnableMetricsCollectionResponse>;
    /**
     * getEnterStandby - <p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getEnterStandby(req: operations.GetEnterStandbyRequest, config?: AxiosRequestConfig): Promise<operations.GetEnterStandbyResponse>;
    /**
     * getExecutePolicy - Executes the specified policy. This can be useful for testing the design of your scaling policy.
    **/
    getExecutePolicy(req: operations.GetExecutePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetExecutePolicyResponse>;
    /**
     * getExitStandby - <p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getExitStandby(req: operations.GetExitStandbyRequest, config?: AxiosRequestConfig): Promise<operations.GetExitStandbyResponse>;
    /**
     * getGetPredictiveScalingForecast - <p>Retrieves the forecast data for a predictive scaling policy.</p> <p>Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast.</p> <p>A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getGetPredictiveScalingForecast(req: operations.GetGetPredictiveScalingForecastRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPredictiveScalingForecastResponse>;
    /**
     * getPutLifecycleHook - <p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance launches (before it is put into service) or as the instance terminates (before it is fully terminated).</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>
    **/
    getPutLifecycleHook(req: operations.GetPutLifecycleHookRequest, config?: AxiosRequestConfig): Promise<operations.GetPutLifecycleHookResponse>;
    /**
     * getPutNotificationConfiguration - <p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS notifications when your Auto Scaling group scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</p>
    **/
    getPutNotificationConfiguration(req: operations.GetPutNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetPutNotificationConfigurationResponse>;
    /**
     * getPutScheduledUpdateGroupAction - <p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p>
    **/
    getPutScheduledUpdateGroupAction(req: operations.GetPutScheduledUpdateGroupActionRequest, config?: AxiosRequestConfig): Promise<operations.GetPutScheduledUpdateGroupActionResponse>;
    /**
     * getPutWarmPool - <p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances.</p> <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the <a>DeleteWarmPool</a> API.</p>
    **/
    getPutWarmPool(req: operations.GetPutWarmPoolRequest, config?: AxiosRequestConfig): Promise<operations.GetPutWarmPoolResponse>;
    /**
     * getRecordLifecycleActionHeartbeat - <p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getRecordLifecycleActionHeartbeat(req: operations.GetRecordLifecycleActionHeartbeatRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordLifecycleActionHeartbeatResponse>;
    /**
     * getResumeProcesses - <p>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getResumeProcesses(req: operations.GetResumeProcessesRequest, config?: AxiosRequestConfig): Promise<operations.GetResumeProcessesResponse>;
    /**
     * getSetDesiredCapacity - <p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getSetDesiredCapacity(req: operations.GetSetDesiredCapacityRequest, config?: AxiosRequestConfig): Promise<operations.GetSetDesiredCapacityResponse>;
    /**
     * getSetInstanceHealth - <p>Sets the health status of the specified instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getSetInstanceHealth(req: operations.GetSetInstanceHealthRequest, config?: AxiosRequestConfig): Promise<operations.GetSetInstanceHealthResponse>;
    /**
     * getSetInstanceProtection - <p>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</p>
    **/
    getSetInstanceProtection(req: operations.GetSetInstanceProtectionRequest, config?: AxiosRequestConfig): Promise<operations.GetSetInstanceProtectionResponse>;
    /**
     * getSuspendProcesses - <p>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>
    **/
    getSuspendProcesses(req: operations.GetSuspendProcessesRequest, config?: AxiosRequestConfig): Promise<operations.GetSuspendProcessesResponse>;
    /**
     * getTerminateInstanceInAutoScalingGroup - <p>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool.</p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    getTerminateInstanceInAutoScalingGroup(req: operations.GetTerminateInstanceInAutoScalingGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetTerminateInstanceInAutoScalingGroupResponse>;
    /**
     * postAttachInstances - <p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 instances to your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postAttachInstances(req: operations.PostAttachInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostAttachInstancesResponse>;
    /**
     * postAttachLoadBalancerTargetGroups - <p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>This operation is used with the following load balancer types: </p> <ul> <li> <p> Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. </p> </li> <li> <p> Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. </p> </li> <li> <p> Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
    **/
    postAttachLoadBalancerTargetGroups(req: operations.PostAttachLoadBalancerTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostAttachLoadBalancerTargetGroupsResponse>;
    /**
     * postAttachLoadBalancers - <note> <p>To attach an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer, use the <a>AttachLoadBalancerTargetGroups</a> API operation instead.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach the load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
    **/
    postAttachLoadBalancers(req: operations.PostAttachLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.PostAttachLoadBalancersResponse>;
    /**
     * postBatchDeleteScheduledAction - Deletes one or more scheduled actions for the specified Auto Scaling group.
    **/
    postBatchDeleteScheduledAction(req: operations.PostBatchDeleteScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.PostBatchDeleteScheduledActionResponse>;
    /**
     * postBatchPutScheduledUpdateGroupAction - Creates or updates one or more scheduled scaling actions for an Auto Scaling group.
    **/
    postBatchPutScheduledUpdateGroupAction(req: operations.PostBatchPutScheduledUpdateGroupActionRequest, config?: AxiosRequestConfig): Promise<operations.PostBatchPutScheduledUpdateGroupActionResponse>;
    /**
     * postCancelInstanceRefresh - <p>Cancels an instance refresh operation in progress. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started. </p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p>
    **/
    postCancelInstanceRefresh(req: operations.PostCancelInstanceRefreshRequest, config?: AxiosRequestConfig): Promise<operations.PostCancelInstanceRefreshResponse>;
    /**
     * postCompleteLifecycleAction - <p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, complete the lifecycle action.</b> </p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postCompleteLifecycleAction(req: operations.PostCompleteLifecycleActionRequest, config?: AxiosRequestConfig): Promise<operations.PostCompleteLifecycleActionResponse>;
    /**
     * postCreateAutoScalingGroup - <p> <b>We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Creates an Auto Scaling group with the specified name and attributes. </p> <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling service quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For introductory exercises for creating an Auto Scaling group, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/GettingStartedTutorial.html">Getting started with Amazon EC2 Auto Scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-register-lbs-with-asg.html">Tutorial: Set up a scaled and load-balanced application</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html">Auto Scaling groups</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Every Auto Scaling group has three size parameters (<code>DesiredCapacity</code>, <code>MaxSize</code>, and <code>MinSize</code>). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.</p>
    **/
    postCreateAutoScalingGroup(req: operations.PostCreateAutoScalingGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateAutoScalingGroupResponse>;
    /**
     * postCreateLaunchConfiguration - <p>Creates a launch configuration.</p> <p>If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling service quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html">Launch configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postCreateLaunchConfiguration(req: operations.PostCreateLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateLaunchConfigurationResponse>;
    /**
     * postCreateOrUpdateTags - <p>Creates or updates tags for the specified Auto Scaling group.</p> <p>When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postCreateOrUpdateTags(req: operations.PostCreateOrUpdateTagsRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateOrUpdateTagsResponse>;
    /**
     * postDeleteAutoScalingGroup - <p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed.</p> <p>If the group has policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p>
    **/
    postDeleteAutoScalingGroup(req: operations.PostDeleteAutoScalingGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteAutoScalingGroupResponse>;
    /**
     * postDeleteLaunchConfiguration - <p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>
    **/
    postDeleteLaunchConfiguration(req: operations.PostDeleteLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteLaunchConfigurationResponse>;
    /**
     * postDeleteLifecycleHook - <p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>
    **/
    postDeleteLifecycleHook(req: operations.PostDeleteLifecycleHookRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteLifecycleHookResponse>;
    /**
     * postDeleteNotificationConfiguration - Deletes the specified notification.
    **/
    postDeleteNotificationConfiguration(req: operations.PostDeleteNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteNotificationConfigurationResponse>;
    /**
     * postDeletePolicy - <p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a scaling policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postDeletePolicy(req: operations.PostDeletePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PostDeletePolicyResponse>;
    /**
     * postDeleteScheduledAction - Deletes the specified scheduled action.
    **/
    postDeleteScheduledAction(req: operations.PostDeleteScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteScheduledActionResponse>;
    /**
     * postDeleteTags - Deletes the specified tags.
    **/
    postDeleteTags(req: operations.PostDeleteTagsRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteTagsResponse>;
    /**
     * postDeleteWarmPool - <p>Deletes the warm pool for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postDeleteWarmPool(req: operations.PostDeleteWarmPoolRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteWarmPoolResponse>;
    /**
     * postDescribeAccountLimits - <p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling service quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postDescribeAccountLimits(req: operations.PostDescribeAccountLimitsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeAccountLimitsResponse>;
    /**
     * postDescribeAdjustmentTypes - <p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>
    **/
    postDescribeAdjustmentTypes(req: operations.PostDescribeAdjustmentTypesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeAdjustmentTypesResponse>;
    /**
     * postDescribeAutoScalingGroups - <p>Gets information about the Auto Scaling groups in the account and Region.</p> <p>This operation returns information about instances in Auto Scaling groups. To retrieve information about the instances in a warm pool, you must call the <a>DescribeWarmPool</a> API. </p>
    **/
    postDescribeAutoScalingGroups(req: operations.PostDescribeAutoScalingGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeAutoScalingGroupsResponse>;
    /**
     * postDescribeAutoScalingInstances - Gets information about the Auto Scaling instances in the account and Region.
    **/
    postDescribeAutoScalingInstances(req: operations.PostDescribeAutoScalingInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeAutoScalingInstancesResponse>;
    /**
     * postDescribeAutoScalingNotificationTypes - Describes the notification types that are supported by Amazon EC2 Auto Scaling.
    **/
    postDescribeAutoScalingNotificationTypes(req: operations.PostDescribeAutoScalingNotificationTypesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeAutoScalingNotificationTypesResponse>;
    /**
     * postDescribeInstanceRefreshes - <p>Gets information about the instance refreshes for the specified Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>To help you determine the status of an instance refresh, this operation returns information about the instance refreshes you previously initiated, including their status, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete.</p> <p>The following are the possible statuses: </p> <ul> <li> <p> <code>Pending</code> - The request was created, but the operation has not started.</p> </li> <li> <p> <code>InProgress</code> - The operation is in progress.</p> </li> <li> <p> <code>Successful</code> - The operation completed successfully.</p> </li> <li> <p> <code>Failed</code> - The operation failed to complete. You can troubleshoot using the status reason and the scaling activities. </p> </li> <li> <p> <code>Cancelling</code> - An ongoing operation is being cancelled. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started. </p> </li> <li> <p> <code>Cancelled</code> - The operation is cancelled. </p> </li> </ul>
    **/
    postDescribeInstanceRefreshes(req: operations.PostDescribeInstanceRefreshesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeInstanceRefreshesResponse>;
    /**
     * postDescribeLaunchConfigurations - Gets information about the launch configurations in the account and Region.
    **/
    postDescribeLaunchConfigurations(req: operations.PostDescribeLaunchConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeLaunchConfigurationsResponse>;
    /**
     * postDescribeLifecycleHookTypes - <p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>
    **/
    postDescribeLifecycleHookTypes(req: operations.PostDescribeLifecycleHookTypesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeLifecycleHookTypesResponse>;
    /**
     * postDescribeLifecycleHooks - Gets information about the lifecycle hooks for the specified Auto Scaling group.
    **/
    postDescribeLifecycleHooks(req: operations.PostDescribeLifecycleHooksRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeLifecycleHooksResponse>;
    /**
     * postDescribeLoadBalancerTargetGroups - <p>Gets information about the load balancer target groups for the specified Auto Scaling group.</p> <p>To determine the availability of registered instances, use the <code>State</code> element in the response. When you attach a target group to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the <code>InService</code> state. </p> <p>Target groups also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your target group state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
    **/
    postDescribeLoadBalancerTargetGroups(req: operations.PostDescribeLoadBalancerTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeLoadBalancerTargetGroupsResponse>;
    /**
     * postDescribeLoadBalancers - <p>Gets information about the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p> <p>To determine the availability of registered instances, use the <code>State</code> element in the response. When you attach a load balancer to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the <code>InService</code> state. </p> <p>Load balancers also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your load balancer state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
    **/
    postDescribeLoadBalancers(req: operations.PostDescribeLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeLoadBalancersResponse>;
    /**
     * postDescribeMetricCollectionTypes - <p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p> <p>The <code>GroupStandbyInstances</code> metric is not returned by default. You must explicitly request this metric when calling the <a>EnableMetricsCollection</a> API.</p>
    **/
    postDescribeMetricCollectionTypes(req: operations.PostDescribeMetricCollectionTypesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeMetricCollectionTypesResponse>;
    /**
     * postDescribeNotificationConfigurations - Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.
    **/
    postDescribeNotificationConfigurations(req: operations.PostDescribeNotificationConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeNotificationConfigurationsResponse>;
    /**
     * postDescribePolicies - Gets information about the scaling policies in the account and Region.
    **/
    postDescribePolicies(req: operations.PostDescribePoliciesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribePoliciesResponse>;
    /**
     * postDescribeScalingActivities - <p>Gets information about the scaling activities in the account and Region.</p> <p>When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html">Verifying a scaling activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the response is <code>Successful</code>. If an attempt to launch instances failed, the <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and the <code>StatusMessage</code> element in the response indicates the cause of the failure. For help interpreting the <code>StatusMessage</code>, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
    **/
    postDescribeScalingActivities(req: operations.PostDescribeScalingActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeScalingActivitiesResponse>;
    /**
     * postDescribeScalingProcessTypes - Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.
    **/
    postDescribeScalingProcessTypes(req: operations.PostDescribeScalingProcessTypesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeScalingProcessTypesResponse>;
    /**
     * postDescribeScheduledActions - <p>Gets information about the scheduled actions that haven't run or that have not reached their end time.</p> <p>To describe the scaling activities for scheduled actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>
    **/
    postDescribeScheduledActions(req: operations.PostDescribeScheduledActionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeScheduledActionsResponse>;
    /**
     * postDescribeTags - <p>Describes the specified tags.</p> <p>You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results.</p> <p>You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postDescribeTags(req: operations.PostDescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeTagsResponse>;
    /**
     * postDescribeTerminationPolicyTypes - <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling which Auto Scaling instances terminate during scale in</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postDescribeTerminationPolicyTypes(req: operations.PostDescribeTerminationPolicyTypesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeTerminationPolicyTypesResponse>;
    /**
     * postDescribeWarmPool - <p>Gets information about a warm pool and its instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postDescribeWarmPool(req: operations.PostDescribeWarmPoolRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeWarmPoolResponse>;
    /**
     * postDetachInstances - <p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postDetachInstances(req: operations.PostDetachInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostDetachInstancesResponse>;
    /**
     * postDetachLoadBalancerTargetGroups - Detaches one or more target groups from the specified Auto Scaling group.
    **/
    postDetachLoadBalancerTargetGroups(req: operations.PostDetachLoadBalancerTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDetachLoadBalancerTargetGroupsResponse>;
    /**
     * postDetachLoadBalancers - <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>
    **/
    postDetachLoadBalancers(req: operations.PostDetachLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.PostDetachLoadBalancersResponse>;
    /**
     * postDisableMetricsCollection - Disables group metrics for the specified Auto Scaling group.
    **/
    postDisableMetricsCollection(req: operations.PostDisableMetricsCollectionRequest, config?: AxiosRequestConfig): Promise<operations.PostDisableMetricsCollectionResponse>;
    /**
     * postEnableMetricsCollection - Enables group metrics for the specified Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-monitoring.html">Monitoring CloudWatch metrics for your Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
    **/
    postEnableMetricsCollection(req: operations.PostEnableMetricsCollectionRequest, config?: AxiosRequestConfig): Promise<operations.PostEnableMetricsCollectionResponse>;
    /**
     * postEnterStandby - <p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postEnterStandby(req: operations.PostEnterStandbyRequest, config?: AxiosRequestConfig): Promise<operations.PostEnterStandbyResponse>;
    /**
     * postExecutePolicy - Executes the specified policy. This can be useful for testing the design of your scaling policy.
    **/
    postExecutePolicy(req: operations.PostExecutePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PostExecutePolicyResponse>;
    /**
     * postExitStandby - <p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postExitStandby(req: operations.PostExitStandbyRequest, config?: AxiosRequestConfig): Promise<operations.PostExitStandbyResponse>;
    /**
     * postGetPredictiveScalingForecast - <p>Retrieves the forecast data for a predictive scaling policy.</p> <p>Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast.</p> <p>A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postGetPredictiveScalingForecast(req: operations.PostGetPredictiveScalingForecastRequest, config?: AxiosRequestConfig): Promise<operations.PostGetPredictiveScalingForecastResponse>;
    /**
     * postPutLifecycleHook - <p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance launches (before it is put into service) or as the instance terminates (before it is fully terminated).</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>
    **/
    postPutLifecycleHook(req: operations.PostPutLifecycleHookRequest, config?: AxiosRequestConfig): Promise<operations.PostPutLifecycleHookResponse>;
    /**
     * postPutNotificationConfiguration - <p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS notifications when your Auto Scaling group scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</p>
    **/
    postPutNotificationConfiguration(req: operations.PostPutNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostPutNotificationConfigurationResponse>;
    /**
     * postPutScalingPolicy - <p>Creates or updates a scaling policy for an Auto Scaling group. Scaling policies are used to scale an Auto Scaling group based on configurable metrics. If no policies are defined, the dynamic scaling and predictive scaling features are not used. </p> <p>For more information about using dynamic scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html">Step and simple scaling policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information about using predictive scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scaling policies for an Auto Scaling group using the <a>DescribePolicies</a> API call. If you are no longer using a scaling policy, you can delete it by calling the <a>DeletePolicy</a> API.</p>
    **/
    postPutScalingPolicy(req: operations.PostPutScalingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PostPutScalingPolicyResponse>;
    /**
     * postPutScheduledUpdateGroupAction - <p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p>
    **/
    postPutScheduledUpdateGroupAction(req: operations.PostPutScheduledUpdateGroupActionRequest, config?: AxiosRequestConfig): Promise<operations.PostPutScheduledUpdateGroupActionResponse>;
    /**
     * postPutWarmPool - <p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances.</p> <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the <a>DeleteWarmPool</a> API.</p>
    **/
    postPutWarmPool(req: operations.PostPutWarmPoolRequest, config?: AxiosRequestConfig): Promise<operations.PostPutWarmPoolResponse>;
    /**
     * postRecordLifecycleActionHeartbeat - <p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postRecordLifecycleActionHeartbeat(req: operations.PostRecordLifecycleActionHeartbeatRequest, config?: AxiosRequestConfig): Promise<operations.PostRecordLifecycleActionHeartbeatResponse>;
    /**
     * postResumeProcesses - <p>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postResumeProcesses(req: operations.PostResumeProcessesRequest, config?: AxiosRequestConfig): Promise<operations.PostResumeProcessesResponse>;
    /**
     * postSetDesiredCapacity - <p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postSetDesiredCapacity(req: operations.PostSetDesiredCapacityRequest, config?: AxiosRequestConfig): Promise<operations.PostSetDesiredCapacityResponse>;
    /**
     * postSetInstanceHealth - <p>Sets the health status of the specified instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postSetInstanceHealth(req: operations.PostSetInstanceHealthRequest, config?: AxiosRequestConfig): Promise<operations.PostSetInstanceHealthResponse>;
    /**
     * postSetInstanceProtection - <p>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</p>
    **/
    postSetInstanceProtection(req: operations.PostSetInstanceProtectionRequest, config?: AxiosRequestConfig): Promise<operations.PostSetInstanceProtectionResponse>;
    /**
     * postStartInstanceRefresh - <p>Starts a new instance refresh operation. An instance refresh performs a rolling replacement of all or some instances in an Auto Scaling group. Each instance is terminated first and then replaced, which temporarily reduces the capacity available within your Auto Scaling group.</p> <p>This operation is part of the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group. This feature is helpful, for example, when you have a new AMI or a new user data script. You just need to create a new launch template that specifies the new AMI or user data script. Then start an instance refresh to immediately begin the process of updating instances in the group. </p> <p>If the call succeeds, it creates a new instance refresh request with a unique ID that you can use to track its progress. To query its status, call the <a>DescribeInstanceRefreshes</a> API. To describe the instance refreshes that have already run, call the <a>DescribeInstanceRefreshes</a> API. To cancel an instance refresh operation in progress, use the <a>CancelInstanceRefresh</a> API. </p>
    **/
    postStartInstanceRefresh(req: operations.PostStartInstanceRefreshRequest, config?: AxiosRequestConfig): Promise<operations.PostStartInstanceRefreshResponse>;
    /**
     * postSuspendProcesses - <p>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>
    **/
    postSuspendProcesses(req: operations.PostSuspendProcessesRequest, config?: AxiosRequestConfig): Promise<operations.PostSuspendProcessesResponse>;
    /**
     * postTerminateInstanceInAutoScalingGroup - <p>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool.</p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    **/
    postTerminateInstanceInAutoScalingGroup(req: operations.PostTerminateInstanceInAutoScalingGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostTerminateInstanceInAutoScalingGroupResponse>;
    /**
     * postUpdateAutoScalingGroup - <p> <b>We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Updates the configuration for the specified Auto Scaling group.</p> <p>To update an Auto Scaling group, specify the name of the group and the parameter that you want to change. Any parameters that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns. </p> <p>If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application.</p> <p>Note the following about changing <code>DesiredCapacity</code>, <code>MaxSize</code>, or <code>MinSize</code>:</p> <ul> <li> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.</p> </li> <li> <p>If you specify a new value for <code>MinSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MinSize</code> is larger than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MinSize</code> value.</p> </li> <li> <p>If you specify a new value for <code>MaxSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MaxSize</code> is smaller than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MaxSize</code> value.</p> </li> </ul> <p>To see which parameters have been set, call the <a>DescribeAutoScalingGroups</a> API. To view the scaling policies for an Auto Scaling group, call the <a>DescribePolicies</a> API. If the group has scaling policies, you can update them by calling the <a>PutScalingPolicy</a> API.</p>
    **/
    postUpdateAutoScalingGroup(req: operations.PostUpdateAutoScalingGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateAutoScalingGroupResponse>;
}
export {};
