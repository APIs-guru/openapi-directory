# ExtendedErrorModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**error_code** | **float** | Numeric code used to identify the error. Integer. | 
**permanent** | **bool** |  | [optional] 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.extended_error_model import ExtendedErrorModel

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedErrorModel from a JSON string
extended_error_model_instance = ExtendedErrorModel.from_json(json)
# print the JSON string representation of the object
print(ExtendedErrorModel.to_json())

# convert the object into a dict
extended_error_model_dict = extended_error_model_instance.to_dict()
# create an instance of ExtendedErrorModel from a dict
extended_error_model_from_dict = ExtendedErrorModel.from_dict(extended_error_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


