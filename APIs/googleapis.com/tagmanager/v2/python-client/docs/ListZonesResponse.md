# ListZonesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 
**zone** | [**List[Zone]**](Zone.md) | All GTM Zones of a GTM Container. | [optional] 

## Example

```python
from openapi_client.models.list_zones_response import ListZonesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListZonesResponse from a JSON string
list_zones_response_instance = ListZonesResponse.from_json(json)
# print the JSON string representation of the object
print(ListZonesResponse.to_json())

# convert the object into a dict
list_zones_response_dict = list_zones_response_instance.to_dict()
# create an instance of ListZonesResponse from a dict
list_zones_response_from_dict = ListZonesResponse.from_dict(list_zones_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


