# FarmProperties

The properties of storage farm.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**farm_id** | **str** | Farm identifier. | [optional] 
**settings** | [**FarmSettings**](FarmSettings.md) |  | [optional] 
**settings_store** | **str** | The settings of storage farm. | [optional] 
**version** | **str** | Resource version. | [optional] 

## Example

```python
from openapi_client.models.farm_properties import FarmProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FarmProperties from a JSON string
farm_properties_instance = FarmProperties.from_json(json)
# print the JSON string representation of the object
print(FarmProperties.to_json())

# convert the object into a dict
farm_properties_dict = farm_properties_instance.to_dict()
# create an instance of FarmProperties from a dict
farm_properties_from_dict = FarmProperties.from_dict(farm_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


