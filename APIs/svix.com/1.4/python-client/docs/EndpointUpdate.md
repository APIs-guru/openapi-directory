# EndpointUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | **List[str]** | List of message channels this endpoint listens to (omit for all) | [optional] 
**description** | **str** |  | [optional] [default to '']
**disabled** | **bool** |  | [optional] [default to False]
**filter_types** | **List[str]** |  | [optional] 
**metadata** | **Dict[str, str]** |  | [optional] 
**rate_limit** | **int** |  | [optional] 
**uid** | **str** | Optional unique identifier for the endpoint | [optional] 
**url** | **str** |  | 
**version** | **int** |  | 

## Example

```python
from openapi_client.models.endpoint_update import EndpointUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointUpdate from a JSON string
endpoint_update_instance = EndpointUpdate.from_json(json)
# print the JSON string representation of the object
print(EndpointUpdate.to_json())

# convert the object into a dict
endpoint_update_dict = endpoint_update_instance.to_dict()
# create an instance of EndpointUpdate from a dict
endpoint_update_from_dict = EndpointUpdate.from_dict(endpoint_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


