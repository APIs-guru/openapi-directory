# UpdateMediaAffinityIntentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_class** | **str** |  | 
**code** | [**UpdateMediaAffinityIntentResponseCode**](UpdateMediaAffinityIntentResponseCode.md) |  | 

## Example

```python
from openapi_client.models.update_media_affinity_intent_response import UpdateMediaAffinityIntentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMediaAffinityIntentResponse from a JSON string
update_media_affinity_intent_response_instance = UpdateMediaAffinityIntentResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateMediaAffinityIntentResponse.to_json())

# convert the object into a dict
update_media_affinity_intent_response_dict = update_media_affinity_intent_response_instance.to_dict()
# create an instance of UpdateMediaAffinityIntentResponse from a dict
update_media_affinity_intent_response_from_dict = UpdateMediaAffinityIntentResponse.from_dict(update_media_affinity_intent_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


