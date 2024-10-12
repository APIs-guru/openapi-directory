# NetworkStatusListByLocationDefaultResponseErrorDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.network_status_list_by_location_default_response_error_details_inner import NetworkStatusListByLocationDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkStatusListByLocationDefaultResponseErrorDetailsInner from a JSON string
network_status_list_by_location_default_response_error_details_inner_instance = NetworkStatusListByLocationDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(NetworkStatusListByLocationDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
network_status_list_by_location_default_response_error_details_inner_dict = network_status_list_by_location_default_response_error_details_inner_instance.to_dict()
# create an instance of NetworkStatusListByLocationDefaultResponseErrorDetailsInner from a dict
network_status_list_by_location_default_response_error_details_inner_from_dict = NetworkStatusListByLocationDefaultResponseErrorDetailsInner.from_dict(network_status_list_by_location_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


