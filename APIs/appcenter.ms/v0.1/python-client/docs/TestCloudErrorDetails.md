# TestCloudErrorDetails

Details of a failed operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Human-readable message that describes the error | 
**status** | **str** | Status of the operation | 

## Example

```python
from openapi_client.models.test_cloud_error_details import TestCloudErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TestCloudErrorDetails from a JSON string
test_cloud_error_details_instance = TestCloudErrorDetails.from_json(json)
# print the JSON string representation of the object
print(TestCloudErrorDetails.to_json())

# convert the object into a dict
test_cloud_error_details_dict = test_cloud_error_details_instance.to_dict()
# create an instance of TestCloudErrorDetails from a dict
test_cloud_error_details_from_dict = TestCloudErrorDetails.from_dict(test_cloud_error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


