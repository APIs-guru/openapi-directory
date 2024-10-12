# IpDomain


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** |  | [optional] 
**ip** | **str** |  | [optional] 
**key** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.ip_domain import IpDomain

# TODO update the JSON string below
json = "{}"
# create an instance of IpDomain from a JSON string
ip_domain_instance = IpDomain.from_json(json)
# print the JSON string representation of the object
print(IpDomain.to_json())

# convert the object into a dict
ip_domain_dict = ip_domain_instance.to_dict()
# create an instance of IpDomain from a dict
ip_domain_from_dict = IpDomain.from_dict(ip_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


