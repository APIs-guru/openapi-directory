# AttributeCount200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**AttributeCount200ResponseResult**](AttributeCount200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.attribute_count200_response import AttributeCount200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeCount200Response from a JSON string
attribute_count200_response_instance = AttributeCount200Response.from_json(json)
# print the JSON string representation of the object
print(AttributeCount200Response.to_json())

# convert the object into a dict
attribute_count200_response_dict = attribute_count200_response_instance.to_dict()
# create an instance of AttributeCount200Response from a dict
attribute_count200_response_from_dict = AttributeCount200Response.from_dict(attribute_count200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


