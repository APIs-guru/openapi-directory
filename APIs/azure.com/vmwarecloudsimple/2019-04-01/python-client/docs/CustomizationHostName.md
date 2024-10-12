# CustomizationHostName

Host name model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Hostname | [optional] 
**type** | **str** | Type of host name | [optional] 

## Example

```python
from openapi_client.models.customization_host_name import CustomizationHostName

# TODO update the JSON string below
json = "{}"
# create an instance of CustomizationHostName from a JSON string
customization_host_name_instance = CustomizationHostName.from_json(json)
# print the JSON string representation of the object
print(CustomizationHostName.to_json())

# convert the object into a dict
customization_host_name_dict = customization_host_name_instance.to_dict()
# create an instance of CustomizationHostName from a dict
customization_host_name_from_dict = CustomizationHostName.from_dict(customization_host_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


