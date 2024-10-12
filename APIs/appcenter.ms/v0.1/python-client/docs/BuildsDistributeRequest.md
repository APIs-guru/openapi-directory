# BuildsDistributeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | [**List[BuildsDistributeRequestDestinationsInner]**](BuildsDistributeRequestDestinationsInner.md) | Array of objects {id:string, type:string} with \&quot;id\&quot; being the distribution group ID, store ID, or tester email, and \&quot;type\&quot; being \&quot;group\&quot;, \&quot;store\&quot;, or \&quot;tester\&quot; | [optional] 
**mandatory_update** | **bool** |  | [optional] 
**notify_testers** | **bool** |  | [optional] [default to True]
**release_notes** | **str** | The release notes | [optional] 

## Example

```python
from openapi_client.models.builds_distribute_request import BuildsDistributeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsDistributeRequest from a JSON string
builds_distribute_request_instance = BuildsDistributeRequest.from_json(json)
# print the JSON string representation of the object
print(BuildsDistributeRequest.to_json())

# convert the object into a dict
builds_distribute_request_dict = builds_distribute_request_instance.to_dict()
# create an instance of BuildsDistributeRequest from a dict
builds_distribute_request_from_dict = BuildsDistributeRequest.from_dict(builds_distribute_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


