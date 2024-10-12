# SwitchDetails

Details required to switch retailers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_details** | [**SwitchDetailsCustomerDetails**](SwitchDetailsCustomerDetails.md) |  | 

## Example

```python
from openapi_client.models.switch_details import SwitchDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SwitchDetails from a JSON string
switch_details_instance = SwitchDetails.from_json(json)
# print the JSON string representation of the object
print(SwitchDetails.to_json())

# convert the object into a dict
switch_details_dict = switch_details_instance.to_dict()
# create an instance of SwitchDetails from a dict
switch_details_from_dict = SwitchDetails.from_dict(switch_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


