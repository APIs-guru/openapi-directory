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
    
req = operations.CreateApplicationRequest(
    headers=operations.CreateApplicationHeaders(
        x_amz_algorithm="amet",
        x_amz_content_sha256="blanditiis",
        x_amz_credential="unde",
        x_amz_date="nihil",
        x_amz_security_token="asperiores",
        x_amz_signature="quaerat",
        x_amz_signed_headers="hic",
        x_amz_target="EC2WindowsBarleyService.CreateApplication",
    ),
    request=shared.CreateApplicationRequest(
        cwe_monitor_enabled=False,
        ops_center_enabled=False,
        ops_item_sns_topic_arn="pariatur",
        resource_group_name="enim",
        tags=[
            shared.Tag(
                key="possimus",
                value="temporibus",
            ),
        ],
    ),
)
    
res = s.sdk.create_application(req)

if res.create_application_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_application` - Adds an application that is created from a resource group.
* `create_component` - Creates a custom component by grouping similar standalone instances to monitor.
* `create_log_pattern` - Adds an log pattern to a <code>LogPatternSet</code>.
* `delete_application` - Removes the specified application from monitoring. Does not delete the application.
* `delete_component` - Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
* `delete_log_pattern` - Removes the specified log pattern from a <code>LogPatternSet</code>.
* `describe_application` - Describes the application.
* `describe_component` - Describes a component and lists the resources that are grouped together in a component.
* `describe_component_configuration` - Describes the monitoring configuration of the component.
* `describe_component_configuration_recommendation` - Describes the recommended monitoring configuration of the component.
* `describe_log_pattern` - Describe a specific log pattern from a <code>LogPatternSet</code>.
* `describe_observation` - Describes an anomaly or error with the application.
* `describe_problem` - Describes an application problem.
* `describe_problem_observations` - Describes the anomalies or errors associated with the problem.
* `list_applications` - Lists the IDs of the applications that you are monitoring. 
* `list_components` - Lists the auto-grouped, standalone, and custom components of the application.
* `list_configuration_history` - <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
* `list_log_pattern_sets` - Lists the log pattern sets in the specific application.
* `list_log_patterns` - Lists the log patterns in the specific log <code>LogPatternSet</code>.
* `list_problems` - Lists the problems with your application.
* `list_tags_for_resource` - Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* `tag_resource` - <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* `untag_resource` - Remove one or more tags (keys and values) from a specified application.
* `update_application` - Updates the application.
* `update_component` - Updates the custom component name and/or the list of resources that make up the component.
* `update_component_configuration` - Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. 
* `update_log_pattern` - Adds a log pattern to a <code>LogPatternSet</code>.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
