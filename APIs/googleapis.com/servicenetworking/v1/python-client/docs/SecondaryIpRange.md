# SecondaryIpRange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_cidr_range** | **str** | Secondary IP CIDR range in &#x60;x.x.x.x/y&#x60; format. | [optional] 
**range_name** | **str** | Name of the secondary IP range. | [optional] 

## Example

```python
from openapi_client.models.secondary_ip_range import SecondaryIpRange

# TODO update the JSON string below
json = "{}"
# create an instance of SecondaryIpRange from a JSON string
secondary_ip_range_instance = SecondaryIpRange.from_json(json)
# print the JSON string representation of the object
print(SecondaryIpRange.to_json())

# convert the object into a dict
secondary_ip_range_dict = secondary_ip_range_instance.to_dict()
# create an instance of SecondaryIpRange from a dict
secondary_ip_range_from_dict = SecondaryIpRange.from_dict(secondary_ip_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


