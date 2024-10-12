# EndpointGetAudiences


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Bubble]**](Bubble.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_audiences import EndpointGetAudiences

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetAudiences from a JSON string
endpoint_get_audiences_instance = EndpointGetAudiences.from_json(json)
# print the JSON string representation of the object
print(EndpointGetAudiences.to_json())

# convert the object into a dict
endpoint_get_audiences_dict = endpoint_get_audiences_instance.to_dict()
# create an instance of EndpointGetAudiences from a dict
endpoint_get_audiences_from_dict = EndpointGetAudiences.from_dict(endpoint_get_audiences_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


