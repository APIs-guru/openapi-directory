# Association

The resource definition of this association.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The association id. | [optional] [readonly] 
**name** | **str** | The association name. | [optional] [readonly] 
**properties** | [**AssociationProperties**](AssociationProperties.md) |  | [optional] 
**type** | **str** | The association type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.association import Association

# TODO update the JSON string below
json = "{}"
# create an instance of Association from a JSON string
association_instance = Association.from_json(json)
# print the JSON string representation of the object
print(Association.to_json())

# convert the object into a dict
association_dict = association_instance.to_dict()
# create an instance of Association from a dict
association_from_dict = Association.from_dict(association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


