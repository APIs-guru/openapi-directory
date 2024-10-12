# SetPropertyServiceLevelRequest

Request message for SetPropertyServiceLevel RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_property** | **str** | Required. The Analytics property to change the ServiceLevel setting. This field is the name of the Google Analytics Admin API property resource. Format: analyticsadmin.googleapis.com/properties/{property_id} | [optional] 
**service_level** | **str** | Required. The service level to set for this property. | [optional] 

## Example

```python
from openapi_client.models.set_property_service_level_request import SetPropertyServiceLevelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetPropertyServiceLevelRequest from a JSON string
set_property_service_level_request_instance = SetPropertyServiceLevelRequest.from_json(json)
# print the JSON string representation of the object
print(SetPropertyServiceLevelRequest.to_json())

# convert the object into a dict
set_property_service_level_request_dict = set_property_service_level_request_instance.to_dict()
# create an instance of SetPropertyServiceLevelRequest from a dict
set_property_service_level_request_from_dict = SetPropertyServiceLevelRequest.from_dict(set_property_service_level_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


