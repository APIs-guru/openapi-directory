# EndPointMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method_actions** | [**Dict[str, EndpointMethodMeta]**](EndpointMethodMeta.md) |  | [optional] 
**path** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.end_point_meta import EndPointMeta

# TODO update the JSON string below
json = "{}"
# create an instance of EndPointMeta from a JSON string
end_point_meta_instance = EndPointMeta.from_json(json)
# print the JSON string representation of the object
print(EndPointMeta.to_json())

# convert the object into a dict
end_point_meta_dict = end_point_meta_instance.to_dict()
# create an instance of EndPointMeta from a dict
end_point_meta_from_dict = EndPointMeta.from_dict(end_point_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


