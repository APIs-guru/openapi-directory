# AwardedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**awarded** | **bool** |  | [optional] 
**badge_id** | **str** |  | [optional] 
**badge_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.awarded_response import AwardedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AwardedResponse from a JSON string
awarded_response_instance = AwardedResponse.from_json(json)
# print the JSON string representation of the object
print(AwardedResponse.to_json())

# convert the object into a dict
awarded_response_dict = awarded_response_instance.to_dict()
# create an instance of AwardedResponse from a dict
awarded_response_from_dict = AwardedResponse.from_dict(awarded_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


