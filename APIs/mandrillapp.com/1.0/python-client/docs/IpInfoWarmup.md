# IpInfoWarmup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_at** | **str** |  | [optional] 
**start_at** | **str** |  | [optional] 
**warming_up** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.ip_info_warmup import IpInfoWarmup

# TODO update the JSON string below
json = "{}"
# create an instance of IpInfoWarmup from a JSON string
ip_info_warmup_instance = IpInfoWarmup.from_json(json)
# print the JSON string representation of the object
print(IpInfoWarmup.to_json())

# convert the object into a dict
ip_info_warmup_dict = ip_info_warmup_instance.to_dict()
# create an instance of IpInfoWarmup from a dict
ip_info_warmup_from_dict = IpInfoWarmup.from_dict(ip_info_warmup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


