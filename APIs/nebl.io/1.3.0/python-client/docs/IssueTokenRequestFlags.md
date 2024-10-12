# IssueTokenRequestFlags

Object representing flags that potentialy modify this transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**split_change** | **bool** | If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended) | [optional] 

## Example

```python
from openapi_client.models.issue_token_request_flags import IssueTokenRequestFlags

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTokenRequestFlags from a JSON string
issue_token_request_flags_instance = IssueTokenRequestFlags.from_json(json)
# print the JSON string representation of the object
print(IssueTokenRequestFlags.to_json())

# convert the object into a dict
issue_token_request_flags_dict = issue_token_request_flags_instance.to_dict()
# create an instance of IssueTokenRequestFlags from a dict
issue_token_request_flags_from_dict = IssueTokenRequestFlags.from_dict(issue_token_request_flags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


