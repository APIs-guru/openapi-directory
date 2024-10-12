# PreconfiguredEndpointList

Defines a list of preconfigured endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of PreconfiguredEndpoints if there are any. | [optional] 
**value** | [**List[PreconfiguredEndpoint]**](PreconfiguredEndpoint.md) | List of PreconfiguredEndpoints supported by NetworkExperiment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.preconfigured_endpoint_list import PreconfiguredEndpointList

# TODO update the JSON string below
json = "{}"
# create an instance of PreconfiguredEndpointList from a JSON string
preconfigured_endpoint_list_instance = PreconfiguredEndpointList.from_json(json)
# print the JSON string representation of the object
print(PreconfiguredEndpointList.to_json())

# convert the object into a dict
preconfigured_endpoint_list_dict = preconfigured_endpoint_list_instance.to_dict()
# create an instance of PreconfiguredEndpointList from a dict
preconfigured_endpoint_list_from_dict = PreconfiguredEndpointList.from_dict(preconfigured_endpoint_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


