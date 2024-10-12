# DatabasePropertiesServiceTierAdvisorsInner

Represents a Service Tier Advisor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DatabasePropertiesServiceTierAdvisorsInnerProperties**](DatabasePropertiesServiceTierAdvisorsInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.database_properties_service_tier_advisors_inner import DatabasePropertiesServiceTierAdvisorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePropertiesServiceTierAdvisorsInner from a JSON string
database_properties_service_tier_advisors_inner_instance = DatabasePropertiesServiceTierAdvisorsInner.from_json(json)
# print the JSON string representation of the object
print(DatabasePropertiesServiceTierAdvisorsInner.to_json())

# convert the object into a dict
database_properties_service_tier_advisors_inner_dict = database_properties_service_tier_advisors_inner_instance.to_dict()
# create an instance of DatabasePropertiesServiceTierAdvisorsInner from a dict
database_properties_service_tier_advisors_inner_from_dict = DatabasePropertiesServiceTierAdvisorsInner.from_dict(database_properties_service_tier_advisors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


