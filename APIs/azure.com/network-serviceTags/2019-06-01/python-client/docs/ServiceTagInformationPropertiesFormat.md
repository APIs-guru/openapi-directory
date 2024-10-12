# ServiceTagInformationPropertiesFormat

Properties of the service tag information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefixes** | **List[str]** | The list of IP address prefixes. | [optional] [readonly] 
**change_number** | **str** | The iteration number of service tag. | [optional] [readonly] 
**region** | **str** | The region of service tag. | [optional] [readonly] 
**system_service** | **str** | The name of system service. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_tag_information_properties_format import ServiceTagInformationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTagInformationPropertiesFormat from a JSON string
service_tag_information_properties_format_instance = ServiceTagInformationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ServiceTagInformationPropertiesFormat.to_json())

# convert the object into a dict
service_tag_information_properties_format_dict = service_tag_information_properties_format_instance.to_dict()
# create an instance of ServiceTagInformationPropertiesFormat from a dict
service_tag_information_properties_format_from_dict = ServiceTagInformationPropertiesFormat.from_dict(service_tag_information_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


