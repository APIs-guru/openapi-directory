# Usage

Describes Storage Resource Usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | Gets the current count of the allocated resources in the subscription. | [optional] [readonly] 
**limit** | **int** | Gets the maximum count of the resources that can be allocated in the subscription. | [optional] [readonly] 
**name** | [**UsageName**](UsageName.md) |  | [optional] 
**unit** | **str** | Gets the unit of measurement. | [optional] [readonly] 

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


