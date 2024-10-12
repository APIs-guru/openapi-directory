# EmptyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[str]** |  | [optional] 
**response_status** | **int** | Http status code of the response.  | [optional] 

## Example

```python
from openapi_client.models.empty_response import EmptyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EmptyResponse from a JSON string
empty_response_instance = EmptyResponse.from_json(json)
# print the JSON string representation of the object
print(EmptyResponse.to_json())

# convert the object into a dict
empty_response_dict = empty_response_instance.to_dict()
# create an instance of EmptyResponse from a dict
empty_response_from_dict = EmptyResponse.from_dict(empty_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


