# TrafficStats

Email traffic statistics pertaining to a specific date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_errors** | [**List[DeliveryError]**](DeliveryError.md) | Delivery errors for the domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). | [optional] 
**dkim_success_ratio** | **float** | The ratio of mail that successfully authenticated with DKIM vs. all mail that attempted to authenticate with [DKIM](http://www.dkim.org/). Spoofed mail is excluded. | [optional] 
**dmarc_success_ratio** | **float** | The ratio of mail that passed [DMARC](https://dmarc.org/) alignment checks vs all mail received from the domain that successfully authenticated with either of [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). | [optional] 
**domain_reputation** | **str** | Reputation of the domain. | [optional] 
**inbound_encryption_ratio** | **float** | The ratio of incoming mail (to Gmail), that passed secure transport (TLS) vs all mail received from that domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). | [optional] 
**ip_reputations** | [**List[IpReputation]**](IpReputation.md) | Reputation information pertaining to the IP addresses of the email servers for the domain. There is exactly one entry for each reputation category except REPUTATION_CATEGORY_UNSPECIFIED. | [optional] 
**name** | **str** | The resource name of the traffic statistics. Traffic statistic names have the form &#x60;domains/{domain}/trafficStats/{date}&#x60;, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com) of the domain this traffic statistics pertains to and date is the date in yyyymmdd format that these statistics corresponds to. For example: domains/mymail.mydomain.com/trafficStats/20160807 | [optional] 
**outbound_encryption_ratio** | **float** | The ratio of outgoing mail (from Gmail) that was accepted over secure transport (TLS). | [optional] 
**spammy_feedback_loops** | [**List[FeedbackLoop]**](FeedbackLoop.md) | Spammy [Feedback loop identifiers] (https://support.google.com/mail/answer/6254652) with their individual spam rates. This metric only pertains to traffic that is authenticated by [DKIM](http://www.dkim.org/). | [optional] 
**spf_success_ratio** | **float** | The ratio of mail that successfully authenticated with SPF vs. all mail that attempted to authenticate with [SPF](http://www.openspf.org/). Spoofed mail is excluded. | [optional] 
**user_reported_spam_ratio** | **float** | The ratio of user-report spam vs. email that was sent to the inbox. This is potentially inexact -- users may want to refer to the description of the interval fields userReportedSpamRatioLowerBound and userReportedSpamRatioUpperBound for more explicit accuracy guarantees. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/). | [optional] 
**user_reported_spam_ratio_lower_bound** | **float** | The lower bound of the confidence interval for the user reported spam ratio. If this field is set, then the value of userReportedSpamRatio is set to the midpoint of this interval and is thus inexact. However, the true ratio is guaranteed to be in between this lower bound and the corresponding upper bound 95% of the time. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/). | [optional] 
**user_reported_spam_ratio_upper_bound** | **float** | The upper bound of the confidence interval for the user reported spam ratio. If this field is set, then the value of userReportedSpamRatio is set to the midpoint of this interval and is thus inexact. However, the true ratio is guaranteed to be in between this upper bound and the corresponding lower bound 95% of the time. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/). | [optional] 

## Example

```python
from openapi_client.models.traffic_stats import TrafficStats

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficStats from a JSON string
traffic_stats_instance = TrafficStats.from_json(json)
# print the JSON string representation of the object
print(TrafficStats.to_json())

# convert the object into a dict
traffic_stats_dict = traffic_stats_instance.to_dict()
# create an instance of TrafficStats from a dict
traffic_stats_from_dict = TrafficStats.from_dict(traffic_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


