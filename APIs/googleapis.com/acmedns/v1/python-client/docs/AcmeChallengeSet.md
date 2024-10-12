# AcmeChallengeSet

The up-to-date ACME challenge set on a domain for an RPC. This contains all of the ACME TXT records that exist on the domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**record** | [**List[AcmeTxtRecord]**](AcmeTxtRecord.md) | The ACME challenges on the requested domain represented as individual TXT records. | [optional] 

## Example

```python
from openapi_client.models.acme_challenge_set import AcmeChallengeSet

# TODO update the JSON string below
json = "{}"
# create an instance of AcmeChallengeSet from a JSON string
acme_challenge_set_instance = AcmeChallengeSet.from_json(json)
# print the JSON string representation of the object
print(AcmeChallengeSet.to_json())

# convert the object into a dict
acme_challenge_set_dict = acme_challenge_set_instance.to_dict()
# create an instance of AcmeChallengeSet from a dict
acme_challenge_set_from_dict = AcmeChallengeSet.from_dict(acme_challenge_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


