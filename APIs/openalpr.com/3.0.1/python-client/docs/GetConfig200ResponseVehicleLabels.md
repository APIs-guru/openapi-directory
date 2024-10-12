# GetConfig200ResponseVehicleLabels


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bodytype** | **List[str]** |  | [optional] 
**color** | **List[str]** |  | [optional] 
**make** | **List[str]** |  | [optional] 
**makemodel** | **List[str]** |  | [optional] 
**orientation** | **List[str]** |  | [optional] 
**year** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.get_config200_response_vehicle_labels import GetConfig200ResponseVehicleLabels

# TODO update the JSON string below
json = "{}"
# create an instance of GetConfig200ResponseVehicleLabels from a JSON string
get_config200_response_vehicle_labels_instance = GetConfig200ResponseVehicleLabels.from_json(json)
# print the JSON string representation of the object
print(GetConfig200ResponseVehicleLabels.to_json())

# convert the object into a dict
get_config200_response_vehicle_labels_dict = get_config200_response_vehicle_labels_instance.to_dict()
# create an instance of GetConfig200ResponseVehicleLabels from a dict
get_config200_response_vehicle_labels_from_dict = GetConfig200ResponseVehicleLabels.from_dict(get_config200_response_vehicle_labels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


