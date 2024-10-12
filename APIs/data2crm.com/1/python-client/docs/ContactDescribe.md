# ContactDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.contact_describe import ContactDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of ContactDescribe from a JSON string
contact_describe_instance = ContactDescribe.from_json(json)
# print the JSON string representation of the object
print(ContactDescribe.to_json())

# convert the object into a dict
contact_describe_dict = contact_describe_instance.to_dict()
# create an instance of ContactDescribe from a dict
contact_describe_from_dict = ContactDescribe.from_dict(contact_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


