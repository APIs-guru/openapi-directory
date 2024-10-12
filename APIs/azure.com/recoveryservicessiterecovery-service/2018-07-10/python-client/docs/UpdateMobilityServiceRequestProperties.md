# UpdateMobilityServiceRequestProperties

The properties of an update mobility service request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run_as_account_id** | **str** | The CS run as account Id. | [optional] 

## Example

```python
from openapi_client.models.update_mobility_service_request_properties import UpdateMobilityServiceRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMobilityServiceRequestProperties from a JSON string
update_mobility_service_request_properties_instance = UpdateMobilityServiceRequestProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateMobilityServiceRequestProperties.to_json())

# convert the object into a dict
update_mobility_service_request_properties_dict = update_mobility_service_request_properties_instance.to_dict()
# create an instance of UpdateMobilityServiceRequestProperties from a dict
update_mobility_service_request_properties_from_dict = UpdateMobilityServiceRequestProperties.from_dict(update_mobility_service_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


