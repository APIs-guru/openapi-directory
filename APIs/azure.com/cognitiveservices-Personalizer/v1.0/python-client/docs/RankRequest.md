# RankRequest

Request a set of actions to be ranked by the Personalizer service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[RankableAction]**](RankableAction.md) | The set of actions the Personalizer service can pick from.  The set should not contain more than 50 actions.  The order of the actions does not affect the rank result but the order  should match the sequence your application would have used to display them.  The first item in the array will be used as Baseline item in Offline evaluations. | 
**context_features** | **List[object]** | Features of the context used for Personalizer as a  dictionary of dictionaries. This depends on the application, and  typically includes features about the current user, their  device, profile information, aggregated data about time and date, etc.  Features should not include personally identifiable information (PII),  unique UserIDs, or precise timestamps. | [optional] 
**defer_activation** | **bool** | Send false if it is certain the rewardActionId in rank results will be shown to the user, therefore  Personalizer will expect a Reward call, otherwise it will assign the default  Reward to the event. Send true if it is possible the user will not see the  action specified in the rank results, because the page is rendering later, or the Rank results may be  overridden by code further downstream. | [optional] [default to False]
**event_id** | **str** | Optionally pass an eventId that uniquely identifies this Rank event.  If null, the service generates a unique eventId. The eventId will be used for  associating this request with its reward, as well as seeding the pseudo-random  generator when making a Personalizer call. | [optional] 
**excluded_actions** | **List[str]** | The set of action ids to exclude from ranking. | [optional] 

## Example

```python
from openapi_client.models.rank_request import RankRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RankRequest from a JSON string
rank_request_instance = RankRequest.from_json(json)
# print the JSON string representation of the object
print(RankRequest.to_json())

# convert the object into a dict
rank_request_dict = rank_request_instance.to_dict()
# create an instance of RankRequest from a dict
rank_request_from_dict = RankRequest.from_dict(rank_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


