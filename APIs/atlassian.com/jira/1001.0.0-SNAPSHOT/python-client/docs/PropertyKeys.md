# PropertyKeys

List of property keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**List[PropertyKey]**](PropertyKey.md) | Property key details. | [optional] [readonly] 

## Example

```python
from openapi_client.models.property_keys import PropertyKeys

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyKeys from a JSON string
property_keys_instance = PropertyKeys.from_json(json)
# print the JSON string representation of the object
print(PropertyKeys.to_json())

# convert the object into a dict
property_keys_dict = property_keys_instance.to_dict()
# create an instance of PropertyKeys from a dict
property_keys_from_dict = PropertyKeys.from_dict(property_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


