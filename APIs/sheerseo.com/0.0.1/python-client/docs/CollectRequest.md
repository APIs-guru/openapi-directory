# CollectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_ids** | **List[str]** | Receiving the request results through thier task id&#39;s | 

## Example

```python
from openapi_client.models.collect_request import CollectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CollectRequest from a JSON string
collect_request_instance = CollectRequest.from_json(json)
# print the JSON string representation of the object
print(CollectRequest.to_json())

# convert the object into a dict
collect_request_dict = collect_request_instance.to_dict()
# create an instance of CollectRequest from a dict
collect_request_from_dict = CollectRequest.from_dict(collect_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


