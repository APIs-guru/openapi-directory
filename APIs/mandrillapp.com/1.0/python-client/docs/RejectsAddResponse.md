# RejectsAddResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added** | **bool** |  | [optional] 
**email** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.rejects_add_response import RejectsAddResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RejectsAddResponse from a JSON string
rejects_add_response_instance = RejectsAddResponse.from_json(json)
# print the JSON string representation of the object
print(RejectsAddResponse.to_json())

# convert the object into a dict
rejects_add_response_dict = rejects_add_response_instance.to_dict()
# create an instance of RejectsAddResponse from a dict
rejects_add_response_from_dict = RejectsAddResponse.from_dict(rejects_add_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


