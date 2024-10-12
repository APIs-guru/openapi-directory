# DestinationMetaData

Destination meta data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_hub_name** | **str** | Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account. | [optional] 

## Example

```python
from openapi_client.models.destination_meta_data import DestinationMetaData

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationMetaData from a JSON string
destination_meta_data_instance = DestinationMetaData.from_json(json)
# print the JSON string representation of the object
print(DestinationMetaData.to_json())

# convert the object into a dict
destination_meta_data_dict = destination_meta_data_instance.to_dict()
# create an instance of DestinationMetaData from a dict
destination_meta_data_from_dict = DestinationMetaData.from_dict(destination_meta_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


