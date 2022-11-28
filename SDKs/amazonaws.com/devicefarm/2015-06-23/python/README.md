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
    
req = operations.CreateDevicePoolRequest(
    headers=operations.CreateDevicePoolHeaders(
        x_amz_algorithm="ex",
        x_amz_content_sha256="doloribus",
        x_amz_credential="qui",
        x_amz_date="eius",
        x_amz_security_token="dolorum",
        x_amz_signature="ea",
        x_amz_signed_headers="enim",
        x_amz_target="DeviceFarm_20150623.CreateDevicePool",
    ),
    request=shared.CreateDevicePoolRequest(
        description="quos",
        max_devices=4962863351805660991,
        name="iusto",
        project_arn="et",
        rules=[
            shared.Rule(
                attribute="APPIUM_VERSION",
                operator="GREATER_THAN",
                value="itaque",
            ),
        ],
    ),
)
    
res = s.sdk.create_device_pool(req)

if res.create_device_pool_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_device_pool` - Creates a device pool.
* `create_instance_profile` - Creates a profile that can be applied to one or more private fleet device instances.
* `create_network_profile` - Creates a network profile.
* `create_project` - Creates a project.
* `create_remote_access_session` - Specifies and starts a remote access session.
* `create_test_grid_project` - Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.
* `create_test_grid_url` - Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.
* `create_upload` - Uploads an app or test scripts.
* `create_vpce_configuration` - Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.
* `delete_device_pool` - Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
* `delete_instance_profile` - Deletes a profile that can be applied to one or more private device instances.
* `delete_network_profile` - Deletes a network profile.
* `delete_project` - <p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* `delete_remote_access_session` - Deletes a completed remote access session and its results.
* `delete_run` - <p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* `delete_test_grid_project` - <p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>
* `delete_upload` - Deletes an upload given the upload ARN.
* `delete_vpce_configuration` - Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
* `get_account_settings` - Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.
* `get_device` - Gets information about a unique device type.
* `get_device_instance` - Returns information about a device instance that belongs to a private device fleet.
* `get_device_pool` - Gets information about a device pool.
* `get_device_pool_compatibility` - Gets information about compatibility with a device pool.
* `get_instance_profile` - Returns information about the specified instance profile.
* `get_job` - Gets information about a job.
* `get_network_profile` - Returns information about a network profile.
* `get_offering_status` - Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `get_project` - Gets information about a project.
* `get_remote_access_session` - Returns a link to a currently running remote access session.
* `get_run` - Gets information about a run.
* `get_suite` - Gets information about a suite.
* `get_test` - Gets information about a test.
* `get_test_grid_project` - Retrieves information about a Selenium testing project.
* `get_test_grid_session` - <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>
* `get_upload` - Gets information about an upload.
* `get_vpce_configuration` - Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.
* `install_to_remote_access_session` - Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
* `list_artifacts` - Gets information about artifacts.
* `list_device_instances` - Returns information about the private device instances associated with one or more AWS accounts.
* `list_device_pools` - Gets information about device pools.
* `list_devices` - Gets information about unique device types.
* `list_instance_profiles` - Returns information about all the instance profiles in an AWS account.
* `list_jobs` - Gets information about jobs for a given test run.
* `list_network_profiles` - Returns the list of available network profiles.
* `list_offering_promotions` - Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.
* `list_offering_transactions` - Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `list_offerings` - Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `list_projects` - Gets information about projects.
* `list_remote_access_sessions` - Returns a list of all currently running remote access sessions.
* `list_runs` - Gets information about runs, given an AWS Device Farm project ARN.
* `list_samples` - Gets information about samples, given an AWS Device Farm job ARN.
* `list_suites` - Gets information about test suites for a given job.
* `list_tags_for_resource` - List the tags for an AWS Device Farm resource.
* `list_test_grid_projects` - Gets a list of all Selenium testing projects in your account.
* `list_test_grid_session_actions` - Returns a list of the actions taken in a <a>TestGridSession</a>.
* `list_test_grid_session_artifacts` - Retrieves a list of artifacts created during the session.
* `list_test_grid_sessions` - Retrieves a list of sessions for a <a>TestGridProject</a>.
* `list_tests` - Gets information about tests in a given test suite.
* `list_unique_problems` - <p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>
* `list_uploads` - Gets information about uploads, given an AWS Device Farm project ARN.
* `list_vpce_configurations` - Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
* `purchase_offering` - Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `renew_offering` - Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `schedule_run` - Schedules a run.
* `stop_job` - Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.
* `stop_remote_access_session` - Ends a specified remote access session.
* `stop_run` - Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.
* `tag_resource` - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
* `untag_resource` - Deletes the specified tags from a resource.
* `update_device_instance` - Updates information about a private device instance.
* `update_device_pool` - Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
* `update_instance_profile` - Updates information about an existing private device instance profile.
* `update_network_profile` - Updates the network profile.
* `update_project` - Modifies the specified project name, given the project ARN and a new name.
* `update_test_grid_project` - Change details of a project.
* `update_upload` - Updates an uploaded test spec.
* `update_vpce_configuration` - Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
