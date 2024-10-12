# AvailableIP


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] [readonly] 
**family** | **int** |  | [optional] [readonly] 
**vrf** | [**NestedVRF**](NestedVRF.md) |  | [optional] 

## Example

```python
from openapi_client.models.available_ip import AvailableIP

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableIP from a JSON string
available_ip_instance = AvailableIP.from_json(json)
# print the JSON string representation of the object
print(AvailableIP.to_json())

# convert the object into a dict
available_ip_dict = available_ip_instance.to_dict()
# create an instance of AvailableIP from a dict
available_ip_from_dict = AvailableIP.from_dict(available_ip_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


