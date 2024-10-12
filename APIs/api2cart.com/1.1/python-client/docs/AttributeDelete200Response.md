# AttributeDelete200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**AttributeDelete200ResponseResult**](AttributeDelete200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.attribute_delete200_response import AttributeDelete200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeDelete200Response from a JSON string
attribute_delete200_response_instance = AttributeDelete200Response.from_json(json)
# print the JSON string representation of the object
print(AttributeDelete200Response.to_json())

# convert the object into a dict
attribute_delete200_response_dict = attribute_delete200_response_instance.to_dict()
# create an instance of AttributeDelete200Response from a dict
attribute_delete200_response_from_dict = AttributeDelete200Response.from_dict(attribute_delete200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


