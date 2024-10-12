# CollectionStatusDestinationStatus

Destination status message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_countries** | **List[str]** | Country codes (ISO 3166-1 alpha-2) where the collection is approved. | [optional] 
**destination** | **str** | The name of the destination | [optional] 
**disapproved_countries** | **List[str]** | Country codes (ISO 3166-1 alpha-2) where the collection is disapproved. | [optional] 
**pending_countries** | **List[str]** | Country codes (ISO 3166-1 alpha-2) where the collection is pending approval. | [optional] 
**status** | **str** | The status for the specified destination in the collections target country. | [optional] 

## Example

```python
from openapi_client.models.collection_status_destination_status import CollectionStatusDestinationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionStatusDestinationStatus from a JSON string
collection_status_destination_status_instance = CollectionStatusDestinationStatus.from_json(json)
# print the JSON string representation of the object
print(CollectionStatusDestinationStatus.to_json())

# convert the object into a dict
collection_status_destination_status_dict = collection_status_destination_status_instance.to_dict()
# create an instance of CollectionStatusDestinationStatus from a dict
collection_status_destination_status_from_dict = CollectionStatusDestinationStatus.from_dict(collection_status_destination_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


