# GoogleMapsPlacesV1EVChargeOptions

Information about the EV Charge Station hosted in Place. Terminology follows https://afdc.energy.gov/fuels/electricity_infrastructure.html One port could charge one car at a time. One port has one or more connectors. One station has one or more ports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_aggregation** | [**List[GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation]**](GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation.md) | A list of EV charging connector aggregations that contain connectors of the same type and same charge rate. | [optional] 
**connector_count** | **int** | Number of connectors at this station. However, because some ports can have multiple connectors but only be able to charge one car at a time (e.g.) the number of connectors may be greater than the total number of cars which can charge simultaneously. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_ev_charge_options import GoogleMapsPlacesV1EVChargeOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1EVChargeOptions from a JSON string
google_maps_places_v1_ev_charge_options_instance = GoogleMapsPlacesV1EVChargeOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1EVChargeOptions.to_json())

# convert the object into a dict
google_maps_places_v1_ev_charge_options_dict = google_maps_places_v1_ev_charge_options_instance.to_dict()
# create an instance of GoogleMapsPlacesV1EVChargeOptions from a dict
google_maps_places_v1_ev_charge_options_from_dict = GoogleMapsPlacesV1EVChargeOptions.from_dict(google_maps_places_v1_ev_charge_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


