# Resource

Represents an instance of an PowerBI Dedicated resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | An identifier that represents the PowerBI Dedicated resource. | [optional] [readonly] 
**location** | **str** | Location of the PowerBI Dedicated resource. | 
**name** | **str** | The name of the PowerBI Dedicated resource. | [optional] [readonly] 
**sku** | [**ResourceSku**](ResourceSku.md) |  | 
**tags** | **Dict[str, str]** | Key-value pairs of additional resource provisioning properties. | [optional] 
**type** | **str** | The type of the PowerBI Dedicated resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource import Resource

# TODO update the JSON string below
json = "{}"
# create an instance of Resource from a JSON string
resource_instance = Resource.from_json(json)
# print the JSON string representation of the object
print(Resource.to_json())

# convert the object into a dict
resource_dict = resource_instance.to_dict()
# create an instance of Resource from a dict
resource_from_dict = Resource.from_dict(resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


