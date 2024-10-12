# Canary

The configuration of the canary mode for a service descriptor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Use canary mode for this service | 
**root** | **str** | Otoroshi will append this root to any target choosen. If the specified root is &#39;/api/foo&#39;, then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar | 
**targets** | [**List[Target]**](Target.md) | The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures | 
**traffic** | **int** | Ratio of traffic that will be sent to canary targets. | 

## Example

```python
from openapi_client.models.canary import Canary

# TODO update the JSON string below
json = "{}"
# create an instance of Canary from a JSON string
canary_instance = Canary.from_json(json)
# print the JSON string representation of the object
print(Canary.to_json())

# convert the object into a dict
canary_dict = canary_instance.to_dict()
# create an instance of Canary from a dict
canary_from_dict = Canary.from_dict(canary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


