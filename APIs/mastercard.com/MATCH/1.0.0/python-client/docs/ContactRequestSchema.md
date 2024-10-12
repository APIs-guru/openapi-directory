# ContactRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_request** | [**ContactRequest**](ContactRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.contact_request_schema import ContactRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ContactRequestSchema from a JSON string
contact_request_schema_instance = ContactRequestSchema.from_json(json)
# print the JSON string representation of the object
print(ContactRequestSchema.to_json())

# convert the object into a dict
contact_request_schema_dict = contact_request_schema_instance.to_dict()
# create an instance of ContactRequestSchema from a dict
contact_request_schema_from_dict = ContactRequestSchema.from_dict(contact_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


