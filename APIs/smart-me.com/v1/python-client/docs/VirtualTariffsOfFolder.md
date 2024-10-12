# VirtualTariffsOfFolder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** | The DateTime (UTC) of this virtual tarfifs | [optional] [readonly] 
**folder_id** | **str** |  | [optional] [readonly] 
**name** | **str** | The name of this folder | [optional] [readonly] 
**virtual_tariffs** | [**List[VirtualTariff]**](VirtualTariff.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_tariffs_of_folder import VirtualTariffsOfFolder

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTariffsOfFolder from a JSON string
virtual_tariffs_of_folder_instance = VirtualTariffsOfFolder.from_json(json)
# print the JSON string representation of the object
print(VirtualTariffsOfFolder.to_json())

# convert the object into a dict
virtual_tariffs_of_folder_dict = virtual_tariffs_of_folder_instance.to_dict()
# create an instance of VirtualTariffsOfFolder from a dict
virtual_tariffs_of_folder_from_dict = VirtualTariffsOfFolder.from_dict(virtual_tariffs_of_folder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


