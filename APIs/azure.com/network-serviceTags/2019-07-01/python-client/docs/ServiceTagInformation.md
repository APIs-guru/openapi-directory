# ServiceTagInformation

The service tag information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of service tag. | [optional] [readonly] 
**name** | **str** | The name of service tag. | [optional] [readonly] 
**properties** | [**ServiceTagInformationPropertiesFormat**](ServiceTagInformationPropertiesFormat.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_tag_information import ServiceTagInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTagInformation from a JSON string
service_tag_information_instance = ServiceTagInformation.from_json(json)
# print the JSON string representation of the object
print(ServiceTagInformation.to_json())

# convert the object into a dict
service_tag_information_dict = service_tag_information_instance.to_dict()
# create an instance of ServiceTagInformation from a dict
service_tag_information_from_dict = ServiceTagInformation.from_dict(service_tag_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


