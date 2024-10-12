# Usage

ARM usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | Usage current value. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**limit** | **int** | Usage limit. | [optional] [readonly] 
**name** | [**Name**](Name.md) |  | [optional] 
**requested_limit** | **int** | Usage requested limit. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 
**unit** | **str** | Usage unit. | [optional] [readonly] 

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


