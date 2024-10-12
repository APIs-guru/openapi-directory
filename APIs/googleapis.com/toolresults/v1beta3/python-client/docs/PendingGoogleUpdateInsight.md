# PendingGoogleUpdateInsight

This insight indicates that the hidden API usage originates from a Google-provided library. Users need not take any action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name_of_google_library** | **str** | The name of the Google-provided library with the non-SDK API dependency. | [optional] 

## Example

```python
from openapi_client.models.pending_google_update_insight import PendingGoogleUpdateInsight

# TODO update the JSON string below
json = "{}"
# create an instance of PendingGoogleUpdateInsight from a JSON string
pending_google_update_insight_instance = PendingGoogleUpdateInsight.from_json(json)
# print the JSON string representation of the object
print(PendingGoogleUpdateInsight.to_json())

# convert the object into a dict
pending_google_update_insight_dict = pending_google_update_insight_instance.to_dict()
# create an instance of PendingGoogleUpdateInsight from a dict
pending_google_update_insight_from_dict = PendingGoogleUpdateInsight.from_dict(pending_google_update_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


