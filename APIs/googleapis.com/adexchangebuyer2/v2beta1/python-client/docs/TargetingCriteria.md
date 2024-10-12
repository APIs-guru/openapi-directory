# TargetingCriteria

Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclusions** | [**List[TargetingValue]**](TargetingValue.md) | The list of values to exclude from targeting. Each value is AND&#39;d together. | [optional] 
**inclusions** | [**List[TargetingValue]**](TargetingValue.md) | The list of value to include as part of the targeting. Each value is OR&#39;d together. | [optional] 
**key** | **str** | The key representing the shared targeting criterion. Targeting criteria defined by Google ad servers will begin with GOOG_. Third parties may define their own keys. A list of permissible keys along with the acceptable values will be provided as part of the external documentation. | [optional] 

## Example

```python
from openapi_client.models.targeting_criteria import TargetingCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of TargetingCriteria from a JSON string
targeting_criteria_instance = TargetingCriteria.from_json(json)
# print the JSON string representation of the object
print(TargetingCriteria.to_json())

# convert the object into a dict
targeting_criteria_dict = targeting_criteria_instance.to_dict()
# create an instance of TargetingCriteria from a dict
targeting_criteria_from_dict = TargetingCriteria.from_dict(targeting_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


