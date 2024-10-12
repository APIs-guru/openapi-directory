# NestedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_collection** | [**ErrorCollection**](ErrorCollection.md) |  | [optional] 
**status** | **int** |  | [optional] 
**warning_collection** | [**WarningCollection**](WarningCollection.md) |  | [optional] 

## Example

```python
from openapi_client.models.nested_response import NestedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NestedResponse from a JSON string
nested_response_instance = NestedResponse.from_json(json)
# print the JSON string representation of the object
print(NestedResponse.to_json())

# convert the object into a dict
nested_response_dict = nested_response_instance.to_dict()
# create an instance of NestedResponse from a dict
nested_response_from_dict = NestedResponse.from_dict(nested_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


