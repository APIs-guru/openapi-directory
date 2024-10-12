# PublisherAccount

A publisher account contains information relevant to the use of this API, such as the time zone used for the reports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | Currency code of the earning-related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. | [optional] 
**name** | **str** | Resource name of this account. Format is accounts/{publisher_id}. | [optional] 
**publisher_id** | **str** | The unique ID by which this publisher account can be identified in the API requests (for example, pub-1234567890). | [optional] 
**reporting_time_zone** | **str** | The time zone that is used in reports that are generated for this account. The value is a time-zone ID as specified by the CLDR project, for example, \&quot;America/Los_Angeles\&quot;. | [optional] 

## Example

```python
from openapi_client.models.publisher_account import PublisherAccount

# TODO update the JSON string below
json = "{}"
# create an instance of PublisherAccount from a JSON string
publisher_account_instance = PublisherAccount.from_json(json)
# print the JSON string representation of the object
print(PublisherAccount.to_json())

# convert the object into a dict
publisher_account_dict = publisher_account_instance.to_dict()
# create an instance of PublisherAccount from a dict
publisher_account_from_dict = PublisherAccount.from_dict(publisher_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


