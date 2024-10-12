# AttributeAttributesetList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**List[StoreAttributeGroup]**](StoreAttributeGroup.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.attribute_attributeset_list200_response import AttributeAttributesetList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeAttributesetList200Response from a JSON string
attribute_attributeset_list200_response_instance = AttributeAttributesetList200Response.from_json(json)
# print the JSON string representation of the object
print(AttributeAttributesetList200Response.to_json())

# convert the object into a dict
attribute_attributeset_list200_response_dict = attribute_attributeset_list200_response_instance.to_dict()
# create an instance of AttributeAttributesetList200Response from a dict
attribute_attributeset_list200_response_from_dict = AttributeAttributesetList200Response.from_dict(attribute_attributeset_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


