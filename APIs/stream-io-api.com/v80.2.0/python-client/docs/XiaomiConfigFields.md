# XiaomiConfigFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | 
**package_name** | **str** |  | [optional] 
**secret** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.xiaomi_config_fields import XiaomiConfigFields

# TODO update the JSON string below
json = "{}"
# create an instance of XiaomiConfigFields from a JSON string
xiaomi_config_fields_instance = XiaomiConfigFields.from_json(json)
# print the JSON string representation of the object
print(XiaomiConfigFields.to_json())

# convert the object into a dict
xiaomi_config_fields_dict = xiaomi_config_fields_instance.to_dict()
# create an instance of XiaomiConfigFields from a dict
xiaomi_config_fields_from_dict = XiaomiConfigFields.from_dict(xiaomi_config_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


