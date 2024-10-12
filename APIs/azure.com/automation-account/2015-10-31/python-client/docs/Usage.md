# Usage

Definition of Usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **float** | Gets or sets the current usage value. | [optional] 
**id** | **str** | Gets or sets the id of the resource. | [optional] 
**limit** | **int** | Gets or sets max limit. -1 for unlimited | [optional] 
**name** | [**UsageCounterName**](UsageCounterName.md) |  | [optional] 
**throttle_status** | **str** | Gets or sets the throttle status. | [optional] 
**unit** | **str** | Gets or sets the usage unit name. | [optional] 

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


