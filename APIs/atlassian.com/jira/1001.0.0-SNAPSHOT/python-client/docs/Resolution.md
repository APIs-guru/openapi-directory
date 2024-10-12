# Resolution

Details of an issue resolution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the issue resolution. | [optional] 
**id** | **str** | The ID of the issue resolution. | [optional] 
**name** | **str** | The name of the issue resolution. | [optional] 
**var_self** | **str** | The URL of the issue resolution. | [optional] 

## Example

```python
from openapi_client.models.resolution import Resolution

# TODO update the JSON string below
json = "{}"
# create an instance of Resolution from a JSON string
resolution_instance = Resolution.from_json(json)
# print the JSON string representation of the object
print(Resolution.to_json())

# convert the object into a dict
resolution_dict = resolution_instance.to_dict()
# create an instance of Resolution from a dict
resolution_from_dict = Resolution.from_dict(resolution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


