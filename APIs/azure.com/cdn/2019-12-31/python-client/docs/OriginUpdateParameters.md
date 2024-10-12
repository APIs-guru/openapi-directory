# OriginUpdateParameters

Origin properties needed for origin update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OriginUpdatePropertiesParameters**](OriginUpdatePropertiesParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | Origin tags. | [optional] 

## Example

```python
from openapi_client.models.origin_update_parameters import OriginUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of OriginUpdateParameters from a JSON string
origin_update_parameters_instance = OriginUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(OriginUpdateParameters.to_json())

# convert the object into a dict
origin_update_parameters_dict = origin_update_parameters_instance.to_dict()
# create an instance of OriginUpdateParameters from a dict
origin_update_parameters_from_dict = OriginUpdateParameters.from_dict(origin_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


