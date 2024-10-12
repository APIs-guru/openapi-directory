# ListResponseEndpointOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointOut]**](EndpointOut.md) |  | 
**done** | **bool** |  | 
**iterator** | **str** |  | [optional] 
**prev_iterator** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_response_endpoint_out import ListResponseEndpointOut

# TODO update the JSON string below
json = "{}"
# create an instance of ListResponseEndpointOut from a JSON string
list_response_endpoint_out_instance = ListResponseEndpointOut.from_json(json)
# print the JSON string representation of the object
print(ListResponseEndpointOut.to_json())

# convert the object into a dict
list_response_endpoint_out_dict = list_response_endpoint_out_instance.to_dict()
# create an instance of ListResponseEndpointOut from a dict
list_response_endpoint_out_from_dict = ListResponseEndpointOut.from_dict(list_response_endpoint_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


