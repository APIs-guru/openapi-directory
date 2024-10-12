# Usage

The details about the usage of a particular limited resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | The current usage. | [optional] 
**limit** | **int** | The maximum allowed usage. | [optional] 
**name** | [**LocalizedName**](LocalizedName.md) |  | [optional] 
**unit** | **str** | The type of measurement for usage. | [optional] 

## Example

```python
from openapi_client.models.usage import Usage

# TODO update the JSON string below
json = "{}"
# create an instance of Usage from a JSON string
usage_instance = Usage.from_json(json)
# print the JSON string representation of the object
print(Usage.to_json())

# convert the object into a dict
usage_dict = usage_instance.to_dict()
# create an instance of Usage from a dict
usage_from_dict = Usage.from_dict(usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


