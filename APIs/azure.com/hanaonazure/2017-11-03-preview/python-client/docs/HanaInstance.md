# HanaInstance

HANA instance info on Azure (ARM properties and HANA properties)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**HanaInstanceProperties**](HanaInstanceProperties.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.hana_instance import HanaInstance

# TODO update the JSON string below
json = "{}"
# create an instance of HanaInstance from a JSON string
hana_instance_instance = HanaInstance.from_json(json)
# print the JSON string representation of the object
print(HanaInstance.to_json())

# convert the object into a dict
hana_instance_dict = hana_instance_instance.to_dict()
# create an instance of HanaInstance from a dict
hana_instance_from_dict = HanaInstance.from_dict(hana_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


