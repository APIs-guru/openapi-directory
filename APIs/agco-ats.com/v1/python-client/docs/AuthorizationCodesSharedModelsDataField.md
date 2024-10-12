# AuthorizationCodesSharedModelsDataField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digits_precision** | **int** | The number of decimal digits to be used by this data field. Required only by the &#39;Float&#39; data type. Must be in range 1 - 15. | [optional] 
**max_exponent** | **int** | The maximum exponent to be used by this data field. Required only by the &#39;Float&#39; data type. May not be greater than 307. | [optional] 
**max_value** | **float** | The maximum value that can be represented by this data field. Required only by the &#39;Decimal&#39; data type. | [optional] 
**min_exponent** | **int** | The minimum exponent to be used by this data field. Required only by the &#39;Float&#39; data type. May not be less than -292. | [optional] 
**min_value** | **float** | The minimum value that can be represented by this data field. Required only by the &#39;Decimal&#39; data type. | [optional] 
**name** | **str** | The name of the field. | 
**scale_factor** | **float** | The resolution of values that can be represented by this data field. The base value is multiplied by this to compute the final value. Required only by the &#39;Decimal&#39; data type. | [optional] 
**signed** | **bool** | Indicates whether this value is signed. Required only by the &#39;Float&#39; data type. | [optional] 
**type** | **str** | The type of this data field. | 

## Example

```python
from openapi_client.models.authorization_codes_shared_models_data_field import AuthorizationCodesSharedModelsDataField

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCodesSharedModelsDataField from a JSON string
authorization_codes_shared_models_data_field_instance = AuthorizationCodesSharedModelsDataField.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCodesSharedModelsDataField.to_json())

# convert the object into a dict
authorization_codes_shared_models_data_field_dict = authorization_codes_shared_models_data_field_instance.to_dict()
# create an instance of AuthorizationCodesSharedModelsDataField from a dict
authorization_codes_shared_models_data_field_from_dict = AuthorizationCodesSharedModelsDataField.from_dict(authorization_codes_shared_models_data_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


