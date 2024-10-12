# AttributeAssignGroup200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**AttributeAssignGroup200ResponseResult**](AttributeAssignGroup200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.attribute_assign_group200_response import AttributeAssignGroup200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeAssignGroup200Response from a JSON string
attribute_assign_group200_response_instance = AttributeAssignGroup200Response.from_json(json)
# print the JSON string representation of the object
print(AttributeAssignGroup200Response.to_json())

# convert the object into a dict
attribute_assign_group200_response_dict = attribute_assign_group200_response_instance.to_dict()
# create an instance of AttributeAssignGroup200Response from a dict
attribute_assign_group200_response_from_dict = AttributeAssignGroup200Response.from_dict(attribute_assign_group200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


