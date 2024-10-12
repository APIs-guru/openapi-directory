# ListAdUnitsResponse

Response for the ad units list request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_units** | [**List[AdUnit]**](AdUnit.md) | The resulting ad units for the requested account. | [optional] 
**next_page_token** | **str** | If not empty, indicates that there may be more ad units for the request; this value should be passed in a new &#x60;ListAdUnitsRequest&#x60;. | [optional] 

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


