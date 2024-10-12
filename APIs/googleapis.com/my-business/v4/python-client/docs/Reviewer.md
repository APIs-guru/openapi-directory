# Reviewer

Represents the author of the review.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the reviewer. Only populated with the reviewer&#39;s real name if &#x60;is_anonymous&#x60; is false. | [optional] 
**is_anonymous** | **bool** | Indicates whether the reviewer has opted to remain anonymous. | [optional] 
**profile_photo_url** | **str** | The profile photo link of the reviewer. Only populated if &#x60;is_anonymous&#x60; is false. | [optional] 

## Example

```python
from openapi_client.models.reviewer import Reviewer

# TODO update the JSON string below
json = "{}"
# create an instance of Reviewer from a JSON string
reviewer_instance = Reviewer.from_json(json)
# print the JSON string representation of the object
print(Reviewer.to_json())

# convert the object into a dict
reviewer_dict = reviewer_instance.to_dict()
# create an instance of Reviewer from a dict
reviewer_from_dict = Reviewer.from_dict(reviewer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


