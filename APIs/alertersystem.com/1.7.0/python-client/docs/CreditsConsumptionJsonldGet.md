# CreditsConsumptionJsonldGet

The CreditsConsumption resource is a chronological record of all the credits that have been consumed, including the reason for the consumption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] [readonly] 
**credits_consumption_event_code** | **str** | The type of event that consumed the credits. | [optional] [readonly] 
**credits_consumption_notes** | **str** | Notes that add additional information to the resource. | [optional] 
**credits_event_id** | **str** | The ID of the event (Ping resource or AlertLog resource) that consumed the credits. | [optional] 
**credits_event_iri** | **str** | The IRI of the event that is related to this resource. | [optional] 
**credits_used** | **str** | The number of credits that were consumed. | [optional] [readonly] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.credits_consumption_jsonld_get import CreditsConsumptionJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of CreditsConsumptionJsonldGet from a JSON string
credits_consumption_jsonld_get_instance = CreditsConsumptionJsonldGet.from_json(json)
# print the JSON string representation of the object
print(CreditsConsumptionJsonldGet.to_json())

# convert the object into a dict
credits_consumption_jsonld_get_dict = credits_consumption_jsonld_get_instance.to_dict()
# create an instance of CreditsConsumptionJsonldGet from a dict
credits_consumption_jsonld_get_from_dict = CreditsConsumptionJsonldGet.from_dict(credits_consumption_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


