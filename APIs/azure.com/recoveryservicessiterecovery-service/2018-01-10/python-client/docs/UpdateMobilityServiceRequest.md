# UpdateMobilityServiceRequest

Request to update the mobility service on a protected item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateMobilityServiceRequestProperties**](UpdateMobilityServiceRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_mobility_service_request import UpdateMobilityServiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMobilityServiceRequest from a JSON string
update_mobility_service_request_instance = UpdateMobilityServiceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateMobilityServiceRequest.to_json())

# convert the object into a dict
update_mobility_service_request_dict = update_mobility_service_request_instance.to_dict()
# create an instance of UpdateMobilityServiceRequest from a dict
update_mobility_service_request_from_dict = UpdateMobilityServiceRequest.from_dict(update_mobility_service_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


