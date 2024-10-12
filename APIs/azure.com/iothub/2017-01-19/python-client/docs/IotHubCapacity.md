# IotHubCapacity

IoT Hub capacity information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **int** | The default number of units. | [optional] [readonly] 
**maximum** | **int** | The maximum number of units. | [optional] [readonly] 
**minimum** | **int** | The minimum number of units. | [optional] [readonly] 
**scale_type** | **str** | The type of the scaling enabled. | [optional] [readonly] 

## Example

```python
from openapi_client.models.iot_hub_capacity import IotHubCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubCapacity from a JSON string
iot_hub_capacity_instance = IotHubCapacity.from_json(json)
# print the JSON string representation of the object
print(IotHubCapacity.to_json())

# convert the object into a dict
iot_hub_capacity_dict = iot_hub_capacity_instance.to_dict()
# create an instance of IotHubCapacity from a dict
iot_hub_capacity_from_dict = IotHubCapacity.from_dict(iot_hub_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


