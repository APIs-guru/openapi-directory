# TestingDetails

Contains additional information generated for testing responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_testing_response** | **bool** | Required. Indicates that the information contained in this payload is a testing response that is statically overridden for a tester. | [optional] 

## Example

```python
from openapi_client.models.testing_details import TestingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TestingDetails from a JSON string
testing_details_instance = TestingDetails.from_json(json)
# print the JSON string representation of the object
print(TestingDetails.to_json())

# convert the object into a dict
testing_details_dict = testing_details_instance.to_dict()
# create an instance of TestingDetails from a dict
testing_details_from_dict = TestingDetails.from_dict(testing_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


