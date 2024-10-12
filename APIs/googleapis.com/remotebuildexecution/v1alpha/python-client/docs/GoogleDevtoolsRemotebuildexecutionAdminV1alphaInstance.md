# GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance

Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_policy** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.md) |  | [optional] 
**location** | **str** | The location is a GCP region. Currently only &#x60;us-central1&#x60; is supported. | [optional] 
**logging_enabled** | **bool** | Output only. Whether stack driver logging is enabled for the instance. | [optional] [readonly] 
**name** | **str** | Output only. Instance resource name formatted as: &#x60;projects/[PROJECT_ID]/instances/[INSTANCE_ID]&#x60;. Name should not be populated when creating an instance since it is provided in the &#x60;instance_id&#x60; field. | [optional] [readonly] 
**scheduler_notification_config** | [**GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig**](GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig.md) |  | [optional] 
**state** | **str** | Output only. State of the instance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildexecution_admin_v1alpha_instance import GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance from a JSON string
google_devtools_remotebuildexecution_admin_v1alpha_instance_instance = GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance.to_json())

# convert the object into a dict
google_devtools_remotebuildexecution_admin_v1alpha_instance_dict = google_devtools_remotebuildexecution_admin_v1alpha_instance_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance from a dict
google_devtools_remotebuildexecution_admin_v1alpha_instance_from_dict = GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance.from_dict(google_devtools_remotebuildexecution_admin_v1alpha_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


