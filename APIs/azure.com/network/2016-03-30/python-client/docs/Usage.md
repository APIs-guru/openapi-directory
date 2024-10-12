# Usage

Describes Network Resource Usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | Gets or sets the current value of the usage. | 
**limit** | **int** | Gets or sets the limit of usage. | 
**name** | [**UsageName**](UsageName.md) |  | 
**unit** | **str** | Gets or sets an enum describing the unit of measurement. | 

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


