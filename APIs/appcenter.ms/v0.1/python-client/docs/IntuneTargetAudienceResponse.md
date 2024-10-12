# IntuneTargetAudienceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID for the target audience/group. | [optional] 
**name** | **str** | display name for the target audience/group | [optional] 

## Example

```python
from openapi_client.models.intune_target_audience_response import IntuneTargetAudienceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneTargetAudienceResponse from a JSON string
intune_target_audience_response_instance = IntuneTargetAudienceResponse.from_json(json)
# print the JSON string representation of the object
print(IntuneTargetAudienceResponse.to_json())

# convert the object into a dict
intune_target_audience_response_dict = intune_target_audience_response_instance.to_dict()
# create an instance of IntuneTargetAudienceResponse from a dict
intune_target_audience_response_from_dict = IntuneTargetAudienceResponse.from_dict(intune_target_audience_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


