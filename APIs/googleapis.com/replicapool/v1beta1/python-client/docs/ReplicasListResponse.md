# ReplicasListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**resources** | [**List[Replica]**](Replica.md) |  | [optional] 

## Example

```python
from openapi_client.models.replicas_list_response import ReplicasListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicasListResponse from a JSON string
replicas_list_response_instance = ReplicasListResponse.from_json(json)
# print the JSON string representation of the object
print(ReplicasListResponse.to_json())

# convert the object into a dict
replicas_list_response_dict = replicas_list_response_instance.to_dict()
# create an instance of ReplicasListResponse from a dict
replicas_list_response_from_dict = ReplicasListResponse.from_dict(replicas_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


