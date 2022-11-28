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
    
    req := operations.CreateDevicePoolRequest{
        Headers: operations.CreateDevicePoolHeaders{
            XAmzAlgorithm: "ex",
            XAmzContentSha256: "doloribus",
            XAmzCredential: "qui",
            XAmzDate: "eius",
            XAmzSecurityToken: "dolorum",
            XAmzSignature: "ea",
            XAmzSignedHeaders: "enim",
            XAmzTarget: "DeviceFarm_20150623.CreateDevicePool",
        },
        Request: shared.CreateDevicePoolRequest{
            Description: "quos",
            MaxDevices: 4962863351805660991,
            Name: "iusto",
            ProjectArn: "et",
            Rules: []shared.Rule{
                shared.Rule{
                    Attribute: "APPIUM_VERSION",
                    Operator: "GREATER_THAN",
                    Value: "itaque",
                },
            },
        },
    }
    
    res, err := s.Sdk.CreateDevicePool(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDevicePoolResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateDevicePool` - Creates a device pool.
* `CreateInstanceProfile` - Creates a profile that can be applied to one or more private fleet device instances.
* `CreateNetworkProfile` - Creates a network profile.
* `CreateProject` - Creates a project.
* `CreateRemoteAccessSession` - Specifies and starts a remote access session.
* `CreateTestGridProject` - Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.
* `CreateTestGridURL` - Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.
* `CreateUpload` - Uploads an app or test scripts.
* `CreateVpceConfiguration` - Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.
* `DeleteDevicePool` - Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
* `DeleteInstanceProfile` - Deletes a profile that can be applied to one or more private device instances.
* `DeleteNetworkProfile` - Deletes a network profile.
* `DeleteProject` - <p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* `DeleteRemoteAccessSession` - Deletes a completed remote access session and its results.
* `DeleteRun` - <p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* `DeleteTestGridProject` - <p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>
* `DeleteUpload` - Deletes an upload given the upload ARN.
* `DeleteVpceConfiguration` - Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
* `GetAccountSettings` - Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.
* `GetDevice` - Gets information about a unique device type.
* `GetDeviceInstance` - Returns information about a device instance that belongs to a private device fleet.
* `GetDevicePool` - Gets information about a device pool.
* `GetDevicePoolCompatibility` - Gets information about compatibility with a device pool.
* `GetInstanceProfile` - Returns information about the specified instance profile.
* `GetJob` - Gets information about a job.
* `GetNetworkProfile` - Returns information about a network profile.
* `GetOfferingStatus` - Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `GetProject` - Gets information about a project.
* `GetRemoteAccessSession` - Returns a link to a currently running remote access session.
* `GetRun` - Gets information about a run.
* `GetSuite` - Gets information about a suite.
* `GetTest` - Gets information about a test.
* `GetTestGridProject` - Retrieves information about a Selenium testing project.
* `GetTestGridSession` - <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>
* `GetUpload` - Gets information about an upload.
* `GetVpceConfiguration` - Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.
* `InstallToRemoteAccessSession` - Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
* `ListArtifacts` - Gets information about artifacts.
* `ListDeviceInstances` - Returns information about the private device instances associated with one or more AWS accounts.
* `ListDevicePools` - Gets information about device pools.
* `ListDevices` - Gets information about unique device types.
* `ListInstanceProfiles` - Returns information about all the instance profiles in an AWS account.
* `ListJobs` - Gets information about jobs for a given test run.
* `ListNetworkProfiles` - Returns the list of available network profiles.
* `ListOfferingPromotions` - Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.
* `ListOfferingTransactions` - Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `ListOfferings` - Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `ListProjects` - Gets information about projects.
* `ListRemoteAccessSessions` - Returns a list of all currently running remote access sessions.
* `ListRuns` - Gets information about runs, given an AWS Device Farm project ARN.
* `ListSamples` - Gets information about samples, given an AWS Device Farm job ARN.
* `ListSuites` - Gets information about test suites for a given job.
* `ListTagsForResource` - List the tags for an AWS Device Farm resource.
* `ListTestGridProjects` - Gets a list of all Selenium testing projects in your account.
* `ListTestGridSessionActions` - Returns a list of the actions taken in a <a>TestGridSession</a>.
* `ListTestGridSessionArtifacts` - Retrieves a list of artifacts created during the session.
* `ListTestGridSessions` - Retrieves a list of sessions for a <a>TestGridProject</a>.
* `ListTests` - Gets information about tests in a given test suite.
* `ListUniqueProblems` - <p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>
* `ListUploads` - Gets information about uploads, given an AWS Device Farm project ARN.
* `ListVpceConfigurations` - Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
* `PurchaseOffering` - Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `RenewOffering` - Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `ScheduleRun` - Schedules a run.
* `StopJob` - Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.
* `StopRemoteAccessSession` - Ends a specified remote access session.
* `StopRun` - Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.
* `TagResource` - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
* `UntagResource` - Deletes the specified tags from a resource.
* `UpdateDeviceInstance` - Updates information about a private device instance.
* `UpdateDevicePool` - Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
* `UpdateInstanceProfile` - Updates information about an existing private device instance profile.
* `UpdateNetworkProfile` - Updates the network profile.
* `UpdateProject` - Modifies the specified project name, given the project ARN and a new name.
* `UpdateTestGridProject` - Change details of a project.
* `UpdateUpload` - Updates an uploaded test spec.
* `UpdateVpceConfiguration` - Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
