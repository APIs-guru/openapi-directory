
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/autoscaling/ - Amazon Web Services documentation"""
import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://autoscaling.{region}.amazonaws.com",
	"https://autoscaling.{region}.amazonaws.com",
	"http://autoscaling.amazonaws.com",
	"https://autoscaling.amazonaws.com",
	"http://autoscaling.{region}.amazonaws.com.cn",
	"https://autoscaling.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/autoscaling/ - Amazon Web Services documentation"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def get_attach_instances(self, request: operations.GetAttachInstancesRequest) -> operations.GetAttachInstancesResponse:
        r"""<p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html\">Attach EC2 instances to your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AttachInstances"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttachInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_attach_load_balancer_target_groups(self, request: operations.GetAttachLoadBalancerTargetGroupsRequest) -> operations.GetAttachLoadBalancerTargetGroupsResponse:
        r"""<p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>This operation is used with the following load balancer types: </p> <ul> <li> <p> Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. </p> </li> <li> <p> Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. </p> </li> <li> <p> Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html\">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AttachLoadBalancerTargetGroups"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttachLoadBalancerTargetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_attach_load_balancers(self, request: operations.GetAttachLoadBalancersRequest) -> operations.GetAttachLoadBalancersResponse:
        r"""<note> <p>To attach an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer, use the <a>AttachLoadBalancerTargetGroups</a> API operation instead.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach the load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html\">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AttachLoadBalancers"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttachLoadBalancersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_batch_delete_scheduled_action(self, request: operations.GetBatchDeleteScheduledActionRequest) -> operations.GetBatchDeleteScheduledActionResponse:
        r"""Deletes one or more scheduled actions for the specified Auto Scaling group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=BatchDeleteScheduledAction"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchDeleteScheduledActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_cancel_instance_refresh(self, request: operations.GetCancelInstanceRefreshRequest) -> operations.GetCancelInstanceRefreshResponse:
        r"""<p>Cancels an instance refresh operation in progress. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started. </p> <p>This operation is part of the <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html\">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CancelInstanceRefresh"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCancelInstanceRefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_complete_lifecycle_action(self, request: operations.GetCompleteLifecycleActionRequest) -> operations.GetCompleteLifecycleActionResponse:
        r"""<p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, complete the lifecycle action.</b> </p> </li> </ol> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html\">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CompleteLifecycleAction"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompleteLifecycleActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_auto_scaling_group(self, request: operations.GetDeleteAutoScalingGroupRequest) -> operations.GetDeleteAutoScalingGroupResponse:
        r"""<p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed.</p> <p>If the group has policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteAutoScalingGroup"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteAutoScalingGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_launch_configuration(self, request: operations.GetDeleteLaunchConfigurationRequest) -> operations.GetDeleteLaunchConfigurationResponse:
        r"""<p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteLaunchConfiguration"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteLaunchConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_lifecycle_hook(self, request: operations.GetDeleteLifecycleHookRequest) -> operations.GetDeleteLifecycleHookResponse:
        r"""<p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteLifecycleHook"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteLifecycleHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_notification_configuration(self, request: operations.GetDeleteNotificationConfigurationRequest) -> operations.GetDeleteNotificationConfigurationResponse:
        r"""Deletes the specified notification.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteNotificationConfiguration"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteNotificationConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_policy(self, request: operations.GetDeletePolicyRequest) -> operations.GetDeletePolicyResponse:
        r"""<p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html\">Deleting a scaling policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeletePolicy"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeletePolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_scheduled_action(self, request: operations.GetDeleteScheduledActionRequest) -> operations.GetDeleteScheduledActionResponse:
        r"""Deletes the specified scheduled action.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteScheduledAction"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteScheduledActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_warm_pool(self, request: operations.GetDeleteWarmPoolRequest) -> operations.GetDeleteWarmPoolResponse:
        r"""<p>Deletes the warm pool for the specified Auto Scaling group.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html\">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteWarmPool"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteWarmPoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_account_limits(self, request: operations.GetDescribeAccountLimitsRequest) -> operations.GetDescribeAccountLimitsResponse:
        r"""<p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html\">Amazon EC2 Auto Scaling service quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAccountLimits"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeAccountLimitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_adjustment_types(self, request: operations.GetDescribeAdjustmentTypesRequest) -> operations.GetDescribeAdjustmentTypesResponse:
        r"""<p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAdjustmentTypes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeAdjustmentTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_auto_scaling_groups(self, request: operations.GetDescribeAutoScalingGroupsRequest) -> operations.GetDescribeAutoScalingGroupsResponse:
        r"""<p>Gets information about the Auto Scaling groups in the account and Region.</p> <p>This operation returns information about instances in Auto Scaling groups. To retrieve information about the instances in a warm pool, you must call the <a>DescribeWarmPool</a> API. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAutoScalingGroups"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeAutoScalingGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_auto_scaling_instances(self, request: operations.GetDescribeAutoScalingInstancesRequest) -> operations.GetDescribeAutoScalingInstancesResponse:
        r"""Gets information about the Auto Scaling instances in the account and Region.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAutoScalingInstances"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeAutoScalingInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_auto_scaling_notification_types(self, request: operations.GetDescribeAutoScalingNotificationTypesRequest) -> operations.GetDescribeAutoScalingNotificationTypesResponse:
        r"""Describes the notification types that are supported by Amazon EC2 Auto Scaling.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAutoScalingNotificationTypes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeAutoScalingNotificationTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_instance_refreshes(self, request: operations.GetDescribeInstanceRefreshesRequest) -> operations.GetDescribeInstanceRefreshesResponse:
        r"""<p>Gets information about the instance refreshes for the specified Auto Scaling group.</p> <p>This operation is part of the <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html\">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>To help you determine the status of an instance refresh, this operation returns information about the instance refreshes you previously initiated, including their status, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete.</p> <p>The following are the possible statuses: </p> <ul> <li> <p> <code>Pending</code> - The request was created, but the operation has not started.</p> </li> <li> <p> <code>InProgress</code> - The operation is in progress.</p> </li> <li> <p> <code>Successful</code> - The operation completed successfully.</p> </li> <li> <p> <code>Failed</code> - The operation failed to complete. You can troubleshoot using the status reason and the scaling activities. </p> </li> <li> <p> <code>Cancelling</code> - An ongoing operation is being cancelled. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started. </p> </li> <li> <p> <code>Cancelled</code> - The operation is cancelled. </p> </li> </ul>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeInstanceRefreshes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeInstanceRefreshesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_launch_configurations(self, request: operations.GetDescribeLaunchConfigurationsRequest) -> operations.GetDescribeLaunchConfigurationsResponse:
        r"""Gets information about the launch configurations in the account and Region.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeLaunchConfigurations"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeLaunchConfigurationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_lifecycle_hook_types(self, request: operations.GetDescribeLifecycleHookTypesRequest) -> operations.GetDescribeLifecycleHookTypesResponse:
        r"""<p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeLifecycleHookTypes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeLifecycleHookTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_lifecycle_hooks(self, request: operations.GetDescribeLifecycleHooksRequest) -> operations.GetDescribeLifecycleHooksResponse:
        r"""Gets information about the lifecycle hooks for the specified Auto Scaling group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeLifecycleHooks"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeLifecycleHooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_load_balancer_target_groups(self, request: operations.GetDescribeLoadBalancerTargetGroupsRequest) -> operations.GetDescribeLoadBalancerTargetGroupsResponse:
        r"""<p>Gets information about the load balancer target groups for the specified Auto Scaling group.</p> <p>To determine the availability of registered instances, use the <code>State</code> element in the response. When you attach a target group to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the <code>InService</code> state. </p> <p>Target groups also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your target group state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html\">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html\">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeLoadBalancerTargetGroups"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeLoadBalancerTargetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_load_balancers(self, request: operations.GetDescribeLoadBalancersRequest) -> operations.GetDescribeLoadBalancersResponse:
        r"""<p>Gets information about the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p> <p>To determine the availability of registered instances, use the <code>State</code> element in the response. When you attach a load balancer to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the <code>InService</code> state. </p> <p>Load balancers also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your load balancer state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html\">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html\">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeLoadBalancers"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeLoadBalancersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_metric_collection_types(self, request: operations.GetDescribeMetricCollectionTypesRequest) -> operations.GetDescribeMetricCollectionTypesResponse:
        r"""<p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p> <p>The <code>GroupStandbyInstances</code> metric is not returned by default. You must explicitly request this metric when calling the <a>EnableMetricsCollection</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeMetricCollectionTypes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeMetricCollectionTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_notification_configurations(self, request: operations.GetDescribeNotificationConfigurationsRequest) -> operations.GetDescribeNotificationConfigurationsResponse:
        r"""Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeNotificationConfigurations"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeNotificationConfigurationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_policies(self, request: operations.GetDescribePoliciesRequest) -> operations.GetDescribePoliciesResponse:
        r"""Gets information about the scaling policies in the account and Region.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribePolicies"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribePoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_scaling_activities(self, request: operations.GetDescribeScalingActivitiesRequest) -> operations.GetDescribeScalingActivitiesResponse:
        r"""<p>Gets information about the scaling activities in the account and Region.</p> <p>When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html\">Verifying a scaling activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the response is <code>Successful</code>. If an attempt to launch instances failed, the <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and the <code>StatusMessage</code> element in the response indicates the cause of the failure. For help interpreting the <code>StatusMessage</code>, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html\">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeScalingActivities"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeScalingActivitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_scaling_process_types(self, request: operations.GetDescribeScalingProcessTypesRequest) -> operations.GetDescribeScalingProcessTypesResponse:
        r"""Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeScalingProcessTypes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeScalingProcessTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_scheduled_actions(self, request: operations.GetDescribeScheduledActionsRequest) -> operations.GetDescribeScheduledActionsResponse:
        r"""<p>Gets information about the scheduled actions that haven't run or that have not reached their end time.</p> <p>To describe the scaling activities for scheduled actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeScheduledActions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeScheduledActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_termination_policy_types(self, request: operations.GetDescribeTerminationPolicyTypesRequest) -> operations.GetDescribeTerminationPolicyTypesResponse:
        r"""<p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html\">Controlling which Auto Scaling instances terminate during scale in</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeTerminationPolicyTypes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeTerminationPolicyTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_warm_pool(self, request: operations.GetDescribeWarmPoolRequest) -> operations.GetDescribeWarmPoolResponse:
        r"""<p>Gets information about a warm pool and its instances.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html\">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeWarmPool"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeWarmPoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_detach_instances(self, request: operations.GetDetachInstancesRequest) -> operations.GetDetachInstancesResponse:
        r"""<p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html\">Detach EC2 instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DetachInstances"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDetachInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_detach_load_balancer_target_groups(self, request: operations.GetDetachLoadBalancerTargetGroupsRequest) -> operations.GetDetachLoadBalancerTargetGroupsResponse:
        r"""Detaches one or more target groups from the specified Auto Scaling group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DetachLoadBalancerTargetGroups"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDetachLoadBalancerTargetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_detach_load_balancers(self, request: operations.GetDetachLoadBalancersRequest) -> operations.GetDetachLoadBalancersResponse:
        r"""<p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DetachLoadBalancers"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDetachLoadBalancersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_disable_metrics_collection(self, request: operations.GetDisableMetricsCollectionRequest) -> operations.GetDisableMetricsCollectionResponse:
        r"""Disables group metrics for the specified Auto Scaling group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DisableMetricsCollection"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDisableMetricsCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_enable_metrics_collection(self, request: operations.GetEnableMetricsCollectionRequest) -> operations.GetEnableMetricsCollectionResponse:
        r"""Enables group metrics for the specified Auto Scaling group. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-monitoring.html\">Monitoring CloudWatch metrics for your Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=EnableMetricsCollection"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnableMetricsCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_enter_standby(self, request: operations.GetEnterStandbyRequest) -> operations.GetEnterStandbyResponse:
        r"""<p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html\">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=EnterStandby"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnterStandbyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_execute_policy(self, request: operations.GetExecutePolicyRequest) -> operations.GetExecutePolicyResponse:
        r"""Executes the specified policy. This can be useful for testing the design of your scaling policy.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ExecutePolicy"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExecutePolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_exit_standby(self, request: operations.GetExitStandbyRequest) -> operations.GetExitStandbyResponse:
        r"""<p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html\">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ExitStandby"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExitStandbyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_get_predictive_scaling_forecast(self, request: operations.GetGetPredictiveScalingForecastRequest) -> operations.GetGetPredictiveScalingForecastResponse:
        r"""<p>Retrieves the forecast data for a predictive scaling policy.</p> <p>Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast.</p> <p>A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html\">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetPredictiveScalingForecast"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetPredictiveScalingForecastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_put_lifecycle_hook(self, request: operations.GetPutLifecycleHookRequest) -> operations.GetPutLifecycleHookResponse:
        r"""<p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance launches (before it is put into service) or as the instance terminates (before it is fully terminated).</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html\">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PutLifecycleHook"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPutLifecycleHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_put_notification_configuration(self, request: operations.GetPutNotificationConfigurationRequest) -> operations.GetPutNotificationConfigurationResponse:
        r"""<p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html\">Getting Amazon SNS notifications when your Auto Scaling group scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PutNotificationConfiguration"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPutNotificationConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_put_scheduled_update_group_action(self, request: operations.GetPutScheduledUpdateGroupActionRequest) -> operations.GetPutScheduledUpdateGroupActionResponse:
        r"""<p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html\">Scheduled scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PutScheduledUpdateGroupAction"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPutScheduledUpdateGroupActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_put_warm_pool(self, request: operations.GetPutWarmPoolRequest) -> operations.GetPutWarmPoolResponse:
        r"""<p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information and example configurations, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html\">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances.</p> <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the <a>DeleteWarmPool</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PutWarmPool"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPutWarmPoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_record_lifecycle_action_heartbeat(self, request: operations.GetRecordLifecycleActionHeartbeatRequest) -> operations.GetRecordLifecycleActionHeartbeatResponse:
        r"""<p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action.</p> </li> </ol> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html\">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RecordLifecycleActionHeartbeat"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecordLifecycleActionHeartbeatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_resume_processes(self, request: operations.GetResumeProcessesRequest) -> operations.GetResumeProcessesResponse:
        r"""<p>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html\">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ResumeProcesses"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResumeProcessesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_set_desired_capacity(self, request: operations.GetSetDesiredCapacityRequest) -> operations.GetSetDesiredCapacityResponse:
        r"""<p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html\">Manual scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetDesiredCapacity"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetDesiredCapacityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_set_instance_health(self, request: operations.GetSetInstanceHealthRequest) -> operations.GetSetInstanceHealthResponse:
        r"""<p>Sets the health status of the specified instance.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html\">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetInstanceHealth"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetInstanceHealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_set_instance_protection(self, request: operations.GetSetInstanceProtectionRequest) -> operations.GetSetInstanceProtectionResponse:
        r"""<p>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection\">Instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetInstanceProtection"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetInstanceProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_suspend_processes(self, request: operations.GetSuspendProcessesRequest) -> operations.GetSuspendProcessesResponse:
        r"""<p>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html\">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SuspendProcesses"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSuspendProcessesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_terminate_instance_in_auto_scaling_group(self, request: operations.GetTerminateInstanceInAutoScalingGroupRequest) -> operations.GetTerminateInstanceInAutoScalingGroupResponse:
        r"""<p>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool.</p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage\">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=TerminateInstanceInAutoScalingGroup"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTerminateInstanceInAutoScalingGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_attach_instances(self, request: operations.PostAttachInstancesRequest) -> operations.PostAttachInstancesResponse:
        r"""<p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html\">Attach EC2 instances to your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AttachInstances"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAttachInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_attach_load_balancer_target_groups(self, request: operations.PostAttachLoadBalancerTargetGroupsRequest) -> operations.PostAttachLoadBalancerTargetGroupsResponse:
        r"""<p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>This operation is used with the following load balancer types: </p> <ul> <li> <p> Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS. </p> </li> <li> <p> Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP. </p> </li> <li> <p> Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html\">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AttachLoadBalancerTargetGroups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAttachLoadBalancerTargetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_attach_load_balancers(self, request: operations.PostAttachLoadBalancersRequest) -> operations.PostAttachLoadBalancersResponse:
        r"""<note> <p>To attach an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer, use the <a>AttachLoadBalancerTargetGroups</a> API operation instead.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach the load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html\">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=AttachLoadBalancers"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAttachLoadBalancersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_batch_delete_scheduled_action(self, request: operations.PostBatchDeleteScheduledActionRequest) -> operations.PostBatchDeleteScheduledActionResponse:
        r"""Deletes one or more scheduled actions for the specified Auto Scaling group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=BatchDeleteScheduledAction"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBatchDeleteScheduledActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_batch_put_scheduled_update_group_action(self, request: operations.PostBatchPutScheduledUpdateGroupActionRequest) -> operations.PostBatchPutScheduledUpdateGroupActionResponse:
        r"""Creates or updates one or more scheduled scaling actions for an Auto Scaling group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=BatchPutScheduledUpdateGroupAction"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBatchPutScheduledUpdateGroupActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_cancel_instance_refresh(self, request: operations.PostCancelInstanceRefreshRequest) -> operations.PostCancelInstanceRefreshResponse:
        r"""<p>Cancels an instance refresh operation in progress. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started. </p> <p>This operation is part of the <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html\">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CancelInstanceRefresh"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCancelInstanceRefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_complete_lifecycle_action(self, request: operations.PostCompleteLifecycleActionRequest) -> operations.PostCompleteLifecycleActionResponse:
        r"""<p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, complete the lifecycle action.</b> </p> </li> </ol> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html\">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CompleteLifecycleAction"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCompleteLifecycleActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_auto_scaling_group(self, request: operations.PostCreateAutoScalingGroupRequest) -> operations.PostCreateAutoScalingGroupResponse:
        r"""<p> <b>We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Creates an Auto Scaling group with the specified name and attributes. </p> <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html\">Amazon EC2 Auto Scaling service quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For introductory exercises for creating an Auto Scaling group, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/GettingStartedTutorial.html\">Getting started with Amazon EC2 Auto Scaling</a> and <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-register-lbs-with-asg.html\">Tutorial: Set up a scaled and load-balanced application</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html\">Auto Scaling groups</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Every Auto Scaling group has three size parameters (<code>DesiredCapacity</code>, <code>MaxSize</code>, and <code>MinSize</code>). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateAutoScalingGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateAutoScalingGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_launch_configuration(self, request: operations.PostCreateLaunchConfigurationRequest) -> operations.PostCreateLaunchConfigurationResponse:
        r"""<p>Creates a launch configuration.</p> <p>If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html\">Amazon EC2 Auto Scaling service quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html\">Launch configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateLaunchConfiguration"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateLaunchConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_or_update_tags(self, request: operations.PostCreateOrUpdateTagsRequest) -> operations.PostCreateOrUpdateTagsResponse:
        r"""<p>Creates or updates tags for the specified Auto Scaling group.</p> <p>When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html\">Tagging Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateOrUpdateTags"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateOrUpdateTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_auto_scaling_group(self, request: operations.PostDeleteAutoScalingGroupRequest) -> operations.PostDeleteAutoScalingGroupResponse:
        r"""<p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed.</p> <p>If the group has policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteAutoScalingGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteAutoScalingGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_launch_configuration(self, request: operations.PostDeleteLaunchConfigurationRequest) -> operations.PostDeleteLaunchConfigurationResponse:
        r"""<p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteLaunchConfiguration"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteLaunchConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_lifecycle_hook(self, request: operations.PostDeleteLifecycleHookRequest) -> operations.PostDeleteLifecycleHookResponse:
        r"""<p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteLifecycleHook"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteLifecycleHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_notification_configuration(self, request: operations.PostDeleteNotificationConfigurationRequest) -> operations.PostDeleteNotificationConfigurationResponse:
        r"""Deletes the specified notification.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteNotificationConfiguration"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteNotificationConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_policy(self, request: operations.PostDeletePolicyRequest) -> operations.PostDeletePolicyResponse:
        r"""<p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html\">Deleting a scaling policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeletePolicy"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeletePolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_scheduled_action(self, request: operations.PostDeleteScheduledActionRequest) -> operations.PostDeleteScheduledActionResponse:
        r"""Deletes the specified scheduled action.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteScheduledAction"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteScheduledActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_tags(self, request: operations.PostDeleteTagsRequest) -> operations.PostDeleteTagsResponse:
        r"""Deletes the specified tags.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteTags"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_warm_pool(self, request: operations.PostDeleteWarmPoolRequest) -> operations.PostDeleteWarmPoolResponse:
        r"""<p>Deletes the warm pool for the specified Auto Scaling group.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html\">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteWarmPool"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteWarmPoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_account_limits(self, request: operations.PostDescribeAccountLimitsRequest) -> operations.PostDescribeAccountLimitsResponse:
        r"""<p>Describes the current Amazon EC2 Auto Scaling resource quotas for your account.</p> <p>When you establish an account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html\">Amazon EC2 Auto Scaling service quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAccountLimits"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeAccountLimitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_adjustment_types(self, request: operations.PostDescribeAdjustmentTypesRequest) -> operations.PostDescribeAdjustmentTypesResponse:
        r"""<p>Describes the available adjustment types for step scaling and simple scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p> <code>ChangeInCapacity</code> </p> </li> <li> <p> <code>ExactCapacity</code> </p> </li> <li> <p> <code>PercentChangeInCapacity</code> </p> </li> </ul>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAdjustmentTypes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeAdjustmentTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_auto_scaling_groups(self, request: operations.PostDescribeAutoScalingGroupsRequest) -> operations.PostDescribeAutoScalingGroupsResponse:
        r"""<p>Gets information about the Auto Scaling groups in the account and Region.</p> <p>This operation returns information about instances in Auto Scaling groups. To retrieve information about the instances in a warm pool, you must call the <a>DescribeWarmPool</a> API. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAutoScalingGroups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeAutoScalingGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_auto_scaling_instances(self, request: operations.PostDescribeAutoScalingInstancesRequest) -> operations.PostDescribeAutoScalingInstancesResponse:
        r"""Gets information about the Auto Scaling instances in the account and Region.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAutoScalingInstances"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeAutoScalingInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_auto_scaling_notification_types(self, request: operations.PostDescribeAutoScalingNotificationTypesRequest) -> operations.PostDescribeAutoScalingNotificationTypesResponse:
        r"""Describes the notification types that are supported by Amazon EC2 Auto Scaling.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAutoScalingNotificationTypes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeAutoScalingNotificationTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_instance_refreshes(self, request: operations.PostDescribeInstanceRefreshesRequest) -> operations.PostDescribeInstanceRefreshesResponse:
        r"""<p>Gets information about the instance refreshes for the specified Auto Scaling group.</p> <p>This operation is part of the <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html\">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group after you make configuration changes.</p> <p>To help you determine the status of an instance refresh, this operation returns information about the instance refreshes you previously initiated, including their status, end time, the percentage of the instance refresh that is complete, and the number of instances remaining to update before the instance refresh is complete.</p> <p>The following are the possible statuses: </p> <ul> <li> <p> <code>Pending</code> - The request was created, but the operation has not started.</p> </li> <li> <p> <code>InProgress</code> - The operation is in progress.</p> </li> <li> <p> <code>Successful</code> - The operation completed successfully.</p> </li> <li> <p> <code>Failed</code> - The operation failed to complete. You can troubleshoot using the status reason and the scaling activities. </p> </li> <li> <p> <code>Cancelling</code> - An ongoing operation is being cancelled. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started. </p> </li> <li> <p> <code>Cancelled</code> - The operation is cancelled. </p> </li> </ul>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeInstanceRefreshes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeInstanceRefreshesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_launch_configurations(self, request: operations.PostDescribeLaunchConfigurationsRequest) -> operations.PostDescribeLaunchConfigurationsResponse:
        r"""Gets information about the launch configurations in the account and Region.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeLaunchConfigurations"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeLaunchConfigurationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_lifecycle_hook_types(self, request: operations.PostDescribeLifecycleHookTypesRequest) -> operations.PostDescribeLifecycleHookTypesResponse:
        r"""<p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p> <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> </p> </li> <li> <p> <code>autoscaling:EC2_INSTANCE_TERMINATING</code> </p> </li> </ul>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeLifecycleHookTypes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeLifecycleHookTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_lifecycle_hooks(self, request: operations.PostDescribeLifecycleHooksRequest) -> operations.PostDescribeLifecycleHooksResponse:
        r"""Gets information about the lifecycle hooks for the specified Auto Scaling group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeLifecycleHooks"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeLifecycleHooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_load_balancer_target_groups(self, request: operations.PostDescribeLoadBalancerTargetGroupsRequest) -> operations.PostDescribeLoadBalancerTargetGroupsResponse:
        r"""<p>Gets information about the load balancer target groups for the specified Auto Scaling group.</p> <p>To determine the availability of registered instances, use the <code>State</code> element in the response. When you attach a target group to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the target group is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the target group doesn't enter the <code>InService</code> state. </p> <p>Target groups also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your target group state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html\">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html\">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeLoadBalancerTargetGroups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeLoadBalancerTargetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_load_balancers(self, request: operations.PostDescribeLoadBalancersRequest) -> operations.PostDescribeLoadBalancersResponse:
        r"""<p>Gets information about the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p> <p>To determine the availability of registered instances, use the <code>State</code> element in the response. When you attach a load balancer to an Auto Scaling group, the initial <code>State</code> value is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the Auto Scaling group, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. When the load balancer is in the <code>InService</code> state, Amazon EC2 Auto Scaling can terminate and replace any instances that are reported as unhealthy. If no registered instances pass the health checks, the load balancer doesn't enter the <code>InService</code> state. </p> <p>Load balancers also have an <code>InService</code> state if you attach them in the <a>CreateAutoScalingGroup</a> API call. If your load balancer state is <code>InService</code>, but it is not working properly, check the scaling activities by calling <a>DescribeScalingActivities</a> and take any corrective actions necessary.</p> <p>For help with failed health checks, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-healthchecks.html\">Troubleshooting Amazon EC2 Auto Scaling: Health checks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html\">Elastic Load Balancing and Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeLoadBalancers"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeLoadBalancersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_metric_collection_types(self, request: operations.PostDescribeMetricCollectionTypesRequest) -> operations.PostDescribeMetricCollectionTypesResponse:
        r"""<p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p> <p>The <code>GroupStandbyInstances</code> metric is not returned by default. You must explicitly request this metric when calling the <a>EnableMetricsCollection</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeMetricCollectionTypes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeMetricCollectionTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_notification_configurations(self, request: operations.PostDescribeNotificationConfigurationsRequest) -> operations.PostDescribeNotificationConfigurationsResponse:
        r"""Gets information about the Amazon SNS notifications that are configured for one or more Auto Scaling groups.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeNotificationConfigurations"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeNotificationConfigurationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_policies(self, request: operations.PostDescribePoliciesRequest) -> operations.PostDescribePoliciesResponse:
        r"""Gets information about the scaling policies in the account and Region.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribePolicies"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribePoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_scaling_activities(self, request: operations.PostDescribeScalingActivitiesRequest) -> operations.PostDescribeScalingActivitiesResponse:
        r"""<p>Gets information about the scaling activities in the account and Region.</p> <p>When scaling events occur, you see a record of the scaling activity in the scaling activities. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html\">Verifying a scaling activity for an Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If the scaling event succeeds, the value of the <code>StatusCode</code> element in the response is <code>Successful</code>. If an attempt to launch instances failed, the <code>StatusCode</code> value is <code>Failed</code> or <code>Cancelled</code> and the <code>StatusMessage</code> element in the response indicates the cause of the failure. For help interpreting the <code>StatusMessage</code>, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/CHAP_Troubleshooting.html\">Troubleshooting Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeScalingActivities"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeScalingActivitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_scaling_process_types(self, request: operations.PostDescribeScalingProcessTypesRequest) -> operations.PostDescribeScalingProcessTypesResponse:
        r"""Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeScalingProcessTypes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeScalingProcessTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_scheduled_actions(self, request: operations.PostDescribeScheduledActionsRequest) -> operations.PostDescribeScheduledActionsResponse:
        r"""<p>Gets information about the scheduled actions that haven't run or that have not reached their end time.</p> <p>To describe the scaling activities for scheduled actions that have already run, call the <a>DescribeScalingActivities</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeScheduledActions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeScheduledActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_tags(self, request: operations.PostDescribeTagsRequest) -> operations.PostDescribeTagsResponse:
        r"""<p>Describes the specified tags.</p> <p>You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results.</p> <p>You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html\">Tagging Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeTags"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_termination_policy_types(self, request: operations.PostDescribeTerminationPolicyTypesRequest) -> operations.PostDescribeTerminationPolicyTypesResponse:
        r"""<p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html\">Controlling which Auto Scaling instances terminate during scale in</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeTerminationPolicyTypes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeTerminationPolicyTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_warm_pool(self, request: operations.PostDescribeWarmPoolRequest) -> operations.PostDescribeWarmPoolResponse:
        r"""<p>Gets information about a warm pool and its instances.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html\">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeWarmPool"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeWarmPoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_detach_instances(self, request: operations.PostDetachInstancesRequest) -> operations.PostDetachInstancesResponse:
        r"""<p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html\">Detach EC2 instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DetachInstances"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDetachInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_detach_load_balancer_target_groups(self, request: operations.PostDetachLoadBalancerTargetGroupsRequest) -> operations.PostDetachLoadBalancerTargetGroupsResponse:
        r"""Detaches one or more target groups from the specified Auto Scaling group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DetachLoadBalancerTargetGroups"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDetachLoadBalancerTargetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_detach_load_balancers(self, request: operations.PostDetachLoadBalancersRequest) -> operations.PostDetachLoadBalancersResponse:
        r"""<p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DetachLoadBalancers"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDetachLoadBalancersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_disable_metrics_collection(self, request: operations.PostDisableMetricsCollectionRequest) -> operations.PostDisableMetricsCollectionResponse:
        r"""Disables group metrics for the specified Auto Scaling group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DisableMetricsCollection"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDisableMetricsCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_enable_metrics_collection(self, request: operations.PostEnableMetricsCollectionRequest) -> operations.PostEnableMetricsCollectionResponse:
        r"""Enables group metrics for the specified Auto Scaling group. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-monitoring.html\">Monitoring CloudWatch metrics for your Auto Scaling groups and instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=EnableMetricsCollection"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEnableMetricsCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_enter_standby(self, request: operations.PostEnterStandbyRequest) -> operations.PostEnterStandbyResponse:
        r"""<p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html\">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=EnterStandby"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEnterStandbyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_execute_policy(self, request: operations.PostExecutePolicyRequest) -> operations.PostExecutePolicyResponse:
        r"""Executes the specified policy. This can be useful for testing the design of your scaling policy.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ExecutePolicy"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostExecutePolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_exit_standby(self, request: operations.PostExitStandbyRequest) -> operations.PostExitStandbyResponse:
        r"""<p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html\">Temporarily removing instances from your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ExitStandby"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostExitStandbyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_get_predictive_scaling_forecast(self, request: operations.PostGetPredictiveScalingForecastRequest) -> operations.PostGetPredictiveScalingForecastResponse:
        r"""<p>Retrieves the forecast data for a predictive scaling policy.</p> <p>Load forecasts are predictions of the hourly load values using historical load data from CloudWatch and an analysis of historical trends. Capacity forecasts are represented as predicted values for the minimum capacity that is needed on an hourly basis, based on the hourly load forecast.</p> <p>A minimum of 24 hours of data is required to create the initial forecasts. However, having a full 14 days of historical data results in more accurate forecasts.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html\">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetPredictiveScalingForecast"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetPredictiveScalingForecastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_put_lifecycle_hook(self, request: operations.PostPutLifecycleHookRequest) -> operations.PostPutLifecycleHookResponse:
        r"""<p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance launches (before it is put into service) or as the instance terminates (before it is fully terminated).</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html\">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PutLifecycleHook"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPutLifecycleHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_put_notification_configuration(self, request: operations.PostPutNotificationConfigurationRequest) -> operations.PostPutNotificationConfigurationResponse:
        r"""<p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html\">Getting Amazon SNS notifications when your Auto Scaling group scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PutNotificationConfiguration"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPutNotificationConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_put_scaling_policy(self, request: operations.PostPutScalingPolicyRequest) -> operations.PostPutScalingPolicyResponse:
        r"""<p>Creates or updates a scaling policy for an Auto Scaling group. Scaling policies are used to scale an Auto Scaling group based on configurable metrics. If no policies are defined, the dynamic scaling and predictive scaling features are not used. </p> <p>For more information about using dynamic scaling, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html\">Target tracking scaling policies</a> and <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html\">Step and simple scaling policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information about using predictive scaling, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html\">Predictive scaling for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scaling policies for an Auto Scaling group using the <a>DescribePolicies</a> API call. If you are no longer using a scaling policy, you can delete it by calling the <a>DeletePolicy</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PutScalingPolicy"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPutScalingPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_put_scheduled_update_group_action(self, request: operations.PostPutScheduledUpdateGroupActionRequest) -> operations.PostPutScheduledUpdateGroupActionResponse:
        r"""<p>Creates or updates a scheduled scaling action for an Auto Scaling group.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html\">Scheduled scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can view the scheduled actions for an Auto Scaling group using the <a>DescribeScheduledActions</a> API call. If you are no longer using a scheduled action, you can delete it by calling the <a>DeleteScheduledAction</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PutScheduledUpdateGroupAction"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPutScheduledUpdateGroupActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_put_warm_pool(self, request: operations.PostPutWarmPoolRequest) -> operations.PostPutWarmPoolResponse:
        r"""<p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity. For more information and example configurations, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html\">Warm pools for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This operation must be called from the Region in which the Auto Scaling group was created. This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a launch template or launch configuration that requests Spot Instances.</p> <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the <a>DeleteWarmPool</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PutWarmPool"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPutWarmPoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_record_lifecycle_action_heartbeat(self, request: operations.PostRecordLifecycleActionHeartbeatRequest) -> operations.PostRecordLifecycleActionHeartbeatResponse:
        r"""<p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action.</p> </li> </ol> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html\">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=RecordLifecycleActionHeartbeat"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRecordLifecycleActionHeartbeatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_resume_processes(self, request: operations.PostResumeProcessesRequest) -> operations.PostResumeProcessesResponse:
        r"""<p>Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html\">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ResumeProcesses"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostResumeProcessesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_set_desired_capacity(self, request: operations.PostSetDesiredCapacityRequest) -> operations.PostSetDesiredCapacityResponse:
        r"""<p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html\">Manual scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetDesiredCapacity"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetDesiredCapacityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_set_instance_health(self, request: operations.PostSetInstanceHealthRequest) -> operations.PostSetInstanceHealthResponse:
        r"""<p>Sets the health status of the specified instance.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html\">Health checks for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetInstanceHealth"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetInstanceHealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_set_instance_protection(self, request: operations.PostSetInstanceProtectionRequest) -> operations.PostSetInstanceProtectionResponse:
        r"""<p>Updates the instance protection settings of the specified instances. This operation cannot be called on instances in a warm pool.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection\">Instance scale-in protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetInstanceProtection"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetInstanceProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_start_instance_refresh(self, request: operations.PostStartInstanceRefreshRequest) -> operations.PostStartInstanceRefreshResponse:
        r"""<p>Starts a new instance refresh operation. An instance refresh performs a rolling replacement of all or some instances in an Auto Scaling group. Each instance is terminated first and then replaced, which temporarily reduces the capacity available within your Auto Scaling group.</p> <p>This operation is part of the <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html\">instance refresh feature</a> in Amazon EC2 Auto Scaling, which helps you update instances in your Auto Scaling group. This feature is helpful, for example, when you have a new AMI or a new user data script. You just need to create a new launch template that specifies the new AMI or user data script. Then start an instance refresh to immediately begin the process of updating instances in the group. </p> <p>If the call succeeds, it creates a new instance refresh request with a unique ID that you can use to track its progress. To query its status, call the <a>DescribeInstanceRefreshes</a> API. To describe the instance refreshes that have already run, call the <a>DescribeInstanceRefreshes</a> API. To cancel an instance refresh operation in progress, use the <a>CancelInstanceRefresh</a> API. </p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=StartInstanceRefresh"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStartInstanceRefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_suspend_processes(self, request: operations.PostSuspendProcessesRequest) -> operations.PostSuspendProcessesResponse:
        r"""<p>Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html\">Suspending and resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SuspendProcesses"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSuspendProcessesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_terminate_instance_in_auto_scaling_group(self, request: operations.PostTerminateInstanceInAutoScalingGroupRequest) -> operations.PostTerminateInstanceInAutoScalingGroupResponse:
        r"""<p>Terminates the specified instance and optionally adjusts the desired group size. This operation cannot be called on instances in a warm pool.</p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage\">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=TerminateInstanceInAutoScalingGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTerminateInstanceInAutoScalingGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_auto_scaling_group(self, request: operations.PostUpdateAutoScalingGroupRequest) -> operations.PostUpdateAutoScalingGroupResponse:
        r"""<p> <b>We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b> </p> <p>Updates the configuration for the specified Auto Scaling group.</p> <p>To update an Auto Scaling group, specify the name of the group and the parameter that you want to change. Any parameters that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns. </p> <p>If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application.</p> <p>Note the following about changing <code>DesiredCapacity</code>, <code>MaxSize</code>, or <code>MinSize</code>:</p> <ul> <li> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.</p> </li> <li> <p>If you specify a new value for <code>MinSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MinSize</code> is larger than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MinSize</code> value.</p> </li> <li> <p>If you specify a new value for <code>MaxSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MaxSize</code> is smaller than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MaxSize</code> value.</p> </li> </ul> <p>To see which parameters have been set, call the <a>DescribeAutoScalingGroups</a> API. To view the scaling policies for an Auto Scaling group, call the <a>DescribePolicies</a> API. If the group has scaling policies, you can update them by calling the <a>PutScalingPolicy</a> API.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateAutoScalingGroup"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateAutoScalingGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    