# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AssociateCustomDomainRequest(
    headers=operations.AssociateCustomDomainHeaders(
        x_amz_algorithm="voluptas",
        x_amz_content_sha256="eligendi",
        x_amz_credential="veniam",
        x_amz_date="dolorem",
        x_amz_security_token="similique",
        x_amz_signature="ad",
        x_amz_signed_headers="ullam",
        x_amz_target="AppRunner.AssociateCustomDomain",
    ),
    request=shared.AssociateCustomDomainRequest(
        domain_name="molestiae",
        enable_www_subdomain=True,
        service_arn="aut",
    ),
)
    
res = s.sdk.associate_custom_domain(req)

if res.associate_custom_domain_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associate_custom_domain` - <p>Associate your own domain name with the AWS App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
* `create_auto_scaling_configuration` - <p>Create an AWS App Runner automatic scaling configuration resource. App Runner requires this resource when you create App Runner services that require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by using the same <code>AutoScalingConfigurationName</code> and different <code>AutoScalingConfigurationRevision</code> values. When you create a service, you can set it to use the latest active revision of an auto scaling configuration or a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the AWS Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>
* `create_connection` - <p>Create an AWS App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>
* `create_service` - <p>Create an AWS App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
* `delete_auto_scaling_configuration` - Delete an AWS App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
* `delete_connection` - Delete an AWS App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.
* `delete_service` - <p>Delete an AWS App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* `describe_auto_scaling_configuration` - Return a full description of an AWS App Runner automatic scaling configuration resource.
* `describe_custom_domains` - Return a description of custom domain names that are associated with an AWS App Runner service.
* `describe_service` - Return a full description of an AWS App Runner service.
* `disassociate_custom_domain` - <p>Disassociate a custom domain name from an AWS App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>
* `list_auto_scaling_configurations` - Returns a list of AWS App Runner automatic scaling configurations in your AWS account. You can query the revisions for a specific configuration name or the revisions for all configurations in your account. You can optionally query only the latest revision of each requested name.
* `list_connections` - Returns a list of AWS App Runner connections that are associated with your AWS account.
* `list_operations` - <p>Return a list of operations that occurred on an AWS App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>
* `list_services` - Returns a list of running AWS App Runner services in your AWS account.
* `list_tags_for_resource` - List tags that are associated with for an AWS App Runner resource. The response contains a list of tag key-value pairs.
* `pause_service` - <p>Pause an active AWS App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* `resume_service` - <p>Resume an active AWS App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* `start_deployment` - <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an AWS App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* `tag_resource` - Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.
* `untag_resource` - Remove tags from an App Runner resource.
* `update_service` - <p>Update an AWS App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
