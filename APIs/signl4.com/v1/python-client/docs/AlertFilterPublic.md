# AlertFilterPublic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_ids** | **List[str]** |  | [optional] 
**alerts_after_id** | **str** |  | [optional] 
**category_ids** | **List[str]** |  | [optional] 
**continuation_token** | [**PagedResultsPublicContinuationToken**](PagedResultsPublicContinuationToken.md) |  | [optional] 
**max_creation_date** | **datetime** |  | [optional] 
**min_creation_date** | **datetime** |  | [optional] 
**modified_since** | **datetime** |  | [optional] 
**show_personal_hidden_categories** | **bool** |  | [optional] 
**status_codes** | [**AlertStatusCodes**](AlertStatusCodes.md) |  | [optional] 
**team_id** | **str** |  | [optional] 
**text_to_search** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.alert_filter_public import AlertFilterPublic

# TODO update the JSON string below
json = "{}"
# create an instance of AlertFilterPublic from a JSON string
alert_filter_public_instance = AlertFilterPublic.from_json(json)
# print the JSON string representation of the object
print(AlertFilterPublic.to_json())

# convert the object into a dict
alert_filter_public_dict = alert_filter_public_instance.to_dict()
# create an instance of AlertFilterPublic from a dict
alert_filter_public_from_dict = AlertFilterPublic.from_dict(alert_filter_public_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


