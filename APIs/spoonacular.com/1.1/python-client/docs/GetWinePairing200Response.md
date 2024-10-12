# GetWinePairing200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paired_wines** | **List[str]** |  | 
**pairing_text** | **str** |  | 
**product_matches** | [**List[GetWinePairing200ResponseProductMatchesInner]**](GetWinePairing200ResponseProductMatchesInner.md) |  | 

## Example

```python
from openapi_client.models.get_wine_pairing200_response import GetWinePairing200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetWinePairing200Response from a JSON string
get_wine_pairing200_response_instance = GetWinePairing200Response.from_json(json)
# print the JSON string representation of the object
print(GetWinePairing200Response.to_json())

# convert the object into a dict
get_wine_pairing200_response_dict = get_wine_pairing200_response_instance.to_dict()
# create an instance of GetWinePairing200Response from a dict
get_wine_pairing200_response_from_dict = GetWinePairing200Response.from_dict(get_wine_pairing200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


