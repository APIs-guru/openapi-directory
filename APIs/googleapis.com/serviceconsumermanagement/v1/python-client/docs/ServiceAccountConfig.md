# ServiceAccountConfig

Describes the service account configuration for the tenant project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | ID of the IAM service account to be created in tenant project. The email format of the service account is \&quot;@.iam.gserviceaccount.com\&quot;. This account ID must be unique within tenant project and service producers have to guarantee it. The ID must be 6-30 characters long, and match the following regular expression: &#x60;[a-z]([-a-z0-9]*[a-z0-9])&#x60;. | [optional] 
**tenant_project_roles** | **List[str]** | Roles for the associated service account for the tenant project. | [optional] 

## Example

```python
from openapi_client.models.service_account_config import ServiceAccountConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceAccountConfig from a JSON string
service_account_config_instance = ServiceAccountConfig.from_json(json)
# print the JSON string representation of the object
print(ServiceAccountConfig.to_json())

# convert the object into a dict
service_account_config_dict = service_account_config_instance.to_dict()
# create an instance of ServiceAccountConfig from a dict
service_account_config_from_dict = ServiceAccountConfig.from_dict(service_account_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


