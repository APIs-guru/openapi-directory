# ServingRestriction

Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS versus HTTP request, or the type of auction).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contexts** | [**List[ServingContext]**](ServingContext.md) | The contexts for the restriction. | [optional] 
**disapproval** | [**Disapproval**](Disapproval.md) |  | [optional] 
**disapproval_reasons** | [**List[Disapproval]**](Disapproval.md) | Any disapprovals bound to this restriction. Only present if status&#x3D;DISAPPROVED. Can be used to filter the response of the creatives.list method. Deprecated; use disapproval field instead. | [optional] 
**status** | **str** | The status of the creative in this context (for example, it has been explicitly disapproved or is pending review). | [optional] 

## Example

```python
from openapi_client.models.serving_restriction import ServingRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of ServingRestriction from a JSON string
serving_restriction_instance = ServingRestriction.from_json(json)
# print the JSON string representation of the object
print(ServingRestriction.to_json())

# convert the object into a dict
serving_restriction_dict = serving_restriction_instance.to_dict()
# create an instance of ServingRestriction from a dict
serving_restriction_from_dict = ServingRestriction.from_dict(serving_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


