# ListPlaceActionTypeMetadataResponse

Response message for PlaceActions.ListPlaceActionTypeMetadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If the number of action types exceeded the requested page size, this field will be populated with a token to fetch the next page on a subsequent call to &#x60;placeActionTypeMetadata.list&#x60;. If there are no more results, this field will not be present in the response. | [optional] 
**place_action_type_metadata** | [**List[PlaceActionTypeMetadata]**](PlaceActionTypeMetadata.md) | A collection of metadata for the available place action types. | [optional] 

## Example

```python
from openapi_client.models.list_place_action_type_metadata_response import ListPlaceActionTypeMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPlaceActionTypeMetadataResponse from a JSON string
list_place_action_type_metadata_response_instance = ListPlaceActionTypeMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(ListPlaceActionTypeMetadataResponse.to_json())

# convert the object into a dict
list_place_action_type_metadata_response_dict = list_place_action_type_metadata_response_instance.to_dict()
# create an instance of ListPlaceActionTypeMetadataResponse from a dict
list_place_action_type_metadata_response_from_dict = ListPlaceActionTypeMetadataResponse.from_dict(list_place_action_type_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


