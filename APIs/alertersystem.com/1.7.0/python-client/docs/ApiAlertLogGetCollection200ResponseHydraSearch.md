# ApiAlertLogGetCollection200ResponseHydraSearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**hydramapping** | [**List[ApiAlertLogGetCollection200ResponseHydraSearchHydraMappingInner]**](ApiAlertLogGetCollection200ResponseHydraSearchHydraMappingInner.md) |  | [optional] 
**hydratemplate** | **str** |  | [optional] 
**hydravariable_representation** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_alert_log_get_collection200_response_hydra_search import ApiAlertLogGetCollection200ResponseHydraSearch

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAlertLogGetCollection200ResponseHydraSearch from a JSON string
api_alert_log_get_collection200_response_hydra_search_instance = ApiAlertLogGetCollection200ResponseHydraSearch.from_json(json)
# print the JSON string representation of the object
print(ApiAlertLogGetCollection200ResponseHydraSearch.to_json())

# convert the object into a dict
api_alert_log_get_collection200_response_hydra_search_dict = api_alert_log_get_collection200_response_hydra_search_instance.to_dict()
# create an instance of ApiAlertLogGetCollection200ResponseHydraSearch from a dict
api_alert_log_get_collection200_response_hydra_search_from_dict = ApiAlertLogGetCollection200ResponseHydraSearch.from_dict(api_alert_log_get_collection200_response_hydra_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


