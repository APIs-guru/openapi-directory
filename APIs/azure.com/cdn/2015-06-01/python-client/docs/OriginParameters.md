# OriginParameters

Origin properties needed for origin creation or update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OriginPropertiesParameters**](OriginPropertiesParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.origin_parameters import OriginParameters

# TODO update the JSON string below
json = "{}"
# create an instance of OriginParameters from a JSON string
origin_parameters_instance = OriginParameters.from_json(json)
# print the JSON string representation of the object
print(OriginParameters.to_json())

# convert the object into a dict
origin_parameters_dict = origin_parameters_instance.to_dict()
# create an instance of OriginParameters from a dict
origin_parameters_from_dict = OriginParameters.from_dict(origin_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


