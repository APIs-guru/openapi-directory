# Challenge

Result message for VerifiedAccess.CreateChallenge.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternative_challenge** | [**SignedData**](SignedData.md) |  | [optional] 
**challenge** | [**SignedData**](SignedData.md) |  | [optional] 

## Example

```python
from openapi_client.models.challenge import Challenge

# TODO update the JSON string below
json = "{}"
# create an instance of Challenge from a JSON string
challenge_instance = Challenge.from_json(json)
# print the JSON string representation of the object
print(Challenge.to_json())

# convert the object into a dict
challenge_dict = challenge_instance.to_dict()
# create an instance of Challenge from a dict
challenge_from_dict = Challenge.from_dict(challenge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


