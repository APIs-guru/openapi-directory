# TweetWithheldComplianceSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**withheld** | [**TweetTakedownComplianceSchema**](TweetTakedownComplianceSchema.md) |  | 

## Example

```python
from openapi_client.models.tweet_withheld_compliance_schema import TweetWithheldComplianceSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TweetWithheldComplianceSchema from a JSON string
tweet_withheld_compliance_schema_instance = TweetWithheldComplianceSchema.from_json(json)
# print the JSON string representation of the object
print(TweetWithheldComplianceSchema.to_json())

# convert the object into a dict
tweet_withheld_compliance_schema_dict = tweet_withheld_compliance_schema_instance.to_dict()
# create an instance of TweetWithheldComplianceSchema from a dict
tweet_withheld_compliance_schema_from_dict = TweetWithheldComplianceSchema.from_dict(tweet_withheld_compliance_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


