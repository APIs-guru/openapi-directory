# HuaweiConfigFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | 
**id** | **str** |  | [optional] 
**secret** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.huawei_config_fields import HuaweiConfigFields

# TODO update the JSON string below
json = "{}"
# create an instance of HuaweiConfigFields from a JSON string
huawei_config_fields_instance = HuaweiConfigFields.from_json(json)
# print the JSON string representation of the object
print(HuaweiConfigFields.to_json())

# convert the object into a dict
huawei_config_fields_dict = huawei_config_fields_instance.to_dict()
# create an instance of HuaweiConfigFields from a dict
huawei_config_fields_from_dict = HuaweiConfigFields.from_dict(huawei_config_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


