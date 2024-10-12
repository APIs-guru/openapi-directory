# Usage

Usage model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | The current usage value | 
**limit** | **int** | limit of a given sku in a region for a subscription. The maximum permitted value for the usage quota. If there is no limit, this value will be -1 | 
**name** | [**UsageName**](UsageName.md) |  | [optional] 
**unit** | **str** | The usages&#39; unit | [optional] 

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


