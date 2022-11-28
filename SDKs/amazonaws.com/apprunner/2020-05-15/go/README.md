# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AssociateCustomDomainRequest{
        Headers: operations.AssociateCustomDomainHeaders{
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "eligendi",
            XAmzCredential: "veniam",
            XAmzDate: "dolorem",
            XAmzSecurityToken: "similique",
            XAmzSignature: "ad",
            XAmzSignedHeaders: "ullam",
            XAmzTarget: "AppRunner.AssociateCustomDomain",
        },
        Request: shared.AssociateCustomDomainRequest{
            DomainName: "molestiae",
            EnableWwwSubdomain: true,
            ServiceArn: "aut",
        },
    }
    
    res, err := s.Sdk.AssociateCustomDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateCustomDomainResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AssociateCustomDomain` - <p>Associate your own domain name with the AWS App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
* `CreateAutoScalingConfiguration` - <p>Create an AWS App Runner automatic scaling configuration resource. App Runner requires this resource when you create App Runner services that require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by using the same <code>AutoScalingConfigurationName</code> and different <code>AutoScalingConfigurationRevision</code> values. When you create a service, you can set it to use the latest active revision of an auto scaling configuration or a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the AWS Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>
* `CreateConnection` - <p>Create an AWS App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>
* `CreateService` - <p>Create an AWS App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
* `DeleteAutoScalingConfiguration` - Delete an AWS App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
* `DeleteConnection` - Delete an AWS App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.
* `DeleteService` - <p>Delete an AWS App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* `DescribeAutoScalingConfiguration` - Return a full description of an AWS App Runner automatic scaling configuration resource.
* `DescribeCustomDomains` - Return a description of custom domain names that are associated with an AWS App Runner service.
* `DescribeService` - Return a full description of an AWS App Runner service.
* `DisassociateCustomDomain` - <p>Disassociate a custom domain name from an AWS App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>
* `ListAutoScalingConfigurations` - Returns a list of AWS App Runner automatic scaling configurations in your AWS account. You can query the revisions for a specific configuration name or the revisions for all configurations in your account. You can optionally query only the latest revision of each requested name.
* `ListConnections` - Returns a list of AWS App Runner connections that are associated with your AWS account.
* `ListOperations` - <p>Return a list of operations that occurred on an AWS App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>
* `ListServices` - Returns a list of running AWS App Runner services in your AWS account.
* `ListTagsForResource` - List tags that are associated with for an AWS App Runner resource. The response contains a list of tag key-value pairs.
* `PauseService` - <p>Pause an active AWS App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* `ResumeService` - <p>Resume an active AWS App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* `StartDeployment` - <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an AWS App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
* `TagResource` - Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.
* `UntagResource` - Remove tags from an App Runner resource.
* `UpdateService` - <p>Update an AWS App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
