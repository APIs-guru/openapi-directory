# OSDetails

Disk Details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**o_s_major_version** | **str** | The OS Major Version. | [optional] 
**o_s_minor_version** | **str** | The OS Minor Version. | [optional] 
**o_s_version** | **str** | The OS Version. | [optional] 
**os_edition** | **str** | The OSEdition. | [optional] 
**os_type** | **str** | VM Disk details. | [optional] 
**product_type** | **str** | Product type. | [optional] 

## Example

```python
from openapi_client.models.os_details import OSDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OSDetails from a JSON string
os_details_instance = OSDetails.from_json(json)
# print the JSON string representation of the object
print(OSDetails.to_json())

# convert the object into a dict
os_details_dict = os_details_instance.to_dict()
# create an instance of OSDetails from a dict
os_details_from_dict = OSDetails.from_dict(os_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


