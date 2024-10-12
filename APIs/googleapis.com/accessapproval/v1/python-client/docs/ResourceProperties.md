# ResourceProperties

The properties associated with the resource of the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excludes_descendants** | **bool** | Whether an approval will exclude the descendants of the resource being requested. | [optional] 

## Example

```python
from openapi_client.models.resource_properties import ResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceProperties from a JSON string
resource_properties_instance = ResourceProperties.from_json(json)
# print the JSON string representation of the object
print(ResourceProperties.to_json())

# convert the object into a dict
resource_properties_dict = resource_properties_instance.to_dict()
# create an instance of ResourceProperties from a dict
resource_properties_from_dict = ResourceProperties.from_dict(resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


