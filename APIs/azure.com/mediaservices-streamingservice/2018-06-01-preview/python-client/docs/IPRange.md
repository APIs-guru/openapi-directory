# IPRange

The IP address range in the CIDR scheme.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The IP address. | [optional] 
**name** | **str** | The friendly name for the IP address range. | [optional] 
**subnet_prefix_length** | **int** | The subnet mask prefix length (see CIDR notation). | [optional] 

## Example

```python
from openapi_client.models.ip_range import IPRange

# TODO update the JSON string below
json = "{}"
# create an instance of IPRange from a JSON string
ip_range_instance = IPRange.from_json(json)
# print the JSON string representation of the object
print(IPRange.to_json())

# convert the object into a dict
ip_range_dict = ip_range_instance.to_dict()
# create an instance of IPRange from a dict
ip_range_from_dict = IPRange.from_dict(ip_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


