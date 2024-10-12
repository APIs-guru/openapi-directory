# ContactDevice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_url** | **str** |  | [optional] 
**device_type** | **str** |  | [optional] 
**ext_id** | **str** |  | [optional] 
**label** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.contact_device import ContactDevice

# TODO update the JSON string below
json = "{}"
# create an instance of ContactDevice from a JSON string
contact_device_instance = ContactDevice.from_json(json)
# print the JSON string representation of the object
print(ContactDevice.to_json())

# convert the object into a dict
contact_device_dict = contact_device_instance.to_dict()
# create an instance of ContactDevice from a dict
contact_device_from_dict = ContactDevice.from_dict(contact_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


