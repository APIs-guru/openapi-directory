# Principal

Users/Service accounts which have access for DNS binding on the intranet VPC corresponding to the consumer project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_account** | **str** | The service account which needs to be granted the permission. | [optional] 
**user** | **str** | The user who needs to be granted permission. | [optional] 

## Example

```python
from openapi_client.models.principal import Principal

# TODO update the JSON string below
json = "{}"
# create an instance of Principal from a JSON string
principal_instance = Principal.from_json(json)
# print the JSON string representation of the object
print(Principal.to_json())

# convert the object into a dict
principal_dict = principal_instance.to_dict()
# create an instance of Principal from a dict
principal_from_dict = Principal.from_dict(principal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


