# EmailDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.email_describe import EmailDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of EmailDescribe from a JSON string
email_describe_instance = EmailDescribe.from_json(json)
# print the JSON string representation of the object
print(EmailDescribe.to_json())

# convert the object into a dict
email_describe_dict = email_describe_instance.to_dict()
# create an instance of EmailDescribe from a dict
email_describe_from_dict = EmailDescribe.from_dict(email_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


