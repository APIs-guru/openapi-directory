# GoogleMapsPlacesV1PlacePaymentOptions

Payment options the place accepts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepts_cash_only** | **bool** | Place accepts cash only as payment. Places with this attribute may still accept other payment methods. | [optional] 
**accepts_credit_cards** | **bool** | Place accepts credit cards as payment. | [optional] 
**accepts_debit_cards** | **bool** | Place accepts debit cards as payment. | [optional] 
**accepts_nfc** | **bool** | Place accepts NFC payments. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_place_payment_options import GoogleMapsPlacesV1PlacePaymentOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1PlacePaymentOptions from a JSON string
google_maps_places_v1_place_payment_options_instance = GoogleMapsPlacesV1PlacePaymentOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1PlacePaymentOptions.to_json())

# convert the object into a dict
google_maps_places_v1_place_payment_options_dict = google_maps_places_v1_place_payment_options_instance.to_dict()
# create an instance of GoogleMapsPlacesV1PlacePaymentOptions from a dict
google_maps_places_v1_place_payment_options_from_dict = GoogleMapsPlacesV1PlacePaymentOptions.from_dict(google_maps_places_v1_place_payment_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


