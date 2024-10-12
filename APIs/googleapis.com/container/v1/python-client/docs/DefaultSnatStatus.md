# DefaultSnatStatus

DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Disables cluster default sNAT rules. | [optional] 

## Example

```python
from openapi_client.models.default_snat_status import DefaultSnatStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultSnatStatus from a JSON string
default_snat_status_instance = DefaultSnatStatus.from_json(json)
# print the JSON string representation of the object
print(DefaultSnatStatus.to_json())

# convert the object into a dict
default_snat_status_dict = default_snat_status_instance.to_dict()
# create an instance of DefaultSnatStatus from a dict
default_snat_status_from_dict = DefaultSnatStatus.from_dict(default_snat_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


