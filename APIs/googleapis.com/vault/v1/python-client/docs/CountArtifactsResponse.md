# CountArtifactsResponse

Definition of the response for method CountArtifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups_count_result** | [**GroupsCountResult**](GroupsCountResult.md) |  | [optional] 
**mail_count_result** | [**MailCountResult**](MailCountResult.md) |  | [optional] 
**total_count** | **str** | Total count of messages. | [optional] 

## Example

```python
from openapi_client.models.count_artifacts_response import CountArtifactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CountArtifactsResponse from a JSON string
count_artifacts_response_instance = CountArtifactsResponse.from_json(json)
# print the JSON string representation of the object
print(CountArtifactsResponse.to_json())

# convert the object into a dict
count_artifacts_response_dict = count_artifacts_response_instance.to_dict()
# create an instance of CountArtifactsResponse from a dict
count_artifacts_response_from_dict = CountArtifactsResponse.from_dict(count_artifacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


