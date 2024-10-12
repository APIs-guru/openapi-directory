# PrepaidBasePlanType

Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_period_duration** | **str** | Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center. | [optional] 
**time_extension** | **str** | Whether users should be able to extend this prepaid base plan in Google Play surfaces. Defaults to TIME_EXTENSION_ACTIVE if not specified. | [optional] 

## Example

```python
from openapi_client.models.prepaid_base_plan_type import PrepaidBasePlanType

# TODO update the JSON string below
json = "{}"
# create an instance of PrepaidBasePlanType from a JSON string
prepaid_base_plan_type_instance = PrepaidBasePlanType.from_json(json)
# print the JSON string representation of the object
print(PrepaidBasePlanType.to_json())

# convert the object into a dict
prepaid_base_plan_type_dict = prepaid_base_plan_type_instance.to_dict()
# create an instance of PrepaidBasePlanType from a dict
prepaid_base_plan_type_from_dict = PrepaidBasePlanType.from_dict(prepaid_base_plan_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


