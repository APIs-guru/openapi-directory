# UnexpectedErrorResponseDetail

Contains parameter or domain specific information related to the error and why it occurred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.unexpected_error_response_detail import UnexpectedErrorResponseDetail

# TODO update the JSON string below
json = "{}"
# create an instance of UnexpectedErrorResponseDetail from a JSON string
unexpected_error_response_detail_instance = UnexpectedErrorResponseDetail.from_json(json)
# print the JSON string representation of the object
print(UnexpectedErrorResponseDetail.to_json())

# convert the object into a dict
unexpected_error_response_detail_dict = unexpected_error_response_detail_instance.to_dict()
# create an instance of UnexpectedErrorResponseDetail from a dict
unexpected_error_response_detail_from_dict = UnexpectedErrorResponseDetail.from_dict(unexpected_error_response_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


