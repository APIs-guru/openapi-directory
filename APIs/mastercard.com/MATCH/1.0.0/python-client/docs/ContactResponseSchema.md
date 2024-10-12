# ContactResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_response** | [**ContactResponse**](ContactResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.contact_response_schema import ContactResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ContactResponseSchema from a JSON string
contact_response_schema_instance = ContactResponseSchema.from_json(json)
# print the JSON string representation of the object
print(ContactResponseSchema.to_json())

# convert the object into a dict
contact_response_schema_dict = contact_response_schema_instance.to_dict()
# create an instance of ContactResponseSchema from a dict
contact_response_schema_from_dict = ContactResponseSchema.from_dict(contact_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


