# CreateTemplate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**TemplateDefinition**](TemplateDefinition.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_template200_response import CreateTemplate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTemplate200Response from a JSON string
create_template200_response_instance = CreateTemplate200Response.from_json(json)
# print the JSON string representation of the object
print(CreateTemplate200Response.to_json())

# convert the object into a dict
create_template200_response_dict = create_template200_response_instance.to_dict()
# create an instance of CreateTemplate200Response from a dict
create_template200_response_from_dict = CreateTemplate200Response.from_dict(create_template200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


