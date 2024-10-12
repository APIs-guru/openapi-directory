# PropertyListByService200Response

Paged Property list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[PropertyListByService200ResponseValueInner]**](PropertyListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.property_list_by_service200_response import PropertyListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyListByService200Response from a JSON string
property_list_by_service200_response_instance = PropertyListByService200Response.from_json(json)
# print the JSON string representation of the object
print(PropertyListByService200Response.to_json())

# convert the object into a dict
property_list_by_service200_response_dict = property_list_by_service200_response_instance.to_dict()
# create an instance of PropertyListByService200Response from a dict
property_list_by_service200_response_from_dict = PropertyListByService200Response.from_dict(property_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


