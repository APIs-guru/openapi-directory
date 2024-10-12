# RestResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deprecated** | **bool** | Whether this resource is deprecated. | [optional] 
**methods** | [**Dict[str, RestMethod]**](RestMethod.md) | Methods on this resource. | [optional] 
**resources** | [**Dict[str, RestResource]**](RestResource.md) | Sub-resources on this resource. | [optional] 

## Example

```python
from openapi_client.models.rest_resource import RestResource

# TODO update the JSON string below
json = "{}"
# create an instance of RestResource from a JSON string
rest_resource_instance = RestResource.from_json(json)
# print the JSON string representation of the object
print(RestResource.to_json())

# convert the object into a dict
rest_resource_dict = rest_resource_instance.to_dict()
# create an instance of RestResource from a dict
rest_resource_from_dict = RestResource.from_dict(rest_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


