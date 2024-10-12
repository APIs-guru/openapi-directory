# InvalidRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** |  | 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.invalid_request import InvalidRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InvalidRequest from a JSON string
invalid_request_instance = InvalidRequest.from_json(json)
# print the JSON string representation of the object
print(InvalidRequest.to_json())

# convert the object into a dict
invalid_request_dict = invalid_request_instance.to_dict()
# create an instance of InvalidRequest from a dict
invalid_request_from_dict = InvalidRequest.from_dict(invalid_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


