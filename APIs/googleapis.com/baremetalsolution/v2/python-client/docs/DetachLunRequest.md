# DetachLunRequest

Message for detach specific LUN from an Instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lun** | **str** | Required. Name of the Lun to detach. | [optional] 
**skip_reboot** | **bool** | If true, performs lun unmapping without instance reboot. | [optional] 

## Example

```python
from openapi_client.models.detach_lun_request import DetachLunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DetachLunRequest from a JSON string
detach_lun_request_instance = DetachLunRequest.from_json(json)
# print the JSON string representation of the object
print(DetachLunRequest.to_json())

# convert the object into a dict
detach_lun_request_dict = detach_lun_request_instance.to_dict()
# create an instance of DetachLunRequest from a dict
detach_lun_request_from_dict = DetachLunRequest.from_dict(detach_lun_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


