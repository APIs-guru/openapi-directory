# EndpointGetAutocompletes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EndpointGetAutocompletesData**](EndpointGetAutocompletesData.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_autocompletes import EndpointGetAutocompletes

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetAutocompletes from a JSON string
endpoint_get_autocompletes_instance = EndpointGetAutocompletes.from_json(json)
# print the JSON string representation of the object
print(EndpointGetAutocompletes.to_json())

# convert the object into a dict
endpoint_get_autocompletes_dict = endpoint_get_autocompletes_instance.to_dict()
# create an instance of EndpointGetAutocompletes from a dict
endpoint_get_autocompletes_from_dict = EndpointGetAutocompletes.from_dict(endpoint_get_autocompletes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


