# IsOnboarding


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed** | **bool** | True means that the influxdb instance has NOT had initial setup; false means that the database has been setup. | [optional] 

## Example

```python
from openapi_client.models.is_onboarding import IsOnboarding

# TODO update the JSON string below
json = "{}"
# create an instance of IsOnboarding from a JSON string
is_onboarding_instance = IsOnboarding.from_json(json)
# print the JSON string representation of the object
print(IsOnboarding.to_json())

# convert the object into a dict
is_onboarding_dict = is_onboarding_instance.to_dict()
# create an instance of IsOnboarding from a dict
is_onboarding_from_dict = IsOnboarding.from_dict(is_onboarding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


