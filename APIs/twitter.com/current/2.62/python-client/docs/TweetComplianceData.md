# TweetComplianceData

Tweet compliance data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | [**TweetComplianceSchema**](TweetComplianceSchema.md) |  | 
**withheld** | [**TweetTakedownComplianceSchema**](TweetTakedownComplianceSchema.md) |  | 
**drop** | [**TweetComplianceSchema**](TweetComplianceSchema.md) |  | 
**undrop** | [**TweetComplianceSchema**](TweetComplianceSchema.md) |  | 
**tweet_edit** | [**TweetEditComplianceObjectSchema**](TweetEditComplianceObjectSchema.md) |  | 

## Example

```python
from openapi_client.models.tweet_compliance_data import TweetComplianceData

# TODO update the JSON string below
json = "{}"
# create an instance of TweetComplianceData from a JSON string
tweet_compliance_data_instance = TweetComplianceData.from_json(json)
# print the JSON string representation of the object
print(TweetComplianceData.to_json())

# convert the object into a dict
tweet_compliance_data_dict = tweet_compliance_data_instance.to_dict()
# create an instance of TweetComplianceData from a dict
tweet_compliance_data_from_dict = TweetComplianceData.from_dict(tweet_compliance_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


