# IPAccessControl

The IP access control.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow** | [**List[IPRange]**](IPRange.md) | The IP allow list. | [optional] 

## Example

```python
from openapi_client.models.ip_access_control import IPAccessControl

# TODO update the JSON string below
json = "{}"
# create an instance of IPAccessControl from a JSON string
ip_access_control_instance = IPAccessControl.from_json(json)
# print the JSON string representation of the object
print(IPAccessControl.to_json())

# convert the object into a dict
ip_access_control_dict = ip_access_control_instance.to_dict()
# create an instance of IPAccessControl from a dict
ip_access_control_from_dict = IPAccessControl.from_dict(ip_access_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


