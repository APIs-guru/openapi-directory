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
    
    req := operations.AddTagsToOnPremisesInstancesRequest{
        Headers: operations.AddTagsToOnPremisesInstancesHeaders{
            XAmzAlgorithm: "sed",
            XAmzContentSha256: "praesentium",
            XAmzCredential: "excepturi",
            XAmzDate: "aut",
            XAmzSecurityToken: "architecto",
            XAmzSignature: "omnis",
            XAmzSignedHeaders: "ut",
            XAmzTarget: "CodeDeploy_20141006.AddTagsToOnPremisesInstances",
        },
        Request: shared.AddTagsToOnPremisesInstancesInput{
            InstanceNames: []string{
                "nisi",
                "dolores",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolorem",
                    Value: "in",
                },
                shared.Tag{
                    Key: "est",
                    Value: "quos",
                },
            },
        },
    }
    
    res, err := s.Sdk.AddTagsToOnPremisesInstances(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AddTagsToOnPremisesInstances` - Adds tags to on-premises instances.
* `BatchGetApplicationRevisions` - Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.
* `BatchGetApplications` - Gets information about one or more applications. The maximum number of applications that can be returned is 100.
* `BatchGetDeploymentGroups` - Gets information about one or more deployment groups.
* `BatchGetDeploymentInstances` - <note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and AWS Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>
* `BatchGetDeploymentTargets` - <p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about EC2 instance targets. </p> </li> <li> <p> <b>AWS Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>
* `BatchGetDeployments` - Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.
* `BatchGetOnPremisesInstances` - Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.
* `ContinueDeployment` - For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) 
* `CreateApplication` - Creates an application.
* `CreateDeployment` - Deploys an application revision through the specified deployment group.
* `CreateDeploymentConfig` -  Creates a deployment configuration. 
* `CreateDeploymentGroup` - Creates a deployment group to which application revisions are deployed.
* `DeleteApplication` - Deletes an application.
* `DeleteDeploymentConfig` - <p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>
* `DeleteDeploymentGroup` - Deletes a deployment group.
* `DeleteGitHubAccountToken` - Deletes a GitHub account connection.
* `DeleteResourcesByExternalID` - Deletes resources linked to an external ID.
* `DeregisterOnPremisesInstance` - Deregisters an on-premises instance.
* `GetApplication` - Gets information about an application.
* `GetApplicationRevision` - Gets information about an application revision.
* `GetDeployment` - <p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>
* `GetDeploymentConfig` - Gets information about a deployment configuration.
* `GetDeploymentGroup` - Gets information about a deployment group.
* `GetDeploymentInstance` - Gets information about an instance as part of a deployment.
* `GetDeploymentTarget` -  Returns information about a deployment target. 
* `GetOnPremisesInstance` -  Gets information about an on-premises instance. 
* `ListApplicationRevisions` - Lists information about revisions for an application.
* `ListApplications` - Lists the applications registered with the IAM user or AWS account.
* `ListDeploymentConfigs` - Lists the deployment configurations with the IAM user or AWS account.
* `ListDeploymentGroups` - Lists the deployment groups for an application registered with the IAM user or AWS account.
* `ListDeploymentInstances` - <note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or AWS Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or AWS account. </p>
* `ListDeploymentTargets` -  Returns an array of target IDs that are associated a deployment. 
* `ListDeployments` - Lists the deployments in a deployment group for an application registered with the IAM user or AWS account.
* `ListGitHubAccountTokenNames` - Lists the names of stored connections to GitHub accounts.
* `ListOnPremisesInstances` - <p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>
* `ListTagsForResource` -  Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources. 
* `PutLifecycleEventHookExecutionStatus` -  Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the AWS Lambda or Amazon ECS compute platform. For AWS Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an AWS Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.
* `RegisterApplicationRevision` - Registers with AWS CodeDeploy a revision for the specified application.
* `RegisterOnPremisesInstance` - <p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>
* `RemoveTagsFromOnPremisesInstances` - Removes one or more tags from one or more on-premises instances.
* `SkipWaitTimeForInstanceTermination` - In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.
* `StopDeployment` - Attempts to stop an ongoing deployment.
* `TagResource` -  Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter. 
* `UntagResource` -  Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter. 
* `UpdateApplication` - Changes the name of an application.
* `UpdateDeploymentGroup` - Changes information about a deployment group.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
