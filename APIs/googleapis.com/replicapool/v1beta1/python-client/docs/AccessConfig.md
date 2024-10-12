# AccessConfig

A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of this access configuration. | [optional] 
**nat_ip** | **str** | An external IP address associated with this instance. | [optional] 
**type** | **str** | Type of this access configuration file. Currently only ONE_TO_ONE_NAT is supported. | [optional] 

## Example

```python
from openapi_client.models.access_config import AccessConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AccessConfig from a JSON string
access_config_instance = AccessConfig.from_json(json)
# print the JSON string representation of the object
print(AccessConfig.to_json())

# convert the object into a dict
access_config_dict = access_config_instance.to_dict()
# create an instance of AccessConfig from a dict
access_config_from_dict = AccessConfig.from_dict(access_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


