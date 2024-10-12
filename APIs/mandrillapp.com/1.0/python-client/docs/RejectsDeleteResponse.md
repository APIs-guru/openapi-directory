# RejectsDeleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** |  | [optional] 
**email** | **str** |  | [optional] 
**subaccount** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.rejects_delete_response import RejectsDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RejectsDeleteResponse from a JSON string
rejects_delete_response_instance = RejectsDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(RejectsDeleteResponse.to_json())

# convert the object into a dict
rejects_delete_response_dict = rejects_delete_response_instance.to_dict()
# create an instance of RejectsDeleteResponse from a dict
rejects_delete_response_from_dict = RejectsDeleteResponse.from_dict(rejects_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


