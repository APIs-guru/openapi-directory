# HostReputationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The IP address or host name | 
**is_listed** | **bool** | Is this host blacklisted | 
**list_count** | **int** | The number of DNSBLs the host is listed on | 
**lists** | [**List[Blacklist]**](Blacklist.md) | Array of objects for each DNSBL checked | 

## Example

```python
from openapi_client.models.host_reputation_response import HostReputationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HostReputationResponse from a JSON string
host_reputation_response_instance = HostReputationResponse.from_json(json)
# print the JSON string representation of the object
print(HostReputationResponse.to_json())

# convert the object into a dict
host_reputation_response_dict = host_reputation_response_instance.to_dict()
# create an instance of HostReputationResponse from a dict
host_reputation_response_from_dict = HostReputationResponse.from_dict(host_reputation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


