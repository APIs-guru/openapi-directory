# ShareAccessRight

Specifies the mapping between this particular user and the type of access he has on shares on this device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_type** | **str** | Type of access to be allowed on the share for this user. | 
**share_id** | **str** | The share ID. | 

## Example

```python
from openapi_client.models.share_access_right import ShareAccessRight

# TODO update the JSON string below
json = "{}"
# create an instance of ShareAccessRight from a JSON string
share_access_right_instance = ShareAccessRight.from_json(json)
# print the JSON string representation of the object
print(ShareAccessRight.to_json())

# convert the object into a dict
share_access_right_dict = share_access_right_instance.to_dict()
# create an instance of ShareAccessRight from a dict
share_access_right_from_dict = ShareAccessRight.from_dict(share_access_right_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


