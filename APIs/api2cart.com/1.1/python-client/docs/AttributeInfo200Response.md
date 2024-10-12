# AttributeInfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**StoreAttribute**](StoreAttribute.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.attribute_info200_response import AttributeInfo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeInfo200Response from a JSON string
attribute_info200_response_instance = AttributeInfo200Response.from_json(json)
# print the JSON string representation of the object
print(AttributeInfo200Response.to_json())

# convert the object into a dict
attribute_info200_response_dict = attribute_info200_response_instance.to_dict()
# create an instance of AttributeInfo200Response from a dict
attribute_info200_response_from_dict = AttributeInfo200Response.from_dict(attribute_info200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


