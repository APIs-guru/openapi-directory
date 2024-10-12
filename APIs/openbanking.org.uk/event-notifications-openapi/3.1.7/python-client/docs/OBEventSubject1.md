# OBEventSubject1

The resource-update event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http__openbanking_org_uk_rid** | **str** | Resource Id for the updated resource. | 
**http__openbanking_org_uk_rlk** | [**List[OBEventLink1]**](OBEventLink1.md) | Resource links to other available versions of the resource. | 
**http__openbanking_org_uk_rty** | **str** | Resource Type for the updated resource. | 
**subject_type** | **str** | Subject type for the updated resource.  | 

## Example

```python
from openapi_client.models.ob_event_subject1 import OBEventSubject1

# TODO update the JSON string below
json = "{}"
# create an instance of OBEventSubject1 from a JSON string
ob_event_subject1_instance = OBEventSubject1.from_json(json)
# print the JSON string representation of the object
print(OBEventSubject1.to_json())

# convert the object into a dict
ob_event_subject1_dict = ob_event_subject1_instance.to_dict()
# create an instance of OBEventSubject1 from a dict
ob_event_subject1_from_dict = OBEventSubject1.from_dict(ob_event_subject1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


