# MatchedOffersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**MatchedResponse**](MatchedResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.matched_offers_response import MatchedOffersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MatchedOffersResponse from a JSON string
matched_offers_response_instance = MatchedOffersResponse.from_json(json)
# print the JSON string representation of the object
print(MatchedOffersResponse.to_json())

# convert the object into a dict
matched_offers_response_dict = matched_offers_response_instance.to_dict()
# create an instance of MatchedOffersResponse from a dict
matched_offers_response_from_dict = MatchedOffersResponse.from_dict(matched_offers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


