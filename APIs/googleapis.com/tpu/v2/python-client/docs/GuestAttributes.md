# GuestAttributes

A guest attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_path** | **str** | The path to be queried. This can be the default namespace (&#39;/&#39;) or a nested namespace (&#39;//&#39;) or a specified key (&#39;//\\&#39;) | [optional] 
**query_value** | [**GuestAttributesValue**](GuestAttributesValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.guest_attributes import GuestAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of GuestAttributes from a JSON string
guest_attributes_instance = GuestAttributes.from_json(json)
# print the JSON string representation of the object
print(GuestAttributes.to_json())

# convert the object into a dict
guest_attributes_dict = guest_attributes_instance.to_dict()
# create an instance of GuestAttributes from a dict
guest_attributes_from_dict = GuestAttributes.from_dict(guest_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


