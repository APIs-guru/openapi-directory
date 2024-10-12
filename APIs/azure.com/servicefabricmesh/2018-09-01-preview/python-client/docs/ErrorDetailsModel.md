# ErrorDetailsModel

Error model details information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**message** | **str** | Error message. | 

## Example

```python
from openapi_client.models.error_details_model import ErrorDetailsModel

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorDetailsModel from a JSON string
error_details_model_instance = ErrorDetailsModel.from_json(json)
# print the JSON string representation of the object
print(ErrorDetailsModel.to_json())

# convert the object into a dict
error_details_model_dict = error_details_model_instance.to_dict()
# create an instance of ErrorDetailsModel from a dict
error_details_model_from_dict = ErrorDetailsModel.from_dict(error_details_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


