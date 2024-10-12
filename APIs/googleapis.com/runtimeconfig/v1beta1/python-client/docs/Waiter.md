# Waiter

A Waiter resource waits for some end condition within a RuntimeConfig resource to be met before it returns. For example, assume you have a distributed system where each node writes to a Variable resource indicating the node's readiness as part of the startup process. You then configure a Waiter resource with the success condition set to wait until some number of nodes have checked in. Afterwards, your application runs some arbitrary code after the condition has been met and the waiter returns successfully. Once created, a Waiter resource is immutable. To learn more about using waiters, read the [Creating a Waiter](/deployment-manager/runtime-configurator/creating-a-waiter) documentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The instant at which this Waiter resource was created. Adding the value of &#x60;timeout&#x60; to this instant yields the timeout deadline for the waiter. | [optional] 
**done** | **bool** | Output only. If the value is &#x60;false&#x60;, it means the waiter is still waiting for one of its conditions to be met. If true, the waiter has finished. If the waiter finished due to a timeout or failure, &#x60;error&#x60; will be set. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**failure** | [**EndCondition**](EndCondition.md) |  | [optional] 
**name** | **str** | The name of the Waiter resource, in the format: projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME] The &#x60;[PROJECT_ID]&#x60; must be a valid Google Cloud project ID, the &#x60;[CONFIG_NAME]&#x60; must be a valid RuntimeConfig resource, the &#x60;[WAITER_NAME]&#x60; must match RFC 1035 segment specification, and the length of &#x60;[WAITER_NAME]&#x60; must be less than 64 bytes. After you create a Waiter resource, you cannot change the resource name. | [optional] 
**success** | [**EndCondition**](EndCondition.md) |  | [optional] 
**timeout** | **str** | [Required] Specifies the timeout of the waiter in seconds, beginning from the instant that &#x60;waiters().create&#x60; method is called. If this time elapses before the success or failure conditions are met, the waiter fails and sets the &#x60;error&#x60; code to &#x60;DEADLINE_EXCEEDED&#x60;. | [optional] 

## Example

```python
from openapi_client.models.waiter import Waiter

# TODO update the JSON string below
json = "{}"
# create an instance of Waiter from a JSON string
waiter_instance = Waiter.from_json(json)
# print the JSON string representation of the object
print(Waiter.to_json())

# convert the object into a dict
waiter_dict = waiter_instance.to_dict()
# create an instance of Waiter from a dict
waiter_from_dict = Waiter.from_dict(waiter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


