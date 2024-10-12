# LocationsListBillingSpecsDefaultResponse

Describes the format of Error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.locations_list_billing_specs_default_response import LocationsListBillingSpecsDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LocationsListBillingSpecsDefaultResponse from a JSON string
locations_list_billing_specs_default_response_instance = LocationsListBillingSpecsDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(LocationsListBillingSpecsDefaultResponse.to_json())

# convert the object into a dict
locations_list_billing_specs_default_response_dict = locations_list_billing_specs_default_response_instance.to_dict()
# create an instance of LocationsListBillingSpecsDefaultResponse from a dict
locations_list_billing_specs_default_response_from_dict = LocationsListBillingSpecsDefaultResponse.from_dict(locations_list_billing_specs_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


