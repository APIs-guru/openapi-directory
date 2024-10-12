# ProvisioningError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Verbose error message about the provisioning failure | [optional] 
**provisioning_error_code** | **str** | Error code of the provisioning failure | [optional] 

## Example

```python
from openapi_client.models.provisioning_error import ProvisioningError

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningError from a JSON string
provisioning_error_instance = ProvisioningError.from_json(json)
# print the JSON string representation of the object
print(ProvisioningError.to_json())

# convert the object into a dict
provisioning_error_dict = provisioning_error_instance.to_dict()
# create an instance of ProvisioningError from a dict
provisioning_error_from_dict = ProvisioningError.from_dict(provisioning_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


