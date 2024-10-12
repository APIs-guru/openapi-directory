# TweetEditComplianceSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tweet_edit** | [**TweetEditComplianceObjectSchema**](TweetEditComplianceObjectSchema.md) |  | 

## Example

```python
from openapi_client.models.tweet_edit_compliance_schema import TweetEditComplianceSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TweetEditComplianceSchema from a JSON string
tweet_edit_compliance_schema_instance = TweetEditComplianceSchema.from_json(json)
# print the JSON string representation of the object
print(TweetEditComplianceSchema.to_json())

# convert the object into a dict
tweet_edit_compliance_schema_dict = tweet_edit_compliance_schema_instance.to_dict()
# create an instance of TweetEditComplianceSchema from a dict
tweet_edit_compliance_schema_from_dict = TweetEditComplianceSchema.from_dict(tweet_edit_compliance_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


