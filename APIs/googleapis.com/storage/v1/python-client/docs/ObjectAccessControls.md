# ObjectAccessControls

An access-control list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ObjectAccessControl]**](ObjectAccessControl.md) | The list of items. | [optional] 
**kind** | **str** | The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls. | [optional] [default to 'storage#objectAccessControls']

## Example

```python
from openapi_client.models.object_access_controls import ObjectAccessControls

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectAccessControls from a JSON string
object_access_controls_instance = ObjectAccessControls.from_json(json)
# print the JSON string representation of the object
print(ObjectAccessControls.to_json())

# convert the object into a dict
object_access_controls_dict = object_access_controls_instance.to_dict()
# create an instance of ObjectAccessControls from a dict
object_access_controls_from_dict = ObjectAccessControls.from_dict(object_access_controls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


