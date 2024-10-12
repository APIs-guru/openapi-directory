# NestedWirelessLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**ssid** | **str** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_wireless_link import NestedWirelessLink

# TODO update the JSON string below
json = "{}"
# create an instance of NestedWirelessLink from a JSON string
nested_wireless_link_instance = NestedWirelessLink.from_json(json)
# print the JSON string representation of the object
print(NestedWirelessLink.to_json())

# convert the object into a dict
nested_wireless_link_dict = nested_wireless_link_instance.to_dict()
# create an instance of NestedWirelessLink from a dict
nested_wireless_link_from_dict = NestedWirelessLink.from_dict(nested_wireless_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


