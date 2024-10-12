# ListBeaconsResponse

Response that contains list beacon results and pagination help.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beacons** | [**List[Beacon]**](Beacon.md) | The beacons that matched the search criteria. | [optional] 
**next_page_token** | **str** | An opaque pagination token that the client may provide in their next request to retrieve the next page of results. | [optional] 
**total_count** | **str** | Estimate of the total number of beacons matched by the query. Higher values may be less accurate. | [optional] 

## Example

```python
from openapi_client.models.list_beacons_response import ListBeaconsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBeaconsResponse from a JSON string
list_beacons_response_instance = ListBeaconsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBeaconsResponse.to_json())

# convert the object into a dict
list_beacons_response_dict = list_beacons_response_instance.to_dict()
# create an instance of ListBeaconsResponse from a dict
list_beacons_response_from_dict = ListBeaconsResponse.from_dict(list_beacons_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


