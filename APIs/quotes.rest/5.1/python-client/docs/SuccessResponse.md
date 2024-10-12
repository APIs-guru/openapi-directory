# SuccessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **List[object]** | Contents relevant to this successful call | [optional] 
**success** | **str** | Metadata about this successful call | [optional] 

## Example

```python
from openapi_client.models.success_response import SuccessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SuccessResponse from a JSON string
success_response_instance = SuccessResponse.from_json(json)
# print the JSON string representation of the object
print(SuccessResponse.to_json())

# convert the object into a dict
success_response_dict = success_response_instance.to_dict()
# create an instance of SuccessResponse from a dict
success_response_from_dict = SuccessResponse.from_dict(success_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


