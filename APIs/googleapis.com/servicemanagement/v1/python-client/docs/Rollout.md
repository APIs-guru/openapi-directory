# Rollout

A rollout resource that defines how service configuration versions are pushed to control plane systems. Typically, you create a new version of the service config, and then create a Rollout to push the service config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Creation time of the rollout. Readonly. | [optional] 
**created_by** | **str** | The user who created the Rollout. Readonly. | [optional] 
**delete_service_strategy** | **object** | Strategy used to delete a service. This strategy is a placeholder only used by the system generated rollout to delete a service. | [optional] 
**rollout_id** | **str** | Optional. Unique identifier of this Rollout. Must be no longer than 63 characters and only lower case letters, digits, &#39;.&#39;, &#39;_&#39; and &#39;-&#39; are allowed. If not specified by client, the server will generate one. The generated id will have the form of , where \&quot;date\&quot; is the create date in ISO 8601 format. \&quot;revision number\&quot; is a monotonically increasing positive number that is reset every day for each service. An example of the generated rollout_id is &#39;2016-02-16r1&#39; | [optional] 
**service_name** | **str** | The name of the service associated with this Rollout. | [optional] 
**status** | **str** | The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly. | [optional] 
**traffic_percent_strategy** | [**TrafficPercentStrategy**](TrafficPercentStrategy.md) |  | [optional] 

## Example

```python
from openapi_client.models.rollout import Rollout

# TODO update the JSON string below
json = "{}"
# create an instance of Rollout from a JSON string
rollout_instance = Rollout.from_json(json)
# print the JSON string representation of the object
print(Rollout.to_json())

# convert the object into a dict
rollout_dict = rollout_instance.to_dict()
# create an instance of Rollout from a dict
rollout_from_dict = Rollout.from_dict(rollout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


