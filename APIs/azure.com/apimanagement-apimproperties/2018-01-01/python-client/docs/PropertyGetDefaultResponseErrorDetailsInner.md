# PropertyGetDefaultResponseErrorDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.property_get_default_response_error_details_inner import PropertyGetDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyGetDefaultResponseErrorDetailsInner from a JSON string
property_get_default_response_error_details_inner_instance = PropertyGetDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(PropertyGetDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
property_get_default_response_error_details_inner_dict = property_get_default_response_error_details_inner_instance.to_dict()
# create an instance of PropertyGetDefaultResponseErrorDetailsInner from a dict
property_get_default_response_error_details_inner_from_dict = PropertyGetDefaultResponseErrorDetailsInner.from_dict(property_get_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


