# TakeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_user** | **str** |  | 
**to_user** | **str** |  | 

## Example

```python
from openapi_client.models.take_request import TakeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TakeRequest from a JSON string
take_request_instance = TakeRequest.from_json(json)
# print the JSON string representation of the object
print(TakeRequest.to_json())

# convert the object into a dict
take_request_dict = take_request_instance.to_dict()
# create an instance of TakeRequest from a dict
take_request_from_dict = TakeRequest.from_dict(take_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


