# IotHubLocationDescription

Public representation of one of the locations where a resource is provisioned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Azure Geo Regions | [optional] 
**role** | **str** | Specific Role assigned to this location | [optional] 

## Example

```python
from openapi_client.models.iot_hub_location_description import IotHubLocationDescription

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubLocationDescription from a JSON string
iot_hub_location_description_instance = IotHubLocationDescription.from_json(json)
# print the JSON string representation of the object
print(IotHubLocationDescription.to_json())

# convert the object into a dict
iot_hub_location_description_dict = iot_hub_location_description_instance.to_dict()
# create an instance of IotHubLocationDescription from a dict
iot_hub_location_description_from_dict = IotHubLocationDescription.from_dict(iot_hub_location_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


