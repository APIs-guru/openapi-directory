# WcfRelaysListResult

The response of the List WcfRelays operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of WcfRelays operation | [optional] 
**value** | [**List[WcfRelay]**](WcfRelay.md) | Result of the List WcfRelays . | [optional] 

## Example

```python
from openapi_client.models.wcf_relays_list_result import WcfRelaysListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WcfRelaysListResult from a JSON string
wcf_relays_list_result_instance = WcfRelaysListResult.from_json(json)
# print the JSON string representation of the object
print(WcfRelaysListResult.to_json())

# convert the object into a dict
wcf_relays_list_result_dict = wcf_relays_list_result_instance.to_dict()
# create an instance of WcfRelaysListResult from a dict
wcf_relays_list_result_from_dict = WcfRelaysListResult.from_dict(wcf_relays_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


