# ListHotTabletsResponse

Response message for BigtableInstanceAdmin.ListHotTablets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hot_tablets** | [**List[HotTablet]**](HotTablet.md) | List of hot tablets in the tables of the requested cluster that fall within the requested time range. Hot tablets are ordered by node cpu usage percent. If there are multiple hot tablets that correspond to the same tablet within a 15-minute interval, only the hot tablet with the highest node cpu usage will be included in the response. | [optional] 
**next_page_token** | **str** | Set if not all hot tablets could be returned in a single response. Pass this value to &#x60;page_token&#x60; in another request to get the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_hot_tablets_response import ListHotTabletsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListHotTabletsResponse from a JSON string
list_hot_tablets_response_instance = ListHotTabletsResponse.from_json(json)
# print the JSON string representation of the object
print(ListHotTabletsResponse.to_json())

# convert the object into a dict
list_hot_tablets_response_dict = list_hot_tablets_response_instance.to_dict()
# create an instance of ListHotTabletsResponse from a dict
list_hot_tablets_response_from_dict = ListHotTabletsResponse.from_dict(list_hot_tablets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


