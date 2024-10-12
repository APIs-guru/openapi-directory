# IpReputation

IP Reputation information for a set of IPs in a specific reputation category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_count** | **str** | Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). | [optional] 
**num_ips** | **str** | Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). Deprecated to be complied with ApiLinter for Quantities. Use ip_count instead. | [optional] 
**reputation** | **str** | The reputation category this IP reputation represents. | [optional] 
**sample_ips** | **List[str]** | A sample of IPs in this reputation category. | [optional] 

## Example

```python
from openapi_client.models.ip_reputation import IpReputation

# TODO update the JSON string below
json = "{}"
# create an instance of IpReputation from a JSON string
ip_reputation_instance = IpReputation.from_json(json)
# print the JSON string representation of the object
print(IpReputation.to_json())

# convert the object into a dict
ip_reputation_dict = ip_reputation_instance.to_dict()
# create an instance of IpReputation from a dict
ip_reputation_from_dict = IpReputation.from_dict(ip_reputation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


