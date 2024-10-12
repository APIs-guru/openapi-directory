# BadRequestResponseDetail

Contains parameter or domain specific information related to the error and why it occurred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.bad_request_response_detail import BadRequestResponseDetail

# TODO update the JSON string below
json = "{}"
# create an instance of BadRequestResponseDetail from a JSON string
bad_request_response_detail_instance = BadRequestResponseDetail.from_json(json)
# print the JSON string representation of the object
print(BadRequestResponseDetail.to_json())

# convert the object into a dict
bad_request_response_detail_dict = bad_request_response_detail_instance.to_dict()
# create an instance of BadRequestResponseDetail from a dict
bad_request_response_detail_from_dict = BadRequestResponseDetail.from_dict(bad_request_response_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


