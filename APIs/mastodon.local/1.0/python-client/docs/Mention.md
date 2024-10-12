# Mention

Represents a mention of a user within the content of a status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acct** | **str** | The webfinger acct URI of the mentioned user. Equivalent to &#x60;username&#x60; for local users, or &#x60;username@domain&#x60; for remote users. | 
**id** | **str** | The account id of the mentioned user. Cast from an integer, but not guaranteed to be a number | 
**url** | **str** | The location of the mentioned user&#39;s profile. | 
**username** | **str** | The username of the mentioned user. | 

## Example

```python
from openapi_client.models.mention import Mention

# TODO update the JSON string below
json = "{}"
# create an instance of Mention from a JSON string
mention_instance = Mention.from_json(json)
# print the JSON string representation of the object
print(Mention.to_json())

# convert the object into a dict
mention_dict = mention_instance.to_dict()
# create an instance of Mention from a dict
mention_from_dict = Mention.from_dict(mention_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


