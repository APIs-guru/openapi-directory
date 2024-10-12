# CreateServiceAccountRequest

The service account create request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Required. The account id that is used to generate the service account email address and a stable unique id. It is unique within a project, must be 6-30 characters long, and match the regular expression &#x60;[a-z]([-a-z0-9]*[a-z0-9])&#x60; to comply with RFC1035. | [optional] 
**service_account** | [**ServiceAccount**](ServiceAccount.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_service_account_request import CreateServiceAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateServiceAccountRequest from a JSON string
create_service_account_request_instance = CreateServiceAccountRequest.from_json(json)
# print the JSON string representation of the object
print(CreateServiceAccountRequest.to_json())

# convert the object into a dict
create_service_account_request_dict = create_service_account_request_instance.to_dict()
# create an instance of CreateServiceAccountRequest from a dict
create_service_account_request_from_dict = CreateServiceAccountRequest.from_dict(create_service_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


