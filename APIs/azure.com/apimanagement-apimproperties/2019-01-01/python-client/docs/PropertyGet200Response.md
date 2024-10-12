# PropertyGet200Response

Property details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PropertyListByService200ResponseValueInnerProperties**](PropertyListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.property_get200_response import PropertyGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyGet200Response from a JSON string
property_get200_response_instance = PropertyGet200Response.from_json(json)
# print the JSON string representation of the object
print(PropertyGet200Response.to_json())

# convert the object into a dict
property_get200_response_dict = property_get200_response_instance.to_dict()
# create an instance of PropertyGet200Response from a dict
property_get200_response_from_dict = PropertyGet200Response.from_dict(property_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


