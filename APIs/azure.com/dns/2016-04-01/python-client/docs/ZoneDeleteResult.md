# ZoneDeleteResult

The response to a Zone Delete operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_async_operation** | **str** | Users can perform a Get on Azure-AsyncOperation to get the status of their delete Zone operations. | [optional] 
**request_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**status_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.zone_delete_result import ZoneDeleteResult

# TODO update the JSON string below
json = "{}"
# create an instance of ZoneDeleteResult from a JSON string
zone_delete_result_instance = ZoneDeleteResult.from_json(json)
# print the JSON string representation of the object
print(ZoneDeleteResult.to_json())

# convert the object into a dict
zone_delete_result_dict = zone_delete_result_instance.to_dict()
# create an instance of ZoneDeleteResult from a dict
zone_delete_result_from_dict = ZoneDeleteResult.from_dict(zone_delete_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


