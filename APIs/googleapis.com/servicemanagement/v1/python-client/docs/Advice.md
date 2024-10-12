# Advice

Generated advice about this change, used for providing more information about how a change will affect the existing service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Useful description for why this advice was applied and what actions should be taken to mitigate any implied risks. | [optional] 

## Example

```python
from openapi_client.models.advice import Advice

# TODO update the JSON string below
json = "{}"
# create an instance of Advice from a JSON string
advice_instance = Advice.from_json(json)
# print the JSON string representation of the object
print(Advice.to_json())

# convert the object into a dict
advice_dict = advice_instance.to_dict()
# create an instance of Advice from a dict
advice_from_dict = Advice.from_dict(advice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


