# OSDisk


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caching** | [**CachingType**](CachingType.md) |  | [optional] 

## Example

```python
from openapi_client.models.os_disk import OSDisk

# TODO update the JSON string below
json = "{}"
# create an instance of OSDisk from a JSON string
os_disk_instance = OSDisk.from_json(json)
# print the JSON string representation of the object
print(OSDisk.to_json())

# convert the object into a dict
os_disk_dict = os_disk_instance.to_dict()
# create an instance of OSDisk from a dict
os_disk_from_dict = OSDisk.from_dict(os_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


