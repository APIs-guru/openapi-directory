# TiersListResponse

Tiers list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Tier]**](Tier.md) | List of tiers. | [optional] 
**kind** | **str** | This is always &#x60;sql#tiersList&#x60;. | [optional] 

## Example

```python
from openapi_client.models.tiers_list_response import TiersListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TiersListResponse from a JSON string
tiers_list_response_instance = TiersListResponse.from_json(json)
# print the JSON string representation of the object
print(TiersListResponse.to_json())

# convert the object into a dict
tiers_list_response_dict = tiers_list_response_instance.to_dict()
# create an instance of TiersListResponse from a dict
tiers_list_response_from_dict = TiersListResponse.from_dict(tiers_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


