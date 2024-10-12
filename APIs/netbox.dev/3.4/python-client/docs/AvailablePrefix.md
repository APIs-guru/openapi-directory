# AvailablePrefix


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family** | **int** |  | [optional] [readonly] 
**prefix** | **str** |  | [optional] [readonly] 
**vrf** | [**NestedVRF**](NestedVRF.md) |  | [optional] 

## Example

```python
from openapi_client.models.available_prefix import AvailablePrefix

# TODO update the JSON string below
json = "{}"
# create an instance of AvailablePrefix from a JSON string
available_prefix_instance = AvailablePrefix.from_json(json)
# print the JSON string representation of the object
print(AvailablePrefix.to_json())

# convert the object into a dict
available_prefix_dict = available_prefix_instance.to_dict()
# create an instance of AvailablePrefix from a dict
available_prefix_from_dict = AvailablePrefix.from_dict(available_prefix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


