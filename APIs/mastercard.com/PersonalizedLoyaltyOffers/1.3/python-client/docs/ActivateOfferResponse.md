# ActivateOfferResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**ActivateResponse**](ActivateResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.activate_offer_response import ActivateOfferResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ActivateOfferResponse from a JSON string
activate_offer_response_instance = ActivateOfferResponse.from_json(json)
# print the JSON string representation of the object
print(ActivateOfferResponse.to_json())

# convert the object into a dict
activate_offer_response_dict = activate_offer_response_instance.to_dict()
# create an instance of ActivateOfferResponse from a dict
activate_offer_response_from_dict = ActivateOfferResponse.from_dict(activate_offer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


