# CreateCustomClassRequest

Message sent by the client for the `CreateCustomClass` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_class** | [**CustomClass**](CustomClass.md) |  | [optional] 
**custom_class_id** | **str** | Required. The ID to use for the custom class, which will become the final component of the custom class&#39; resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters. | [optional] 

## Example

```python
from openapi_client.models.create_custom_class_request import CreateCustomClassRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomClassRequest from a JSON string
create_custom_class_request_instance = CreateCustomClassRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCustomClassRequest.to_json())

# convert the object into a dict
create_custom_class_request_dict = create_custom_class_request_instance.to_dict()
# create an instance of CreateCustomClassRequest from a dict
create_custom_class_request_from_dict = CreateCustomClassRequest.from_dict(create_custom_class_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


