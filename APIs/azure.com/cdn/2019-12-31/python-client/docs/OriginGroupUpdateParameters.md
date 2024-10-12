# OriginGroupUpdateParameters

Origin group properties needed for origin group creation or update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OriginGroupUpdatePropertiesParameters**](OriginGroupUpdatePropertiesParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.origin_group_update_parameters import OriginGroupUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of OriginGroupUpdateParameters from a JSON string
origin_group_update_parameters_instance = OriginGroupUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(OriginGroupUpdateParameters.to_json())

# convert the object into a dict
origin_group_update_parameters_dict = origin_group_update_parameters_instance.to_dict()
# create an instance of OriginGroupUpdateParameters from a dict
origin_group_update_parameters_from_dict = OriginGroupUpdateParameters.from_dict(origin_group_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


