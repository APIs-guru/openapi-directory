# RedactTransaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The transaction ID to redact | 
**product** | **str** | Product name that the ID provided relates to | 
**type** | **str** | Required if redacting SMS data | [default to 'outbound']

## Example

```python
from openapi_client.models.redact_transaction import RedactTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of RedactTransaction from a JSON string
redact_transaction_instance = RedactTransaction.from_json(json)
# print the JSON string representation of the object
print(RedactTransaction.to_json())

# convert the object into a dict
redact_transaction_dict = redact_transaction_instance.to_dict()
# create an instance of RedactTransaction from a dict
redact_transaction_from_dict = RedactTransaction.from_dict(redact_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


