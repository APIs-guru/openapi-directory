# EndpointMethodMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**code** | **float** |  | [optional] 
**data** | **str** |  | [optional] 
**headers** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_method_meta import EndpointMethodMeta

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointMethodMeta from a JSON string
endpoint_method_meta_instance = EndpointMethodMeta.from_json(json)
# print the JSON string representation of the object
print(EndpointMethodMeta.to_json())

# convert the object into a dict
endpoint_method_meta_dict = endpoint_method_meta_instance.to_dict()
# create an instance of EndpointMethodMeta from a dict
endpoint_method_meta_from_dict = EndpointMethodMeta.from_dict(endpoint_method_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


