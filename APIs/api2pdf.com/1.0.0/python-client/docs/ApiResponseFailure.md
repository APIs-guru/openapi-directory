# ApiResponseFailure


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason for the PDF generation failure | [optional] 
**success** | **bool** | Will be false if the operation failed | [optional] 

## Example

```python
from openapi_client.models.api_response_failure import ApiResponseFailure

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResponseFailure from a JSON string
api_response_failure_instance = ApiResponseFailure.from_json(json)
# print the JSON string representation of the object
print(ApiResponseFailure.to_json())

# convert the object into a dict
api_response_failure_dict = api_response_failure_instance.to_dict()
# create an instance of ApiResponseFailure from a dict
api_response_failure_from_dict = ApiResponseFailure.from_dict(api_response_failure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


