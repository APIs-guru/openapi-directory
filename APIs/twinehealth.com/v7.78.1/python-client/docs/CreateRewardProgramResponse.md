# CreateRewardProgramResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RewardProgramResource**](RewardProgramResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_reward_program_response import CreateRewardProgramResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRewardProgramResponse from a JSON string
create_reward_program_response_instance = CreateRewardProgramResponse.from_json(json)
# print the JSON string representation of the object
print(CreateRewardProgramResponse.to_json())

# convert the object into a dict
create_reward_program_response_dict = create_reward_program_response_instance.to_dict()
# create an instance of CreateRewardProgramResponse from a dict
create_reward_program_response_from_dict = CreateRewardProgramResponse.from_dict(create_reward_program_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


