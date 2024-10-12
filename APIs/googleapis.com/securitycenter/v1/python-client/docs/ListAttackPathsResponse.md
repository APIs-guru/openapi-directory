# ListAttackPathsResponse

Response message for listing the attack paths for a given simulation or valued resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attack_paths** | [**List[AttackPath]**](AttackPath.md) | The attack paths that the attack path simulation identified. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results. | [optional] 

## Example

```python
from openapi_client.models.list_attack_paths_response import ListAttackPathsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAttackPathsResponse from a JSON string
list_attack_paths_response_instance = ListAttackPathsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAttackPathsResponse.to_json())

# convert the object into a dict
list_attack_paths_response_dict = list_attack_paths_response_instance.to_dict()
# create an instance of ListAttackPathsResponse from a dict
list_attack_paths_response_from_dict = ListAttackPathsResponse.from_dict(list_attack_paths_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


