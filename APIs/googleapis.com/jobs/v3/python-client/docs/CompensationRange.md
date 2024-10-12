# CompensationRange

Compensation range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_compensation** | [**Money**](Money.md) |  | [optional] 
**min_compensation** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.compensation_range import CompensationRange

# TODO update the JSON string below
json = "{}"
# create an instance of CompensationRange from a JSON string
compensation_range_instance = CompensationRange.from_json(json)
# print the JSON string representation of the object
print(CompensationRange.to_json())

# convert the object into a dict
compensation_range_dict = compensation_range_instance.to_dict()
# create an instance of CompensationRange from a dict
compensation_range_from_dict = CompensationRange.from_dict(compensation_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


