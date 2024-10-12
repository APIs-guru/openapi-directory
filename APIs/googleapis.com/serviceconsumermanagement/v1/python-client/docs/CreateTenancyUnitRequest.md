# CreateTenancyUnitRequest

Request to create a tenancy unit for a service consumer of a managed service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenancy_unit_id** | **str** | Optional. Optional service producer-provided identifier of the tenancy unit. Must be no longer than 40 characters and preferably URI friendly. If it isn&#39;t provided, a UID for the tenancy unit is automatically generated. The identifier must be unique across a managed service. If the tenancy unit already exists for the managed service and service consumer pair, calling &#x60;CreateTenancyUnit&#x60; returns the existing tenancy unit if the provided identifier is identical or empty, otherwise the call fails. | [optional] 

## Example

```python
from openapi_client.models.create_tenancy_unit_request import CreateTenancyUnitRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTenancyUnitRequest from a JSON string
create_tenancy_unit_request_instance = CreateTenancyUnitRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTenancyUnitRequest.to_json())

# convert the object into a dict
create_tenancy_unit_request_dict = create_tenancy_unit_request_instance.to_dict()
# create an instance of CreateTenancyUnitRequest from a dict
create_tenancy_unit_request_from_dict = CreateTenancyUnitRequest.from_dict(create_tenancy_unit_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


