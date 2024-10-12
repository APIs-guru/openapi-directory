# TestSbtFileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] [default to 'base64']
**files** | [**TestGradleFileRequestFiles**](TestGradleFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.test_sbt_file_request import TestSbtFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestSbtFileRequest from a JSON string
test_sbt_file_request_instance = TestSbtFileRequest.from_json(json)
# print the JSON string representation of the object
print(TestSbtFileRequest.to_json())

# convert the object into a dict
test_sbt_file_request_dict = test_sbt_file_request_instance.to_dict()
# create an instance of TestSbtFileRequest from a dict
test_sbt_file_request_from_dict = TestSbtFileRequest.from_dict(test_sbt_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


