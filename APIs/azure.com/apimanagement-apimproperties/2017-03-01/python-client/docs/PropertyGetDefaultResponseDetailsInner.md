# PropertyGetDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.property_get_default_response_details_inner import PropertyGetDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyGetDefaultResponseDetailsInner from a JSON string
property_get_default_response_details_inner_instance = PropertyGetDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(PropertyGetDefaultResponseDetailsInner.to_json())

# convert the object into a dict
property_get_default_response_details_inner_dict = property_get_default_response_details_inner_instance.to_dict()
# create an instance of PropertyGetDefaultResponseDetailsInner from a dict
property_get_default_response_details_inner_from_dict = PropertyGetDefaultResponseDetailsInner.from_dict(property_get_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


