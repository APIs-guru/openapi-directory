# CustomizationIPAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**argument** | **str** | Argument when Custom ip type is selected | [optional] 
**ip_address** | **str** | Defined Ip Address when Fixed ip type is selected | [optional] 
**type** | **str** | Customization Specification ip type | [optional] 

## Example

```python
from openapi_client.models.customization_ip_address import CustomizationIPAddress

# TODO update the JSON string below
json = "{}"
# create an instance of CustomizationIPAddress from a JSON string
customization_ip_address_instance = CustomizationIPAddress.from_json(json)
# print the JSON string representation of the object
print(CustomizationIPAddress.to_json())

# convert the object into a dict
customization_ip_address_dict = customization_ip_address_instance.to_dict()
# create an instance of CustomizationIPAddress from a dict
customization_ip_address_from_dict = CustomizationIPAddress.from_dict(customization_ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


