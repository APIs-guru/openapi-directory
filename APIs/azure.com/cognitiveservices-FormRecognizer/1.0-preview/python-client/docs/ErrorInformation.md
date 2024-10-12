# ErrorInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**inner_error** | [**InnerError**](InnerError.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.error_information import ErrorInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorInformation from a JSON string
error_information_instance = ErrorInformation.from_json(json)
# print the JSON string representation of the object
print(ErrorInformation.to_json())

# convert the object into a dict
error_information_dict = error_information_instance.to_dict()
# create an instance of ErrorInformation from a dict
error_information_from_dict = ErrorInformation.from_dict(error_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


