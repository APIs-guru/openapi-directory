# TestVendorJsonFileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | the encoding for the manifest files sent. | [optional] [default to 'base64']
**files** | [**TestVendorJsonFileRequestFiles**](TestVendorJsonFileRequestFiles.md) |  | 

## Example

```python
from openapi_client.models.test_vendor_json_file_request import TestVendorJsonFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestVendorJsonFileRequest from a JSON string
test_vendor_json_file_request_instance = TestVendorJsonFileRequest.from_json(json)
# print the JSON string representation of the object
print(TestVendorJsonFileRequest.to_json())

# convert the object into a dict
test_vendor_json_file_request_dict = test_vendor_json_file_request_instance.to_dict()
# create an instance of TestVendorJsonFileRequest from a dict
test_vendor_json_file_request_from_dict = TestVendorJsonFileRequest.from_dict(test_vendor_json_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


