# BlockUserMutationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BlockUserMutationResponseData**](BlockUserMutationResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.block_user_mutation_response import BlockUserMutationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BlockUserMutationResponse from a JSON string
block_user_mutation_response_instance = BlockUserMutationResponse.from_json(json)
# print the JSON string representation of the object
print(BlockUserMutationResponse.to_json())

# convert the object into a dict
block_user_mutation_response_dict = block_user_mutation_response_instance.to_dict()
# create an instance of BlockUserMutationResponse from a dict
block_user_mutation_response_from_dict = BlockUserMutationResponse.from_dict(block_user_mutation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


