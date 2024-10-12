# GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation

EV charging information grouped by [type, max_charge_rate_kw]. Shows EV charge aggregation of connectors that have the same type and max charge rate in kw.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_last_update_time** | **str** | The timestamp when the connector availability information in this aggregation was last updated. | [optional] 
**available_count** | **int** | Number of connectors in this aggregation that are currently available. | [optional] 
**count** | **int** | Number of connectors in this aggregation. | [optional] 
**max_charge_rate_kw** | **float** | The static max charging rate in kw of each connector in the aggregation. | [optional] 
**out_of_service_count** | **int** | Number of connectors in this aggregation that are currently out of service. | [optional] 
**type** | **str** | The connector type of this aggregation. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_ev_charge_options_connector_aggregation import GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation from a JSON string
google_maps_places_v1_ev_charge_options_connector_aggregation_instance = GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation.to_json())

# convert the object into a dict
google_maps_places_v1_ev_charge_options_connector_aggregation_dict = google_maps_places_v1_ev_charge_options_connector_aggregation_instance.to_dict()
# create an instance of GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation from a dict
google_maps_places_v1_ev_charge_options_connector_aggregation_from_dict = GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation.from_dict(google_maps_places_v1_ev_charge_options_connector_aggregation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


