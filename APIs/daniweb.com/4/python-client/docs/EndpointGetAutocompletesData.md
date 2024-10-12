# EndpointGetAutocompletesData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversations** | **List[str]** |  | [optional] 
**locations** | **List[str]** |  | [optional] 
**matches** | **List[str]** |  | [optional] 
**people** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_autocompletes_data import EndpointGetAutocompletesData

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetAutocompletesData from a JSON string
endpoint_get_autocompletes_data_instance = EndpointGetAutocompletesData.from_json(json)
# print the JSON string representation of the object
print(EndpointGetAutocompletesData.to_json())

# convert the object into a dict
endpoint_get_autocompletes_data_dict = endpoint_get_autocompletes_data_instance.to_dict()
# create an instance of EndpointGetAutocompletesData from a dict
endpoint_get_autocompletes_data_from_dict = EndpointGetAutocompletesData.from_dict(endpoint_get_autocompletes_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


