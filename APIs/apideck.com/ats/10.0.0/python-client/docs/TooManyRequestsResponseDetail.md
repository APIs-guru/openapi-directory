# TooManyRequestsResponseDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **str** |  | [optional] 
**error** | **Dict[str, object]** |  | [optional] 

## Example

```python
from openapi_client.models.too_many_requests_response_detail import TooManyRequestsResponseDetail

# TODO update the JSON string below
json = "{}"
# create an instance of TooManyRequestsResponseDetail from a JSON string
too_many_requests_response_detail_instance = TooManyRequestsResponseDetail.from_json(json)
# print the JSON string representation of the object
print(TooManyRequestsResponseDetail.to_json())

# convert the object into a dict
too_many_requests_response_detail_dict = too_many_requests_response_detail_instance.to_dict()
# create an instance of TooManyRequestsResponseDetail from a dict
too_many_requests_response_detail_from_dict = TooManyRequestsResponseDetail.from_dict(too_many_requests_response_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


