# UpdateLocationModel

Model which holds information related to update location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_oem_version** | **str** | Current OEM version of your AzureStack deployment. | [optional] 
**current_version** | **str** | Current version of your AzureStack deployment. | [optional] 
**last_updated** | **datetime** | Date of last update. | [optional] 
**state** | [**RegionUpdateState**](RegionUpdateState.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_location_model import UpdateLocationModel

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateLocationModel from a JSON string
update_location_model_instance = UpdateLocationModel.from_json(json)
# print the JSON string representation of the object
print(UpdateLocationModel.to_json())

# convert the object into a dict
update_location_model_dict = update_location_model_instance.to_dict()
# create an instance of UpdateLocationModel from a dict
update_location_model_from_dict = UpdateLocationModel.from_dict(update_location_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


