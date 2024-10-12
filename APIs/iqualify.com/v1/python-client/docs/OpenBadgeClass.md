# OpenBadgeClass


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria** | [**OpenBadgeClassCriteria**](OpenBadgeClassCriteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**image** | **str** |  | [optional] 
**issuer** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.open_badge_class import OpenBadgeClass

# TODO update the JSON string below
json = "{}"
# create an instance of OpenBadgeClass from a JSON string
open_badge_class_instance = OpenBadgeClass.from_json(json)
# print the JSON string representation of the object
print(OpenBadgeClass.to_json())

# convert the object into a dict
open_badge_class_dict = open_badge_class_instance.to_dict()
# create an instance of OpenBadgeClass from a dict
open_badge_class_from_dict = OpenBadgeClass.from_dict(open_badge_class_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


