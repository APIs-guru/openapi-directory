# ApiKeyAutomatedTopup

Automated topup status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates whether automated top-ups are enabled | 

## Example

```python
from openapi_client.models.api_key_automated_topup import ApiKeyAutomatedTopup

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyAutomatedTopup from a JSON string
api_key_automated_topup_instance = ApiKeyAutomatedTopup.from_json(json)
# print the JSON string representation of the object
print(ApiKeyAutomatedTopup.to_json())

# convert the object into a dict
api_key_automated_topup_dict = api_key_automated_topup_instance.to_dict()
# create an instance of ApiKeyAutomatedTopup from a dict
api_key_automated_topup_from_dict = ApiKeyAutomatedTopup.from_dict(api_key_automated_topup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


