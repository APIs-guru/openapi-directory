# ListAdUnitsResponse

Response definition for the adunit list rpc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_units** | [**List[AdUnit]**](AdUnit.md) | The ad units returned in the list response. | [optional] 
**next_page_token** | **str** | Continuation token used to page through ad units. To retrieve the next page of the results, set the next request&#39;s \&quot;page_token\&quot; value to this. | [optional] 

## Example

```python
from openapi_client.models.list_ad_units_response import ListAdUnitsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdUnitsResponse from a JSON string
list_ad_units_response_instance = ListAdUnitsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdUnitsResponse.to_json())

# convert the object into a dict
list_ad_units_response_dict = list_ad_units_response_instance.to_dict()
# create an instance of ListAdUnitsResponse from a dict
list_ad_units_response_from_dict = ListAdUnitsResponse.from_dict(list_ad_units_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


