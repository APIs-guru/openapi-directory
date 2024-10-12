# PropertyReference

A reference to a property relative to the kind expressions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | A reference to a property. Requires: * MUST be a dot-delimited (&#x60;.&#x60;) string of segments, where each segment conforms to entity property name limitations. | [optional] 

## Example

```python
from openapi_client.models.property_reference import PropertyReference

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyReference from a JSON string
property_reference_instance = PropertyReference.from_json(json)
# print the JSON string representation of the object
print(PropertyReference.to_json())

# convert the object into a dict
property_reference_dict = property_reference_instance.to_dict()
# create an instance of PropertyReference from a dict
property_reference_from_dict = PropertyReference.from_dict(property_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


