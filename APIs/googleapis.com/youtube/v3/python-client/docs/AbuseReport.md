# AbuseReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abuse_types** | [**List[AbuseType]**](AbuseType.md) |  | [optional] 
**description** | **str** |  | [optional] 
**related_entities** | [**List[RelatedEntity]**](RelatedEntity.md) |  | [optional] 
**subject** | [**Entity**](Entity.md) |  | [optional] 

## Example

```python
from openapi_client.models.abuse_report import AbuseReport

# TODO update the JSON string below
json = "{}"
# create an instance of AbuseReport from a JSON string
abuse_report_instance = AbuseReport.from_json(json)
# print the JSON string representation of the object
print(AbuseReport.to_json())

# convert the object into a dict
abuse_report_dict = abuse_report_instance.to_dict()
# create an instance of AbuseReport from a dict
abuse_report_from_dict = AbuseReport.from_dict(abuse_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


