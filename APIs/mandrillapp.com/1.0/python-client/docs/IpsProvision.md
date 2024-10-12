# IpsProvision


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**pool** | **str** |  | [optional] 
**warmup** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.ips_provision import IpsProvision

# TODO update the JSON string below
json = "{}"
# create an instance of IpsProvision from a JSON string
ips_provision_instance = IpsProvision.from_json(json)
# print the JSON string representation of the object
print(IpsProvision.to_json())

# convert the object into a dict
ips_provision_dict = ips_provision_instance.to_dict()
# create an instance of IpsProvision from a dict
ips_provision_from_dict = IpsProvision.from_dict(ips_provision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


