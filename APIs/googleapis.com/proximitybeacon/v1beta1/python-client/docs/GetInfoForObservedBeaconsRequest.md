# GetInfoForObservedBeaconsRequest

Request for beacon and attachment information about beacons that a mobile client has encountered \"in the wild\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespaced_types** | **List[str]** | Specifies what kind of attachments to include in the response. When given, the response will include only attachments of the given types. When empty, no attachments will be returned. Must be in the format namespace/type. Accepts &#x60;*&#x60; to specify all types in all namespaces owned by the client. Optional. | [optional] 
**observations** | [**List[Observation]**](Observation.md) | The beacons that the client has encountered. At least one must be given. | [optional] 

## Example

```python
from openapi_client.models.get_info_for_observed_beacons_request import GetInfoForObservedBeaconsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetInfoForObservedBeaconsRequest from a JSON string
get_info_for_observed_beacons_request_instance = GetInfoForObservedBeaconsRequest.from_json(json)
# print the JSON string representation of the object
print(GetInfoForObservedBeaconsRequest.to_json())

# convert the object into a dict
get_info_for_observed_beacons_request_dict = get_info_for_observed_beacons_request_instance.to_dict()
# create an instance of GetInfoForObservedBeaconsRequest from a dict
get_info_for_observed_beacons_request_from_dict = GetInfoForObservedBeaconsRequest.from_dict(get_info_for_observed_beacons_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


