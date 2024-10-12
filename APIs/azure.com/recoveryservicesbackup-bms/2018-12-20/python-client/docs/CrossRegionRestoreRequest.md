# CrossRegionRestoreRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cross_region_restore_access_details** | [**CrrAccessToken**](CrrAccessToken.md) |  | [optional] 
**restore_request** | [**RestoreRequest**](RestoreRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.cross_region_restore_request import CrossRegionRestoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CrossRegionRestoreRequest from a JSON string
cross_region_restore_request_instance = CrossRegionRestoreRequest.from_json(json)
# print the JSON string representation of the object
print(CrossRegionRestoreRequest.to_json())

# convert the object into a dict
cross_region_restore_request_dict = cross_region_restore_request_instance.to_dict()
# create an instance of CrossRegionRestoreRequest from a dict
cross_region_restore_request_from_dict = CrossRegionRestoreRequest.from_dict(cross_region_restore_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


