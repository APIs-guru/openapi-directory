# TenancyUnit

Representation of a tenancy unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer** | **str** | Output only. @OutputOnly Cloud resource name of the consumer of this service. For example &#39;projects/123456&#39;. | [optional] [readonly] 
**create_time** | **str** | Output only. @OutputOnly The time this tenancy unit was created. | [optional] [readonly] 
**name** | **str** | Globally unique identifier of this tenancy unit \&quot;services/{service}/{collection id}/{resource id}/tenancyUnits/{unit}\&quot; | [optional] 
**service** | **str** | Output only. Google Cloud API name of the managed service owning this tenancy unit. For example &#39;serviceconsumermanagement.googleapis.com&#39;. | [optional] [readonly] 
**tenant_resources** | [**List[TenantResource]**](TenantResource.md) | Resources constituting the tenancy unit. There can be at most 512 tenant resources in a tenancy unit. | [optional] 

## Example

```python
from openapi_client.models.tenancy_unit import TenancyUnit

# TODO update the JSON string below
json = "{}"
# create an instance of TenancyUnit from a JSON string
tenancy_unit_instance = TenancyUnit.from_json(json)
# print the JSON string representation of the object
print(TenancyUnit.to_json())

# convert the object into a dict
tenancy_unit_dict = tenancy_unit_instance.to_dict()
# create an instance of TenancyUnit from a dict
tenancy_unit_from_dict = TenancyUnit.from_dict(tenancy_unit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


