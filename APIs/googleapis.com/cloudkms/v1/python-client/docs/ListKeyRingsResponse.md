# ListKeyRingsResponse

Response message for KeyManagementService.ListKeyRings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_rings** | [**List[KeyRing]**](KeyRing.md) | The list of KeyRings. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass this value in ListKeyRingsRequest.page_token to retrieve the next page of results. | [optional] 
**total_size** | **int** | The total number of KeyRings that matched the query. | [optional] 

## Example

```python
from openapi_client.models.list_key_rings_response import ListKeyRingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListKeyRingsResponse from a JSON string
list_key_rings_response_instance = ListKeyRingsResponse.from_json(json)
# print the JSON string representation of the object
print(ListKeyRingsResponse.to_json())

# convert the object into a dict
list_key_rings_response_dict = list_key_rings_response_instance.to_dict()
# create an instance of ListKeyRingsResponse from a dict
list_key_rings_response_from_dict = ListKeyRingsResponse.from_dict(list_key_rings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


