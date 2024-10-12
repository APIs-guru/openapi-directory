# Activities

Represents an activity group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**List[DimensionValue]**](DimensionValue.md) | List of activity filters. The dimension values need to be all either of type \&quot;dfa:activity\&quot; or \&quot;dfa:activityGroup\&quot;. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#activities. | [optional] 
**metric_names** | **List[str]** | List of names of floodlight activity metrics. | [optional] 

## Example

```python
from openapi_client.models.activities import Activities

# TODO update the JSON string below
json = "{}"
# create an instance of Activities from a JSON string
activities_instance = Activities.from_json(json)
# print the JSON string representation of the object
print(Activities.to_json())

# convert the object into a dict
activities_dict = activities_instance.to_dict()
# create an instance of Activities from a dict
activities_from_dict = Activities.from_dict(activities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


