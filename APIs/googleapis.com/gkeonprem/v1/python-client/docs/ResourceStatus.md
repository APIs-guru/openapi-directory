# ResourceStatus

ResourceStatus describes why a cluster or node pool has a certain status. (e.g., ERROR or DEGRADED).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[ResourceCondition]**](ResourceCondition.md) | ResourceCondition provide a standard mechanism for higher-level status reporting from controller. | [optional] 
**error_message** | **str** | Human-friendly representation of the error message from controller. The error message can be temporary as the controller controller creates a cluster or node pool. If the error message persists for a longer period of time, it can be used to surface error message to indicate real problems requiring user intervention. | [optional] 

## Example

```python
from openapi_client.models.resource_status import ResourceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceStatus from a JSON string
resource_status_instance = ResourceStatus.from_json(json)
# print the JSON string representation of the object
print(ResourceStatus.to_json())

# convert the object into a dict
resource_status_dict = resource_status_instance.to_dict()
# create an instance of ResourceStatus from a dict
resource_status_from_dict = ResourceStatus.from_dict(resource_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


