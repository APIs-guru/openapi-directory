# EndpointOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | **List[str]** | List of message channels this endpoint listens to (omit for all) | [optional] 
**created_at** | **datetime** |  | 
**description** | **str** |  | [optional] [default to '']
**disabled** | **bool** |  | [optional] [default to False]
**filter_types** | **List[str]** |  | [optional] 
**id** | **str** |  | 
**metadata** | **Dict[str, str]** |  | [optional] 
**rate_limit** | **int** |  | [optional] 
**uid** | **str** | Optional unique identifier for the endpoint | [optional] 
**updated_at** | **datetime** |  | 
**url** | **str** |  | 
**version** | **int** |  | 

## Example

```python
from openapi_client.models.endpoint_out import EndpointOut

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointOut from a JSON string
endpoint_out_instance = EndpointOut.from_json(json)
# print the JSON string representation of the object
print(EndpointOut.to_json())

# convert the object into a dict
endpoint_out_dict = endpoint_out_instance.to_dict()
# create an instance of EndpointOut from a dict
endpoint_out_from_dict = EndpointOut.from_dict(endpoint_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


